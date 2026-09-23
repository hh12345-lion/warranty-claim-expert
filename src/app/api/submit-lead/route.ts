import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { writeLeadToSheetSafely } from "@/lib/lead-sheet";
import { notifyLeadWebhook } from "@/lib/leadNotification";

type LeadPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  formType?: string;
  message?: string;
  description?: string;
  notes?: string;
  details?: string;
  caseDescription?: string;
  case_description?: string;
  caseBrief?: string;
  lawFirm?: string;
};

function resolveLeadMessage(body: LeadPayload): string {
  const keys = [
    "message",
    "description",
    "notes",
    "details",
    "caseDescription",
    "case_description",
    "caseBrief",
  ] as const;
  for (const key of keys) {
    const v = body[key];
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

/**
 * Soft-fail webhook + soft-fail Sheets.
 * Live was hard-failing with "Google Sheets is not configured".
 */
export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const fullName = (body.fullName ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const formType = (body.formType ?? "").trim() || "contact";
  const message = resolveLeadMessage(body);

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  let forwarded = false;
  if (webhookUrl?.trim()) {
    try {
      await notifyLeadWebhook({
        fullName,
        email,
        phone,
        formType,
        message,
      });
      forwarded = true;
    } catch (error) {
      console.error(
        "[submit-lead] webhook failed — continuing with Sheets fallback",
        error
      );
    }
  } else {
    console.warn(
      "[submit-lead] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  const writtenToSheet = await writeLeadToSheetSafely({
    fullName,
    email,
    phone,
    formType,
  });

  if (!forwarded && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "Lead storage failed",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars (GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, GOOGLE_SHEET_TAB_NAME) on Netlify, then redeploy.",
        sheetsConfigured: isGoogleSheetsConfigured(),
        webhookConfigured: Boolean(webhookUrl?.trim()),
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    success: true,
    forwarded,
    writtenToSheet,
  });
}

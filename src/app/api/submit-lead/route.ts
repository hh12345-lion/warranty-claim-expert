import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { appendLeadToGoogleSheet } from "@/lib/lead-sheet";
import { notifyLeadWebhook } from "@/lib/leadNotification";

type LeadPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  formType?: string;
};

/**
 * POST /api/submit-lead — webhook primary.
 * Optional Google Sheets: one shared tab + Form Type; soft-fail only.
 */
export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const fullName = body.fullName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const formType = body.formType?.trim() || "contact";

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    return NextResponse.json(
      { error: "Lead submission is not configured" },
      { status: 500 }
    );
  }

  // Webhook primary — hard-fail only when configured and delivery fails.
  if (webhookUrl) {
    try {
      await notifyLeadWebhook({ fullName, email, phone, formType });
    } catch (error) {
      console.error("Lead webhook notification failed:", error);
      return NextResponse.json(
        { error: "Failed to send your enquiry" },
        { status: 502 }
      );
    }
  }

  // Soft-fail Sheets — never block a successful webhook.
  if (sheetsConfigured) {
    try {
      await appendLeadToGoogleSheet({ fullName, email, phone, formType });
    } catch (error: unknown) {
      const err = error as { message?: string };
      console.error("Google Sheets error (soft-fail):", {
        message: err?.message,
        spreadsheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return NextResponse.json(
          { error: "Failed to save your enquiry" },
          { status: 502 }
        );
      }
    }
  }

  return NextResponse.json({ ok: true });
}

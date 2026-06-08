import { NextResponse } from "next/server";
import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";

const BRAND_NAME = "Warranty Claim Expert";

type LeadPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  lawFirm?: string;
  disputeType?: string;
  stage?: string;
  dealValue?: string;
  claimValue?: string;
  wiInsurance?: string;
  urgency?: string;
  deadline?: string;
  description?: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

async function notifyWebhook(payload: LeadPayload): Promise<void> {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "Full Name": payload.fullName ?? "",
      Email: payload.email ?? "",
      "Phone Number": payload.phone ?? "",
      "Brand name": BRAND_NAME,
    }),
  });
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    fullName,
    email,
    phone,
    lawFirm,
    disputeType,
    stage,
    dealValue,
    claimValue,
    wiInsurance,
    urgency,
    deadline,
    description,
  } = body;

  if (!fullName || !email || !lawFirm || !description) {
    return NextResponse.json(
      { error: "fullName, email, lawFirm, and description are required" },
      { status: 400 }
    );
  }

  const timestamp = new Date().toISOString();
  const row = [
    timestamp,
    BRAND_NAME,
    sanitize(fullName),
    sanitize(lawFirm),
    email.toLowerCase().trim(),
    phone ? sanitize(phone) : "",
    disputeType ? sanitize(disputeType) : "",
    stage ? sanitize(stage) : "",
    dealValue ? sanitize(dealValue) : "",
    claimValue ? sanitize(claimValue) : "",
    wiInsurance ? sanitize(wiInsurance) : "",
    urgency ? sanitize(urgency) : "",
    deadline ? sanitize(deadline) : "",
    sanitize(description),
  ];

  if (!isGoogleSheetsConfigured()) {
    return NextResponse.json(
      { error: "Google Sheets is not configured" },
      { status: 500 }
    );
  }

  try {
    await appendRow(row);
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
      timestamp,
    });
    return NextResponse.json(
      { error: "Failed to save your enquiry" },
      { status: 500 }
    );
  }

  try {
    await notifyWebhook(body);
  } catch (error) {
    console.error("Webhook notification failed (non-blocking):", error);
  }

  return NextResponse.json({ ok: true });
}

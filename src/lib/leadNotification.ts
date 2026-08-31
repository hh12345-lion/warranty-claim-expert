import { SITE_URL } from "@/lib/site";

export const BRAND_NAME = "Warranty Claim Expert";

export type LeadWebhookInput = {
  fullName: string;
  email: string;
  phone?: string;
  formType?: string;
};

export type LeadWebhookPayload = {
  "Full Name": string;
  Email: string;
  "Phone Number": string;
  "Brand name": string;
  domain: string;
};

/** Hostname from NEXT_PUBLIC_SITE_URL — no protocol, no path, www stripped. */
export function getSiteDomain(): string {
  try {
    const hostname = new URL(SITE_URL).hostname;
    return hostname.replace(/^www\./i, "");
  } catch {
    return "warrantyclaimexpert.com";
  }
}

export function buildLeadWebhookPayload(
  input: LeadWebhookInput
): LeadWebhookPayload {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim().toLowerCase(),
    "Phone Number": (input.phone ?? "").trim(),
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export async function notifyLeadWebhook(
  input: LeadWebhookInput
): Promise<void> {
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    console.warn("Lead_notification_url is not configured; skipping webhook");
    return;
  }

  const payload = buildLeadWebhookPayload(input);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook failed with status ${response.status}`);
  }
}

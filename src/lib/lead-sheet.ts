import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { BRAND_NAME } from "@/lib/leadNotification";

export type LeadFields = {
  fullName: string;
  email: string;
  phone: string;
  formType?: string;
};

/** Row 1 on GOOGLE_SHEET_TAB_NAME — one shared tab; Form Type distinguishes rows. */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Brand",
  "Form Type",
  "Full Name",
  "Email",
  "Phone Number",
] as const;

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function asSheetText(value: string): string {
  const v = sanitize(value);
  if (!v) return v;
  if (v.startsWith("+") || v.startsWith("=") || v.startsWith("-")) {
    return `'${v}`;
  }
  return v;
}

export function resolveFormTypeLabel(formType?: string): "Contact" | "Instruct" {
  return (formType || "").toLowerCase().trim() === "instruct"
    ? "Instruct"
    : "Contact";
}

export function buildLeadSheetRow(lead: LeadFields): (string | null)[] {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    resolveFormTypeLabel(lead.formType),
    sanitize(lead.fullName),
    lead.email.toLowerCase().trim(),
    asSheetText(lead.phone),
  ];
}

/**
 * Appends a lead row when Sheets env is set.
 * Throws on API errors — callers soft-fail so webhook stays primary.
 */
export async function appendLeadToGoogleSheet(lead: LeadFields): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;
  await appendRow(buildLeadSheetRow(lead));
}

/** Soft-fail Sheets append — logs errors, never throws. */
export async function writeLeadToSheetSafely(
  lead: LeadFields
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) return false;

  try {
    await appendLeadToGoogleSheet(lead);
    return true;
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Google Sheets write failed (soft-fail):", {
      message: err?.message,
      tab: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
    });
    return false;
  }
}

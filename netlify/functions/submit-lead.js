"use strict";

const BRAND_NAME = "Warranty Claim Expert";

function getSiteDomain() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.warrantyclaimexpert.com";
  try {
    return new URL(siteUrl).hostname.replace(/^www\./i, "");
  } catch {
    return "warrantyclaimexpert.com";
  }
}

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL
  );
}

function normalizePrivateKey(raw) {
  if (!raw) return undefined;
  let key = String(raw).trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  key = key.replace(/\\n/g, "\n");
  if (!key.includes("BEGIN PRIVATE KEY")) return undefined;
  return key;
}

function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY) &&
      process.env.GOOGLE_SHEET_ID?.trim()
  );
}

function sanitize(str) {
  return String(str || "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

async function getAccessToken() {
  const { JWT } = require("google-auth-library");
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  if (!email || !privateKey) {
    throw new Error("Missing Google service account credentials");
  }
  const client = new JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const tokenResponse = await client.getAccessToken();
  const token =
    typeof tokenResponse === "string" ? tokenResponse : tokenResponse?.token;
  if (!token) throw new Error("Failed to obtain Google access token");
  return token;
}

async function appendLeadToSheet(payload) {
  if (!isGoogleSheetsConfigured()) {
    console.warn("[submit-lead fn] Sheets not configured — skip");
    return false;
  }

  const spreadsheetId = process.env.GOOGLE_SHEET_ID.trim();
  const sheetName = (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim();
  const formType =
    String(payload.formType || "contact").toLowerCase() === "instruct"
      ? "Instruct"
      : "Contact";

  const token = await getAccessToken();
  const range = encodeURIComponent(`${sheetName}!A:A`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append` +
    "?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [
        [
          new Date().toISOString(),
          BRAND_NAME,
          formType,
          sanitize(payload.fullName),
          sanitize(payload.email).toLowerCase(),
          sanitize(payload.phone),
        ],
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Google Sheets API error (${response.status}): ${await response.text()}`
    );
  }
  return true;
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body" });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const formType = String(body.formType ?? "contact").trim() || "contact";
  const message = String(
    body.message ?? body.description ?? ""
  ).trim();

  if (!fullName || !email) {
    return jsonResponse(400, { error: "fullName and email are required" });
  }

  let forwarded = false;
  const webhookUrl = getLeadNotificationUrl();

  if (webhookUrl) {
    const fullNameOutbound = message
      ? `${fullName} — ${message.slice(0, 500)}`
      : fullName;
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Full Name": fullNameOutbound,
          Email: email.toLowerCase(),
          "Phone Number": phone,
          "Brand name": BRAND_NAME,
          domain: getSiteDomain(),
        }),
      });
      forwarded = response.ok;
      if (!response.ok) {
        console.error("Lead webhook failed:", response.status);
      }
    } catch (error) {
      console.error("Lead webhook error:", error);
    }
  } else {
    console.warn(
      "[submit-lead fn] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  let writtenToSheet = false;
  try {
    writtenToSheet = await appendLeadToSheet({
      fullName,
      email,
      phone,
      formType,
    });
  } catch (error) {
    console.error("Google Sheets error (submit-lead fn):", {
      message: error && error.message,
      tab: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
    });
  }

  if (!forwarded && !writtenToSheet) {
    return jsonResponse(503, {
      error: "Lead storage failed",
      message:
        "Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
      sheetsConfigured: isGoogleSheetsConfigured(),
      webhookConfigured: Boolean(webhookUrl),
    });
  }

  return jsonResponse(200, {
    ok: true,
    success: true,
    forwarded,
    writtenToSheet,
  });
};

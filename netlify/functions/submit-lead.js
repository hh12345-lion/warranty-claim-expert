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

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
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

  if (!fullName || !email) {
    return jsonResponse(400, { error: "fullName and email are required" });
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    console.warn("Lead_notification_url is not configured");
    return jsonResponse(503, { error: "Lead notification is not configured" });
  }

  const payload = {
    "Full Name": fullName,
    Email: email.toLowerCase(),
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook returned ${response.status}`);
    }
  } catch (error) {
    console.error("Lead webhook failed:", error);
    return jsonResponse(502, { error: "Failed to send your enquiry" });
  }

  return jsonResponse(200, { ok: true });
};

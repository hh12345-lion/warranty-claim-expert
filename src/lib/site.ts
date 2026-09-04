/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://warrantyclaimexpert.com";

/** Public origin for sitemap/canonicals — never localhost or Netlify preview. */
export function getPublicSiteUrl(): string {
  const fallback = PRODUCTION_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();

export const SITE_NAME = "Warranty Claim Expert";

export const COMPANY_EMAIL = "cases@warrantyclaimexpert.com";

/** Primary geographic market — reflected in content and schema, not promotional banners. */
export const SITE_REGION = "United Kingdom";
export const SITE_JURISDICTION = "England and Wales";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const COLORS = {
  primary: "#252B33",
  accent: "#B85C38",
  highlight: "#466578",
  background: "#FAFAF8",
  sectionAlt: "#E8EBEF",
  border: "#C8CDD4",
  heading: "#1E2429",
  body: "#3F454C",
} as const;

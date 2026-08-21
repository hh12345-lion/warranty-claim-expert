export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warrantyclaimexpert.com";

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

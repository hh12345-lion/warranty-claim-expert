export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warrantyclaimexpert.com";

export const SITE_NAME = "Warranty Claim Expert";

export const COMPANY_EMAIL = "info@warrantyclaimexpert.com";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const COLORS = {
  primary: "#1A2744",
  accent: "#1E6B3C",
  highlight: "#D4760C",
  background: "#FFFFFF",
  sectionAlt: "#F5F7FA",
  border: "#D0D9E8",
  heading: "#1A2744",
  body: "#374151",
} as const;

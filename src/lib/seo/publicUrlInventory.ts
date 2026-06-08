import { SITE_URL } from "@/lib/site";
import { SERVICES, serviceHref } from "@/data/services";
import { DISPUTE_TYPES } from "@/data/dispute-types";
import { CASE_TYPES } from "@/data/case-types";
import { GUIDES } from "@/data/guides";

/**
 * Curated static marketing and content routes.
 * Add new public pages here so seo:verify stays in sync.
 */
export const APP_STATIC_PATHS: string[] = [
  "/",
  "/what-is-a-warranty-claim-expert",
  "/services",
  ...SERVICES.map((s) => serviceHref(s.slug)),
  "/how-warranty-claims-work",
  "/dispute-types",
  ...DISPUTE_TYPES.map((d) => d.href),
  "/wi-insurance",
  "/case-types",
  ...CASE_TYPES.map((c) => `/case-types/${c.slug}`),
  "/qualifications",
  "/how-to-instruct",
  "/fees",
  "/faq",
  "/experts",
  "/guides",
  ...GUIDES.map((g) => `/guides/${g.slug}`),
  "/glossary",
  "/contact",
  "/cookie-policy",
];

/** Paths excluded from sitemap (noindex or non-content) */
export const SITEMAP_EXCLUDED_PATHS = new Set([
  "/thank-you",
  "/privacy",
  "/terms",
]);

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const paths = APP_STATIC_PATHS.filter((p) => !SITEMAP_EXCLUDED_PATHS.has(p));
  const uniquePaths = [...new Set(paths)].sort();
  const allUrls = uniquePaths.map((path) =>
    path === "/" ? SITE_URL : `${SITE_URL}${path}`
  );

  return { allPaths: uniquePaths, allUrls };
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/how-warranty-claims-work") return 0.95;
  if (path === "/dispute-types") return 0.93;
  if (path.startsWith("/dispute-types/")) return 0.92;
  if (path === "/wi-insurance") return 0.9;
  if (path === "/services") return 0.9;
  if (path.startsWith("/services/")) return 0.89;
  if (path === "/what-is-a-warranty-claim-expert") return 0.9;
  if (path === "/case-types") return 0.88;
  if (path.startsWith("/case-types/")) return 0.88;
  if (path === "/qualifications" || path === "/how-to-instruct") return 0.88;
  if (path === "/fees" || path === "/faq") return 0.87;
  if (path === "/experts") return 0.85;
  if (path === "/guides") return 0.82;
  if (path.startsWith("/guides/")) return 0.82;
  if (path === "/glossary") return 0.75;
  if (path === "/contact") return 0.9;
  if (path === "/cookie-policy") return 0.3;
  return 0.7;
}

export function getSitemapChangeFreq(
  path: string
): "weekly" | "monthly" | "yearly" {
  if (path === "/") return "weekly";
  if (path.startsWith("/guides/")) return "monthly";
  if (path === "/cookie-policy") return "yearly";
  return "monthly";
}

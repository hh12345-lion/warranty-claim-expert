/**
 * Verifies public/sitemap.xml matches buildPublicUrlInventory().
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../src/lib/seo/publicUrlInventory";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    locs.push(match[1].trim());
  }
  return locs.sort();
}

function main() {
  if (!existsSync(SITEMAP_PATH)) {
    console.error("ERROR: public/sitemap.xml not found. Run npm run seo:generate");
    process.exit(1);
  }

  const xml = readFileSync(SITEMAP_PATH, "utf8");
  const sitemapUrls = extractLocs(xml);
  const inventory = buildPublicUrlInventory();
  const expectedUrls = [...inventory.allUrls].sort();

  const missing = expectedUrls.filter((u) => !sitemapUrls.includes(u));
  const extra = sitemapUrls.filter((u) => !expectedUrls.includes(u));

  if (missing.length > 0) {
    console.error("ERROR: URLs missing from sitemap.xml:");
    missing.forEach((u) => console.error(`  - ${u}`));
  }

  if (extra.length > 0) {
    console.error("ERROR: Unexpected URLs in sitemap.xml:");
    extra.forEach((u) => console.error(`  - ${u}`));
  }

  if (missing.length > 0 || extra.length > 0) {
    console.error(
      `\nSitemap has ${sitemapUrls.length} URLs; inventory expects ${expectedUrls.length}.`
    );
    console.error("Run npm run seo:generate to fix.");
    process.exit(1);
  }

  console.log(
    `OK: sitemap.xml matches inventory (${expectedUrls.length} URLs)`
  );
}

main();

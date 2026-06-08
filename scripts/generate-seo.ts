/**
 * Generates public/sitemap.xml and public/robots.txt from the public URL inventory.
 * Run: npm run seo:generate
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  buildPublicUrlInventory,
  getSitemapChangeFreq,
  getSitemapPriority,
} from "../src/lib/seo/publicUrlInventory";
import { SITE_URL } from "../src/lib/site";

const PUBLIC_DIR = join(process.cwd(), "public");
const lastmod = new Date().toISOString().slice(0, 10);

function renderSitemap(): string {
  const inventory = buildPublicUrlInventory();

  const urls = inventory.allUrls
    .map((loc) => {
      const path =
        loc === SITE_URL ? "/" : loc.replace(SITE_URL, "") || "/";
      const changefreq = getSitemapChangeFreq(path);
      const priority = getSitemapPriority(path).toFixed(2);

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderRobots(): string {
  return `User-agent: *
Allow: /

Disallow: /thank-you
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function main() {
  mkdirSync(PUBLIC_DIR, { recursive: true });

  const sitemap = renderSitemap();
  const robots = renderRobots();

  writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), sitemap, "utf8");
  writeFileSync(join(PUBLIC_DIR, "robots.txt"), robots, "utf8");

  const count = buildPublicUrlInventory().allUrls.length;
  console.log(`Generated public/sitemap.xml (${count} URLs)`);
  console.log("Generated public/robots.txt");
}

main();

/**
 * Lightweight SSR head-tag sanity check for key routes.
 * Run: npm run seo:verify:ssr
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../src/lib/seo/publicUrlInventory";

const REQUIRED_CHECKS = [
  { path: "/", mustContain: ["Warranty Claim Expert"] },
  {
    path: "/how-warranty-claims-work",
    mustContain: ["How Warranty"],
  },
  { path: "/services", mustContain: ["Services"] },
  { path: "/contact", mustContain: ["Instruct"] },
];

function pathToHtmlFile(path: string): string {
  if (path === "/") return join(process.cwd(), "out", "index.html");
  return join(process.cwd(), "out", path.slice(1), "index.html");
}

function main() {
  const outDir = join(process.cwd(), "out");
  if (!existsSync(outDir)) {
    console.warn(
      "SKIP: out/ directory not found. Export the site first or run after next build with output: export."
    );
    console.log(
      "OK: SSR verify skipped (inventory has",
      buildPublicUrlInventory().allPaths.length,
      "paths)"
    );
    process.exit(0);
  }

  let failed = false;

  for (const check of REQUIRED_CHECKS) {
    const file = pathToHtmlFile(check.path);
    if (!existsSync(file)) {
      console.error(`ERROR: Missing export for ${check.path} (${file})`);
      failed = true;
      continue;
    }
    const html = readFileSync(file, "utf8");
    for (const needle of check.mustContain) {
      if (!html.includes(needle)) {
        console.error(
          `ERROR: ${check.path} missing expected content "${needle}"`
        );
        failed = true;
      }
    }
  }

  if (failed) process.exit(1);
  console.log("OK: SSR head/content checks passed");
}

main();

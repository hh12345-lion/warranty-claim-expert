# SEO Architecture — warrantyclaimexpert.com

**Domain:** [https://www.warrantyclaimexpert.com](https://www.warrantyclaimexpert.com)  
**Market:** UK M&A warranty claims, forensic accounting expert witnesses  
**Primary audience:** Commercial solicitors, M&A lawyers, litigation teams, W&I insurers  
**Locale:** `en-GB` (UK English)

This document is the master SEO plan for Warranty Claim Expert. It maps keywords to pages, defines GEO (Generative Engine Optimisation) assets, off-page targets, and the production deployment checklist.

---

## Site Architecture Overview

```
/                                    → Homepage (Tier 1 transactional hub)
/how-warranty-claims-work            → Master guide + GEO tables (pillar page)
/dispute-types                       → Four-mechanism hub
  /dispute-types/breach-of-warranty
  /dispute-types/completion-accounts
  /dispute-types/earn-out-disputes
  /dispute-types/locked-box-disputes
/wi-insurance                        → W&I dedicated page (unique in market)
/guides                              → Content hub
  /guides/inspired-education-crombie-2025   ← first dedicated market guide
  /guides/completion-accounts-guide
  /guides/earn-out-dispute-guide
  /guides/locked-box-leakage-guide
  /guides/wi-insurance-warranty-claims
  /guides/instructing-warranty-expert
/what-is-a-warranty-claim-expert     → Definition / awareness page
/services                            → Service offering
/how-to-instruct                     → Conversion page
/qualifications                      → Trust / E-E-A-T
/fees                                → Conversion page
/faq                                 → Long-tail capture
/case-types                          → Case-type landing pages
/contact                             → Conversion endpoint
```

**Sitemap priority (implemented):** Homepage `1.0` → `/how-warranty-claims-work` `0.95` → `/dispute-types` + child pages `0.92–0.93` → `/wi-insurance` `0.9` → guides `0.82`.

---

## 1. Keyword Strategy

Keywords are tiered by commercial intent. Each keyword maps to a primary URL and supporting pages.

### Tier 1 — Transactional (high intent, instruct / hire)

| Keyword | Primary URL | Secondary / Support |
|---|---|---|
| warranty claim expert witness UK | `/` | `/what-is-a-warranty-claim-expert`, `/qualifications` |
| warranty claim expert UK | `/` | `/services`, `/experts` |
| breach of warranty expert witness UK | `/dispute-types/breach-of-warranty` | `/how-warranty-claims-work` |
| completion accounts expert witness UK | `/dispute-types/completion-accounts` | `/guides/completion-accounts-guide` |
| earn-out dispute expert witness UK | `/dispute-types/earn-out-disputes` | `/guides/earn-out-dispute-guide` |
| M&A dispute forensic accountant UK | `/services` | `/case-types` |
| SPA warranty claim expert UK | `/dispute-types/breach-of-warranty` | `/how-to-instruct` |
| locked box dispute expert UK | `/dispute-types/locked-box-disputes` | `/guides/locked-box-leakage-guide` |
| W&I insurance claim expert witness | `/wi-insurance` | `/guides/wi-insurance-warranty-claims` |
| post-acquisition dispute expert UK | `/how-warranty-claims-work` | `/dispute-types` |

**On-page rules for Tier 1:**
- Primary keyword in `<title>`, H1, first 100 words, and one H2.
- CTA above the fold and at page end (`/contact`, `/how-to-instruct`).
- JSON-LD: `ProfessionalService`, `BreadcrumbList`, `FAQPage` where applicable.
- Internal links from pillar (`/how-warranty-claims-work`) to every Tier 1 child page.

---

### Tier 2 — Informational (research intent, authority building)

| Keyword | Primary URL | Content type |
|---|---|---|
| how do warranty claims work UK | `/how-warranty-claims-work` | Pillar guide + comparison table |
| what is completion accounts dispute | `/dispute-types/completion-accounts` | Mechanism page + disputed-items table |
| earn-out dispute accounting expert | `/guides/earn-out-dispute-guide` | Deep guide |
| locked box leakage calculation | `/guides/locked-box-leakage-guide` | Deep guide + definition block |
| W&I insurance warranty claim process | `/wi-insurance` | Dedicated page + dynamics table |
| ICAEW expert determination completion accounts | `/guides/completion-accounts-guide` | Dedicated section (no competitor content) |
| Inspired Education v Crombie 2025 | `/guides/inspired-education-crombie-2025` | First dedicated case guide in market |
| how is diminution in value calculated warranty claim | `/how-warranty-claims-work` | Step-by-step calculation section |
| agreed accounting basis SPA disputes | `/dispute-types/completion-accounts` | Agreed accounting basis H2 |
| warranty and indemnity insurance expert evidence UK | `/wi-insurance` | Expert evidence section |

**On-page rules for Tier 2:**
- Answer the query in the first paragraph (featured-snippet / GEO format).
- Use structured data tables for comparisons and step sequences.
- Cross-link to Tier 1 conversion pages at natural decision points.

---

### Tier 3 — Long-tail (niche capture, low competition)

| Keyword | Primary URL |
|---|---|
| breach of accounts warranty expert witness UK | `/dispute-types/breach-of-warranty` |
| completion accounts ICAEW expert determination | `/guides/completion-accounts-guide` |
| earn-out accounting policy continuity expert | `/guides/earn-out-dispute-guide` |
| locked box leakage forensic accountant UK | `/dispute-types/locked-box-disputes` |
| W&I insurer subrogation expert witness | `/wi-insurance` |
| SPA financial warranty diminution in value expert | `/how-warranty-claims-work` |
| IAS 37 provisions completion accounts dispute | `/dispute-types/completion-accounts` |
| IFRS 15 revenue recognition warranty claim | `/how-warranty-claims-work` |
| earn-out but-for model expert UK | `/guides/earn-out-dispute-guide` |
| business sale fraud deceit expert UK | `/case-types` (fraud / deceit case type) |

**On-page rules for Tier 3:**
- Target via H2/H3 subheadings and FAQ entries on parent pages.
- Do not create standalone thin pages; consolidate into existing hubs.
- Add to `/faq` and `/glossary` where terms lack dedicated coverage.

---

## 2. Key Content Assets

These are the differentiated assets that create topical authority and GEO citation potential. All are implemented or scaffolded in the codebase.

| # | Asset | URL | Competitive advantage |
|---|---|---|---|
| 1 | **Inspired Education v Crombie [2025] guide** | `/guides/inspired-education-crombie-2025` | First dedicated guide to this case in the market. Three expert-evidence failures analysis. Digital PR anchor. |
| 2 | **Four M&A dispute mechanism pages** | `/dispute-types` + four child routes | Dedicated pages per mechanism (breach of warranty, completion accounts, earn-out, locked box). Unique depth vs. generic law-firm overviews. |
| 3 | **W&I insurance dedicated page** | `/wi-insurance` | Standalone W&I page with claim dynamics table. Few forensic-accounting competitors have this. |
| 4 | **Four-mechanism comparison master table** | `/how-warranty-claims-work` | Trigger / resolution / expert-role comparison. Designed for AI citation and featured snippets. |
| 5 | **ICAEW expert determination explained** | `/guides/completion-accounts-guide` | No competitor has dedicated ICAEW expert determination content. Supports completion accounts Tier 1 and Tier 2 keywords. |

**Content freshness schedule:**

| Asset | Review cadence | Trigger for update |
|---|---|---|
| Inspired Education guide | Quarterly | New Chancery SPA / expert evidence judgments |
| Dispute-type pages | Bi-annually | ICAEW process changes, new case law |
| W&I page | Annually | Market practice shifts, policy wording trends |
| How warranty claims work | Bi-annually | New accounting standards (IFRS / UK GAAP) |

---

## 3. GEO Targets (Generative Engine Optimisation)

GEO assets are structured, citation-friendly content blocks designed for AI search engines (Perplexity, ChatGPT Search, Google AI Overviews) to extract and attribute.

| # | GEO asset | Location | Format | Target queries |
|---|---|---|---|---|
| 1 | Four M&A dispute mechanism master table | `/how-warranty-claims-work` | `DataTable`: Mechanism / Trigger / Resolution Route / Expert Role | "how do warranty claims work", "M&A dispute mechanisms" |
| 2 | Diminution in value step calculation | `/how-warranty-claims-work` | Numbered 4-step list + prose | "how is diminution in value calculated" |
| 3 | Expert determination vs litigation comparison | `/how-warranty-claims-work` | `DataTable`: Feature / Expert Determination / Litigation | "ICAEW expert determination vs litigation" |
| 4 | W&I insurance claim dynamics table | `/wi-insurance` | `DataTable`: Traditional claim vs W&I claim | "W&I insurance warranty claim process" |
| 5 | Common disputed completion accounts items | `/dispute-types/completion-accounts` | Table or structured list | "completion accounts disputed items" |
| 6 | Inspired Education v Crombie [2025] analysis | `/guides/inspired-education-crombie-2025` | Case summary + three failures + implications | "Inspired Education v Crombie 2025" |
| 7 | Locked box leakage definition | `/dispute-types/locked-box-disputes` + `/guides/locked-box-leakage-guide` | Definition block + permitted vs non-permitted | "locked box leakage calculation" |

**GEO implementation standards:**
- Tables use semantic HTML (`<table>`, `<th>`, `<td>`) via the `DataTable` component.
- Definition blocks lead with a one-sentence answer before elaboration.
- Case citations include full neutral citation: `[2025] EWHC 1236 (Ch)`.
- `Article` and `FAQPage` JSON-LD on all GEO-bearing pages.
- No content behind JavaScript-only rendering; all GEO blocks are server-rendered.

---

## 4. Off-Page Targets

### Directory & professional listings

| Target | Section / listing type | Priority | Notes |
|---|---|---|---|
| [jspubs.com](https://www.jspubs.com) | Breach of warranty / forensic accounting section | High | Core UK expert witness directory for solicitors |
| Academy of Experts | Expert witness directory | High | Credibility signal for court proceedings |
| EWI (Expert Witness Institute) | Member / directory listing | High | E-E-A-T for expert witness positioning |
| Practical Law (Thomson Reuters) | M&A dispute contributor / citation | Medium | Authority via legal publishing |
| Lexology M&A | Contributed article / expert commentary | Medium | Reach to in-house and law firm audiences |
| Law Society commercial finder | Commercial law expert referral | Medium | Solicitor referral channel |
| ICAEW Corporate Finance community | Community contribution / profile | Medium | Direct reach for completion accounts disputes |

### Digital PR — pitch angles

Each pitch links back to a GEO asset on the site.

| # | Headline | Landing page | Target publications |
|---|---|---|---|
| 1 | Inspired Education v Crombie [2025]: What Every M&A Solicitor Must Know About Valuation Expert Instructions | `/guides/inspired-education-crombie-2025` | Lexology, Practical Law, M&A Journal |
| 2 | W&I Insurance and Warranty Claims: How Expert Evidence Has Changed | `/wi-insurance` | Insurance Post, M&A Law publications |
| 3 | Completion Accounts vs Locked Box: Which M&A Mechanism Generates More Disputes? | `/how-warranty-claims-work` | Corporate Financier, ICAEW CF community |
| 4 | ICAEW Expert Determination: The Faster Route to Completing Completion Accounts Disputes | `/guides/completion-accounts-guide` | ICAEW publications, jspubs.com |

### Social & brand presence

| Channel | Handle / URL | Purpose |
|---|---|---|
| LinkedIn | **WarrantyClaimExpert** | Thought leadership, Digital PR distribution, solicitor audience |
| Company site blog / guides | `/guides` | Evergreen authority content hub |

---

## 5. Technical SEO Baseline

### Implemented

| Item | Status | Location |
|---|---|---|
| `html lang="en-GB"` | ✅ | `src/app/layout.tsx` |
| Canonical URLs | ✅ | `src/lib/metadata.ts` → `alternates.canonical` |
| hreflang (`en-GB`, `en-US`, `x-default`) | ✅ | `src/lib/metadata.ts` → `alternates.languages` |
| Open Graph `locale: en_GB` | ✅ | `src/lib/metadata.ts` |
| Sitemap (script-generated) | ✅ | `scripts/generate-seo.ts` → `public/sitemap.xml` |
| Robots.txt (script-generated) | ✅ | `scripts/generate-seo.ts` → `public/robots.txt` |
| URL inventory + verify | ✅ | `src/lib/seo/publicUrlInventory.ts`, `npm run seo:verify` |
| Internal linking matrix | ✅ | `src/lib/seo/internalLinks.ts`, `InternalLinkSection` |
| JSON-LD (Organization, ProfessionalService, Article, FAQ, Breadcrumb) | ✅ | `src/lib/schema.ts`, page-level `JsonLd` |
| Google / Bing site verification (env-driven) | ✅ | `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` |
| Consent Mode + GA4 (env-driven) | ✅ | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| Apex → www redirect | ✅ | `src/middleware.ts` |
| Netlify Next.js plugin | ✅ | `netlify.toml` + `@netlify/plugin-nextjs` |
| Contact form → Google Sheets | ✅ | `src/app/api/submit-lead/route.ts`, `src/lib/google-sheets.ts` |

### Pending — deployment checklist

| Item | Action | Owner |
|---|---|---|
| **Netlify deployment** | Deploy production build; confirm all routes render | Dev |
| **DNS** | `warrantyclaimexpert.com` → `www.warrantyclaimexpert.com` (apex redirect) | Dev / DNS |
| **Environment variables** | Set all production env vars (see below) | Dev |
| **Search Console / Bing** | Submit `public/sitemap.xml` after deploy | Dev |
| **LinkedIn** | Create / verify **WarrantyClaimExpert** company page | Marketing |
| **jspubs listing** | Submit expert profile to breach of warranty section | Marketing |
| **Academy of Experts** | Submit directory listing | Marketing |
| **EWI** | Submit member / directory listing | Marketing |

### Production environment variables

```env
NEXT_PUBLIC_SITE_URL=https://www.warrantyclaimexpert.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=<GA4 measurement id>
GOOGLE_SITE_VERIFICATION=<google search console token>
BING_SITE_VERIFICATION=<bing webmaster token>
GOOGLE_SERVICE_ACCOUNT_EMAIL=<service account email>
GOOGLE_PRIVATE_KEY=<private key with \\n escapes>
GOOGLE_SHEET_ID=<spreadsheet id>
GOOGLE_SHEET_TAB_NAME=Sheet25
Lead_notification_url=<optional n8n webhook>
```

### hreflang

Implemented in `src/lib/metadata.ts`. Until a US content variant exists, `en-GB`, `en-US`, and `x-default` all point to the UK canonical URL.

---

## 6. Internal Linking Matrix

| Source page | Must link to |
|---|---|
| `/` (homepage) | `/how-warranty-claims-work`, `/dispute-types`, `/wi-insurance`, `/contact` |
| `/how-warranty-claims-work` | All four `/dispute-types/*`, `/wi-insurance`, `/guides/inspired-education-crombie-2025` |
| `/dispute-types` | Each child mechanism page, `/how-to-instruct` |
| Each `/dispute-types/*` | Parent hub, relevant `/guides/*`, `/how-to-instruct`, `/contact` |
| `/wi-insurance` | `/guides/wi-insurance-warranty-claims`, `/dispute-types/breach-of-warranty` |
| `/guides/*` | Relevant dispute-type page, `/how-to-instruct` |
| `/faq`, `/glossary` | Contextual links to dispute-type and guide pages |

---

## 7. Measurement & KPIs

| Metric | Tool | Target (6 months post-launch) |
|---|---|---|
| Organic sessions (UK) | GA4 | Baseline + 40% QoQ growth |
| Tier 1 keyword rankings (top 10) | Search Console | 5+ Tier 1 terms in top 10 |
| Inspired Education guide impressions | Search Console | #1 dedicated result for case name query |
| GEO citation rate | Manual monitoring (Perplexity, ChatGPT) | Cited in 3+ AI responses for core queries |
| Contact form submissions (organic) | Formspree + GA4 events | Track conversion rate per landing page |
| Directory referral traffic | GA4 UTM / referrer report | Measurable traffic from jspubs, AoE, EWI |

---

## 8. Launch Sequence

1. **Deploy to Vercel** — production build, env vars, DNS apex → www redirect.
2. **Verify technical** — sitemap submitted to Google Search Console and Bing Webmaster Tools; hreflang live.
3. **Submit directories** — jspubs, Academy of Experts, EWI (parallel).
4. **Publish Digital PR #1** — Inspired Education v Crombie pitch (timed to coincide with indexation of guide page).
5. **Monitor & iterate** — Search Console query report at 30 days; expand FAQ/glossary for emerging long-tail gaps.

---

*Last updated: June 2025. Maintained by the SEO planning agent for warrantyclaimexpert.com.*

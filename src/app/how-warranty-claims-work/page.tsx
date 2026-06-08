import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  Prose,
  DataTable,
} from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { PILLAR_DISPUTE_LINKS } from "@/lib/seo/internalLinks";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title:
    "How Warranty Claims Work UK | Completion Accounts, Earn-Outs & Expert Evidence",
  description:
    "The complete guide to warranty and indemnity claims in UK M&A disputes: breach of warranty, completion accounts mechanism, earn-out disputes, locked box, W&I insurance, and expert evidence.",
  path: "/how-warranty-claims-work",
});

export default function HowClaimsWorkPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            {
              name: "How Warranty Claims Work",
              href: "/how-warranty-claims-work",
            },
          ]),
          articleSchema({
            title:
              "How Warranty and Indemnity Claims Work in UK M&A: The Complete Guide",
            description:
              "The complete guide to warranty and indemnity claims in UK M&A disputes.",
            url: "/how-warranty-claims-work",
          }),
        ]}
      />
      <PageHero
        title="How Warranty and Indemnity Claims Work in UK M&A: The Complete Guide"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How Warranty Claims Work" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>The M&A Transaction Framework</h2>
          <p>
            How do warranty claims work in UK M&A? In every transaction, the
            seller provides warranties: statements of fact about the business
            being sold. The sale and purchase agreement sets out the mechanism
            for resolving disputes: completion accounts, earn-out calculations,
            or direct warranty claim. The forensic accountant is central to all
            three.
          </p>
          <p>
            A buoyant deals market means more post-transaction disputes are
            emerging. Completion accounts remain to be agreed, earn-out
            calculations are in play, and deferred considerations are up for
            grabs. Warranty and indemnity insurance has not eliminated
            disputes. It has changed who brings them, with insurers rather than
            sellers often driving litigation.
          </p>

          <h2>The Four Dispute Mechanisms</h2>
        </Prose>
        <div className="my-6">
          <DataTable
            headers={[
              "Mechanism",
              "Trigger",
              "Resolution Route",
              "Expert Role",
            ]}
            rows={[
              [
                "Breach of warranty",
                "Accounts were inaccurate",
                "Litigation / arbitration",
                "Quantify diminution in value",
              ],
              [
                "Completion accounts",
                "Parties disagree on financial position at completion",
                "Expert determination (ICAEW) or litigation",
                "Apply agreed accounting basis; identify disputed items",
              ],
              [
                "Earn-out",
                "Targets not met; accounting basis disputed",
                "Expert determination or litigation",
                "But-for earn-out model; accounting policy consistency",
              ],
              [
                "Locked box",
                "Leakage alleged after locked box date",
                "Litigation / expert determination",
                "Identify and quantify leakage transactions",
              ],
            ]}
          />
        </div>
        <Prose>
          <h2>The Diminution in Value: How It Is Calculated</h2>
          <p>
            The primary measure of loss in a warranty claim is the diminution in
            value. The expert follows a structured approach:
          </p>
          <ol>
            <li>
              Establish the warranted position: what the accounts showed at
              completion
            </li>
            <li>
              Establish the true position: what the accounts should have shown
            </li>
            <li>
              Value the business under each scenario using appropriate
              methodology
            </li>
            <li>
              Calculate the difference: the diminution in value caused by the
              breach
            </li>
          </ol>

          <h2>Accounting Standards in Warranty Claims</h2>
          <p>
            The applicable accounting standard depends on the SPA, typically the
            agreed accounting basis references IFRS or UK GAAP and the specific
            policies of the target company. Common disputed areas include IAS
            37 provisions, IFRS 15 revenue recognition, IFRS 16 leases,
            deferred revenue, and net debt definitions.
          </p>

          <h2>Expert Determination vs Litigation</h2>
        </Prose>
        <div className="my-6">
          <DataTable
            headers={["Feature", "Expert Determination", "Litigation"]}
            rows={[
              [
                "Forum",
                "Independent accountant (ICAEW)",
                "High Court (Commercial/Chancery)",
              ],
              ["Binding?", "Yes (contractual)", "Yes (judgment)"],
              ["Speed", "Faster (typically 3 to 6 months)", "Slower (18 months to 3 years)"],
              ["Cost", "Lower", "Higher"],
              [
                "Scope",
                "Completion accounts items only",
                "All warranty claims + conduct",
              ],
              [
                "Expert evidence",
                "Submissions and analysis",
                "CPR Part 35 expert reports",
              ],
            ]}
          />
        </div>
        <Prose>
          <h2>The Inspired Education v Crombie [2025] Warning</h2>
          <p>
            In Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch),
            the claimant&apos;s valuation expert evidence was fatally
            undermined. The court identified three failures that instructing
            solicitors and experts must avoid:
          </p>
          <ol>
            <li>
              Instructions must be consistent with standard market value
              definitions
            </li>
            <li>
              The expert must approach evidence rigorously, not selectively
              citing supporting materials only
            </li>
            <li>
              The expert must be genuinely independent. A partial approach is
              fatal to the evidence
            </li>
          </ol>
          <p>
            <Link
              href="/guides/inspired-education-crombie-2025"
              className="font-medium text-accent hover:underline"
            >
              Read our full case analysis
            </Link>
          </p>

          <h2>W&I Insurance: The Changed Landscape</h2>
          <p>
            Warranty and indemnity insurance has become market standard in UK
            M&A. Insurers now commonly fund and drive warranty claim litigation
            through subrogation rights. Expert evidence in W&I claims faces
            heightened scrutiny.{" "}
            <Link href="/wi-insurance" className="font-medium text-accent hover:underline">
              Read our W&I insurance guide
            </Link>
            .
          </p>

          <h2>Warranty Claim Limitation Periods</h2>
          <p>
            SPA limitation periods for warranty claims are typically 12 to 24
            months from completion, shorter than statutory limitation. The clock
            is always running. Early instruction of forensic accountant expert
            evidence is essential.{" "}
            <Link href="/how-to-instruct" className="font-medium text-accent hover:underline">
              Learn how to instruct an expert
            </Link>
            .
          </p>

          <h2>Explore Each M&A Dispute Mechanism</h2>
          <p>
            Each post-acquisition dispute mechanism has a dedicated expert
            witness page with FAQs, accounting analysis, and conversion
            guidance for instructing solicitors.
          </p>
        </Prose>
        <InternalLinkSection
          title="Dispute Mechanism Pages"
          links={PILLAR_DISPUTE_LINKS}
        />
      </ContentSection>
      <CTASection />
    </>
  );
}

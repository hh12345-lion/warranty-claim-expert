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
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title:
    "What Is a Warranty Claim Expert Witness? | UK Role & M&A Dispute Methodology",
  description:
    "A warranty claim expert witness is a forensic accountant providing independent expert evidence in M&A disputes: breach of warranty, completion accounts, earn-outs, and locked box claims. UK guide.",
  path: "/what-is-a-warranty-claim-expert",
});

export default function WhatIsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          {
            name: "What Is a Warranty Claim Expert Witness?",
            href: "/what-is-a-warranty-claim-expert",
          },
        ])}
      />
      <PageHero
        title="What Is a Warranty Claim Expert Witness?"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Warranty Claim Expert Witness?" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>Definition</h2>
          <p>
            A warranty claim expert witness is a forensic accountant who
            provides independent expert evidence in disputes arising from
            mergers, acquisitions, and business sales in the United Kingdom,
            specifically where the financial position of the business at the
            time of the transaction is in dispute under an English law sale and
            purchase agreement.
          </p>

          <h2>What They Do</h2>
          <ul>
            <li>
              Assess whether completion accounts were prepared on the agreed
              accounting basis as specified in the SPA
            </li>
            <li>
              Quantify the diminution in value caused by breach of financial
              warranties (the but-for valuation)
            </li>
            <li>
              Analyse whether earn-out targets were correctly calculated and
              whether the buyer&apos;s conduct affected them
            </li>
            <li>
              Identify and quantify locked box leakage: value extracted by the
              seller contrary to the agreement
            </li>
            <li>
              Review the accounting policies and their consistent application in
              the target company&apos;s accounts
            </li>
            <li>
              Produce CPR Part 35 compliant expert reports for High Court
              commercial or Chancery proceedings
            </li>
            <li>
              Act as independent expert determiner under SPA expert
              determination clauses
            </li>
          </ul>

          <h2>The Four Dispute Mechanisms</h2>
        </Prose>
        <div className="mt-6">
          <DataTable
            headers={[
              "Mechanism",
              "What Is Disputed",
              "Expert's Primary Role",
            ]}
            rows={[
              [
                "Breach of warranty",
                "Whether financial warranties were true",
                "Quantify diminution in value",
              ],
              [
                "Completion accounts",
                "How to prepare accounts at completion date",
                "Apply agreed accounting basis",
              ],
              [
                "Earn-out",
                "Whether targets were met; buyer's conduct",
                "Model but-for earn-out position",
              ],
              [
                "Locked box",
                "Whether seller extracted value post locked box date",
                "Identify and quantify leakage",
              ],
            ]}
          />
        </div>
        <Prose>
          <h2>Inspired Education v Crombie [2025]: What Went Wrong</h2>
          <p>
            In the 2025 SPA dispute before Mrs Justice Joanna Smith, the
            claimant&apos;s expert evidence was found to be fatally undermined
            by three failures: instructions not consistent with commonly used
            definitions of market value; lack of rigour in approach to the
            evidence; and a somewhat partial approach, particularly in relation
            to sources relied on in the report.
          </p>
          <p>
            This case is the clearest recent judicial statement on what
            warranty claim experts must avoid, and why independent, rigorous,
            well-instructed expert evidence is decisive in M&A disputes.
          </p>

          <h2>Expert Determination vs Court Proceedings</h2>
          <p>
            SPAs typically contain expert determination clauses for completion
            accounts disputes, with the ICAEW or Big Four firm appointing an
            independent accountant to make a binding determination. Warranty
            breach claims and earn-out disputes typically proceed to litigation
            or arbitration. The expert witness plays a different role in each
            context.
          </p>
        </Prose>
        <InternalLinkSection
          links={[
            { href: "/experts", label: "Our Expert Witnesses" },
            { href: "/qualifications", label: "Expert Qualifications" },
            { href: "/how-to-instruct", label: "How to Instruct" },
            { href: "/how-warranty-claims-work", label: "How Warranty Claims Work" },
          ]}
        />
      </ContentSection>
      <CTASection />
    </>
  );
}

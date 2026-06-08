import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose } from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "How to Instruct a Warranty Claim Expert Witness UK",
  description:
    "Step-by-step guide to instructing a warranty claim expert witness: identify dispute type, expert determination vs litigation, letter of instruction, and required documents.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "How to Instruct", href: "/how-to-instruct" },
        ])}
      />
      <PageHero
        title="How to Instruct a Warranty Claim Expert Witness"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How to Instruct" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>Step 1: Identify the Dispute Type</h2>
          <p>
            Determine whether the dispute is a breach of warranty claim,
            completion accounts dispute, earn-out disagreement, or locked box
            leakage claim. Each mechanism requires a different expert approach
            and deliverables.
          </p>

          <h2>Step 2: Expert Determination or Litigation?</h2>
          <p>
            Review the SPA dispute resolution clause. Completion accounts
            disputes are typically referred to ICAEW expert determination.
            Warranty breach and earn-out conduct claims typically proceed to
            litigation or arbitration requiring CPR Part 35 expert reports.
          </p>

          <h2>Step 3: Single Expert or Party-Appointed?</h2>
          <p>
            Consider whether a single joint expert (SJE) is appropriate or
            whether each party should appoint its own expert. In High Court
            commercial litigation, party-appointed experts are standard.
          </p>

          <h2>Step 4: Accounting Standards Expertise Needed?</h2>
          <p>
            Identify whether the dispute involves IFRS, UK GAAP (FRS 102), or
            SPA-specific accounting basis issues. Ensure the expert has
            experience with the relevant standards and the specific accounting
            policies of the target company.
          </p>

          <h2>Step 5: W&I Insurance Involvement?</h2>
          <p>
            If W&I insurance is involved, the expert must address policy
            coverage, exclusions, and the insurer&apos;s likely scrutiny of
            expert evidence. Both buyer and insurer may appoint their own
            experts.
          </p>

          <h2>Step 6: Letter of Instruction</h2>
          <p>
            Draft instructions consistent with standard market value definitions.
            Inspired Education v Crombie [2025] demonstrates that improper
            instructions fatally undermine expert evidence. Identify the
            specific warranties, accounting basis, and valuation methodology.
          </p>

          <h2>Step 7: Documents to Provide</h2>
          <p>
            Provide the SPA (including schedules and disclosure letters),
            reference accounts, completion accounts, earn-out calculations,
            due diligence reports, management accounts, correspondence between
            the parties, and any prior expert reports. Include documents
            unfavourable to your client&apos;s position.
          </p>
        </Prose>
      </ContentSection>
      <CTASection />
    </>
  );
}

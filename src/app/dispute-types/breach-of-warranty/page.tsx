import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose, FAQList } from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { getDisputePageLinks } from "@/lib/seo/internalLinks";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const FAQS = [
  {
    question:
      "What financial warranties are most commonly breached in M&A transactions?",
    answer:
      "The most commonly breached financial warranties are: the accounts warranty (that financial statements give a true and fair view and comply with accounting standards); the no undisclosed liabilities warranty; the material contracts warranty (no undisclosed material contracts); and management accounts warranties (accuracy of management information provided in due diligence). The expert identifies which warranty was breached and quantifies the financial impact.",
  },
  {
    question:
      "Can a warranty claim be brought against W&I insurance as well as the seller?",
    answer:
      "W&I insurance is now standard in UK M&A, with the insurer stepping into the seller's shoes for financial warranty claims. This means the expert witness faces the insurer's lawyers rather than the seller's. The analysis is the same, but the context of dealing with an insurer rather than an individual seller can affect the dynamics of litigation.",
  },
];

export const metadata = createMetadata({
  title: "Breach of Warranty Claims Expert Witness UK | M&A Warranty Litigation",
  description:
    "Expert witness for breach of warranty claims in UK M&A. Quantify diminution in value, establish true financial position, and provide CPR Part 35 compliant evidence.",
  path: "/dispute-types/breach-of-warranty",
});

export default function BreachOfWarrantyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Dispute Types", href: "/dispute-types" },
            {
              name: "Breach of Warranty",
              href: "/dispute-types/breach-of-warranty",
            },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <PageHero
        title="Breach of Warranty Claims: Expert Witness UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dispute Types", href: "/dispute-types" },
          { label: "Breach of Warranty" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>What Is a Breach of Warranty Claim?</h2>
          <p>
            A breach of warranty claim arises when a buyer, having acquired a
            business, finds that financial warranties given by the seller were
            untrue, typically that the financial statements gave a true and fair
            view, that there were no undisclosed liabilities, or that the
            accounts were prepared in accordance with accounting standards and
            the stated accounting policies.
          </p>

          <h2>The Diminution in Value Measure</h2>
          <p>
            The primary measure of loss in a warranty claim is the diminution in
            value, the difference between:
          </p>
          <ul>
            <li>
              What the buyer paid for the business (based on the warranted
              financial position); and
            </li>
            <li>
              What the business was actually worth at the date of completion
              (based on the true financial position)
            </li>
          </ul>

          <h2>The Expert&apos;s Role</h2>
          <ol>
            <li>
              Establish the true financial position at completion (what the
              accounts should have shown)
            </li>
            <li>
              Establish the warranted financial position (what the accounts
              showed)
            </li>
            <li>Value the business under each scenario</li>
            <li>
              Calculate the difference: the diminution in value
            </li>
          </ol>

          <h2>Accounting Standards and Warranty Claims</h2>
          <p>
            The expert must establish which accounting standards governed the
            financial statements, IFRS or UK GAAP (FRS 102), and whether the
            treatment adopted complied with those standards. The agreed
            accounting basis in the SPA, not just general GAAP compliance, is
            the relevant test.
          </p>

          <h2>The Inspired Education Warning on Instructions</h2>
          <p>
            The critical lesson from Inspired Education v Crombie [2025]:
            instructions to the expert must be consistent with standard
            definitions of market value. Where instructions set up an improper
            framework, the entire expert analysis is undermined, regardless of
            the quality of the underlying work.
          </p>
        </Prose>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={FAQS} />
        </div>
        <InternalLinkSection links={getDisputePageLinks("breach-of-warranty")} />
      </ContentSection>
      <CTASection />
    </>
  );
}

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
    question: "What transactions constitute leakage in a locked box deal?",
    answer:
      "Leakage definitions vary by SPA, but typically include any payment from the target to the seller or related parties not in the ordinary course of business: dividends declared, management fees paid, bonuses paid above ordinary course levels, assets transferred, and any other value extraction not specifically permitted under the SPA.",
  },
  {
    question: "How does the expert identify all leakage transactions?",
    answer:
      "The expert reviews the target company's bank statements, management accounts, board minutes, and payment records for the locked box period, identifying all payments and transfers involving the seller or related parties and testing each against the SPA leakage definition.",
  },
];

export const metadata = createMetadata({
  title: "Locked Box Disputes Expert Witness UK | Leakage Claims",
  description:
    "Expert witness for locked box leakage disputes in UK M&A. Identify and quantify permitted and non-permitted value extraction.",
  path: "/dispute-types/locked-box-disputes",
});

export default function LockedBoxDisputesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Dispute Types", href: "/dispute-types" },
            {
              name: "Locked Box Disputes",
              href: "/dispute-types/locked-box-disputes",
            },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <PageHero
        title="Locked Box Disputes: Expert Witness UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dispute Types", href: "/dispute-types" },
          { label: "Locked Box Disputes" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>What Is a Locked Box Mechanism?</h2>
          <p>
            In a locked box deal, the purchase price is fixed by reference to a
            historical balance sheet (the locked box date) rather than the
            completion date. The seller is compensated by a daily accrual
            between the locked box date and completion. In exchange, the seller
            warrants that no leakage has occurred after the locked box date.
          </p>

          <h2>What Is Leakage?</h2>
          <p>
            Locked box leakage is value extracted from the target between the
            locked box date and completion that is not permitted under the SPA.
            It can include dividends, management
            fees, payments to related parties, and asset transfers. Permitted
            leakage is defined in the SPA and excludes agreed ordinary course
            items.
          </p>

          <h2>The Expert&apos;s Role</h2>
          <ol>
            <li>
              Identify all transactions between locked box date and completion
            </li>
            <li>Apply the SPA leakage definition to each transaction</li>
            <li>Distinguish permitted from non-permitted leakage</li>
            <li>
              Quantify total non-permitted leakage recoverable from the seller
            </li>
          </ol>

          <h2>Locked Box vs Completion Accounts: Which Generates More Disputes?</h2>
          <p>
            Locked box was introduced partly to reduce completion accounts
            disputes, but it generates its own disputes around leakage. Expert
            witnesses in locked box disputes focus entirely on transaction
            analysis rather than accounting methodology.
          </p>
        </Prose>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={FAQS} />
        </div>
        <InternalLinkSection links={getDisputePageLinks("locked-box-disputes")} />
      </ContentSection>
      <CTASection />
    </>
  );
}

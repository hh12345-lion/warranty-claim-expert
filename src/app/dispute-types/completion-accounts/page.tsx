import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  Prose,
  FAQList,
  DataTable,
} from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { getDisputePageLinks } from "@/lib/seo/internalLinks";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const FAQS = [
  {
    question:
      'What is the "agreed accounting basis" in completion accounts?',
    answer:
      'The agreed accounting basis is the accounting framework specified in the SPA for preparing the completion accounts, typically "in accordance with the accounting policies of the target company as applied in the reference accounts." The expert must assess whether each item was prepared consistently with those specific policies, not simply whether GAAP was followed.',
  },
  {
    question:
      "How does ICAEW expert determination work for completion accounts?",
    answer:
      "The ICAEW appoints an independent accountant as expert determiner when the parties cannot agree. Each party submits written representations addressing the disputed items. The expert determiner reviews both positions, may ask questions, and issues a binding determination. The forensic accountant prepares the party's submissions and provides analytical support throughout the process.",
  },
];

export const metadata = createMetadata({
  title: "Completion Accounts Disputes Expert Witness UK | ICAEW Determination",
  description:
    "Expert witness for completion accounts disputes in UK M&A. Apply agreed accounting basis, analyse disputed items, and support ICAEW expert determination.",
  path: "/dispute-types/completion-accounts",
});

export default function CompletionAccountsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Dispute Types", href: "/dispute-types" },
            {
              name: "Completion Accounts",
              href: "/dispute-types/completion-accounts",
            },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <PageHero
        title="Completion Accounts Disputes: Expert Witness UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dispute Types", href: "/dispute-types" },
          { label: "Completion Accounts" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>What Is a Completion Accounts Dispute?</h2>
          <p>
            A completion accounts dispute arises when buyer and seller cannot
            agree on the financial position of the target at completion. In a
            completion accounts mechanism, the purchase price is adjusted
            after completion based on the actual financial position of the
            business at the completion date, typically working capital, net
            debt, and/or net assets compared to an agreed target.
          </p>

          <h2>What Causes Disputes</h2>
          <p>Disputes arise when buyer and seller disagree on:</p>
          <ul>
            <li>
              Which accounting policies should apply (the agreed accounting
              basis)
            </li>
            <li>
              Specific items: provisioning, revenue recognition, deferred
              revenue, contingent liabilities
            </li>
            <li>
              Whether the reference accounts accounting policies were
              consistently applied
            </li>
            <li>
              The correct treatment of specific transaction items (e.g. IFRS 16
              leases, accruals methodology)
            </li>
          </ul>

          <h2>Expert Determination: The ICAEW Process</h2>
          <p>
            Most SPAs contain an expert determination clause for completion
            accounts disputes, providing for an independent accountant (often
            appointed by ICAEW) to make a binding determination. The forensic
            accountant supports one party&apos;s position through the
            determination process, analysing the disputed items and producing
            written submissions.
          </p>

          <h2>IAS 37 Provisions in Completion Accounts Disputes</h2>
          <p>
            IAS 37 provisions are among the most commonly disputed items in
            completion accounts. Parties disagree on whether provisions were
            adequate, consistently applied with the reference accounts, and
            prepared in accordance with the agreed accounting basis in the SPA.
          </p>

          <h2>Key Accounting Issues in Completion Accounts</h2>
        </Prose>
        <div className="my-6">
          <DataTable
            headers={["Item", "Why It's Disputed", "Standard Applied"]}
            rows={[
              [
                "Working capital",
                "Definition of current assets/liabilities; normalisation",
                "SPA definition + accounting policies",
              ],
              [
                "Revenue recognition",
                "Was revenue in the right period?",
                "IFRS 15 / FRS 102 s23",
              ],
              [
                "Provisions",
                "Were provisions adequate and consistent?",
                "IAS 37 / FRS 102 s21",
              ],
              [
                "IFRS 16 leases",
                "Were leases correctly capitalised?",
                "IFRS 16 / FRS 102 s20",
              ],
              [
                "Deferred revenue",
                "Correctly calculated and disclosed?",
                "IFRS 15",
              ],
              [
                "Net debt",
                "What counts as debt/cash?",
                "SPA definition",
              ],
            ]}
          />
        </div>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={FAQS} />
        </div>
        <InternalLinkSection links={getDisputePageLinks("completion-accounts")} />
      </ContentSection>
      <CTASection />
    </>
  );
}

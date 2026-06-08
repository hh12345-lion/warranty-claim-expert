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
      "How does an expert witness establish that the buyer's conduct prevented the earn-out?",
    answer:
      "The expert analyses the earn-out metrics during the earn-out period against the pre-acquisition trajectory of the business, the plan agreed at completion, and any changes in strategy, resources, or policy made by the buyer during the period. A but-for model is constructed showing what the metrics would have been under continuation of the pre-acquisition trajectory.",
  },
  {
    question: "Can earn-out disputes go to expert determination?",
    answer:
      "If the SPA earn-out clause specifies expert determination for accounting disputes, the earn-out calculation issues may be referred to an independent accountant. However, disputes about the buyer's conduct, breach of a duty to run the business fairly, typically proceed to litigation or arbitration, where expert evidence is needed on the financial quantification.",
  },
];

export const metadata = createMetadata({
  title: "Earn-Out Disputes Expert Witness UK | M&A Forensic Accounting",
  description:
    "Expert witness for earn-out disputes in UK M&A. But-for modelling, accounting policy continuity analysis, and buyer conduct claims.",
  path: "/dispute-types/earn-out-disputes",
});

export default function EarnOutDisputesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Dispute Types", href: "/dispute-types" },
            {
              name: "Earn-Out Disputes",
              href: "/dispute-types/earn-out-disputes",
            },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <PageHero
        title="Earn-Out Disputes: Expert Witness UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dispute Types", href: "/dispute-types" },
          { label: "Earn-Out Disputes" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>What Is an Earn-Out?</h2>
          <p>
            An earn-out is a mechanism where part of the purchase price depends
            on the future financial performance of the acquired business,
            typically measured over one to three years post-completion. If
            performance targets are met, the seller receives additional
            consideration.
          </p>

          <h2>Common Earn-Out Disputes</h2>
          <ol>
            <li>
              The earn-out was not achieved: was this genuine underperformance
              or did the buyer&apos;s conduct prevent it?
            </li>
            <li>
              The earn-out was calculated incorrectly: was the agreed accounting
              basis applied?
            </li>
            <li>
              The buyer changed the business model, strategy, or management in
              a way that made achieving the earn-out impossible
            </li>
            <li>
              Revenue or costs were manipulated during the earn-out period to
              reduce the earn-out payment
            </li>
          </ol>

          <h2>The But-For Analysis</h2>
          <p>
            The expert constructs a but-for model, showing what the earn-out
            metrics would have been absent the alleged misconduct or accounting
            error, and compares it to the actual outcome. This may require
            modelling multiple scenarios reflecting different assumptions about
            what would have happened under fair conditions.
          </p>

          <h2>Accounting Policy Continuity</h2>
          <p>
            SPA earn-out provisions typically require the buyer to maintain
            consistent accounting policies during the earn-out period. Where the
            buyer changes policies to reduce reported earn-out metrics, the
            expert must restate the metrics on a consistent basis and quantify
            the impact.
          </p>
        </Prose>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={FAQS} />
        </div>
        <InternalLinkSection links={getDisputePageLinks("earn-out-disputes")} />
      </ContentSection>
      <CTASection />
    </>
  );
}

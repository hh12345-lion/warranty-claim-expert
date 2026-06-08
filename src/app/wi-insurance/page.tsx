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
import { WI_INSURANCE_LINKS } from "@/lib/seo/internalLinks";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const FAQS = [
  {
    question: "Is W&I insurance now standard in UK M&A deals?",
    answer:
      "W&I insurance has become market standard in UK M&A transactions above approximately £5M deal value, with coverage extending to financial warranties, tax warranties, and in some policies, title warranties. The growth in W&I has not reduced warranty claim disputes. It has changed the parties involved, with insurers often funding and driving the litigation.",
  },
  {
    question: "What evidence do W&I insurers require in a claim?",
    answer:
      "W&I insurers typically require notification within the policy limitation period, a detailed statement of the warranty breached, quantification of the loss, and cooperation in establishing and pursuing subrogation rights against the seller. Forensic accountant expert evidence is central to establishing quantum in any W&I claim of material size.",
  },
];

export const metadata = createMetadata({
  title:
    "Warranty & Indemnity Insurance and Expert Evidence UK | W&I Claims Guide",
  description:
    "How warranty and indemnity (W&I) insurance has changed UK M&A disputes: insurers as claimants, subrogation, and what expert evidence is needed in W&I claims.",
  path: "/wi-insurance",
});

export default function WIInsurancePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "W&I Insurance", href: "/wi-insurance" },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <PageHero
        title="Warranty & Indemnity Insurance and Expert Evidence UK"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "W&I Insurance" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>What Is W&I Insurance?</h2>
          <p>
            The W&I insurance warranty claim process allows M&A buyers to claim
            under an insurance policy for financial warranty breaches rather
            than directly against the seller. W&I has become standard in UK M&A
            for transactions above a certain size threshold.
          </p>

          <h2>How W&I Changes Who Brings Claims</h2>
          <p>
            In a W&I claim, the insurer pays the buyer under the policy and
            then pursues its subrogation rights against the seller, or the
            buyer pursues the insurer directly if the insurer refuses to pay.
          </p>
        </Prose>
        <div className="my-6">
          <DataTable
            headers={[
              "Traditional Warranty Claim",
              "W&I Insurance Claim",
            ]}
            rows={[
              [
                "Buyer vs Seller",
                "Buyer vs Insurer (or Insurer vs Seller by subrogation)",
              ],
              [
                "Seller often individual (HNWI)",
                "Insurer (deep pocket)",
              ],
              [
                "Seller may resist disclosure",
                "Insurer typically litigates differently",
              ],
              [
                "Limitation period: negotiated",
                "Policy limit: fixed by policy",
              ],
            ]}
          />
        </div>
        <Prose>
          <h2>Expert Evidence in W&I Claims</h2>
          <p>
            The forensic accountant&apos;s role is the same in W&I claims:
            establishing the true financial position at completion and
            quantifying the diminution in value. However, W&I insurers typically
            conduct more rigorous expert evidence scrutiny, and the Inspired
            Education v Crombie [2025] warning about expert quality is
            particularly relevant in W&I claim litigation.
          </p>

          <h2>W&I Policy Limitations and Expert Evidence</h2>
          <p>
            W&I policies typically exclude fundamental warranties (title,
            capacity), fraud, and matters known to the buyer at signing. The
            expert must address whether the claimed loss falls within the covered
            warranty categories and the policy period.
          </p>
        </Prose>
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={FAQS} />
        </div>
        <InternalLinkSection links={WI_INSURANCE_LINKS} />
      </ContentSection>
      <CTASection />
    </>
  );
}

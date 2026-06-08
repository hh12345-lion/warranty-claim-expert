import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose } from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Warranty Claim Expert Witness Qualifications UK",
  description:
    "Qualifications required for warranty claim expert witnesses: ICAEW accreditation, M&A experience, CPR Part 35 compliance, and the Inspired Education v Crombie standard.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Qualifications", href: "/qualifications" },
        ])}
      />
      <PageHero
        title="Warranty Claim Expert Witness Qualifications"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>Core Credentials</h2>
          <p>
            Warranty claim expert witnesses should hold ACA/FCA (ICAEW)
            qualification, ICAEW Forensic Accreditation, M&A transaction
            experience (ideally Big 4 or equivalent, warranting credibility in
            deal-value disputes), CPR Part 35 expert report history, and prior
            court acceptance in warranty and M&A dispute contexts.
          </p>

          <h2>M&A Experience Requirement</h2>
          <p>
            Warranty claim expert witnesses must understand M&A transaction
            mechanics, not just accounting. Prior advisory experience in deals
            (due diligence, completion accounts preparation, SPA negotiation
            support) gives credibility that pure expert witnesses lack.
          </p>

          <h2>The Inspired Education v Crombie [2025] Standard</h2>
          <p>
            Expert witnesses in warranty claims must use instructions consistent
            with standard definitions of market value, approach all evidence
            rigorously, and maintain genuine independence. They must not adopt a
            partial approach to sources and analysis.
          </p>
        </Prose>
        <InternalLinkSection
          links={[
            { href: "/experts", label: "Our Expert Witnesses" },
            { href: "/how-to-instruct", label: "How to Instruct an Expert" },
            { href: "/guides/inspired-education-crombie-2025", label: "Inspired Education v Crombie [2025]" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </ContentSection>
      <CTASection />
    </>
  );
}

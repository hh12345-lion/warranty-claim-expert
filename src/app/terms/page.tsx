import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose } from "@/components/ui/ContentSection";
import { COMPANY_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Terms of Use | Warranty Claim Expert",
  description:
    "Terms of use for WarrantyClaimExpert.com. Website usage terms, disclaimers, and limitations of liability.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Terms of Use", href: "/terms" },
        ])}
      />
      <PageHero
        title="Terms of Use"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <ContentSection>
        <Prose>
          <p>Last updated: June 2025</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing warrantyclaimexpert.com, you agree to these terms of
            use. If you do not agree, please do not use this website.
          </p>

          <h2>Website Purpose</h2>
          <p>
            This website provides information about forensic accountant expert
            witness services for UK M&A warranty claims and related disputes. The
            content is for general information only and does not constitute
            legal or professional advice.
          </p>

          <h2>No Client Relationship</h2>
          <p>
            Submitting an enquiry through this website does not create a
            client-adviser relationship. A formal engagement is only established
            through a signed letter of instruction and terms of engagement.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We endeavour to keep the information on this website accurate and
            up to date. However, we make no warranties about the completeness or
            accuracy of the content. Case law references and fee indications
            are provided for guidance only.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, design, and structure,
            is owned by Warranty Claim Expert and protected by copyright law.
            You may not reproduce content without our written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Warranty Claim Expert shall
            not be liable for any loss arising from your use of this website or
            reliance on its content.
          </p>

          <h2>External Links</h2>
          <p>
            This website may contain links to external sites. We are not
            responsible for the content or privacy practices of linked
            websites.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any
            disputes shall be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact {COMPANY_EMAIL}.
          </p>
        </Prose>
      </ContentSection>
      <CTASection />
    </>
  );
}

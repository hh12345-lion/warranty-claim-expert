import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose } from "@/components/ui/ContentSection";
import { COMPANY_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Privacy Policy | Warranty Claim Expert",
  description:
    "Privacy policy for WarrantyClaimExpert.com. How we collect, use, and protect your personal data under UK GDPR.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ])}
      />
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <ContentSection>
        <Prose>
          <p>Last updated: June 2025</p>

          <h2>Who We Are</h2>
          <p>
            Warranty Claim Expert (warrantyclaimexpert.com) provides forensic
            accountant expert witness referral services for UK M&A disputes. You
            can contact us at {COMPANY_EMAIL}.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit our contact form, we collect your name, law firm,
            email address, phone number, and details about your dispute. We may
            also collect technical data through cookies and analytics tools,
            subject to your consent preferences.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your enquiry and provide expert witness services</li>
            <li>Communicate with you about your instruction</li>
            <li>Improve our website and services (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Legal Basis for Processing</h2>
          <p>
            We process your data on the basis of legitimate interests (responding
            to enquiries), contractual necessity (if you instruct us), and
            consent (for non-essential cookies and marketing).
          </p>

          <h2>Data Retention</h2>
          <p>
            Enquiry data is retained for up to six years from the date of last
            contact, or longer where required for legal or regulatory purposes.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under UK GDPR, you have the right to access, rectify, erase,
            restrict, or port your personal data, and to object to processing.
            Contact us at {COMPANY_EMAIL} to exercise these rights.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies as described in our{" "}
            <a href="/cookie-policy" className="text-accent hover:underline">
              Cookie Policy
            </a>
            . You can manage your preferences at any time using the Cookie
            Settings link in our footer.
          </p>

          <h2>Third Parties</h2>
          <p>
            We use Formspree to process contact form submissions and may use
            Google Analytics (with your consent) to understand website usage.
            We do not sell your personal data.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy enquiries, contact {COMPANY_EMAIL}.
          </p>
        </Prose>
      </ContentSection>
      <CTASection />
    </>
  );
}

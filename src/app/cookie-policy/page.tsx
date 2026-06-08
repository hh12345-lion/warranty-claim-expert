import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose } from "@/components/ui/ContentSection";
import { COMPANY_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Cookie Policy | Warranty Claim Expert",
  description:
    "Cookie policy for WarrantyClaimExpert.com. Types of cookies we use, how to manage preferences, and your rights under GDPR.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Cookie Policy", href: "/cookie-policy" },
        ])}
      />
      <PageHero
        title="Cookie Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />
      <ContentSection>
        <Prose>
          <p>Last updated: June 2025</p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the site function, remember your preferences,
            and (with your consent) analyse how the site is used.
          </p>

          <h2>How We Use Cookies</h2>
          <p>
            WarrantyClaimExpert.com uses cookies to provide essential website
            functionality, remember your cookie consent preferences, and (with
            your consent) analyse traffic and support marketing activities.
          </p>

          <h2>Cookie Categories</h2>

          <h3>Necessary Cookies (Always Active)</h3>
          <p>
            These cookies are essential for the website to function. They
            include cookies that store your cookie consent preferences. These
            cannot be disabled.
          </p>
          <ul>
            <li>
              <strong>wce_cookie_consent</strong>: Stores your cookie consent
              preferences in localStorage. Expires after 365 days.
            </li>
          </ul>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors use our website. They
            are only loaded if you accept analytics cookies.
          </p>
          <ul>
            <li>
              <strong>Google Analytics (_ga, _gid)</strong>: Collects anonymous
              usage statistics. Provided by Google. Retention: up to 2 years.
            </li>
          </ul>

          <h3>Marketing Cookies</h3>
          <p>
            These cookies are used for advertising and remarketing. They are only
            loaded if you accept marketing cookies.
          </p>
          <ul>
            <li>
              <strong>Meta Pixel (_fbp)</strong>: Tracks conversions from
              Facebook and Instagram advertising. Provided by Meta.
            </li>
            <li>
              <strong>LinkedIn Insight Tag (li_sugr, UserMatchHistory)</strong>:
              Tracks conversions from LinkedIn advertising. Provided by
              LinkedIn.
            </li>
          </ul>

          <h3>Preferences Cookies</h3>
          <p>
            These cookies remember your settings and personalise your
            experience. They are only loaded if you accept preferences cookies.
          </p>

          <h2>Google Consent Mode</h2>
          <p>
            We implement Google Consent Mode v2. All non-essential tracking
            scripts are blocked until you grant consent. When you change your
            preferences, consent mode updates immediately without requiring a
            page reload.
          </p>

          <h2>Managing Your Preferences</h2>
          <p>
            You can change your cookie preferences at any time by clicking the
            Cookie Settings link in our website footer. You can also clear
            cookies through your browser settings.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies are set by third-party services we use, including
            Google Analytics, Formspree, and (if enabled) Meta and LinkedIn. We
            do not control third-party cookies. Please refer to their respective
            privacy policies.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under UK GDPR and the ePrivacy Directive, you have the right to
            refuse non-essential cookies. Our cookie banner allows you to
            accept all, reject non-essential, or customise your preferences.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about our use of cookies, contact {COMPANY_EMAIL}.
          </p>
        </Prose>
      </ContentSection>
      <CTASection />
    </>
  );
}

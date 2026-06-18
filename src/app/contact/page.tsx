import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection } from "@/components/ui/ContentSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY_EMAIL } from "@/lib/site";
import { UK_SERVICE_SCOPE_INTRO, UK_SERVICE_SCOPE_DETAILS } from "@/lib/uk-scope";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Instruct a Warranty Claim Expert Witness | Contact UK",
  description:
    "Instruct a warranty claim expert witness for your UK M&A dispute. Contact our forensic accountants for breach of warranty, completion accounts, earn-out, and locked box claims.",
  path: "/contact",
});

const TRUST_ITEMS = [
  "M&A transaction expertise",
  "Completion accounts and earn-outs",
  "CPR Part 35 compliant",
  "W&I insurer and buyer-side",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Warranty Claim Expert Witness"
        subtitle="Complete the form below for UK M&A disputes governed by English law. We respond within one business day."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="rounded-[var(--radius-card)] border border-border bg-section-alt p-6">
            <h2 className="text-lg font-bold text-heading">Why Instruct Us</h2>
            <ul className="mt-4 space-y-3">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-body"
                >
                  <span className="mt-1 text-accent" aria-hidden="true">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-heading">
                United Kingdom Service Only
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {UK_SERVICE_SCOPE_INTRO}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {UK_SERVICE_SCOPE_DETAILS[2]}
              </p>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium text-heading">Email</p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="mt-1 text-sm text-accent hover:underline"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </aside>
        </div>
      </ContentSection>
      <CTASection
        title="Need Urgent Expert Evidence?"
        description={`For hearings within six weeks in England and Wales, contact us directly at ${COMPANY_EMAIL} for priority response.`}
      />
    </>
  );
}

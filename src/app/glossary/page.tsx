import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection } from "@/components/ui/ContentSection";
import { GLOSSARY_TERMS } from "@/data/glossary";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { GLOSSARY_CONTEXTUAL_LINKS } from "@/lib/seo/internalLinks";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "M&A Dispute Glossary | Warranty Claim Terms UK",
  description:
    "Glossary of M&A dispute and warranty claim terms: diminution in value, agreed accounting basis, earn-out, locked box leakage, W&I insurance, CPR Part 35, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Glossary", href: "/glossary" },
        ])}
      />
      <PageHero
        title="M&A Dispute Glossary"
        subtitle="Definitions of key terms used in warranty claims, completion accounts disputes, earn-outs, and locked box litigation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary" },
        ]}
      />
      <ContentSection>
        <InternalLinkSection
          title="Related Guides and Dispute Pages"
          links={GLOSSARY_CONTEXTUAL_LINKS}
        />
        <dl className="mt-10 space-y-6">
          {GLOSSARY_TERMS.map((item) => (
            <div
              key={item.term}
              className="rounded-[var(--radius-card)] border border-border bg-white p-5 card-shadow"
            >
              <dt className="text-base font-semibold text-heading">
                {item.term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      </ContentSection>
      <CTASection />
    </>
  );
}

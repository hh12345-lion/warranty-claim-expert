import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, FAQList } from "@/components/ui/ContentSection";
import { FAQ_ITEMS } from "@/data/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { FAQ_CONTEXTUAL_LINKS } from "@/lib/seo/internalLinks";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Warranty Claim Expert Witness FAQ UK | M&A Disputes",
  description:
    "Frequently asked questions about warranty claim expert witnesses, M&A dispute types, Inspired Education v Crombie, completion accounts, earn-outs, and fees.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "FAQ", href: "/faq" },
          ]),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about warranty claim expert witnesses and UK M&A disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <ContentSection>
        <FAQList faqs={FAQ_ITEMS} />
        <InternalLinkSection
          title="Explore Related Topics"
          links={FAQ_CONTEXTUAL_LINKS}
        />
      </ContentSection>
      <CTASection />
    </>
  );
}

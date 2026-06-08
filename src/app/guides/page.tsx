import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  CardGrid,
  LinkCard,
} from "@/components/ui/ContentSection";
import { GUIDES } from "@/data/guides";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "M&A Dispute Guides | Warranty Claim Expert Evidence UK",
  description:
    "Expert guides for M&A lawyers on warranty claims, completion accounts, earn-out disputes, locked box leakage, W&I insurance, and instructing forensic accountants.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ])}
      />
      <PageHero
        title="M&A Dispute Guides"
        subtitle="In-depth guides for solicitors and corporate counsel on forensic accounting expert evidence in post-acquisition disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />
      <ContentSection>
        <CardGrid cols={2}>
          {GUIDES.map((g) => (
            <LinkCard
              key={g.slug}
              href={`/guides/${g.slug}`}
              title={g.h1}
              description={g.description}
            />
          ))}
        </CardGrid>
      </ContentSection>
      <CTASection />
    </>
  );
}

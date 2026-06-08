import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  CardGrid,
  LinkCard,
} from "@/components/ui/ContentSection";
import { DISPUTE_TYPES } from "@/data/dispute-types";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { DISPUTE_HUB_LINKS } from "@/lib/seo/internalLinks";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title:
    "M&A Dispute Types | Warranty Claims, Completion Accounts & Earn-Outs UK",
  description:
    "The four main types of M&A dispute requiring expert accounting evidence: breach of warranty, completion accounts, earn-out disputes, and locked box leakage claims.",
  path: "/dispute-types",
});

export default function DisputeTypesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Dispute Types", href: "/dispute-types" },
        ])}
      />
      <PageHero
        title="M&A Dispute Types"
        subtitle="The four main mechanisms for post-acquisition financial disputes in UK M&A transactions. Each requires specialised forensic accounting expert evidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dispute Types" },
        ]}
      />
      <ContentSection>
        <CardGrid cols={2}>
          {DISPUTE_TYPES.map((d) => (
            <LinkCard
              key={d.slug}
              href={d.href}
              title={d.title}
              description={d.description}
            />
          ))}
        </CardGrid>
        <InternalLinkSection links={DISPUTE_HUB_LINKS} />
      </ContentSection>
      <CTASection />
    </>
  );
}

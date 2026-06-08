import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  CardGrid,
  LinkCard,
} from "@/components/ui/ContentSection";
import { CASE_TYPES } from "@/data/case-types";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Case Types in Warranty & M&A Disputes UK | Expert Witness",
  description:
    "Eight case types requiring forensic accounting expert evidence in UK M&A disputes: financial warranty breach, accounts warranty, tax warranty, completion accounts, earn-out, locked box, W&I, and fraud.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Case Types", href: "/case-types" },
        ])}
      />
      <PageHero
        title="Case Types in Warranty & M&A Disputes UK"
        subtitle="Specific case types within M&A disputes, each requiring tailored forensic accounting expert evidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />
      <ContentSection>
        <CardGrid cols={2}>
          {CASE_TYPES.map((c) => (
            <LinkCard
              key={c.slug}
              href={`/case-types/${c.slug}`}
              title={c.h1}
              description={c.description}
            />
          ))}
        </CardGrid>
      </ContentSection>
      <CTASection />
    </>
  );
}

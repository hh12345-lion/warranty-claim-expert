import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, CardGrid, LinkCard } from "@/components/ui/ContentSection";
import { SERVICES, serviceHref } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Warranty Claim Expert Witness Services UK | Full Service List",
  description:
    "UK warranty claim expert witness services: breach of warranty, completion accounts review, earn-out analysis, locked box leakage, W&I insurance support, and CPR Part 35 expert reports.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]),
          ...serviceSchema(
            SERVICES.map((s) => ({
              name: s.title,
              description: s.description,
            }))
          ),
        ]}
      />
      <PageHero
        title="Warranty Claim Expert Witness Services"
        subtitle="Full-service forensic accounting expert witness support for UK M&A disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ContentSection>
        <CardGrid cols={2}>
          {SERVICES.map((service) => (
            <LinkCard
              key={service.slug}
              href={serviceHref(service.slug)}
              title={service.title}
              description={service.description}
            />
          ))}
        </CardGrid>
      </ContentSection>
      <CTASection />
    </>
  );
}

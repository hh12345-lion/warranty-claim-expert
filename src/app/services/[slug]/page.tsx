import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose, FAQList } from "@/components/ui/ContentSection";
import { SERVICES, getService } from "@/data/services";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />
      <PageHero
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />
      <ContentSection>
        <Prose>
          {service.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h2>Methodology</h2>
          <ul>
            {service.methodology.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </Prose>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={service.faqs} />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-accent hover:underline"
          >
            View all services
          </Link>
        </div>
      </ContentSection>
      <CTASection />
    </>
  );
}

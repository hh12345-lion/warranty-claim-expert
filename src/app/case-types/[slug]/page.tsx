import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose, FAQList } from "@/components/ui/ContentSection";
import { CASE_TYPES, getCaseType } from "@/data/case-types";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CASE_TYPES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) return {};
  return createMetadata({
    title: caseType.metaTitle,
    description: caseType.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: Props) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Case Types", href: "/case-types" },
            { name: caseType.title, href: `/case-types/${slug}` },
          ]),
          faqSchema(caseType.faqs),
        ]}
      />
      <PageHero
        title={caseType.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types", href: "/case-types" },
          { label: caseType.title },
        ]}
      />
      <ContentSection>
        <Prose>
          {caseType.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Prose>

        <div className="mt-10 rounded-[var(--radius-card)] border border-border bg-section-alt p-6">
          <h3 className="font-semibold text-heading">Related Resources</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href={caseType.relatedDisputeType}
                className="text-accent hover:underline"
              >
                Related dispute type
              </Link>
            </li>
            {caseType.relatedServices.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-accent hover:underline">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-heading">
            Frequently Asked Questions
          </h2>
          <FAQList faqs={caseType.faqs} />
        </div>
      </ContentSection>
      <CTASection />
    </>
  );
}

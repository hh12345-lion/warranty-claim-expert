import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, Prose } from "@/components/ui/ContentSection";
import { GUIDES, getGuide } from "@/data/guides";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { getGuideRelatedLinks } from "@/lib/seo/internalLinks";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Guides", href: "/guides" },
            { name: guide.title, href: `/guides/${slug}` },
          ]),
          articleSchema({
            title: guide.h1,
            description: guide.description,
            url: `/guides/${slug}`,
          }),
        ]}
      />
      <PageHero
        title={guide.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: guide.title },
        ]}
      />
      <ContentSection>
        <Prose>
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}
        </Prose>
        <InternalLinkSection links={getGuideRelatedLinks(slug)} />
      </ContentSection>
      <CTASection />
    </>
  );
}

import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection } from "@/components/ui/ContentSection";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { EXPERTS } from "@/data/experts";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Warranty Claim Expert Witnesses UK | Forensic Accountants",
  description:
    "Meet our ICAEW Forensic Accredited warranty claim expert witnesses. M&A dispute specialists for breach of warranty, completion accounts, earn-outs, and locked box claims.",
  path: "/experts",
});

export default function ExpertsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Our Experts", href: "/experts" },
          ]),
          ...EXPERTS.map((e) => personSchema(e)),
        ]}
      />
      <PageHero
        title="Warranty Claim Expert Witnesses UK"
        subtitle="ICAEW Forensic Accredited forensic accountants providing independent expert evidence in UK M&A warranty claims and post-acquisition disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Experts" },
        ]}
      />
      <ContentSection>
        <p className="mb-8 max-w-3xl text-body">
          Our warranty claim expert witnesses combine M&A transaction experience
          with CPR Part 35 compliant reporting. Each expert has acted in High
          Court commercial and Chancery proceedings involving breach of warranty,
          completion accounts, earn-out, and W&I insurance claims.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {EXPERTS.map((expert) => (
            <div
              key={expert.name}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6 card-shadow"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h2 className="text-lg font-bold text-heading">{expert.name}</h2>
              <p className="text-sm font-medium text-accent">
                {expert.jobTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {expert.description}
              </p>
            </div>
          ))}
        </div>
        <InternalLinkSection
          links={[
            { href: "/qualifications", label: "Expert Witness Qualifications" },
            { href: "/how-to-instruct", label: "How to Instruct an Expert" },
            { href: "/fees", label: "Expert Witness Fees" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </ContentSection>
      <CTASection />
    </>
  );
}

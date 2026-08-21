import Link from "next/link";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, CardGrid, LinkCard } from "@/components/ui/ContentSection";
import { DISPUTE_TYPES } from "@/data/dispute-types";

export default function NotFound() {
  return (
    <>
      <section className="hero-editorial py-14 md:py-20">
        <div className="page-wrap text-center">
          <div className="hero-editorial-inner mx-auto max-w-xl text-left sm:text-center sm:[&]:border-l-0 sm:[&]:pl-0">
            <p className="font-heading text-6xl font-bold text-accent/40 md:text-8xl">
              404
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold text-heading sm:text-4xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-body md:text-lg">
              The page you are looking for does not exist or may have been moved.
              If you need a warranty claim expert witness, explore the resources
              below or submit an enquiry.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/"
                className="min-h-[44px] bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
              >
                Go to homepage
              </Link>
              <Link
                href="/contact"
                className="min-h-[44px] border border-border px-8 py-3 text-sm font-medium text-primary transition hover:bg-section-alt"
              >
                Submit enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContentSection>
        <h2 className="font-heading text-2xl font-bold text-heading">
          Popular pages
        </h2>
        <p className="mt-2 text-body">
          Find forensic accounting expert witness support for UK M&amp;A disputes.
        </p>
        <div className="mt-8">
          <CardGrid cols={2}>
            <LinkCard
              href="/how-warranty-claims-work"
              title="How warranty claims work"
              description="The complete guide to warranty and indemnity claims in UK M&A disputes."
            />
            <LinkCard
              href="/services"
              title="Expert witness services"
              description="Breach of warranty, completion accounts, earn-outs, locked box, and W&I support."
            />
            {DISPUTE_TYPES.slice(0, 2).map((d) => (
              <LinkCard
                key={d.slug}
                href={d.href}
                title={d.shortTitle}
                description={d.description}
              />
            ))}
          </CardGrid>
        </div>
      </ContentSection>

      <CTASection />
    </>
  );
}

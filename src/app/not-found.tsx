import Link from "next/link";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection, CardGrid, LinkCard } from "@/components/ui/ContentSection";
import { DISPUTE_TYPES } from "@/data/dispute-types";

export default function NotFound() {
  return (
    <>
      <section className="bg-primary py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-6xl font-bold text-white/30 md:text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            The page you are looking for does not exist or may have been moved.
            If you need a warranty claim expert witness, explore the resources
            below or contact us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="min-h-[44px] rounded-[var(--radius-sm)] bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="min-h-[44px] rounded-[var(--radius-sm)] border border-white/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ContentSection>
        <h2 className="text-2xl font-bold text-heading">
          Popular Pages
        </h2>
        <p className="mt-2 text-body">
          Find forensic accounting expert witness support for UK M&A disputes.
        </p>
        <div className="mt-8">
          <CardGrid cols={2}>
            <LinkCard
              href="/how-warranty-claims-work"
              title="How Warranty Claims Work"
              description="The complete guide to warranty and indemnity claims in UK M&A disputes."
            />
            <LinkCard
              href="/services"
              title="Expert Witness Services"
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

import Link from "next/link";
import { AlertBanner } from "@/components/ui/AlertBanner";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  CardGrid,
  LinkCard,
  DataTable,
} from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { InternalLinkSection } from "@/components/seo/InternalLinkSection";
import { UkServiceScope } from "@/components/seo/UkServiceScope";
import { HOMEPAGE_HUB_LINKS } from "@/lib/seo/internalLinks";
import { websiteSchema } from "@/lib/schema";
import { DISPUTE_TYPES } from "@/data/dispute-types";
import { SERVICES, serviceHref } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />

      <AlertBanner
        href="/guides/inspired-education-crombie-2025"
        linkText="Read the case analysis"
      >
        Inspired Education v Crombie [2025]: Valuation expert evidence fatally
        undermined by partial approach and instructions inconsistent with
        market value definitions. Expert quality is decisive in warranty claim
        litigation.
      </AlertBanner>

      <section className="bg-primary py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Warranty Claim Expert Witness Services for UK M&A Lawyers &amp;
            Solicitors
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            When a deal goes wrong, you need a warranty claim expert witness UK
            solicitors can rely on. Whether the accounts were not what was
            warranted, completion accounts are disputed, earn-out targets have
            not been met, or the locked box has leaked, forensic accounting
            expert evidence must withstand M&A litigation scrutiny.
            WarrantyClaimExpert.com connects UK M&A lawyers with qualified
            forensic accountants specialising in post-acquisition disputes.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[44px] items-center rounded-[var(--radius-sm)] bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Instruct an Expert
          </Link>
        </div>
      </section>

      <ContentSection alt>
        <UkServiceScope />
      </ContentSection>

      <ContentSection>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Four M&A Dispute Types We Cover
        </h2>
        <p className="mt-4 max-w-3xl text-body">
          Post-acquisition disputes fall into four distinct mechanisms. Each
          requires specialised forensic accounting expert evidence.
        </p>
        <div className="mt-8">
          <CardGrid cols={4}>
            {DISPUTE_TYPES.map((d) => (
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

      <ContentSection alt>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Expert Witness Services
        </h2>
        <p className="mt-4 max-w-3xl text-body">
          Full-service forensic accounting expert witness support for every
          stage of M&A dispute resolution.
        </p>
        <div className="mt-8">
          <CardGrid cols={4}>
            {SERVICES.map((s) => (
              <LinkCard
                key={s.slug}
                href={serviceHref(s.slug)}
                title={s.title}
                description={s.description}
              />
            ))}
          </CardGrid>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-accent hover:text-accent/80"
          >
            View all services &rarr;
          </Link>
        </div>
      </ContentSection>

      <ContentSection alt>
        <InternalLinkSection
          title="Warranty Claim Expert Witness Resources"
          links={HOMEPAGE_HUB_LINKS}
        />
      </ContentSection>

      <ContentSection>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Key Facts: M&A Disputes and Expert Evidence
        </h2>
        <div className="mt-8">
          <DataTable
            headers={["Fact", "Figure", "Source"]}
            rows={[
              [
                "Breach of warranty claims",
                "Increasing, buoyant deals market",
                "Quantuma / Law Society Scotland",
              ],
              [
                "W&I insurance adoption UK",
                "High, market standard for larger deals",
                "Industry practice",
              ],
              [
                "W&I insurer as claimant",
                "Common, subrogation against seller",
                "Standard W&I terms",
              ],
              [
                "ICAEW expert determination",
                "Most common resolution for completion accounts",
                "SPA standard clause",
              ],
              [
                "Key 2025 case",
                "Inspired Education v Crombie [2025] EWHC 1236",
                "High Court (Ch)",
              ],
              [
                "Expert evidence standard",
                "CPR Part 35",
                "Civil Procedure Rules",
              ],
            ]}
          />
        </div>
      </ContentSection>

      <CTASection />
    </>
  );
}

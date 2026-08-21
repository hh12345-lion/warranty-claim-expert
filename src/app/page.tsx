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
        Inspired Education v Crombie [2025]: valuation expert evidence fatally
        undermined by a partial approach and instructions inconsistent with
        market value definitions. Expert quality is decisive in warranty claim
        litigation.
      </AlertBanner>

      <section className="hero-editorial py-14 md:py-20">
        <div className="page-wrap">
          <div className="hero-editorial-inner max-w-3xl">
            <span className="uk-scope-tag">England &amp; Wales · UK M&amp;A</span>
            <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Warranty claim expert witnesses for UK solicitors
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">
              When a deal goes wrong, you need forensic accounting expert evidence
              that withstands M&A litigation scrutiny. We connect UK solicitors and
              corporate counsel with qualified experts for breach of warranty,
              completion accounts, earn-outs, and locked box disputes.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[44px] items-center bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              Submit enquiry
            </Link>
          </div>
        </div>
      </section>

      <ContentSection alt>
        <UkServiceScope />
      </ContentSection>

      <ContentSection>
        <h2 className="font-heading text-2xl font-bold text-heading sm:text-3xl">
          Four M&amp;A dispute types we cover
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
        <h2 className="font-heading text-2xl font-bold text-heading sm:text-3xl">
          Expert witness services
        </h2>
        <p className="mt-4 max-w-3xl text-body">
          Full-service forensic accounting expert witness support for every
          stage of M&amp;A dispute resolution.
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
        <div className="mt-8">
          <Link
            href="/services"
            className="text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View all services &rarr;
          </Link>
        </div>
      </ContentSection>

      <ContentSection>
        <InternalLinkSection
          title="Warranty claim expert witness resources"
          links={HOMEPAGE_HUB_LINKS}
        />
      </ContentSection>

      <ContentSection alt>
        <h2 className="font-heading text-2xl font-bold text-heading sm:text-3xl">
          Key facts: M&amp;A disputes and expert evidence
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

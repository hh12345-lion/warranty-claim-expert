import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/layout/CTASection";
import {
  ContentSection,
  Prose,
  DataTable,
} from "@/components/ui/ContentSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Warranty Claim Expert Witness Fees UK | Indicative Rates",
  description:
    "Indicative fees for warranty claim expert witnesses in UK M&A disputes. Hourly rates, report costs, and proportionality guidance for solicitors.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Fees", href: "/fees" },
        ])}
      />
      <PageHero
        title="Warranty Claim Expert Witness Fees UK"
        subtitle="Indicative rates for forensic accountant expert witness services in UK M&A warranty claims, completion accounts disputes, and earn-out litigation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Fees" },
        ]}
      />
      <ContentSection>
        <Prose>
          <h2>Indicative Hourly Rates</h2>
          <p>
            Warranty claim expert witness fees depend on deal value, dispute
            complexity, and forum. The following indicative rates apply to UK
            M&A forensic accounting expert evidence.
          </p>
        </Prose>
        <div className="my-6">
          <DataTable
            headers={["Engagement Type", "Indicative Hourly Rate"]}
            rows={[
              ["Standard M&A dispute", "£300 to £500 per hour"],
              [
                "Complex High Court / international arbitration",
                "£500 to £800 per hour",
              ],
              ["Big 4-level expert (major deals)", "£700 to £1,200+ per hour"],
            ]}
          />
        </div>
        <Prose>
          <h2>Report Costs</h2>
        </Prose>
        <div className="my-6">
          <DataTable
            headers={["Report Type", "Indicative Cost"]}
            rows={[
              ["Standard warranty claim report", "£8,000 to £30,000"],
              [
                "Complex multi-warranty High Court report",
                "£25,000 to £100,000+",
              ],
              ["Completion accounts expert determination", "£10,000 to £50,000"],
              ["Earn-out dispute", "£10,000 to £50,000+"],
            ]}
          />
        </div>
        <Prose>
          <h2>Proportionality</h2>
          <p>
            Warranty claim expert evidence must be proportionate to the deal
            value and claim size. We discuss scope and budget at the outset of
            every instruction.{" "}
            <Link href="/how-to-instruct" className="font-medium text-accent hover:underline">
              Learn how to instruct an expert
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              contact us
            </Link>{" "}
            to discuss your matter.
          </p>
        </Prose>
      </ContentSection>
      <CTASection />
    </>
  );
}

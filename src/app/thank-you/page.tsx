import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection } from "@/components/ui/ContentSection";
import { COMPANY_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Thank You | Warranty Claim Expert",
  description:
    "Your enquiry has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const NEXT_STEPS = [
  {
    title: "We review your enquiry",
    description:
      "A member of our team reviews the dispute type, stage, and urgency you provided.",
  },
  {
    title: "We respond within one business day",
    description:
      "You will receive a response by email with next steps for instructing expert evidence.",
  },
  {
    title: "Prepare your documents",
    description:
      "Gather the SPA, reference accounts, completion accounts, and any correspondence to speed up the instruction process.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-primary py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-white"
            aria-hidden="true"
          >
            &#10003;
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Thank You for Your Enquiry
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Your instruction request has been received. We will respond within
            one business day.
          </p>
        </div>
      </section>

      <ContentSection>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold text-heading">What Happens Next</h2>
          <ol className="mt-6 space-y-6">
            {NEXT_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-[var(--radius-card)] border border-border bg-white p-5 card-shadow"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-heading">{step.title}</p>
                  <p className="mt-1 text-sm text-body">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-center text-body">
            For urgent matters, email us directly at{" "}
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="font-medium text-accent hover:underline"
            >
              {COMPANY_EMAIL}
            </a>
            .
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="min-h-[44px] rounded-[var(--radius-sm)] bg-accent px-8 py-3 text-sm font-semibold text-white"
            >
              Return to Homepage
            </Link>
            <Link
              href="/how-to-instruct"
              className="min-h-[44px] rounded-[var(--radius-sm)] border border-border px-8 py-3 text-sm font-medium text-body"
            >
              How to Instruct an Expert
            </Link>
          </div>
        </div>
      </ContentSection>

      <CTASection
        title="Need Urgent Expert Evidence?"
        description="For hearings within six weeks, contact us directly for priority response."
      />
    </>
  );
}

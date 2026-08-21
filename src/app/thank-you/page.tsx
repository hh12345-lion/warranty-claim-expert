import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { CTASection } from "@/components/layout/CTASection";
import { ContentSection } from "@/components/ui/ContentSection";
import { COMPANY_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Thank You | Warranty Claim Expert",
  description:
    "Your enquiry has been received. We will respond within one working day.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const NEXT_STEPS = [
  {
    title: "We review your enquiry",
    description:
      "A member of our team reviews the dispute details and urgency you provided.",
  },
  {
    title: "We respond within one working day",
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
      <section className="hero-editorial py-14 md:py-20">
        <div className="page-wrap text-center">
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center bg-accent text-xl text-white"
            aria-hidden="true"
          >
            &#10003;
          </div>
          <h1 className="mt-6 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Thank you for your enquiry
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-body md:text-lg">
            Your instruction request has been received. We will respond within
            one working day.
          </p>
        </div>
      </section>

      <ContentSection>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-xl font-bold text-heading">
            What happens next
          </h2>
          <ol className="mt-6 space-y-4">
            {NEXT_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 border border-border border-l-[3px] border-l-accent bg-white p-5 card-shadow"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-sm font-bold text-white">
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
              className="min-h-[44px] bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              Return to homepage
            </Link>
            <Link
              href="/how-to-instruct"
              className="min-h-[44px] border border-border px-8 py-3 text-sm font-medium text-body transition hover:bg-section-alt"
            >
              How to instruct an expert
            </Link>
          </div>
        </div>
      </ContentSection>

      <CTASection
        title="Need urgent expert evidence?"
        description="For hearings within six weeks, contact us directly for priority response."
      />
    </>
  );
}

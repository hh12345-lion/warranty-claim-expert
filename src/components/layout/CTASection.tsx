import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Instruct a warranty claim expert witness",
  description = "Connect with qualified forensic accountants specialising in UK M&A disputes. We respond within one working day.",
}: CTASectionProps) {
  return (
    <section className="cta-band py-14 md:py-16">
      <div className="page-wrap text-center">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="min-h-[44px] bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
          >
            Submit enquiry
          </Link>
          <Link
            href="/how-to-instruct"
            className="min-h-[44px] border border-white/35 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}

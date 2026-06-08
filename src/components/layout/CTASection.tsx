import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Instruct a Warranty Claim Expert Witness",
  description = "Connect with qualified forensic accountants specialising in UK M&A disputes. We respond within one business day.",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="min-h-[44px] rounded-[var(--radius-sm)] bg-white px-8 py-3 text-sm font-semibold text-accent transition hover:bg-white/90"
          >
            Instruct an Expert
          </Link>
          <Link
            href="/how-to-instruct"
            className="min-h-[44px] rounded-[var(--radius-sm)] border border-white/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            How to Instruct
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { type ReactNode } from "react";

type ContentSectionProps = {
  children: ReactNode;
  alt?: boolean;
  className?: string;
};

export function ContentSection({
  children,
  alt = false,
  className = "",
}: ContentSectionProps) {
  return (
    <section
      className={`py-12 md:py-16 ${alt ? "bg-section-alt" : "bg-white"} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-content max-w-3xl space-y-6 text-body leading-relaxed [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-heading [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-heading [&_li]:ml-5 [&_li]:list-disc [&_ol]:list-decimal [&_ol>li]:list-decimal [&_p]:text-base [&_ul]:space-y-2">
      {children}
    </div>
  );
}

export function FAQList({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group rounded-[var(--radius-card)] border border-border bg-white card-shadow"
        >
          <summary className="flex min-h-[44px] cursor-pointer items-center justify-between px-5 py-4 text-left font-semibold text-heading marker:content-none [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              className="ml-4 shrink-0 text-accent transition group-open:rotate-180"
              aria-hidden="true"
            >
              &#9660;
            </span>
          </summary>
          <div className="border-t border-border px-5 py-4 text-body">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] border border-border">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-section-alt">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 font-semibold text-heading"
                scope="col"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-t border-border even:bg-section-alt/50"
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-body">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CardGrid({
  children,
  cols = 3,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
}) {
  const colClass =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${colClass}`}>{children}</div>
  );
}

export function LinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[var(--radius-card)] border border-border bg-white p-6 card-shadow transition hover:border-accent/40 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-heading group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
        {description}
      </p>
      <span className="mt-4 text-sm font-medium text-accent">
        Learn more &rarr;
      </span>
    </Link>
  );
}

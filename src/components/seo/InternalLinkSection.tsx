import Link from "next/link";
import type { InternalLink } from "@/lib/seo/internalLinks";

type Props = {
  title?: string;
  links: InternalLink[];
};

export function InternalLinkSection({
  title = "Related Resources",
  links,
}: Props) {
  if (!links.length) return null;

  return (
    <nav
      aria-label={title}
      className="mt-10 rounded-[var(--radius-card)] border border-border bg-section-alt p-6"
    >
      <h2 className="text-lg font-bold text-heading">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

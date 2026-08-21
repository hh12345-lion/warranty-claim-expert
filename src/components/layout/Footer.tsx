"use client";

import Link from "next/link";
import { COMPANY_EMAIL } from "@/lib/site";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";
import {
  SERVICE_NAV_LINKS,
  DISPUTE_TYPE_NAV_LINKS,
  RESOURCES_NAV_LINKS,
} from "@/lib/navigation";

const FOOTER_LINK_GROUPS = [
  {
    title: "Services",
    links: SERVICE_NAV_LINKS.slice(0, 5),
  },
  {
    title: "Disputes",
    links: DISPUTE_TYPE_NAV_LINKS,
  },
  {
    title: "Resources",
    links: [
      ...RESOURCES_NAV_LINKS.slice(0, 3),
      { href: "/how-warranty-claims-work", label: "How claims work" },
      { href: "/glossary", label: "Glossary" },
    ],
  },
];

export function Footer() {
  const { reopenSettings } = useCookieConsent();

  return (
    <footer className="mt-auto border-t border-border bg-section-alt text-primary">
      <div className="page-wrap py-10 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="font-heading text-2xl text-primary md:text-3xl">
              Warranty Claim Expert
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Forensic accountant expert witnesses for UK M&amp;A warranty claims,
              completion accounts, earn-outs, and locked box disputes. English law
              and United Kingdom forums only.
            </p>
            <div className="mt-4">
              <span className="uk-scope-tag">England &amp; Wales practice</span>
            </div>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="mt-4 inline-block text-sm font-semibold text-accent transition hover:text-accent-hover"
            >
              {COMPANY_EMAIL}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h2 className="font-label text-primary">{group.title}</h2>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-body transition hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="page-wrap flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/65">
            &copy; {new Date().getFullYear()} Warranty Claim Expert · England and
            Wales
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/65">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/cookie-policy" className="transition hover:text-white">
              Cookies
            </Link>
            <button
              type="button"
              onClick={reopenSettings}
              className="transition hover:text-white"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

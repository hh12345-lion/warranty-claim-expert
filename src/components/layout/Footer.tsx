"use client";

import Link from "next/link";
import { COMPANY_EMAIL } from "@/lib/site";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";
import {
  SERVICE_NAV_LINKS,
  DISPUTE_TYPE_NAV_LINKS,
  RESOURCES_NAV_LINKS,
} from "@/lib/navigation";

const FOOTER_SECTIONS = [
  {
    title: "Services",
    links: SERVICE_NAV_LINKS,
  },
  {
    title: "Dispute Types",
    links: DISPUTE_TYPE_NAV_LINKS,
  },
  {
    title: "Resources",
    links: [
      ...RESOURCES_NAV_LINKS,
      { href: "/how-warranty-claims-work", label: "How Claims Work" },
      { href: "/glossary", label: "Glossary" },
      {
        href: "/what-is-a-warranty-claim-expert",
        label: "What Is an Expert Witness?",
      },
    ],
  },
];

export function Footer() {
  const { reopenSettings } = useCookieConsent();

  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 min-[480px]:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">WarrantyClaimExpert</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Forensic accountant expert witnesses for UK M&A warranty claims,
              completion accounts, earn-outs, and locked box disputes.
            </p>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="mt-4 inline-block text-sm font-medium text-white/90 hover:text-white"
            >
              {COMPANY_EMAIL}
            </a>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Warranty Claim Expert. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-white/70 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/70 hover:text-white"
            >
              Terms of Use
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-white/70 hover:text-white"
            >
              Cookie Policy
            </Link>
            <button
              type="button"
              onClick={reopenSettings}
              className="min-h-[44px] text-sm font-medium text-white/70 transition hover:text-white"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

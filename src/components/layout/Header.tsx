"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NavDropdown } from "./NavDropdown";
import { NAV_DROPDOWNS, NAV_STANDALONE_LINKS } from "@/lib/navigation";
import { COMPANY_EMAIL } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-accent/30 bg-primary text-white">
        <div className="page-wrap flex flex-col gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="font-label text-white/75">
            England &amp; Wales · United Kingdom M&amp;A disputes only
          </p>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="font-medium text-white/90 transition hover:text-white"
          >
            {COMPANY_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-b border-border bg-surface">
        <div className="page-wrap flex items-center justify-between gap-4 py-3 lg:py-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Warranty Claim Expert home"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary font-heading text-sm font-bold text-accent"
              aria-hidden="true"
            >
              WC
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-heading text-base text-primary sm:text-lg">
                Warranty Claim
              </span>
              <span className="font-label text-primary/60">Expert witness · UK</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {NAV_DROPDOWNS.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
            {NAV_STANDALONE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-[44px] items-center px-2.5 py-2 text-sm transition-colors lg:px-3 ${
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                    ? "font-semibold text-accent"
                    : "text-body hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex min-h-[44px] items-center bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              Submit enquiry
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-border bg-white text-primary xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-b border-border bg-surface px-4 py-4 animate-slide-down xl:hidden"
          aria-label="Mobile navigation"
        >
          <span className="uk-scope-tag mb-4">England &amp; Wales only</span>
          <ul className="space-y-1">
            {NAV_DROPDOWNS.map((item) => (
              <NavDropdown
                key={item.label}
                item={item}
                mobile
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
            {NAV_STANDALONE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[44px] items-center border-l-2 border-transparent px-3 text-sm font-medium text-body transition hover:border-accent hover:bg-section-alt"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                className="flex min-h-[44px] items-center justify-center bg-accent px-5 text-sm font-semibold text-white"
              >
                Submit enquiry
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

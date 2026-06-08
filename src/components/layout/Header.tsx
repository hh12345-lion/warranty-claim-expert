"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NavDropdown } from "./NavDropdown";
import { NAV_DROPDOWNS, NAV_STANDALONE_LINKS } from "@/lib/navigation";

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
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold text-primary sm:text-xl"
          aria-label="Warranty Claim Expert home"
        >
          WarrantyClaimExpert
        </Link>

        <nav
          className="hidden items-center gap-4 xl:gap-5 xl:flex"
          aria-label="Main navigation"
        >
          {NAV_DROPDOWNS.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
          {NAV_STANDALONE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-accent ${
                pathname === link.href ||
                pathname.startsWith(link.href + "/")
                  ? "text-accent"
                  : "text-body"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="min-h-[44px] rounded-[var(--radius-sm)] bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[var(--radius-sm)] text-primary xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
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

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-white px-4 py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
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
                  className="flex min-h-[44px] items-center rounded-[var(--radius-sm)] px-3 text-sm font-medium text-body hover:bg-section-alt"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="flex min-h-[44px] items-center justify-center rounded-[var(--radius-sm)] bg-accent px-5 text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

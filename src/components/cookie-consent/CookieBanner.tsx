"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import type { CookieConsent } from "@/lib/cookie-consent/types";

const CATEGORIES = [
  {
    id: "necessary" as const,
    label: "Necessary Cookies",
    description:
      "Essential for the website to function. Cannot be disabled.",
    locked: true,
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    description:
      "Help us understand how visitors use the site (e.g. Google Analytics).",
    locked: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    description:
      "Used for advertising and remarketing (e.g. Meta Pixel, LinkedIn).",
    locked: false,
  },
  {
    id: "preferences" as const,
    label: "Preferences",
    description: "Remember your settings and personalise your experience.",
    locked: false,
  },
];

export function CookieBanner() {
  const {
    showBanner,
    showPreferences,
    consent,
    acceptAll,
    rejectNonEssential,
    openPreferences,
    closePreferences,
    savePreferences,
  } = useCookieConsent();

  const dialogRef = useRef<HTMLDivElement>(null);
  const [prefs, setPrefs] = useState<Omit<CookieConsent, "timestamp" | "version">>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    if (consent) {
      setPrefs({
        necessary: true,
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
      });
    }
  }, [consent]);

  useEffect(() => {
    if (!showBanner) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPreferences) closePreferences();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showBanner, showPreferences, closePreferences]);

  if (!showBanner) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-primary/60 animate-fade-in"
        aria-hidden="true"
        onClick={() => showPreferences && closePreferences()}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        className="relative w-full max-w-2xl rounded-[var(--radius-card)] bg-white card-shadow animate-slide-up max-h-[90vh] overflow-y-auto"
      >
        <div className="border-b border-border px-6 py-5">
          <h2
            id="cookie-banner-title"
            className="text-lg font-semibold text-heading sm:text-xl"
          >
            {showPreferences ? "Cookie Preferences" : "We Value Your Privacy"}
          </h2>
          <p
            id="cookie-banner-desc"
            className="mt-2 text-sm leading-relaxed text-body"
          >
            {showPreferences
              ? "Choose which cookies you allow. Necessary cookies are always active."
              : "We use cookies to improve your experience, analyse site traffic, and support marketing. You can accept all, reject non-essential cookies, or customise your preferences."}
          </p>
          <p className="mt-2 text-sm text-body">
            Read our{" "}
            <Link
              href="/cookie-policy"
              className="font-medium text-accent underline underline-offset-2 hover:text-primary"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-accent underline underline-offset-2 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {showPreferences ? (
          <div className="space-y-4 px-6 py-5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="flex items-start justify-between gap-4 rounded-[var(--radius-sm)] border border-border p-4"
              >
                <div className="flex-1">
                  <p className="font-medium text-heading">{cat.label}</p>
                  <p className="mt-1 text-sm text-body">{cat.description}</p>
                </div>
                <label className="relative inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={prefs[cat.id]}
                    disabled={cat.locked}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, [cat.id]: e.target.checked }))
                    }
                    className="peer sr-only"
                    aria-label={`${cat.label} cookies`}
                  />
                  <span
                    className={`h-6 w-11 rounded-full transition-colors ${
                      prefs[cat.id] ? "bg-accent" : "bg-border"
                    } ${cat.locked ? "opacity-60" : ""}`}
                  >
                    <span
                      className={`mt-0.5 ml-0.5 block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        prefs[cat.id] ? "translate-x-5" : ""
                      }`}
                    />
                  </span>
                </label>
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closePreferences}
                className="min-h-[44px] rounded-[var(--radius-sm)] border border-border px-5 py-2.5 text-sm font-medium text-body transition hover:bg-section-alt"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => savePreferences(prefs)}
                className="min-h-[44px] rounded-[var(--radius-sm)] bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Save Preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={acceptAll}
              className="min-h-[44px] flex-1 rounded-[var(--radius-sm)] bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent/90 sm:flex-none"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="min-h-[44px] flex-1 rounded-[var(--radius-sm)] border border-border px-5 py-2.5 text-sm font-medium text-body transition hover:bg-section-alt sm:flex-none"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={openPreferences}
              className="min-h-[44px] flex-1 rounded-[var(--radius-sm)] border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/5 sm:flex-none"
            >
              Customize Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

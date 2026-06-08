import { GA_MEASUREMENT_ID } from "../site";
import type { CookieConsent } from "./types";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _linkedin_data_partner_ids?: string[];
    hj?: (...args: unknown[]) => void;
    _hjSettings?: { hjid: number; hjsv: number };
  }
}

/** Update Google Consent Mode v2 based on user preferences */
export function updateConsentMode(consent: CookieConsent): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const gtag =
    window.gtag ??
    function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag = gtag;

  gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: consent.preferences ? "granted" : "denied",
    personalization_storage: consent.preferences ? "granted" : "denied",
  });
}

/** Set default denied consent before any scripts load */
export function setDefaultConsentMode(): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "consent",
    "default",
    {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      wait_for_update: 500,
    },
  ]);
}

const loadedScripts = new Set<string>();

function loadScript(id: string, src: string): void {
  if (loadedScripts.has(id)) return;
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
  loadedScripts.add(id);
}

/** Load tracking scripts only after consent is granted */
export function loadTrackingScripts(consent: CookieConsent): void {
  if (typeof window === "undefined") return;

  updateConsentMode(consent);

  if (consent.analytics && GA_MEASUREMENT_ID) {
    loadScript(
      "wce-ga-script",
      `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    );

    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        window.dataLayer?.push(args);
      };
    }

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
    });
  }

  // Marketing scripts (placeholders - load only with marketing consent)
  if (consent.marketing) {
    // Meta Pixel example - uncomment and add pixel ID when configured
    // loadScript("wce-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");

    // LinkedIn Insight Tag example
    // loadScript("wce-linkedin", "https://snap.licdn.com/li.lms-analytics/insight.min.js");
  }

  if (consent.analytics) {
    // Hotjar example - uncomment and add site ID when configured
    // if (!window.hj) { ... }
  }
}

/** Remove non-essential tracking on consent withdrawal */
export function unloadTrackingScripts(): void {
  const scriptIds = [
    "wce-ga-script",
    "wce-meta-pixel",
    "wce-linkedin",
    "wce-hotjar",
  ];

  scriptIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
    loadedScripts.delete(id);
  });
}

import {
  CONSENT_EXPIRY_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  type CookieConsent,
} from "./types";

export function isConsentExpired(consent: CookieConsent): boolean {
  if (!consent.timestamp) return true;
  const expiryMs = CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  return Date.now() - consent.timestamp > expiryMs;
}

export function isConsentVersionValid(consent: CookieConsent): boolean {
  return consent.version === CONSENT_VERSION;
}

export function loadConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (!isConsentVersionValid(parsed) || isConsentExpired(parsed)) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  const withTimestamp: CookieConsent = {
    ...consent,
    necessary: true,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(withTimestamp));
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}

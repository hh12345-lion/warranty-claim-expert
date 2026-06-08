export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: number;
  version: string;
};

export const CONSENT_VERSION = "1.0";
export const CONSENT_STORAGE_KEY = "wce_cookie_consent";
export const CONSENT_EXPIRY_DAYS = 365;

export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: 0,
  version: CONSENT_VERSION,
};

export const ACCEPT_ALL_CONSENT: CookieConsent = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
};

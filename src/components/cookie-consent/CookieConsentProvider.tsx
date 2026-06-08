"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ACCEPT_ALL_CONSENT,
  DEFAULT_CONSENT,
  type CookieConsent,
} from "@/lib/cookie-consent/types";
import { loadConsent, saveConsent } from "@/lib/cookie-consent/storage";
import {
  loadTrackingScripts,
  setDefaultConsentMode,
  unloadTrackingScripts,
} from "@/lib/cookie-consent/tracking";

type CookieConsentContextValue = {
  consent: CookieConsent | null;
  hasInteracted: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  savePreferences: (prefs: Omit<CookieConsent, "timestamp" | "version">) => void;
  reopenSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDefaultConsentMode();

    const stored = loadConsent();
    if (stored) {
      setConsent(stored);
      setHasInteracted(true);
      loadTrackingScripts(stored);
    } else {
      setShowBanner(true);
    }
  }, []);

  const applyConsent = useCallback((newConsent: CookieConsent) => {
    saveConsent(newConsent);
    setConsent(newConsent);
    setHasInteracted(true);
    setShowBanner(false);
    setShowPreferences(false);
    unloadTrackingScripts();
    loadTrackingScripts(newConsent);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent({ ...ACCEPT_ALL_CONSENT, timestamp: Date.now() });
  }, [applyConsent]);

  const rejectNonEssential = useCallback(() => {
    applyConsent({ ...DEFAULT_CONSENT, necessary: true, timestamp: Date.now() });
  }, [applyConsent]);

  const savePreferences = useCallback(
    (prefs: Omit<CookieConsent, "timestamp" | "version">) => {
      applyConsent({
        ...prefs,
        necessary: true,
        timestamp: Date.now(),
        version: "1.0",
      });
    },
    [applyConsent]
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(true);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
    if (hasInteracted) setShowBanner(false);
  }, [hasInteracted]);

  const reopenSettings = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(true);
  }, []);

  const value = useMemo(
    () => ({
      consent,
      hasInteracted,
      showBanner: mounted && showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      savePreferences,
      reopenSettings,
    }),
    [
      consent,
      hasInteracted,
      mounted,
      showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      openPreferences,
      closePreferences,
      savePreferences,
      reopenSettings,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

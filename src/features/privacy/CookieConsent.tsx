"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import {
  COOKIE_CONSENT_EVENT,
  hasCookieConsent,
  persistCookieConsent,
  type CookieConsentValue,
} from "./consent";

const copy = {
  cs: {
    eyebrow: "Vaše soukromí",
    title: "Cookies držíme pod kontrolou.",
    description:
      "Nezbytné cookies zajišťují správné fungování webu. Ostatní nám pomohou pochopit, co návštěvníci hledají, a web dál zlepšovat.",
    privacy: "Ochrana osobních údajů",
    necessary: "Pouze nezbytné",
    all: "Povolit vše",
  },
  en: {
    eyebrow: "Your privacy",
    title: "You stay in control of cookies.",
    description:
      "Necessary cookies keep the website working. Optional cookies help us understand what visitors need and improve the experience.",
    privacy: "Privacy information",
    necessary: "Necessary only",
    all: "Allow all",
  },
} as const;

export default function CookieConsent({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const content = copy[locale];

  useEffect(() => {
    setIsOpen(!hasCookieConsent());

    const openSettings = () => setIsOpen(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, openSettings);
  }, []);

  const choose = (value: CookieConsentValue) => {
    persistCookieConsent(value);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl shadow-primary-900/15 sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="grid items-end gap-5 md:grid-cols-[1fr_auto] md:gap-8">
        <div className="max-w-2xl">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-700">
            {content.eyebrow}
          </p>
          <h2
            id="cookie-consent-title"
            className="mt-2 text-xl font-semibold tracking-[-0.035em] text-primary-900 sm:text-2xl"
          >
            {content.title}
          </h2>
          <p
            id="cookie-consent-description"
            className="mt-2 text-xs leading-5 text-gray-500 sm:text-[13px]"
          >
            {content.description}{" "}
            <a
              href="https://support.nfctron.com/cs/podminky-a-informace/gdpr-web"
              className="font-medium text-primary-700 underline decoration-primary-200 underline-offset-4 transition hover:decoration-primary-700"
            >
              {content.privacy}
            </a>
          </p>
        </div>

        <div className="flex flex-col-reverse gap-2 sm:flex-row md:justify-end">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-gray-200 px-4 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50"
          >
            {content.necessary}
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
          >
            {content.all}
          </button>
        </div>
      </div>
    </aside>
  );
}

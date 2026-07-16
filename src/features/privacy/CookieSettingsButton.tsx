"use client";

import { COOKIE_CONSENT_EVENT } from "./consent";

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))}
      className="transition hover:text-primary-700"
    >
      {label}
    </button>
  );
}

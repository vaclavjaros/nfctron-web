export const COOKIE_CONSENT_COOKIE = "nfctron-cookie-consent";
export const COOKIE_CONSENT_EVENT = "nfctron:open-cookie-settings";

export type CookieConsentValue = "all" | "necessary";

export function persistCookieConsent(value: CookieConsentValue) {
  const maxAge = 60 * 60 * 24 * 180;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENT_COOKIE}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

export function hasCookieConsent() {
  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${COOKIE_CONSENT_COOKIE}=`));
}

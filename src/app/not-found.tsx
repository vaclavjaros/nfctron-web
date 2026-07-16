import type { Metadata } from "next";
import ErrorPage from "@/features/errors/ErrorPage";
import { getErrorCopy } from "@/features/errors/copy";
import { getLocale } from "@/i18n/server";

export const metadata: Metadata = {
  title: "404 — Page not found | NFCtron",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const locale = await getLocale();
  return (
    <ErrorPage
      code="404"
      locale={locale}
      content={getErrorCopy(locale, "notFound")}
    />
  );
}

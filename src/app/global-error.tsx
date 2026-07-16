"use client";

import { useEffect, useState } from "react";
import ErrorPage from "@/features/errors/ErrorPage";
import { getErrorCopy } from "@/features/errors/copy";
import type { Locale } from "@/i18n/config";
import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(document.documentElement.lang === "cs" ? "cs" : "en");
    console.error(error);
  }, [error]);

  return (
    <html lang={locale}>
      <body>
        <ErrorPage
          code="500"
          locale={locale}
          content={getErrorCopy(locale, "serverError")}
          onRetry={reset}
        />
      </body>
    </html>
  );
}

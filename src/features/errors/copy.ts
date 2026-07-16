import type { Locale } from "@/i18n/config";

export interface ErrorPageContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
}

const errorCopy: Record<
  Locale,
  Record<"notFound" | "serverError", ErrorPageContent>
> = {
  cs: {
    notFound: {
      eyebrow: "Stránka nenalezena",
      title: "Tahle cesta na akci nevede.",
      description:
        "Odkaz už nemusí být aktuální, nebo se stránka přesunula. Vraťte se na hlavní stránku a pokračujte odtud.",
      primaryAction: "Zpět na hlavní stránku",
      secondaryAction: "Otevřít podporu",
    },
    serverError: {
      eyebrow: "Něco se nepovedlo",
      title: "Na chvíli nám vypadl rytmus.",
      description:
        "Chybu jsme zachytili. Zkuste stránku načíst znovu, nebo se vraťte na hlavní stránku.",
      primaryAction: "Zkusit znovu",
      secondaryAction: "Zpět na hlavní stránku",
    },
  },
  en: {
    notFound: {
      eyebrow: "Page not found",
      title: "This route does not lead to the event.",
      description:
        "The link may be outdated or the page has moved. Return to the homepage and continue from there.",
      primaryAction: "Back to the homepage",
      secondaryAction: "Open support",
    },
    serverError: {
      eyebrow: "Something went wrong",
      title: "We lost the rhythm for a moment.",
      description:
        "We have captured the error. Try loading the page again or return to the homepage.",
      primaryAction: "Try again",
      secondaryAction: "Back to the homepage",
    },
  },
};

export function getErrorCopy(locale: Locale, type: "notFound" | "serverError") {
  return errorCopy[locale][type];
}

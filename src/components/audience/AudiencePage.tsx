import type { ReactNode } from "react";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import type { Locale } from "@/i18n/config";

type AudienceMode = "organizers" | "retailers" | "artists";

interface AudiencePageProps {
  locale: Locale;
  mode: AudienceMode;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function AudiencePage({
  locale,
  mode,
  badge,
  eyebrow,
  title,
  description,
  actions,
  children,
}: AudiencePageProps) {
  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active={mode} />
      <main className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-700">
              {badge}
            </span>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              {description}
            </p>
            {actions}
          </div>
          {children}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

export function AudienceFeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-9">
      <span className="text-[10px] font-medium text-blue-700">{number}</span>
      <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-gray-500">{description}</p>
    </article>
  );
}

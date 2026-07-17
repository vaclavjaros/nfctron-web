import EventCard from "./EventCard";
import SeriesSection from "./SeriesSection";
import { featuredEvent } from "./data";
import type { Translator } from "./types";
import type { Locale } from "@/i18n/config";
import ActionLink from "../ui/ActionLink";
import NextSeasonSection from "./NextSeasonSection";

export function HeroSection({ t }: { t: Translator }) {
  return (
    <section
      id="home"
      className="bg-white pb-6 pt-12 sm:pb-8 sm:pt-14 lg:pb-8 lg:pt-16"
    >
      <div className="container-fluid grid gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="max-w-[620px] lg:pr-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
            {t("Vstupenky. Platby. Zážitek.")}
          </p>
          <h1 className="text-[42px] font-semibold leading-[1.06] tracking-[-.045em] text-primary-900 sm:text-[50px] lg:text-[54px]">
            {t("Od vstupenky rovnou k zážitku.")}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-gray-500 sm:text-base">
            {t(
              "Objevte akce, kupte vstupenku a mějte vše důležité po ruce. Jednoduše před akcí, na místě i po ní.",
            )}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ActionLink href="#events" arrow>
              {t("Prohlédnout akce")}
            </ActionLink>
            <ActionLink href="https://pass.nfctron.com" variant="secondary">
              {t("Můj NFCtron")}
            </ActionLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium text-gray-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary-500" />
              {t("Bezpečný nákup")}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary-500" />
              {t("Vstupenka v telefonu")}
            </span>
          </div>
        </div>
        <EventCard event={featuredEvent} t={t} large />
      </div>
    </section>
  );
}

export function CollectionsSections({
  t,
  locale,
}: {
  t: Translator;
  locale: Locale;
}) {
  return (
    <>
      <SeriesSection locale={locale} />
      <NextSeasonSection t={t} />
    </>
  );
}

const benefits = [
  [
    "01",
    "Před akcí",
    "Vstupenka v telefonu, informace na jednom místě a žádné hledání v e-mailu.",
  ],
  [
    "02",
    "Na místě",
    "Rychlý vstup a podle typu akce pohodlné placení čipem, kartou nebo telefonem.",
  ],
  [
    "03",
    "Po akci",
    "Přehled plateb, online účtenka a jednoduché vrácení nevyužitého kreditu.",
  ],
];

export function BenefitsSection({ t }: { t: Translator }) {
  return (
    <section
      id="how-it-works"
      className="section scroll-mt-16 bg-[#faf9ff]"
    >
      <div className="container-fluid">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
            {t("Vše důležité pro návštěvníky")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">
            {t("NFCtron drží celý zážitek pohromadě.")}
          </h2>
        </div>
        <div className="mt-10 flex flex-col border-t border-primary-900/10 md:flex-row">
          {benefits.map(([number, title, text], index) => (
            <div
              key={number}
              className="flex flex-1 gap-5 border-b border-primary-900/10 py-7 md:border-b-0 md:pr-8 md:[&:not(:first-child)]:pl-8"
            >
              <span className="pt-1 text-[10px] font-semibold text-primary-500">
                {number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {t(title)}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                  {t(text)}
                </p>
              </div>
              {index < benefits.length - 1 && (
                <span className="ml-auto hidden pt-1 text-primary-200 md:block">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

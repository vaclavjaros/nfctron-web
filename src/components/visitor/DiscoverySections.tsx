import EventCard from "./EventCard";
import PromoCard from "./PromoCard";
import SeriesSection from "./SeriesSection";
import { events2027, featuredEvent } from "./data";
import type { Translator } from "./types";
import type { Locale } from "@/i18n/config";
import ActionLink from "../ui/ActionLink";

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
      <section className="section bg-primary-900 text-white">
        <div className="container-fluid">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-300">
              {t("Příští sezóna začíná teď")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">
              {t("Akce, na které se těšíme v roce 2027")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {t(
                "První festivaly a koncerty jsou v prodeji. Vyberte si včas a mějte příští léto naplánované.",
              )}
            </p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {events2027.map((item) => (
              <PromoCard key={item.title} item={item} t={t} year />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const benefits = [
  [
    "01",
    "Vstupenka vždy po ruce",
    "Nákup online a rychlý vstup na akci bez hledání e-mailů.",
  ],
  [
    "02",
    "Rychlé placení",
    "Čip, karta nebo telefon. Jednoduše u stánku i bez hotovosti.",
  ],
  [
    "03",
    "Vrácení kreditu",
    "Nevyužité peníze po akci odešlete zpět přímo online.",
  ],
];

export function BenefitsSection({ t }: { t: Translator }) {
  return (
    <section className="section border-y border-gray-100 bg-[#faf9ff]">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
            {t("Vše důležité pro návštěvníky")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">
            {t("NFCtron drží celý zážitek pohromadě.")}
          </h2>
        </div>
        <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 md:grid-cols-3">
          {benefits.map(([number, title, text]) => (
            <div key={number} className="bg-white p-7">
              <span className="text-xs font-semibold text-primary-500">
                {number}
              </span>
              <h3 className="mt-7 text-lg font-semibold text-primary-900">
                {t(title)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {t(text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import EventCard from "./EventCard";
import PromoCard from "./PromoCard";
import { ArrowIcon } from "./icons";
import { events2027, featuredEvent, series } from "./data";
import type { Translator } from "./types";

export function HeroSection({ t }: { t: Translator }) {
  return (
    <section
      id="home"
      className="bg-white pb-10 pt-10 sm:pb-12 sm:pt-12 lg:pb-14 lg:pt-14"
    >
      <div className="container-fluid grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
            {t("Vstupenky a placení na akcích")}
          </p>
          <h1 className="text-[38px] font-semibold leading-[1.09] tracking-[-.04em] text-primary-900 sm:text-[44px] lg:text-5xl">
            {t("Na akci bez starostí. Od vstupenky až po poslední drink.")}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-500">
            {t(
              "Objevte akce a kupte si vstupenku jednoduše online. NFCtron vám podle typu akce pomůže také s rychlým vstupem, pohodlným placením nebo vrácením nevyužitého kreditu.",
            )}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#events" className="btn-primary">
              {t("Prohlédnout akce")} <ArrowIcon />
            </a>
            <Link
              href="https://pass.nfctron.com"
              className="btn border border-gray-200 bg-white text-primary-900 hover:bg-gray-50"
            >
              {t("Můj NFCtron")}
            </Link>
          </div>
        </div>
        <EventCard event={featuredEvent} t={t} large />
      </div>
    </section>
  );
}

export function CollectionsSections({ t }: { t: Translator }) {
  return (
    <>
      <section className="section bg-white">
        <div className="container-fluid">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
                {t("Více míst, jeden zážitek")}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">
                {t("Sériové akce")}
              </h2>
            </div>
            <button className="hidden text-sm font-medium text-primary-700 sm:block">
              {t("Zobrazit všechny")} →
            </button>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {series.map((item) => (
              <PromoCard key={item.title} item={item} t={t} />
            ))}
          </div>
        </div>
      </section>
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

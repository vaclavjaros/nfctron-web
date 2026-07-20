"use client";

import { useEffect, useRef, useState } from "react";
import PromoCard from "./PromoCard";
import { eventSeries } from "./data";
import type { PromoItem, Translator } from "./types";
import { translate, type Locale } from "@/i18n/config";

const INITIAL_SERIES_COUNT = 3;
const primarySeries = eventSeries.slice(0, INITIAL_SERIES_COUNT);
const additionalSeries = eventSeries.slice(INITIAL_SERIES_COUNT);

function SeriesGrid({ items, t }: { items: PromoItem[]; t: Translator }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <PromoCard key={item.title} item={item} t={t} />
      ))}
    </div>
  );
}

export default function SeriesSection({ locale }: { locale: Locale }) {
  const [expanded, setExpanded] = useState(false);
  const additionalSeriesRef = useRef<HTMLDivElement>(null);
  const t = (value: string) => translate(locale, value);

  useEffect(() => {
    if (!expanded || !window.matchMedia("(max-width: 1023px)").matches) return;

    const scrollTimer = window.setTimeout(() => {
      additionalSeriesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);

    return () => window.clearTimeout(scrollTimer);
  }, [expanded]);

  return (
    <section id="series" className="section scroll-mt-20 bg-white">
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
          {additionalSeries.length > 0 && (
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="additional-series"
              onClick={() => setExpanded((current) => !current)}
              className="inline-flex shrink-0 items-center gap-2 text-xs font-medium text-primary-700 transition hover:text-primary-900 sm:text-sm"
            >
              {t(expanded ? "Zobrazit méně" : "Zobrazit všechny")}
              <span
                className={`text-base leading-none transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
                aria-hidden="true"
              >
                →
              </span>
            </button>
          )}
        </div>

        <div className="mt-8">
          <SeriesGrid items={primarySeries} t={t} />
        </div>

        <div
          id="additional-series"
          ref={additionalSeriesRef}
          className={`grid scroll-mt-24 transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
          aria-hidden={!expanded}
          inert={!expanded}
        >
          <div className="overflow-hidden">
            <SeriesGrid items={additionalSeries} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

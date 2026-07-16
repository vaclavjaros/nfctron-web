"use client";

import Link from "next/link";
import { useState } from "react";
import type { EventTrendGroup, EventTrendId } from "./types";
import { ArrowIcon } from "@/components/visitor/icons";
import { translate, type Locale } from "@/i18n/config";

export default function EventTrendsSection({
  groups,
  locale,
}: {
  groups: EventTrendGroup[];
  locale: Locale;
}) {
  const defaultGroup =
    groups.find((group) => group.id === "festival") ?? groups[0];
  const [activeId, setActiveId] = useState<EventTrendId>(
    defaultGroup?.id ?? "festival",
  );
  const activeGroup =
    groups.find((group) => group.id === activeId) ?? defaultGroup;
  const t = (value: string) => translate(locale, value);

  if (!activeGroup) return null;

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-stretch lg:gap-14">
          <div className="lg:flex lg:min-h-[252px] lg:flex-col lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
                {t("Trendy mezi návštěvníky")}
              </p>
              <h2 className="mt-3 max-w-md text-[26px] font-semibold leading-[1.16] tracking-[-.035em] text-primary-900 sm:text-[28px]">
                {t("Co právě nejvíc baví návštěvníky?")}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500">
                {t(
                  "Vyberte si oblast a podívejte se, o jaké akce mají lidé právě největší zájem.",
                )}
              </p>
            </div>

            <div
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 lg:mt-8"
              aria-label={t("Preference doporučení")}
            >
              {groups.map((group) => {
                const selected = group.id === activeGroup.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    aria-label={t(group.label)}
                    aria-pressed={selected}
                    onClick={() => setActiveId(group.id)}
                    className={`border-b py-1.5 text-xs font-semibold transition sm:text-[13px] ${selected ? "border-primary-700 text-primary-700" : "border-transparent text-gray-400 hover:text-primary-600"}`}
                  >
                    #{t(group.hashtag).toLocaleLowerCase(locale)}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeGroup.id}
            className="recommendation-reveal lg:pl-5"
            aria-live="polite"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-primary-500">
              {t(activeGroup.eyebrow)}
            </p>

            <div className="mt-3 divide-y divide-gray-100">
              {activeGroup.events.map((event, index) => (
                <Link
                  key={event.id}
                  href={event.href}
                  className="group flex min-h-[72px] items-center gap-4 px-1 py-2 transition hover:bg-primary-50/40 sm:min-h-[76px] sm:gap-5 sm:px-2"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[8px] font-semibold tabular-nums text-primary-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block text-[15px] font-semibold leading-snug tracking-[-.015em] text-primary-900 sm:text-[17px]">
                      {t(event.title)}
                    </strong>
                    <span className="mt-1 block text-[11px] leading-relaxed text-gray-500 sm:text-xs">
                      {t(event.meta)}
                    </span>
                  </span>
                  <span className="mr-2 flex h-7 w-7 shrink-0 items-center justify-center text-primary-500/70 transition-colors group-hover:text-primary-700 sm:mr-3">
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

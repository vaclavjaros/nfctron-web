import EventCard from "./EventCard";
import { CalendarIcon, SearchIcon } from "./icons";
import { catalogEvents, categories } from "./data";
import type { Translator } from "./types";

export default function EventsCatalogSection({ t }: { t: Translator }) {
  return (
    <section id="events" className="section scroll-mt-16 bg-white">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
            {t("Najděte svůj další zážitek")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">
            {t("Vstupenky v prodeji")}
          </h2>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <label className="flex h-11 min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-gray-400 transition focus-within:border-primary-300 focus-within:ring-2 focus-within:ring-primary-100">
            <SearchIcon />
            <input
              type="search"
              placeholder={t("Vyhledejte akce podle názvu nebo místa…")}
              className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
            />
          </label>
          <button className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 text-xs font-semibold text-gray-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700">
            <CalendarIcon />
            {t("Všechny akce")}
          </button>
        </div>
        <div className="mt-5 flex gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map(([category, icon], index) => (
            <button
              key={category}
              aria-current={index === 1 ? "page" : undefined}
              className={`flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 text-[11px] font-medium transition ${index === 1 ? "bg-primary-100 text-primary-700" : "text-gray-500 hover:bg-gray-50 hover:text-primary-700"}`}
            >
              <span
                className="flex h-3.5 w-3.5 items-center justify-center text-xs"
                aria-hidden="true"
              >
                {icon}
              </span>
              {t(category)}
            </button>
          ))}
        </div>
        <div className="mt-3 grid gap-4 border-t border-gray-100 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {catalogEvents.map((event) => (
            <EventCard key={event.id} event={event} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

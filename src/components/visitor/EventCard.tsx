import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CalendarIcon } from "./icons";
import type { EventItem, Translator } from "./types";

function getCalendarUrl(event: EventItem) {
  if (!event.calendarStart || !event.calendarEnd) return null;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${event.calendarStart}/${event.calendarEnd}`,
    location: `${event.place}, ${event.city}`,
    details: `${event.title} — NFCtron`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function getMapUrl(event: EventItem) {
  return `https://www.google.com/maps/search/?${new URLSearchParams({ api: "1", query: `${event.place}, ${event.city}` }).toString()}`;
}

export default function EventCard({
  event,
  t,
  large = false,
}: {
  event: EventItem;
  t: Translator;
  large?: boolean;
}) {
  const eventUrl = event.url ?? `/events/${event.id}`;
  const calendarUrl = getCalendarUrl(event);
  const mapUrl = getMapUrl(event);

  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-black/5 bg-white transition duration-300 hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5">
      <Link
        href={eventUrl}
        className="block"
        aria-label={`Otevřít ${event.title}`}
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${large ? "h-60 sm:h-64" : "aspect-[16/8]"} ${event.accent}`}
        >
          {event.image && (
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes={
                large
                  ? "(min-width: 1280px) 704px, (min-width: 1024px) 55vw, 100vw"
                  : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              }
              priority={large}
              loading={large ? "eager" : "lazy"}
              fetchPriority={large ? "high" : "auto"}
              className="object-cover"
            />
          )}
        </div>
      </Link>
      <div className={`relative ${large ? "p-3.5 sm:p-4" : "p-4"}`}>
        <h3 className="pr-14 text-base font-semibold leading-tight tracking-[-0.02em] text-gray-900">
          <Link href={eventUrl} className="transition hover:text-primary-700">
            {event.title}
          </Link>
        </h3>
        <p className="mt-1.5 pr-14 text-xs text-gray-500">
          {t(
            event.description ??
              (event.category === "Festival"
                ? "Festival plný hudby a zážitků"
                : "Objevte akci v NFCtron Tickets"),
          )}
        </p>
        <div
          className={`${large ? "mt-2.5 sm:flex-row sm:items-center sm:gap-3" : "mt-2.5"} flex flex-col items-start gap-1.5 text-[9px] text-gray-500 sm:text-[10px]`}
        >
          {calendarUrl ? (
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 py-0.5 transition hover:text-primary-700"
            >
              <CalendarIcon className="h-3 w-3 shrink-0" />
              {t(event.date)}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 py-0.5">
              <CalendarIcon className="h-3 w-3 shrink-0" />
              {t(event.date)}
            </span>
          )}
          {large && (
            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-gray-200 sm:block"
            />
          )}
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 py-0.5 transition hover:text-primary-700"
          >
            <span className="flex h-3 w-3 items-center justify-center text-[9px] text-gray-400">
              ⌖
            </span>
            {t(event.place)} · {t(event.city)}
          </a>
        </div>
        {event.features?.length ? (
          <div className="mt-2.5 flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap">
            {event.features.slice(0, 2).map((feature) => (
              <span
                key={feature}
                className={`${large ? "w-full sm:w-auto" : ""} inline-flex items-center justify-center rounded-full bg-primary-50 px-2.5 py-0.5 text-center text-[8px] font-medium text-primary-700`}
              >
                {t(feature)}
              </span>
            ))}
          </div>
        ) : null}
        {large && event.priceFrom ? (
          <div className="mt-3 flex flex-col items-stretch gap-3 border-t border-gray-100 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.08em] text-gray-400">
                {t("Vstupenky od")}
              </span>
              <strong className="mt-0.5 block text-sm font-semibold text-primary-900">
                {event.priceFrom}
              </strong>
            </div>
            <Link
              href={eventUrl}
              className="inline-flex h-8 items-center justify-center gap-2 rounded-full bg-primary-700 px-4 text-[10px] font-medium text-white transition hover:bg-primary-900"
            >
              {t("Vybrat vstupenky")} <ArrowIcon />
            </Link>
          </div>
        ) : null}
        <span className="absolute right-4 top-4 overflow-hidden rounded-md border border-gray-200 bg-gray-50 text-center">
          <b className="block bg-primary-700 px-2 py-0.5 text-[9px] uppercase text-white">
            {event.date.startsWith("30. července")
              ? "ČVC"
              : event.date.includes("srpna")
                ? "SRP"
                : "ČVC"}
          </b>
          <span className="block px-2 py-1 text-sm font-semibold text-gray-600">
            {event.date.match(/\d+/)?.[0]}
          </span>
        </span>
      </div>
    </article>
  );
}

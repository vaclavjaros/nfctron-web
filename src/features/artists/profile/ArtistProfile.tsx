import Image from "next/image";
import Link from "next/link";
import ActionLink from "@/components/ui/ActionLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Locale } from "@/i18n/config";
import BookingEnquiryForm from "../home/BookingEnquiryForm";
import { localize, type ArtistProfileConfig } from "./types";

export default function ArtistProfile({
  profile,
  locale,
}: {
  profile: ArtistProfileConfig;
  locale: Locale;
}) {
  const l = (value: Parameters<typeof localize>[1]) => localize(locale, value);

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="artists" />
      <main>
        <section className="px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12 lg:pt-8">
          <div className="mx-auto max-w-[1280px]">
            <Link
              href="/for-artists"
              className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium text-gray-500 transition hover:text-primary-700 sm:mb-4"
            >
              ← {locale === "cs" ? "Zpět na interprety" : "Back to artists"}
            </Link>
            <div className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-primary-900 sm:min-h-[620px]">
              <Image
                src={profile.heroImage}
                alt={profile.name}
                fill
                priority
                className={`object-cover ${profile.heroPosition ?? "object-center"}`}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="relative flex min-h-[560px] max-w-2xl flex-col justify-end p-7 text-white sm:min-h-[620px] sm:p-12 lg:p-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  NFCtron Artists
                </p>
                <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
                  {profile.name}
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {l(profile.tagline)}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ActionLink href="#booking" arrow>
                    {locale === "cs" ? "Poptat booking" : "Request booking"}
                  </ActionLink>
                  <ActionLink href="#koncerty" variant="secondary">
                    {locale === "cs" ? "Zobrazit koncerty" : "View shows"}
                  </ActionLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 border-b border-gray-200 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.value + l(stat.label)}
                  className="lg:border-r lg:border-gray-200 lg:px-6 first:lg:pl-0 last:lg:border-0"
                >
                  <strong className="block text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block text-[11px] text-gray-500">
                    {l(stat.label)}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid gap-10 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {l(profile.bioEyebrow)}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {l(profile.bioTitle)}
                </h2>
              </div>
              <div className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                {profile.bio.map((paragraph) => (
                  <p key={l(paragraph)} className="mt-5 first:mt-0">
                    {l(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 border-b border-gray-200 pb-9 sm:grid-cols-3">
              {profile.spotify.metrics.map((metric) => (
                <div key={metric.value + l(metric.label)}>
                  <strong className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {metric.value}
                  </strong>
                  <p className="mt-1.5 text-[10px] text-gray-500">
                    {l(metric.label)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl bg-[#121212] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between px-1 text-[10px] text-white/60">
                  <span className="font-semibold uppercase tracking-[0.14em]">
                    Spotify
                  </span>
                  <a
                    href={`https://open.spotify.com/artist/${profile.spotify.artistId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {locale === "cs" ? "Otevřít profil" : "Open profile"} →
                  </a>
                </div>
                <iframe
                  title={`${profile.name} na Spotify`}
                  src={`https://open.spotify.com/embed/artist/${profile.spotify.artistId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                />
              </div>
              <a
                href={profile.video.url}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[340px] overflow-hidden rounded-2xl bg-primary-900 sm:min-h-[400px]"
              >
                <Image
                  src={profile.video.image}
                  alt={profile.video.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-8">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                      YouTube · Official video
                    </span>
                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                      {profile.video.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm text-primary-900">
                    ▶
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[28px] bg-primary-900 text-white lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
              <Image
                src={profile.showImage}
                alt={`${profile.name} live`}
                fill
                className={`object-cover ${profile.showPosition ?? "object-center"}`}
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                {l(profile.live.eyebrow)}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {l(profile.live.title)}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/65">
                {l(profile.live.description)}
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-7 text-[11px] text-white/75">
                {profile.live.features.map((feature) => (
                  <li key={l(feature)}>{l(feature)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="koncerty"
          className="scroll-mt-20 bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
              {locale === "cs" ? "Koncertní sezóna" : "Live season"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              {locale === "cs" ? "Nejbližší koncerty" : "Upcoming shows"}
            </h2>
            <div className="mt-8 border-t border-gray-200">
              {profile.events.map((event) => (
                <article
                  key={`${event.date}-${event.city}`}
                  className="grid gap-4 border-b border-gray-200 py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center sm:gap-8"
                >
                  <time className="text-xs font-medium text-gray-500">
                    {event.date}
                  </time>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.025em]">
                      {event.city}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">{event.venue}</p>
                  </div>
                  <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-primary-700 shadow-sm">
                    {l(event.status)}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] gap-9 rounded-[28px] bg-[#f8f8fb] p-7 sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:p-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                NFCtron Booking
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {locale === "cs"
                  ? `Chcete ${l(profile.bookingName)} na svou akci?`
                  : `Want ${profile.name} at your event?`}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                {locale === "cs"
                  ? "Pošlete nám termín, místo, typ akce a předpokládanou kapacitu. Bookingový tým NFCtron se vám ozve s dostupností a dalšími kroky."
                  : "Send us the date, venue, event type and expected capacity. The NFCtron booking team will get back to you with availability and next steps."}
              </p>
            </div>
            <BookingEnquiryForm
              locale={locale}
              selectedArtist={profile.name}
              recipientEmail={profile.bookingEmail}
            />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

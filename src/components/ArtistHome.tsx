import Link from "next/link";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { AudienceHero } from "./audience/AudiencePage";
import ActionLink from "./ui/ActionLink";
import { translate, type Locale } from "@/i18n/config";

const artists = [
  {
    name: "Sebastian",
    initials: "S",
    description: "Pop · live band · festivalová show",
    href: "/for-artists/sebastian",
    tone: "from-blue-100 to-indigo-50",
    status: "Profil a booking",
  },
  {
    name: "Elizabeth Kopecká",
    initials: "EK",
    description: "Pop · koncertní vystoupení",
    href: "/for-artists/elizabeth-kopecka",
    tone: "from-rose-100 to-orange-50",
    status: "Profil a booking",
  },
  {
    name: "Like-IT",
    initials: "L",
    description: "Pop rock · klubová a festivalová show",
    href: "/for-artists/like-it",
    tone: "from-violet-100 to-fuchsia-50",
    status: "Profil a booking",
  },
];

const artistBenefits = [
  [
    "01",
    "Vlastní prodej vstupenek",
    "Prodej pod jménem interpreta, vlastní koncerty a přímý vztah s fanoušky bez zbytečných mezičlánků.",
  ],
  [
    "02",
    "Vlastní booking",
    "Aktivně hledáme nové příležitosti a propojujeme interpreta s pořadateli, kterým jeho show dává smysl.",
  ],
  [
    "03",
    "Vlastní distribuce",
    "Pomáháme dostat hudbu k posluchačům, rozvíjet digitální dosah a propojit vydání s živými koncerty.",
  ],
  [
    "04",
    "Investice do hudby",
    "Vstupujeme do projektů, kterým věříme — od nové tvorby a obsahu až po rozvoj koncertní show.",
  ],
];

const organizerBenefits = [
  [
    "01",
    "Vyberte interpreta",
    "Rychle porovnejte styl, formát vystoupení a produkční možnosti pro svou akci.",
  ],
  [
    "02",
    "Pošlete poptávku",
    "Stačí termín, místo, typ akce a kapacita. Bookingový tým ověří dostupnost.",
  ],
  [
    "03",
    "Připravíme vystoupení",
    "Propojíme booking s produkcí a podle akce také se vstupenkami a dalšími službami NFCtron.",
  ],
];

export default function ArtistHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="artists" />
      <main>
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <AudienceHero
              badge="NFCtron Artists"
              eyebrow={t("Ekosystém pro interprety")}
              title={t("Váš talent. Jeden ekosystém. Víc možností růst.")}
              description={t(
                "NFCtron propojuje vlastní prodej vstupenek, booking, distribuci hudby a investice do dalšího rozvoje interpreta.",
              )}
              actions={
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <ActionLink href="#pro-interprety" arrow>
                    {t("Jsem interpret")}
                  </ActionLink>
                  <ActionLink href="#pro-poradatele" variant="secondary">
                    {t("Pořádám akci")}
                  </ActionLink>
                </div>
              }
            />
          </div>
        </section>

        <section className="border-y border-gray-200 bg-[#fafafd] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {t("NFCtron roster")}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {t("Interpreti, které zastupujeme a rozvíjíme.")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {t(
                  "Nejsou pro nás jen položkou v katalogu. Každému interpretovi postupně stavíme vlastní prezentaci, booking a propojení s akcemi.",
                )}
              </p>
            </div>
            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {artists.map((artist, index) => (
                <Link
                  key={artist.name}
                  href={artist.href ?? "/for-artists"}
                  className="group flex min-h-52 flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${artist.tone} text-xs font-semibold text-primary-700`}
                    >
                      {artist.initials}
                    </span>
                    <span className="text-[10px] font-medium text-gray-300">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-auto pt-8">
                    <h3 className="text-xl font-semibold tracking-[-0.035em]">
                      {artist.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">
                      {t(artist.description)}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-[10px] font-medium text-primary-700">
                      <span>{t(artist.status)}</span>
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pro-interprety"
          className="scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {t("Pro interprety")}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {t("Nejen služba. Partner pro celý hudební projekt.")}
              </h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">
                {t(
                  "Stavíme vlastní ekosystém interpreta. Propojujeme vydávání hudby, prodej vstupenek, booking i kapitál pro další růst.",
                )}
              </p>
              <div className="mt-7">
                <ActionLink
                  href="mailto:booking@nfctron.com?subject=Spolupráce s NFCtron Artists"
                  arrow
                >
                  {t("Chci spolupracovat")}
                </ActionLink>
              </div>
            </div>
            <div className="border-t border-gray-200">
              {artistBenefits.map(([number, title, description]) => (
                <article
                  key={number}
                  className="grid gap-3 border-b border-gray-200 py-7 sm:grid-cols-[48px_0.8fr_1.2fr] sm:gap-6"
                >
                  <span className="text-[10px] font-medium text-blue-700">
                    {number}
                  </span>
                  <h3 className="text-base font-semibold tracking-[-0.025em]">
                    {t(title)}
                  </h3>
                  <p className="text-xs leading-6 text-gray-500">
                    {t(description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pro-poradatele"
          className="scroll-mt-20 bg-primary-900 px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                {t("Pro pořadatele")}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {t("Interpret, který sedne právě vaší akci.")}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/60">
                {t(
                  "Na jednom místě uvidíte charakter show, koncertní možnosti i cestu k bookingu. O zbytek se postará náš tým.",
                )}
              </p>
              <div className="mt-7">
                <ActionLink
                  href="mailto:booking@nfctron.com?subject=Poptávka interpreta"
                  variant="secondary"
                  arrow
                >
                  {t("Poptat interpreta")}
                </ActionLink>
              </div>
            </div>
            <div className="border-t border-white/15">
              {organizerBenefits.map(([number, title, description]) => (
                <article
                  key={number}
                  className="grid gap-3 border-b border-white/15 py-7 sm:grid-cols-[48px_0.8fr_1.2fr] sm:gap-6"
                >
                  <span className="text-[10px] font-medium text-white/40">
                    {number}
                  </span>
                  <h3 className="text-base font-semibold tracking-[-0.025em]">
                    {t(title)}
                  </h3>
                  <p className="text-xs leading-6 text-white/55">
                    {t(description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-7 rounded-[28px] bg-[#f8f8fb] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                NFCtron Booking
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                {t("Spojme správného interpreta se správnou akcí.")}
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                {t(
                  "Ať hledáte další koncertní příležitost, nebo jméno pro svůj program, začněte krátkou poptávkou.",
                )}
              </p>
            </div>
            <div className="shrink-0 self-start sm:self-auto">
              <ActionLink href="mailto:booking@nfctron.com" arrow>
                booking@nfctron.com
              </ActionLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

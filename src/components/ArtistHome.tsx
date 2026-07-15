import Link from "next/link";
import { AudienceFeatureCard, AudiencePage } from "./audience/AudiencePage";
import { translate, type Locale } from "@/i18n/config";

const artists = [
  { name: "Sebastian", initials: "S", tone: "from-blue-100 to-indigo-50" },
  {
    name: "Elizabeth Kopecká",
    initials: "EK",
    tone: "from-rose-100 to-orange-50",
  },
  { name: "Like-IT", initials: "L", tone: "from-violet-100 to-fuchsia-50" },
];

export default function ArtistHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <AudiencePage
      locale={locale}
      mode="artists"
      badge={t("Připravujeme")}
      eyebrow={t("Řešení pro interprety")}
      title={t("Od prvního fanouška až po vyprodanou show.")}
      description={t(
        "Připravujeme prostor, kde interpreti propojí vstupenky, merchandise a data ze svých akcí v jednom přehledu.",
      )}
    >
      <section className="mt-12" aria-labelledby="artist-portfolio-title">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">
              NFCtron
            </p>
            <h2
              id="artist-portfolio-title"
              className="mt-2 text-2xl font-semibold tracking-[-0.035em]"
            >
              {t("Interpreti, se kterými pracujeme")}
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${artist.tone} text-xs font-semibold text-primary-700`}
              >
                {artist.initials}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-primary-900">
                  {artist.name}
                </h3>
                <p className="mt-1 text-[10px] text-gray-400">
                  {t("Hudební projekt")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <AudienceFeatureCard
          number="01"
          title={t("Vstupenky a vlastní akce")}
          description={t(
            "Prodej vstupenek, přehled návštěvnosti a správa vlastních koncertů.",
          )}
        />
        <AudienceFeatureCard
          number="02"
          title={t("Merchandise a fanoušci")}
          description={t(
            "Prodej merchandise a lepší přehled o tom, co vaše publikum opravdu zajímá.",
          )}
        />
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-flex h-9 items-center rounded-full border border-gray-200 px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50"
        >
          {t("Zpět na hlavní stránku")}
        </Link>
      </div>
    </AudiencePage>
  );
}

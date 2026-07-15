import Link from "next/link";
import { AudienceFeatureCard, AudiencePage } from "./audience/AudiencePage";
import { translate, type Locale } from "@/i18n/config";

const solutions = [
  [
    "01",
    "Vstupenky a vstup",
    "Prodej vstupenek, kontrola vstupů a přehled objednávek v jednom systému.",
  ],
  [
    "02",
    "Platby a provoz akce",
    "Rychlé bezhotovostní placení doplněné technologií a podporou přímo na místě.",
  ],
  [
    "03",
    "Data v NFCtron Hubu",
    "Prodeje, tržby a provozní data dostupná vašemu týmu v reálném čase.",
  ],
];

export default function OrganizerHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  const actions = (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a
        href="mailto:sales@nfctron.com"
        className="inline-flex h-9 items-center rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900"
      >
        {t("Poptat řešení")}
      </a>
      <a
        href="#solutions"
        className="inline-flex h-9 items-center rounded-full border border-gray-200 px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50"
      >
        {t("Prohlédnout možnosti")}
      </a>
    </div>
  );

  return (
    <AudiencePage
      locale={locale}
      mode="organizers"
      badge={t("Pro pořadatele")}
      eyebrow={t("Technologie a služby pro akce")}
      title={t("Vaše akce. Jeden propojený systém.")}
      description={t(
        "Vstupenky, platby a provozní data propojujeme podle toho, co vaše akce skutečně potřebuje — od přípravy až po vyúčtování.",
      )}
      actions={actions}
    >
      <section
        id="solutions"
        className="mt-14 scroll-mt-24"
        aria-labelledby="organizer-solutions-title"
      >
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">
            NFCtron
          </p>
          <h2
            id="organizer-solutions-title"
            className="mt-2 text-2xl font-semibold tracking-[-0.035em]"
          >
            {t("Základ, na kterém budeme stavět")}
          </h2>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {solutions.map(([number, title, description]) => (
            <AudienceFeatureCard
              key={number}
              number={number}
              title={t(title)}
              description={t(description)}
            />
          ))}
        </div>
      </section>

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

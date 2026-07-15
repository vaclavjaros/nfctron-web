import Link from "next/link";
import { AudienceFeatureCard, AudiencePage } from "./audience/AudiencePage";
import { translate, type Locale } from "@/i18n/config";

export default function RetailerHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <AudiencePage
      locale={locale}
      mode="retailers"
      badge={t("Připravujeme")}
      eyebrow={t("Řešení pro prodejce")}
      title={t("Prodej bez zbytečných překážek.")}
      description={t(
        "Připravujeme místo pro vše, co prodejci na akcích potřebují — od NFCtron Hubu po Marketplace.",
      )}
    >
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <AudienceFeatureCard
          number="01"
          title={t("NFCtron Hub pro prodejce")}
          description={t(
            "Přehled tržeb, provozu a vyúčtování na jednom místě.",
          )}
        />
        <AudienceFeatureCard
          number="02"
          title={t("NFCtron Marketplace")}
          description={t(
            "Jednodušší cesta k vybavení, službám a příležitostem pro váš prodej.",
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

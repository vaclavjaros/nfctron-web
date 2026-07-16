import type { Metadata } from "next";
import CardsHome from "@/features/cards/CardsHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return createPageMetadata({
    locale,
    path: "/cards",
    title:
      locale === "cs"
        ? "NFCtron Card Beta | Karta pro zážitky na akcích"
        : "NFCtron Card Beta | The card for event experiences",
    description:
      locale === "cs"
        ? "Poznejte NFCtron Card — připravovanou virtuální kartu propojenou s NFCtron ID, zůstatkem a přehledem transakcí."
        : "Meet NFCtron Card — an upcoming virtual card connected to your NFCtron ID, balance and transaction history.",
    ogLabel: "NFCtron Card · Beta",
  });
}

export default async function CardsPage() {
  const locale = await getLocale();
  return <CardsHome locale={locale} />;
}

import type { Metadata } from "next";
import BrandAssetsHome from "@/features/brand-assets/BrandAssetsHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRouteLocale(params);

  return createPageMetadata({
    locale,
    path: "/brand-assets",
    title: locale === "cs" ? "Grafické podklady | NFCtron" : "Brand assets | NFCtron",
    description:
      locale === "cs"
        ? "Formáty a doporučení pro grafiku akcí v nákupním košíku, aplikaci, na webu a vstupenkách NFCtron."
        : "Formats and guidance for event visuals used in the NFCtron checkout, app, website and tickets.",
    ogLabel: locale === "cs" ? "Grafické podklady" : "Brand assets",
    image: "/events/vysocina-fest/hero-2027.jpg",
  });
}

export default async function BrandAssetsPage({ params }: { params: LocaleParams }) {
  return <BrandAssetsHome locale={await getRouteLocale(params)} />;
}

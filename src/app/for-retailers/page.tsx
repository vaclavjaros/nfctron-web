import type { Metadata } from "next";
import RetailerHome from "@/components/RetailerHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/for-retailers",
    title:
      locale === "cs"
        ? "Řešení pro prodejce na akcích | NFCtron"
        : "Solutions for event vendors | NFCtron",
    description:
      locale === "cs"
        ? "NFCtron Hub, provozní přehled a připravovaný Marketplace pro prodejce, kteří chtějí mít své podnikání na akcích pod kontrolou."
        : "NFCtron Hub, operational insights and the upcoming Marketplace for vendors who want full control over their event business.",
    ogLabel: locale === "cs" ? "Pro prodejce" : "For vendors",
  });
}

export default async function ForRetailersPage() {
  const locale = await getLocale();
  return <RetailerHome locale={locale} />;
}

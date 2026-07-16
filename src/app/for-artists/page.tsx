import type { Metadata } from "next";
import ArtistHome from "@/components/ArtistHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/for-artists",
    title:
      locale === "cs"
        ? "Interpreti, koncerty a booking | NFCtron Artists"
        : "Artists, live shows and booking | NFCtron Artists",
    description:
      locale === "cs"
        ? "Objevte interprety NFCtron, jejich hudbu, koncertní nabídku a dostupný booking. Propojujeme vstupenky, distribuci a dlouhodobý rozvoj hudebních projektů."
        : "Discover NFCtron artists, their music, live offering and booking availability. We connect tickets, distribution and long-term artist development.",
    ogLabel: "NFCtron Artists",
  });
}

export default async function ForArtistsPage() {
  const locale = await getLocale();
  return <ArtistHome locale={locale} />;
}

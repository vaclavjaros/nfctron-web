import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import type { Locale } from "@/i18n/config";
import type { ArtistProfileConfig } from "./types";

export function createArtistMetadata(
  profile: ArtistProfileConfig,
  locale: Locale,
): Metadata {
  const description =
    locale === "cs"
      ? `${profile.name}: oficiální profil pod NFCtron Artists. Hudba, nejbližší koncerty, živá show a přímá bookingová poptávka.`
      : `${profile.name}: official NFCtron Artists profile. Music, upcoming shows, live performance and direct booking enquiries.`;

  return createPageMetadata({
    locale,
    path: `/for-artists/${profile.slug}`,
    title:
      locale === "cs"
        ? `${profile.name} — koncerty a booking | NFCtron`
        : `${profile.name} — live shows and booking | NFCtron`,
    socialTitle:
      locale === "cs"
        ? `${profile.name} — koncerty a booking`
        : `${profile.name} — live shows and booking`,
    description,
    image: profile.heroImage,
    imageAlt: `${profile.name} — NFCtron Artists`,
    ogLabel: "NFCtron Artists",
  });
}

import type { Metadata } from "next";
import ArtistProfile from "@/features/artists/profile/ArtistProfile";
import { artistProfiles } from "@/features/artists/profile/profiles";
import { createArtistMetadata } from "@/features/artists/profile/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createArtistMetadata(artistProfiles.elizabeth, locale);
}

export default async function ElizabethKopeckaPage() {
  const locale = await getLocale();
  return <ArtistProfile locale={locale} profile={artistProfiles.elizabeth} />;
}

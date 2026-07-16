import type { Locale } from "@/i18n/config";

export type LocalizedText = Record<Locale, string>;

export interface ArtistMetric {
  value: string;
  label: LocalizedText;
}

export interface ArtistEvent {
  date: string;
  city: string;
  venue: string;
  status: LocalizedText;
}

export interface ArtistProfileConfig {
  slug: string;
  name: string;
  bookingName: LocalizedText;
  tagline: LocalizedText;
  heroImage: string;
  portraitImage: string;
  showImage: string;
  heroPosition?: string;
  showPosition?: string;
  bookingEmail: string;
  bioEyebrow: LocalizedText;
  bioTitle: LocalizedText;
  bio: LocalizedText[];
  stats: ArtistMetric[];
  spotify: {
    artistId: string;
    metrics: ArtistMetric[];
  };
  video: {
    title: string;
    url: string;
    image: string;
  };
  live: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    features: LocalizedText[];
  };
  events: ArtistEvent[];
}

export function localize(locale: Locale, value: LocalizedText) {
  return value[locale];
}

export const localized = (cs: string, en: string): LocalizedText => ({
  cs,
  en,
});

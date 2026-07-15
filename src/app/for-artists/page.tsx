import type { Metadata } from 'next';
import ArtistHome from '@/components/ArtistHome';
import { getLocale } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Řešení pro interprety | NFCtron',
  description: 'Vstupenky, merchandise a data z akcí pro interprety. Novou sekci NFCtron právě připravujeme.',
};

export default async function ForArtistsPage() {
  const locale = await getLocale();
  return <ArtistHome locale={locale} />;
}

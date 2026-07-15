import type { Metadata } from 'next';
import RetailerHome from '@/components/RetailerHome';
import { getLocale } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Řešení pro prodejce | NFCtron',
  description: 'NFCtron Hub a Marketplace pro prodejce na akcích. Novou sekci právě připravujeme.',
};

export default async function ForRetailersPage() {
  const locale = await getLocale();
  return <RetailerHome locale={locale} />;
}

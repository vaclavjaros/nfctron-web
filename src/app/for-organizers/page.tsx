import type { Metadata } from 'next';
import OrganizerHome from '@/components/OrganizerHome';
import { getLocale } from '@/i18n/server';

export const metadata: Metadata = {
  title: 'Řešení pro pořadatele akcí | NFCtron',
  description: 'Vstupenky, platby a provozní data pro pořadatele akcí v jednom propojeném řešení NFCtron.',
};

export default async function ForOrganizersPage() {
  const locale = await getLocale();
  return <OrganizerHome locale={locale} />;
}

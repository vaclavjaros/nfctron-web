import Link from 'next/link';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { translate, type Locale } from '@/i18n/config';

const solutions = [
  ['01', 'Vstupenky a vstup', 'Prodej vstupenek, kontrola vstupů a přehled objednávek v jednom systému.'],
  ['02', 'Platby a provoz akce', 'Rychlé bezhotovostní placení doplněné technologií a podporou přímo na místě.'],
  ['03', 'Data v NFCtron Hubu', 'Prodeje, tržby a provozní data dostupná vašemu týmu v reálném čase.'],
];

export default function OrganizerHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="organizers" />
      <main className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-700">{t('Pro pořadatele')}</span>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">{t('Technologie a služby pro akce')}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">{t('Vaše akce. Jeden propojený systém.')}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">{t('Vstupenky, platby a provozní data propojujeme podle toho, co vaše akce skutečně potřebuje — od přípravy až po vyúčtování.')}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:sales@nfctron.com" className="inline-flex h-9 items-center rounded-full bg-primary-700 px-5 text-[11px] font-medium text-white transition hover:bg-primary-900">{t('Poptat řešení')}</a>
              <a href="#solutions" className="inline-flex h-9 items-center rounded-full border border-gray-200 px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50">{t('Prohlédnout možnosti')}</a>
            </div>
          </div>

          <section id="solutions" className="mt-14 scroll-mt-24" aria-labelledby="organizer-solutions-title">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">NFCtron</p>
              <h2 id="organizer-solutions-title" className="mt-2 text-2xl font-semibold tracking-[-0.035em]">{t('Základ, na kterém budeme stavět')}</h2>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {solutions.map(([number, title, description]) => (
                <article key={number} className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-8">
                  <span className="text-[10px] font-medium text-blue-700">{number}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-primary-900">{t(title)}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{t(description)}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-10 text-center">
            <Link href="/" className="inline-flex h-9 items-center rounded-full border border-gray-200 px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50">{t('Zpět na hlavní stránku')}</Link>
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

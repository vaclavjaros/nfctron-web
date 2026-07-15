import Link from 'next/link';
import SiteHeader from './SiteHeader';
import { translate, type Locale } from '@/i18n/config';

export default function RetailerHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return <div className="min-h-screen bg-white text-primary-900">
    <SiteHeader locale={locale} active="retailers" />
    <main className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-700">{t('Připravujeme')}</span>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">{t('Řešení pro prodejce')}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">{t('Prodej bez zbytečných překážek.')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">{t('Připravujeme místo pro vše, co prodejci na akcích potřebují — od NFCtron Hubu po Marketplace.')}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-9"><span className="text-[10px] text-blue-700">01</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{t('NFCtron Hub pro prodejce')}</h2><p className="mt-3 text-sm leading-6 text-gray-500">{t('Přehled tržeb, provozu a vyúčtování na jednom místě.')}</p></article>
          <article className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-9"><span className="text-[10px] text-blue-700">02</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{t('NFCtron Marketplace')}</h2><p className="mt-3 text-sm leading-6 text-gray-500">{t('Jednodušší cesta k vybavení, službám a příležitostem pro váš prodej.')}</p></article>
        </div>
        <div className="mt-10 text-center"><Link href="/" className="inline-flex h-9 items-center rounded-full border border-gray-200 px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50">{t('Zpět na hlavní stránku')}</Link></div>
      </div>
    </main>
  </div>;
}

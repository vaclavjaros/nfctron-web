import Link from 'next/link';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { translate, type Locale } from '@/i18n/config';

const artists = [
  { name: 'Sebastian', initials: 'S', tone: 'from-blue-100 to-indigo-50' },
  { name: 'Elizabeth Kopecká', initials: 'EK', tone: 'from-rose-100 to-orange-50' },
  { name: 'Like-IT', initials: 'L', tone: 'from-violet-100 to-fuchsia-50' },
];

export default function ArtistHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return <div className="min-h-screen bg-white text-primary-900">
    <SiteHeader locale={locale} active="artists" />
    <main className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-700">{t('Připravujeme')}</span>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">{t('Řešení pro interprety')}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">{t('Od prvního fanouška až po vyprodanou show.')}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">{t('Připravujeme prostor, kde interpreti propojí vstupenky, merchandise a data ze svých akcí v jednom přehledu.')}</p>
        </div>
        <section className="mt-12" aria-labelledby="artist-portfolio-title">
          <div className="flex items-end justify-between gap-6">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">NFCtron</p><h2 id="artist-portfolio-title" className="mt-2 text-2xl font-semibold tracking-[-0.035em]">{t('Interpreti, se kterými pracujeme')}</h2></div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {artists.map(artist => <article key={artist.name} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4"><span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${artist.tone} text-xs font-semibold text-primary-700`}>{artist.initials}</span><div><h3 className="text-sm font-semibold text-primary-900">{artist.name}</h3><p className="mt-1 text-[10px] text-gray-400">{t('Hudební projekt')}</p></div></article>)}
          </div>
        </section>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-9"><span className="text-[10px] text-blue-700">01</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{t('Vstupenky a vlastní akce')}</h2><p className="mt-3 text-sm leading-6 text-gray-500">{t('Prodej vstupenek, přehled návštěvnosti a správa vlastních koncertů.')}</p></article>
          <article className="rounded-2xl border border-gray-200 bg-[#fafafd] p-7 sm:p-9"><span className="text-[10px] text-blue-700">02</span><h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{t('Merchandise a fanoušci')}</h2><p className="mt-3 text-sm leading-6 text-gray-500">{t('Prodej merchandise a lepší přehled o tom, co vaše publikum opravdu zajímá.')}</p></article>
        </div>
        <div className="mt-10 text-center"><Link href="/" className="inline-flex h-9 items-center rounded-full border border-gray-200 px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50">{t('Zpět na hlavní stránku')}</Link></div>
      </div>
    </main>
    <SiteFooter locale={locale} />
  </div>;
}

import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import CampaignFeature, { type CampaignFeatureData } from './CampaignFeature';
import { translate, type Locale } from '@/i18n/config';

type Translator = (value: string) => string;

interface EventItem {
  id: string;
  title: string;
  date: string;
  place: string;
  city: string;
  category: string;
  description?: string;
  features?: string[];
  accent: string;
  image?: string;
  url?: string;
  calendarStart?: string;
  calendarEnd?: string;
  priceFrom?: string;
  featured?: boolean;
}

// Datový tvar je připravený pro pozdější mapování odpovědi NFCtron Tickets API.
const events: EventItem[] = [
  { id: 'let-it-roll-2026', title: 'LET IT ROLL 2026', date: '30. července–1. srpna 2026', place: 'Jezero Most', city: 'Most', category: 'Festival', description: 'Největší drum & bass festival na světě', features: ['Platba čipem se vstupenkou', 'Kontrola zálohovaných kelímků', 'Přijímání EUR', 'Zabezpečené vstupenky'], accent: 'from-indigo-950 via-violet-700 to-fuchsia-500', image: 'https://images.nfctron.com/organizers/f56e6361-4114-4691-bbde-8b03e4d760aa.jpg', url: 'https://tickets.letitroll.cz/festival/2026-czk?backUrl=https%3A%2F%2Ftickets.nfctron.com%2Fhome', calendarStart: '20260730', calendarEnd: '20260802', priceFrom: '4 890 Kč', featured: true },
  { id: 'footfest-2026', title: 'Footfest 2026', date: '17.–19. července 2026', place: 'Želeč u Tábora', city: 'Tábor', category: 'Festival', features: ['Platba čipem se vstupenkou', 'Kontrola zálohovaných kelímků'], accent: 'from-fuchsia-900 to-rose-500', image: 'https://images.nfctron.com/organizers/525fe2b1-e849-4709-bcdf-de37ca5e5534.jpg', url: 'https://tickets.nfctron.com/event/danekr-sro/footfest-2026/cart', calendarStart: '20260717', calendarEnd: '20260720', featured: true },
  { id: 'mighty-sounds-2027', title: 'Mighty Sounds 2027', date: '25.–27. června 2027', place: 'Letiště Čápův dvůr', city: 'Tábor', category: 'Festival', accent: 'from-emerald-800 via-teal-500 to-lime-300', calendarStart: '20270625', calendarEnd: '20270628', featured: true },
  { id: 'chinaski-open-air', title: 'Chinaski Open Air Léto', date: '18 koncertů v létě 2026', place: 'Nejkrásnější místa Česka', city: 'Česko', category: 'Koncert', accent: 'from-sky-800 via-blue-500 to-cyan-300' },
  { id: 'techmission-2026', title: 'Techmission: Hardtech', date: '19. září 2026', place: 'Sportovní hala Fortuna', city: 'Praha', category: 'Rave', accent: 'from-neutral-950 via-rose-700 to-red-400', calendarStart: '20260919', calendarEnd: '20260920' },
  { id: 'jelenfest-2026', title: 'JelenFest 2026', date: '20 koncertů po celém Česku', place: 'Turné', city: 'Česko', category: 'Koncert', accent: 'from-amber-900 via-orange-600 to-yellow-300' },
  { id: 'sterkovna-open-music', title: 'Štěrkovna Open Music 2026', date: '23.–26. července 2026', place: 'Hlučínské jezero', city: 'Hlučín', category: 'Hudba', features: ['Platba čipem se vstupenkou', 'Kontrola zálohovaných kelímků'], accent: 'from-blue-950 via-blue-600 to-cyan-300', image: 'https://images.nfctron.com/organizers/ad03b28f-4e52-4649-8b20-6ccc15352ecb.jpg', url: 'https://tickets.nfctron.com/event/new-wind-production/sterkovna-open-music-2026', calendarStart: '20260723', calendarEnd: '20260727' },
  { id: 'machac-2026', title: 'Mácháč 2026', date: '14.–15. srpna 2026', place: 'Pláž Klůček', city: 'Doksy', category: 'Hudba', features: ['Platba čipem se vstupenkou', 'Zabezpečené vstupenky'], accent: 'from-pink-700 via-purple-600 to-cyan-400', image: 'https://images.nfctron.com/organizers/b340d8ac-c528-4985-9b57-9ff463308a67.jpg', url: 'https://tickets.nfctron.com/event/machac-entertainment/machac-2026', calendarStart: '20260814', calendarEnd: '20260816' },
  { id: '26-sunset-tour-praha', title: '26SUNSET TOUR Sofian Medjmedj', date: '28. srpna 2026', place: 'Ostrov Štvanice', city: 'Praha', category: 'Hudba', features: ['Platba čipem se vstupenkou', 'Kontrola zálohovaných kelímků'], accent: 'from-slate-800 via-amber-700 to-orange-300', image: 'https://images.nfctron.com/organizers/5c55adb1-d640-4b2c-bc77-e9c1cdcad74c.jpg', url: 'https://tickets.nfctron.com/event/wisemusic-s-r-o/26sunset-tour-sofian-medjmedj-praha', calendarStart: '20260828', calendarEnd: '20260829' },
  { id: '90s-explosion', title: '90s Explosion 2027', date: '22. května 2027', place: 'Výstaviště Holešovice', city: 'Praha', category: 'Koncert', accent: 'from-purple-900 via-pink-500 to-yellow-300', calendarStart: '20270522', calendarEnd: '20270523' },
];

const categories = [['Vše', ''], ['Výběr NFCtron', '☆'], ['Výhodnější vstupenky', '◉'], ['Hudba', '♫'], ['Gastro', '♨'], ['Kultura', '▦'], ['Víno', '♜'], ['Sportovní', '♙'], ['Sériové akce', '▣'], ['Festival', '△']];

const catalogEvents = ['footfest-2026', 'sterkovna-open-music', 'machac-2026', '26-sunset-tour-praha', 'let-it-roll-2026', 'mighty-sounds-2027', 'chinaski-open-air', '90s-explosion']
  .map(id => events.find(event => event.id === id))
  .filter((event): event is EventItem => Boolean(event));

const series = [
  { title: 'Hrady CZ 2026', meta: '8 hradů · 8 víkendů', action: 'Vybrat hrad', accent: 'from-amber-700 via-orange-500 to-yellow-300', image: 'https://images.nfctron.com/event-groups/53e004e4-09d9-4d48-8c0b-663a2d04bfee.png' },
  { title: '26SUNSET TOUR', meta: 'Karviná · Brno · Praha', action: 'Vybrat město', accent: 'from-slate-900 via-violet-700 to-orange-300', image: events.find(event => event.id === '26-sunset-tour-praha')?.image },
  { title: 'Chinaski Open Air Léto', meta: '18 koncertů po celém Česku', action: 'Vybrat koncert', accent: 'from-sky-900 via-blue-600 to-cyan-300', image: 'https://images.nfctron.com/organizers/b1fb6904-12c0-403d-9675-1ac61ef440b7.jpg' },
];

const events2027 = [
  { title: 'Mighty Sounds 2027', meta: '25.–27. června · Letiště Tábor', accent: 'from-purple-950 via-lime-700 to-lime-300', image: 'https://images.nfctron.com/organizers/5101aa82-c8a3-46bb-a68f-1c2657e59726.png' },
  { title: '90s Explosion 2027', meta: '22. května · Praha', accent: 'from-fuchsia-950 via-pink-600 to-yellow-300', image: 'https://images.nfctron.com/organizers/b4b3fa28-912c-421f-ac0f-8b88f5541699.png' },
  { title: 'Metalfest Open Air 2027', meta: 'Plzeň · Amfiteátr Lochotín', accent: 'from-neutral-950 via-red-900 to-orange-400', image: 'https://images.nfctron.com/organizers/179d2e51-6b5b-49cf-abb5-5502315b3a1f.png' },
];

const supportItems = [
  { title: 'Vrátit zbývající kredit', text: 'Pošlete nevyužité peníze z čipu zpět na bankovní účet.', href: 'https://tickets.nfctron.com/receipt' },
  { title: 'Dobít kredit', text: 'Připravte si placení na podporované akci ještě před jejím začátkem.', href: 'https://tickets.nfctron.com/receipt' },
  { title: 'Vstupenka a QR kód', text: 'Zjistěte, kde vstupenku najdete a zda ji potřebujete tisknout.', href: 'https://tickets.nfctron.com/receipt' },
  { title: 'Ztracený QR kód', text: 'Poradíme, jak znovu získat přístup k online účtence a čipu.', href: 'https://tickets.nfctron.com/receipt' },
];

const clickToPayCampaign: CampaignFeatureData = {
  id: 'mastercard-click-to-pay',
  eyebrow: 'Aktivní kampaně a spolupráce',
  partner: 'Mastercard Click to Pay',
  title: 'Levnější vstupenky. Méně vyplňování.',
  description: 'Zaplaťte kartou Mastercard přes Click to Pay a u vybraných akcí získejte výhodnější cenu. Jeden bezpečný profil, žádné opakované zadávání údajů.',
  benefits: ['Výhodnější ceny', 'Bezpečně uložené karty', 'Rychlejší online platba'],
  metrics: [{ value: 70, label: 'Akcí 2026' }, { value: 17, label: 'Akcí 2027' }, { value: 71, label: 'Proběhlých akcí' }],
  activeEventCount: 87,
  href: 'https://tickets.nfctron.com/tour/mastercard-clicktopay',
};

function ArrowIcon() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function SearchIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
}

function CalendarIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M8 3.5V7M16 3.5V7M3.5 10h17" /></svg>;
}

function getCalendarUrl(event: EventItem) {
  if (!event.calendarStart || !event.calendarEnd) return null;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.calendarStart}/${event.calendarEnd}`,
    location: `${event.place}, ${event.city}`,
    details: `${event.title} — NFCtron`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function getMapUrl(event: EventItem) {
  const params = new URLSearchParams({ api: '1', query: `${event.place}, ${event.city}` });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}

function EventCard({ event, t, large = false }: { event: EventItem; t: Translator; large?: boolean }) {
  const eventUrl = event.url ?? `/events/${event.id}`;
  const calendarUrl = getCalendarUrl(event);
  const mapUrl = getMapUrl(event);
  return (
      <article className="group min-w-0 overflow-hidden rounded-xl border border-black/5 bg-white transition duration-300 hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5">
        <Link href={eventUrl} className="block" aria-label={`Otevřít ${event.title}`}>
        <div className={`relative ${large ? 'h-60 sm:h-64' : 'aspect-[16/8]'} bg-gradient-to-br ${event.accent} overflow-hidden`}>
          {event.image && <Image src={event.image} alt={event.title} fill sizes={large ? '(min-width: 1280px) 704px, (min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'} loading={large ? 'eager' : 'lazy'} fetchPriority={large ? 'high' : 'auto'} className="object-cover" />}
        </div>
        </Link>
        <div className={`relative ${large ? 'p-3.5 sm:p-4' : 'p-4'}`}>
          <div>
            <h3 className="pr-14 text-base font-semibold leading-tight tracking-[-0.02em] text-gray-900"><Link href={eventUrl} className="transition hover:text-primary-700">{event.title}</Link></h3>
            <p className="mt-1.5 pr-14 text-xs text-gray-500">{t(event.description ?? (event.category === 'Festival' ? 'Festival plný hudby a zážitků' : 'Objevte akci v NFCtron Tickets'))}</p>
            <div className={`${large ? 'mt-2.5 sm:flex-row sm:items-center sm:gap-3' : 'mt-2.5'} flex flex-col items-start gap-1.5 text-[9px] text-gray-500 sm:text-[10px]`}>
              {calendarUrl ? <a href={calendarUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 py-0.5 transition hover:text-primary-700" aria-label={`Přidat ${event.title} do kalendáře`}><CalendarIcon className="h-3 w-3 shrink-0" />{t(event.date)}</a> : <span className="inline-flex items-center gap-1.5 py-0.5"><CalendarIcon className="h-3 w-3 shrink-0" />{t(event.date)}</span>}
              {large ? <span aria-hidden="true" className="hidden h-3 w-px bg-gray-200 sm:block" /> : null}
              <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 py-0.5 transition hover:text-primary-700" aria-label={`Otevřít ${event.place} v mapách`}><span className="flex h-3 w-3 items-center justify-center text-[9px] text-gray-400">⌖</span>{t(event.place)} · {t(event.city)}</a>
            </div>
            {event.features?.length ? <div className="mt-2.5 flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap">{event.features.slice(0, 2).map(feature => <span key={feature} className={`${large ? 'w-full sm:w-auto' : ''} inline-flex items-center justify-center rounded-full bg-primary-50 px-2.5 py-0.5 text-center text-[8px] font-medium text-primary-700`}>{t(feature)}</span>)}</div> : null}
            {large && event.priceFrom ? <div className="mt-3 flex flex-col items-stretch gap-3 border-t border-gray-100 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div><span className="block text-[9px] uppercase tracking-[0.08em] text-gray-400">{t('Vstupenky od')}</span><strong className="mt-0.5 block text-sm font-semibold text-primary-900">{event.priceFrom}</strong></div>
              <Link href={eventUrl} className="inline-flex h-8 items-center justify-center gap-2 rounded-full bg-primary-700 px-4 text-[10px] font-medium text-white transition hover:bg-primary-900">{t('Vybrat vstupenky')} <ArrowIcon /></Link>
            </div> : null}
          </div>
          <span className="absolute right-4 top-4 overflow-hidden rounded-md border border-gray-200 bg-gray-50 text-center"><b className="block bg-primary-700 px-2 py-0.5 text-[9px] uppercase text-white">{event.date.startsWith('30. července') ? 'ČVC' : event.date.includes('srpna') ? 'SRP' : 'ČVC'}</b><span className="block px-2 py-1 text-sm font-semibold text-gray-600">{event.date.match(/\d+/)?.[0]}</span></span>
        </div>
      </article>
  );
}

function PromoCard({ item, t, year = false }: { item: { title: string; meta: string; accent: string; action?: string; image?: string }; t: Translator; year?: boolean }) {
  return <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5">
    <div className={`relative flex aspect-[16/8] items-end overflow-hidden bg-gradient-to-br ${item.accent} p-5`}>
      {item.image && <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <span className="relative text-xs font-bold uppercase tracking-[.14em] text-white/80">{t(year ? 'V prodeji na rok 2027' : 'Sériová akce')}</span>
    </div>
    <div className="flex items-center justify-between gap-4 p-5">
      <div><h3 className="text-lg font-semibold text-primary-900">{item.title}</h3><p className="mt-1 text-xs text-gray-500">{t(item.meta)}</p></div>
      <button className="shrink-0 rounded-full border border-primary-300 px-4 py-2 text-xs font-medium text-primary-700 transition hover:bg-primary-50">{t(item.action ?? 'Detail akce')}</button>
    </div>
  </article>;
}

export default function VisitorHome({ locale }: { locale: Locale }) {
  const t: Translator = value => translate(locale, value);
  return (
    <div className="tickets-ui min-h-screen">
      <SiteHeader locale={locale} />

      <main>
        <section id="home" className="bg-white pb-10 pt-10 sm:pb-12 sm:pt-12 lg:pb-14 lg:pt-14">
          <div className="container-fluid grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">{t('Vstupenky a placení na akcích')}</p>
              <h1 className="text-[38px] font-semibold leading-[1.09] tracking-[-.04em] text-primary-900 sm:text-[44px] lg:text-5xl">{t('Na akci bez starostí. Od vstupenky až po poslední drink.')}</h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-500">{t('Objevte akce a kupte si vstupenku jednoduše online. NFCtron vám podle typu akce pomůže také s rychlým vstupem, pohodlným placením nebo vrácením nevyužitého kreditu.')}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#events" className="btn-primary">{t('Prohlédnout akce')} <ArrowIcon /></a>
                <Link href="https://pass.nfctron.com" className="btn border border-gray-200 bg-white text-primary-900 hover:bg-gray-50">{t('Můj NFCtron')}</Link>
              </div>
            </div>
            <EventCard event={events[0]} t={t} large />
          </div>
        </section>

        <CampaignFeature campaign={clickToPayCampaign} locale={locale} />

        <section className="section bg-white">
          <div className="container-fluid">
            <div className="flex items-end justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">{t('Více míst, jeden zážitek')}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">{t('Sériové akce')}</h2></div><button className="hidden text-sm font-medium text-primary-700 sm:block">{t('Zobrazit všechny')} →</button></div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">{series.map(item => <PromoCard key={item.title} item={item} t={t} />)}</div>
          </div>
        </section>

        <section className="bg-primary-900 py-12 text-white sm:py-14 lg:py-16">
          <div className="container-fluid">
            <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-300">{t('Příští sezóna začíná teď')}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] sm:text-4xl">{t('Akce, na které se těšíme v roce 2027')}</h2><p className="mt-4 text-sm leading-relaxed text-white/55">{t('První festivaly a koncerty jsou v prodeji. Vyberte si včas a mějte příští léto naplánované.')}</p></div>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">{events2027.map(item => <PromoCard key={item.title} item={item} t={t} year />)}</div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-[#faf9ff] py-12 sm:py-14 lg:py-16">
          <div className="container-fluid">
            <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">{t('Vše důležité pro návštěvníky')}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">{t('NFCtron drží celý zážitek pohromadě.')}</h2></div>
            <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 md:grid-cols-3">
              {[['01', 'Vstupenka vždy po ruce', 'Nákup online a rychlý vstup na akci bez hledání e-mailů.'], ['02', 'Rychlé placení', 'Čip, karta nebo telefon. Jednoduše u stánku i bez hotovosti.'], ['03', 'Vrácení kreditu', 'Nevyužité peníze po akci odešlete zpět přímo online.']].map(([number, title, text]) => <div key={number} className="bg-white p-7"><span className="text-xs font-semibold text-primary-500">{number}</span><h3 className="mt-7 text-lg font-semibold text-primary-900">{t(title)}</h3><p className="mt-2 text-sm leading-relaxed text-gray-500">{t(text)}</p></div>)}
            </div>
          </div>
        </section>

        <section id="events" className="section scroll-mt-16 bg-white">
          <div className="container-fluid">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">{t('Najděte svůj další zážitek')}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">{t('Vstupenky v prodeji')}</h2>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
              <label className="flex h-11 min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 text-gray-400 transition focus-within:border-primary-300 focus-within:ring-2 focus-within:ring-primary-100">
                <SearchIcon />
                <input type="search" placeholder={t('Vyhledejte akce podle názvu nebo místa…')} className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400" />
              </label>
              <button className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 text-xs font-semibold text-gray-700 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"><CalendarIcon />{t('Všechny akce')}</button>
            </div>
            <div className="mt-5 flex gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map(([category, icon], index) => <button key={category} aria-current={index === 1 ? 'page' : undefined} className={`flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 text-[11px] font-medium transition ${index === 1 ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:bg-gray-50 hover:text-primary-700'}`}><span className="flex h-3.5 w-3.5 items-center justify-center text-xs" aria-hidden="true">{icon}</span>{t(category)}</button>)}
            </div>
            <div className="mt-3 grid gap-4 border-t border-gray-100 pt-5 md:grid-cols-2 lg:grid-cols-3">
              {catalogEvents.map(event => <EventCard key={event.id} event={event} t={t} />)}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-[#faf9ff] py-12 sm:py-14 lg:py-16">
          <div className="container-fluid">
            <div className="flex items-end justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">{t('Novinky a inspirace')}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">{t('Blog NFCtron')}</h2></div><Link href="https://www.nfctron.com/cs/blog" className="hidden text-sm font-medium text-primary-700 sm:block">{t('Všechny články')} →</Link></div>
            <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white lg:grid-cols-[1.1fr_.9fr]">
              <Link href="https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci" className="group relative min-h-[360px] overflow-hidden lg:min-h-[480px]">
                <Image src="/yashica-events-acquisition.jpg" alt="NFCtron a Yashica Events" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"><span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] backdrop-blur">{t('Hlavní událost')} · 3. 7. 2026</span><h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-[-.03em] sm:text-3xl">{t('NFCtron dokončil akvizici společnosti Yashica Events')}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">{t('Rozšiřuje podporu pořadatelům akcí a propojuje technologie s produkčním know-how.')}</p></div>
              </Link>
              <div className="grid divide-y divide-gray-200">
                <Link href="https://www.nfctron.com/cs/blog" className="group flex flex-col justify-center p-7 transition hover:bg-primary-50 sm:p-9"><span className="text-xs font-semibold text-primary-500">Pro návštěvníky · 27. 3. 2026</span><h3 className="mt-3 text-xl font-bold leading-snug text-primary-900 group-hover:text-primary-700">WHOOP UCI Mountain Bike World Series 2026</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Nová sezóna, nové zážitky a atmosféra světového poháru v Novém Městě.</p><span className="mt-5 text-sm font-semibold text-primary-700">Přečíst článek →</span></Link>
                <Link href="https://www.nfctron.com/cs/blog" className="group flex flex-col justify-center p-7 transition hover:bg-primary-50 sm:p-9"><span className="text-xs font-semibold text-primary-500">Pro návštěvníky · 5. 2. 2026</span><h3 className="mt-3 text-xl font-bold leading-snug text-primary-900 group-hover:text-primary-700">Masters of Rock 2026: Čtyři dny metalové vášně</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Legendární festival se vrací do Vizovic už po dvaadvacáté.</p><span className="mt-5 text-sm font-semibold text-primary-700">Přečíst článek →</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section scroll-mt-16 bg-white" id="support">
          <div className="container-fluid">
            <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">NFCtron Support</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">{t('Máte vstupenku nebo jste právě po akci?')}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{t('Vyberte, co potřebujete vyřešit. Návody vás provedou vstupenkou, čipem, kreditem i online účtenkou.')}</p>
                <Link href="https://tickets.nfctron.com/receipt" className="btn-primary mt-5">{t('Otevřít veškerou nápovědu')} <ArrowIcon /></Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {supportItems.map((item, index) => <Link key={item.title} href={item.href} className="group rounded-xl border border-gray-200 bg-white p-4 transition hover:border-primary-200 hover:bg-primary-50"><div className="flex items-start justify-between gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-[9px] font-semibold text-primary-700">0{index + 1}</span><span className="text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-primary-600">→</span></div><h3 className="mt-4 text-sm font-semibold text-primary-900">{t(item.title)}</h3><p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">{t(item.text)}</p></Link>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-[#daebfa]" id="all-events">
          <div className="container-fluid">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
              <div>
                <span className="hub-badge mb-5">{t('NFCtron účet')}</span>
                <h2 className="section-title">{t('Celý zážitek na jednom místě.')}</h2>
                <p className="max-w-lg text-base leading-relaxed text-gray-500">Vstupenky, přehled útraty, hodnocení nákupů i nejrychlejší vrácení zbylého kreditu. Bez hledání účtenek a formulářů.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {['Všechny vstupenky po ruce', 'Přehled plateb na akci', 'Vrácení kreditu online', 'Upozornění a novinky'].map((item, index) => (
                    <div key={item} className="ticket-panel flex items-center gap-3 p-4"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">0{index + 1}</span><span className="text-sm font-semibold text-gray-800">{t(item)}</span></div>
                  ))}
                </div>
                <Link href="https://pass.nfctron.com" className="btn-primary mt-7">{t('Otevřít můj NFCtron účet')} <ArrowIcon /></Link>
              </div>
              <div className="rounded-xl bg-primary-700 p-6 text-white shadow-md shadow-primary-900/10 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5"><Image src="/nfctron-logo-white.svg" alt="NFCtron" width={106} height={20} /><span className="rounded bg-white/10 px-2 py-1 text-[10px] text-white/70">Mobilní aplikace</span></div>
                <div className="grid gap-3 py-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-white p-5 text-gray-900"><p className="text-xs text-gray-400">Moje vstupenky</p><p className="mt-2 text-2xl font-bold">4 aktivní</p><div className="mt-5 h-2 rounded bg-primary-100"><div className="h-full w-3/4 rounded bg-primary-500" /></div></div>
                  <div className="rounded-xl bg-primary-600 p-5"><p className="text-xs text-white/60">Kredit k vrácení</p><p className="mt-2 text-2xl font-bold">1 240 Kč</p><button className="mt-5 rounded-full bg-white px-3 py-2 text-[11px] font-semibold text-primary-900">Vrátit kredit</button></div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-sm font-semibold">LET IT ROLL 2026</p><p className="mt-1 text-xs text-white/50">Vstupenka připravena · QR kód v aplikaci</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section scroll-mt-16 bg-white">
          <div className="container-fluid text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">{t('NFCtron na akcích')}</p>
            <h2 className="section-title">{t('Méně čekání. Více zážitků.')}</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 text-left md:grid-cols-3">
              {[['01', 'Kupte vstupenku', 'Bezpečně online, během několika minut a rovnou do vašeho účtu.'], ['02', 'Plaťte bez starostí', 'Čipem, kartou nebo mobilem. Rychle i tam, kde není internet.'], ['03', 'Vraťte si kredit', 'Zbytek peněz po akci pošlete zpět na účet přímo z aplikace.']].map(([number, title, copy]) => <div key={number} className="bg-white p-7"><span className="text-xs font-semibold text-primary-500">{number}</span><h3 className="mt-6 text-xl font-semibold text-primary-900">{t(title)}</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">{t(copy)}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-primary-700 py-10 text-white sm:py-12">
          <div className="container-fluid flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div><p className="text-2xl font-bold tracking-[-.03em]">{t('Pořádáte akci?')}</p><p className="mt-2 text-sm text-white/55">{t('Podívejte se, co NFCtron umí pro pořadatele a prodejce.')}</p></div>
            <Link href="/for-organizers" className="btn bg-white text-primary-900 hover:bg-primary-100">{t('Řešení pro pořadatele')} <ArrowIcon /></Link>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}

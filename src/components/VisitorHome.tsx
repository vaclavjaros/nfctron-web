import Image from 'next/image';
import Link from 'next/link';

interface EventItem {
  id: string;
  title: string;
  date: string;
  place: string;
  city: string;
  category: string;
  description?: string;
  accent: string;
  image?: string;
  url?: string;
  featured?: boolean;
}

// Datový tvar je připravený pro pozdější mapování odpovědi NFCtron Tickets API.
const events: EventItem[] = [
  { id: 'let-it-roll-2026', title: 'LET IT ROLL 2026', date: '30. července–1. srpna 2026', place: 'Jezero Most', city: 'Most', category: 'Festival', description: 'Největší drum & bass festival na světě', accent: 'from-indigo-950 via-violet-700 to-fuchsia-500', image: 'https://images.nfctron.com/organizers/f56e6361-4114-4691-bbde-8b03e4d760aa.jpg', url: 'https://tickets.letitroll.cz/festival/2026-czk?backUrl=https%3A%2F%2Ftickets.nfctron.com%2Fhome', featured: true },
  { id: 'footfest-2026', title: 'Footfest 2026', date: '17.–19. července 2026', place: 'Želeč u Tábora', city: 'Tábor', category: 'Festival', accent: 'from-fuchsia-900 to-rose-500', image: 'https://images.nfctron.com/organizers/525fe2b1-e849-4709-bcdf-de37ca5e5534.jpg', url: 'https://tickets.nfctron.com/event/danekr-sro/footfest-2026/cart', featured: true },
  { id: 'mighty-sounds-2027', title: 'Mighty Sounds 2027', date: '25.–27. června 2027', place: 'Letiště Čápův dvůr', city: 'Tábor', category: 'Festival', accent: 'from-emerald-800 via-teal-500 to-lime-300', featured: true },
  { id: 'chinaski-open-air', title: 'Chinaski Open Air Léto', date: '18 koncertů v létě 2026', place: 'Nejkrásnější místa Česka', city: 'Česko', category: 'Koncert', accent: 'from-sky-800 via-blue-500 to-cyan-300' },
  { id: 'techmission-2026', title: 'Techmission: Hardtech', date: '19. září 2026', place: 'Sportovní hala Fortuna', city: 'Praha', category: 'Rave', accent: 'from-neutral-950 via-rose-700 to-red-400' },
  { id: 'jelenfest-2026', title: 'JelenFest 2026', date: '20 koncertů po celém Česku', place: 'Turné', city: 'Česko', category: 'Koncert', accent: 'from-amber-900 via-orange-600 to-yellow-300' },
  { id: 'sterkovna-open-music', title: 'Štěrkovna Open Music 2026', date: '23.–26. července 2026', place: 'Hlučínské jezero', city: 'Hlučín', category: 'Hudba', accent: 'from-blue-950 via-blue-600 to-cyan-300', image: 'https://images.nfctron.com/organizers/ad03b28f-4e52-4649-8b20-6ccc15352ecb.jpg', url: 'https://tickets.nfctron.com/event/new-wind-production/sterkovna-open-music-2026' },
  { id: 'machac-2026', title: 'Mácháč 2026', date: '14.–15. srpna 2026', place: 'Pláž Klůček', city: 'Doksy', category: 'Hudba', accent: 'from-pink-700 via-purple-600 to-cyan-400', image: 'https://images.nfctron.com/organizers/b340d8ac-c528-4985-9b57-9ff463308a67.jpg', url: 'https://tickets.nfctron.com/event/machac-entertainment/machac-2026' },
  { id: '26-sunset-tour-praha', title: '26SUNSET TOUR Sofian Medjmedj', date: '28. srpna 2026', place: 'Ostrov Štvanice', city: 'Praha', category: 'Hudba', accent: 'from-slate-800 via-amber-700 to-orange-300', image: 'https://images.nfctron.com/organizers/5c55adb1-d640-4b2c-bc77-e9c1cdcad74c.jpg', url: 'https://tickets.nfctron.com/event/wisemusic-s-r-o/26sunset-tour-sofian-medjmedj-praha' },
  { id: '90s-explosion', title: '90s Explosion 2027', date: '22. května 2027', place: 'Výstaviště Holešovice', city: 'Praha', category: 'Koncert', accent: 'from-purple-900 via-pink-500 to-yellow-300' },
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

function ArrowIcon() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function SearchIcon() {
  return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>;
}

function CalendarIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M8 3.5V7M16 3.5V7M3.5 10h17" /></svg>;
}

function EventCard({ event, large = false }: { event: EventItem; large?: boolean }) {
  return (
    <Link href={event.url ?? `/events/${event.id}`} className="group block min-w-0">
      <article className="overflow-hidden rounded-xl border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
        <div className={`relative ${large ? 'h-72' : 'aspect-[16/8]'} bg-gradient-to-br ${event.accent} overflow-hidden`}>
          {event.image && <Image src={event.image} alt={event.title} fill sizes={large ? '(min-width: 1024px) 40vw' : '(min-width: 768px) 33vw, 100vw'} className="object-cover" />}
        </div>
        <div className="relative p-4">
          <div className="pr-14">
            <h3 className="text-base font-bold leading-tight tracking-[-0.02em] text-gray-900">{event.title}</h3>
            <p className="mt-2 text-xs text-gray-500">{event.description ?? (event.category === 'Festival' ? 'Festival plný hudby a zážitků' : 'Objevte akci v NFCtron Tickets')}</p>
            <p className="mt-4 flex items-center gap-2 text-xs text-gray-500"><CalendarIcon className="h-3.5 w-3.5 shrink-0" />{event.date}</p>
            <p className="mt-2 flex items-center gap-2 text-xs text-gray-500"><span>⌖</span>{event.place} · {event.city}</p>
          </div>
          <span className="absolute right-4 top-4 overflow-hidden rounded-md border border-gray-200 bg-gray-50 text-center"><b className="block bg-primary-700 px-2 py-0.5 text-[9px] uppercase text-white">{event.date.startsWith('30. července') ? 'ČVC' : event.date.includes('srpna') ? 'SRP' : 'ČVC'}</b><span className="block px-2 py-1 text-sm font-semibold text-gray-600">{event.date.match(/\d+/)?.[0]}</span></span>
        </div>
      </article>
    </Link>
  );
}

function PromoCard({ item, year = false }: { item: { title: string; meta: string; accent: string; action?: string; image?: string }; year?: boolean }) {
  return <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
    <div className={`relative flex aspect-[16/8] items-end overflow-hidden bg-gradient-to-br ${item.accent} p-5`}>
      {item.image && <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <span className="relative text-xs font-bold uppercase tracking-[.14em] text-white/80">{year ? 'V prodeji na rok 2027' : 'Sériová akce'}</span>
    </div>
    <div className="flex items-center justify-between gap-4 p-5">
      <div><h3 className="text-lg font-bold text-primary-900">{item.title}</h3><p className="mt-1 text-xs text-gray-500">{item.meta}</p></div>
      <button className="shrink-0 rounded-full border border-primary-500 px-4 py-2 text-xs font-semibold text-primary-700 transition hover:bg-primary-50">{item.action ?? 'Detail akce'}</button>
    </div>
  </article>;
}

export default function VisitorHome() {
  return (
    <div className="tickets-ui min-h-screen">
      <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
        <nav className="container-fluid flex h-14 items-center justify-between gap-6">
          <Link href="/" aria-label="NFCtron domů" className="shrink-0"><Image src="/nfctron-logo-dark.svg" alt="NFCtron" width={86} height={16} priority /></Link>
          <div className="hidden h-full items-center gap-7 md:flex">
            <a href="#home" aria-current="page" className="flex h-full items-center border-b border-primary-700 pt-px text-xs font-semibold text-primary-700">Domů</a>
            <a href="#events" className="flex h-full items-center border-b border-transparent pt-px text-xs font-medium text-gray-500 transition hover:text-primary-700">Akce</a>
            <a href="#how-it-works" className="flex h-full items-center border-b border-transparent pt-px text-xs font-medium text-gray-500 transition hover:text-primary-700">Jak to funguje</a>
            <Link href="/for-organizers" className="flex h-full items-center border-b border-transparent pt-px text-xs font-medium text-gray-500 transition hover:text-primary-700">Pro pořadatele</Link>
          </div>
          <Link href="https://tickets.nfctron.com/login" className="rounded-full bg-primary-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary-800">Přihlásit se</Link>
        </nav>
      </header>

      <main>
        <section id="home" className="bg-white pb-8 pt-8 sm:pb-8 sm:pt-10 lg:pb-8 lg:pt-12">
          <div className="container-fluid grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-primary-600">Vstupenky a placení na akcích</p>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-[-.045em] text-primary-900 sm:text-5xl">Na akci bez starostí. Od vstupenky až po poslední drink.</h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-500">Objevte akce a kupte si vstupenku jednoduše online. NFCtron vám podle typu akce pomůže také s rychlým vstupem, pohodlným placením nebo vrácením nevyužitého kreditu.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#events" className="btn-primary">Prohlédnout akce <ArrowIcon /></a>
                <Link href="https://pass.nfctron.com" className="btn border border-gray-200 bg-white text-primary-900 hover:bg-gray-50">Můj NFCtron</Link>
              </div>
            </div>
            <EventCard event={events[0]} large />
          </div>
        </section>

        <section className="bg-white pb-12 pt-8 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
          <div className="container-fluid">
            <div className="flex items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-primary-600">Více míst, jeden zážitek</p><h2 className="mt-3 text-3xl font-bold tracking-[-.035em] text-primary-900">Sériové akce</h2></div><button className="hidden text-sm font-semibold text-primary-700 sm:block">Zobrazit všechny →</button></div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">{series.map(item => <PromoCard key={item.title} item={item} />)}</div>
          </div>
        </section>

        <section className="bg-primary-900 py-12 text-white sm:py-14 lg:py-16">
          <div className="container-fluid">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-primary-300">Příští sezóna začíná teď</p><h2 className="mt-3 text-3xl font-bold tracking-[-.035em] sm:text-4xl">Akce, na které se těšíme v roce 2027</h2><p className="mt-4 text-sm leading-relaxed text-white/55">První festivaly a koncerty jsou v prodeji. Vyberte si včas a mějte příští léto naplánované.</p></div>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">{events2027.map(item => <PromoCard key={item.title} item={item} year />)}</div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-[#faf9ff] py-12 sm:py-14 lg:py-16">
          <div className="container-fluid">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-primary-600">Vše důležité pro návštěvníky</p><h2 className="mt-3 text-3xl font-bold tracking-[-.035em] text-primary-900">NFCtron drží celý zážitek pohromadě.</h2></div>
            <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 md:grid-cols-3">
              {[['01', 'Vstupenka vždy po ruce', 'Nákup online a rychlý vstup na akci bez hledání e-mailů.'], ['02', 'Rychlé placení', 'Čip, karta nebo telefon. Jednoduše u stánku i bez hotovosti.'], ['03', 'Vrácení kreditu', 'Nevyužité peníze po akci odešlete zpět přímo online.']].map(([number, title, text]) => <div key={number} className="bg-white p-7"><span className="text-xs font-bold text-primary-500">{number}</span><h3 className="mt-7 text-lg font-bold text-primary-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="events" className="bg-white pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
          <div className="container-fluid">
            <h1 className="text-2xl font-bold tracking-[-0.025em] text-gray-900">Vstupenky v prodeji</h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-full border border-gray-200 bg-white px-5 text-gray-400 shadow-sm">
                <SearchIcon />
                <input type="search" placeholder="Vyhledejte akce podle názvu nebo místa…" className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400" />
              </label>
              <button className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-100 px-6 text-sm font-semibold text-gray-800 hover:bg-gray-200"><CalendarIcon />Všechny akce</button>
            </div>
            <h2 className="mt-11 text-xl font-bold text-gray-900">Akce</h2>
            <div className="mt-5 flex gap-1 overflow-x-auto border-b border-gray-200 pb-0">
              {categories.map(([category, icon], index) => <button key={category} aria-current={index === 1 ? 'page' : undefined} className={`relative flex shrink-0 items-center gap-2 px-4 pb-3 pt-2 text-xs font-semibold transition ${index === 1 ? 'text-primary-700 after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-primary-700' : 'text-gray-700 hover:text-primary-700'}`}><span className="text-sm">{icon}</span>{category}</button>)}
            </div>
            <div className="mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {catalogEvents.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-[#faf9ff] py-12 sm:py-14 lg:py-16">
          <div className="container-fluid">
            <div className="flex items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-primary-600">Novinky a inspirace</p><h2 className="mt-3 text-3xl font-bold tracking-[-.035em] text-primary-900">Blog NFCtron</h2></div><Link href="https://www.nfctron.com/cs/blog" className="hidden text-sm font-semibold text-primary-700 sm:block">Všechny články →</Link></div>
            <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white lg:grid-cols-[1.1fr_.9fr]">
              <Link href="https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci" className="group relative min-h-[360px] overflow-hidden lg:min-h-[480px]">
                <Image src="/yashica-events-acquisition.png" alt="NFCtron a Yashica Events" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"><span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] backdrop-blur">Hlavní událost · 3. 7. 2026</span><h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-[-.03em] sm:text-3xl">NFCtron dokončil akvizici společnosti Yashica Events</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">Rozšiřuje podporu pořadatelům akcí a propojuje technologie s produkčním know-how.</p></div>
              </Link>
              <div className="grid divide-y divide-gray-200">
                <Link href="https://www.nfctron.com/cs/blog" className="group flex flex-col justify-center p-7 transition hover:bg-primary-50 sm:p-9"><span className="text-xs font-semibold text-primary-500">Pro návštěvníky · 27. 3. 2026</span><h3 className="mt-3 text-xl font-bold leading-snug text-primary-900 group-hover:text-primary-700">WHOOP UCI Mountain Bike World Series 2026</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Nová sezóna, nové zážitky a atmosféra světového poháru v Novém Městě.</p><span className="mt-5 text-sm font-semibold text-primary-700">Přečíst článek →</span></Link>
                <Link href="https://www.nfctron.com/cs/blog" className="group flex flex-col justify-center p-7 transition hover:bg-primary-50 sm:p-9"><span className="text-xs font-semibold text-primary-500">Pro návštěvníky · 5. 2. 2026</span><h3 className="mt-3 text-xl font-bold leading-snug text-primary-900 group-hover:text-primary-700">Masters of Rock 2026: Čtyři dny metalové vášně</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Legendární festival se vrací do Vizovic už po dvaadvacáté.</p><span className="mt-5 text-sm font-semibold text-primary-700">Přečíst článek →</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-[#daebfa]" id="all-events">
          <div className="container-fluid">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
              <div>
                <span className="hub-badge mb-5">NFCtron účet</span>
                <h2 className="section-title">Celý zážitek na jednom místě.</h2>
                <p className="max-w-lg text-base leading-relaxed text-gray-500">Vstupenky, přehled útraty, hodnocení nákupů i nejrychlejší vrácení zbylého kreditu. Bez hledání účtenek a formulářů.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {['Všechny vstupenky po ruce', 'Přehled plateb na akci', 'Vrácení kreditu online', 'Upozornění a novinky'].map((item, index) => (
                    <div key={item} className="ticket-panel flex items-center gap-3 p-4"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">0{index + 1}</span><span className="text-sm font-semibold text-gray-800">{item}</span></div>
                  ))}
                </div>
                <Link href="https://pass.nfctron.com" className="btn-primary mt-7">Otevřít můj NFCtron účet <ArrowIcon /></Link>
              </div>
              <div className="rounded-xl bg-primary-700 p-6 text-white shadow-xl shadow-primary-900/15 sm:p-8">
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

        <section id="how-it-works" className="section bg-white">
          <div className="container-fluid text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-primary-600">NFCtron na akcích</p>
            <h2 className="section-title">Méně čekání. Více zážitků.</h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 text-left md:grid-cols-3">
              {[['01', 'Kupte vstupenku', 'Bezpečně online, během několika minut a rovnou do vašeho účtu.'], ['02', 'Plaťte bez starostí', 'Čipem, kartou nebo mobilem. Rychle i tam, kde není internet.'], ['03', 'Vraťte si kredit', 'Zbytek peněz po akci pošlete zpět na účet přímo z aplikace.']].map(([number, title, copy]) => <div key={number} className="bg-white p-7"><span className="text-xs font-bold text-primary-500">{number}</span><h3 className="mt-6 text-xl font-bold text-primary-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-primary-700 py-10 text-white sm:py-12">
          <div className="container-fluid flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div><p className="text-2xl font-bold tracking-[-.03em]">Pořádáte akci?</p><p className="mt-2 text-sm text-white/55">Podívejte se, co NFCtron umí pro pořadatele a prodejce.</p></div>
            <Link href="/for-organizers" className="btn bg-white text-primary-900 hover:bg-primary-100">Řešení pro pořadatele <ArrowIcon /></Link>
          </div>
        </section>
      </main>

      <footer className="bg-primary-900 py-12 text-white">
        <div className="container-fluid flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div><Image src="/nfctron-logo-white.svg" alt="NFCtron" width={106} height={20} /><p className="mt-3 text-xs text-white/40">Vstupenky a bezstarostné placení na akcích.</p></div>
          <div className="flex flex-wrap gap-5 text-xs text-white/50"><Link href="#events">Akce</Link><Link href="/for-organizers">Pro pořadatele</Link><Link href="/contact">Kontakt</Link><Link href="/privacy">Soukromí</Link></div>
        </div>
      </footer>
    </div>
  );
}

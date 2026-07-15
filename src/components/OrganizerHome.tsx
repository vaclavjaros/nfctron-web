import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import type { Locale } from '@/i18n/config';

const Arrow = () => <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>;
const Check = () => <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>;

const products = [
  { number: '01', title: 'Vstupenky', text: 'Prodej, kontrola vstupů a přehled objednávek v jednom systému.', points: ['Vlastní prodejní stránka', 'Bezpečné ověření vstupenek'] },
  { number: '02', title: 'Platby na akci', text: 'Rychlé bezhotovostní placení, které zvládne festival i plnou arénu.', points: ['Online přehled tržeb', 'Provoz i při výpadku internetu'] },
  { number: '03', title: 'NFCtron Hub', text: 'Data z prodeje, plateb a provozu dostupná pro váš tým v reálném čase.', points: ['Jeden přehled celé akce', 'Exporty a vyúčtování'] },
];

const steps = [
  ['Před akcí', 'Nastavíme prodej, platební model a provoz podle velikosti i charakteru akce.'],
  ['Během akce', 'Technologie i náš tým drží vstupy, platby a data pod kontrolou.'],
  ['Po akci', 'Máte připravené přehledy, refundace a podklady pro rychlé vyúčtování.'],
];

export default function OrganizerHome({ locale }: { locale: Locale }) {
  return (
    <div className="min-h-screen bg-white text-[#11132f]">
      <SiteHeader locale={locale} active="organizers" />

      <main>
        <section className="px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="mx-auto grid max-w-[1320px] items-stretch gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">Technologie a služby pro pořadatele</p>
              <h1 className="max-w-[650px] text-[42px] font-bold leading-[0.99] tracking-[-0.055em] text-[#090b3c] sm:text-[58px] lg:text-[68px]">Vaše akce.<br />Jeden systém.<br />Plná kontrola.</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">Vstupenky, platby a provozní data propojené v jednom řešení. Od prvního prodaného lístku až po finální vyúčtování.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:sales@nfctron.com" className="btn rounded-full bg-primary-700 px-6 text-white hover:bg-primary-900">Poptat řešení <Arrow /></a>
                <a href="#reseni" className="btn rounded-full border border-gray-200 bg-white px-6 text-primary-900 hover:bg-gray-50">Prohlédnout řešení</a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs text-gray-500"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check /></span> Řešení sestavíme podle vaší akce</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#f6f6f8] p-3 shadow-[0_20px_60px_rgba(15,12,70,0.07)] sm:p-5">
              <div className="h-full min-h-[420px] overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="flex h-14 items-center justify-between bg-[#211567] px-5 text-white"><span className="text-sm font-semibold">Přehled akce</span><span className="rounded-full bg-white/10 px-3 py-1 text-[10px]">Aktuální data</span></div>
                <div className="border-b border-gray-100 bg-[#3827b4] px-5 py-2 text-[10px] text-white/85">Vaše akce v reálném čase</div>
                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[['Celková tržba', '132 690 Kč'], ['Objednávky', '3 374'], ['Návštěvníci', '3 345']].map(([label,value]) => <div key={label} className="rounded-lg border border-gray-200 p-3 sm:p-4"><p className="text-[9px] text-gray-400">{label}</p><p className="mt-2 text-xs font-bold text-gray-900 sm:text-sm">{value}</p></div>)}
                  </div>
                  <div className="mt-4 rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between"><span className="text-xs font-semibold text-gray-800">Vývoj objednávek</span><span className="rounded bg-gray-100 px-2 py-1 text-[9px] text-gray-500">Celé období</span></div>
                    <div className="mt-6 flex h-44 items-end gap-1 border-b border-gray-200">
                      {[4,5,4,6,8,7,10,13,11,18,16,23,28,39,34,51,64,82].map((height,index) => <span key={index} className="flex-1 rounded-t-sm bg-blue-600" style={{height:`${height}%`}} />)}
                    </div>
                    <div className="mt-3 flex justify-end text-[9px] text-gray-400"><span className="mr-1.5 mt-0.5 h-2 w-2 rounded-sm bg-blue-600" /> Objednávky</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-[#fafafd] px-5 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-y-6 sm:grid-cols-4">
            {[['500+', 'akcí ročně'], ['10 mil.+', 'transakcí ročně'], ['15+', 'zemí'], ['24/7', 'dohled nad provozem']].map(([value,label],i) => <div key={label} className={`px-4 text-center ${i ? 'sm:border-l sm:border-gray-200' : ''}`}><strong className="block text-2xl tracking-[-0.04em] text-primary-900 sm:text-3xl">{value}</strong><span className="mt-1 block text-xs text-gray-500">{label}</span></div>)}
          </div>
        </section>

        <section id="reseni" className="scroll-mt-16 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-10 max-w-2xl sm:mb-14"><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">Jeden propojený ekosystém</p><h2 className="text-3xl font-semibold tracking-[-0.045em] text-primary-900 sm:text-5xl">Vše důležité pro vaši akci</h2><p className="mt-4 text-base leading-7 text-gray-500">Jednotlivé služby fungují samostatně. Největší přínos ale mají ve chvíli, kdy pracují společně.</p></div>
            <div className="grid gap-4 lg:grid-cols-3">
              {products.map(product => <article key={product.number} className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5 sm:p-8"><div className="mb-10 flex items-center justify-between"><span className="text-xs font-semibold text-blue-700">{product.number}</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-primary-700 transition group-hover:bg-primary-700 group-hover:text-white"><Arrow /></span></div><h3 className="text-2xl font-semibold tracking-[-0.035em] text-primary-900">{product.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-gray-500">{product.text}</p><ul className="mt-7 space-y-3 border-t border-gray-100 pt-6">{product.points.map(point => <li key={point} className="flex items-center gap-2 text-xs font-medium text-gray-700"><span className="text-emerald-600"><Check /></span>{point}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section id="jak-to-funguje" className="scroll-mt-16 bg-[#12104b] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">Od přípravy po vyúčtování</p><h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Technologie je jen začátek</h2><p className="mt-5 max-w-md text-sm leading-6 text-white/60">S NFCtron získáte kromě systému také zkušený tým, který rozumí reálnému provozu akcí.</p></div>
            <div className="divide-y divide-white/10 border-y border-white/10">{steps.map(([title,text],index) => <div key={title} className="grid gap-3 py-7 sm:grid-cols-[48px_150px_1fr] sm:items-start"><span className="text-xs text-blue-300">0{index+1}</span><h3 className="text-lg font-medium">{title}</h3><p className="text-sm leading-6 text-white/60">{text}</p></div>)}</div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-[#fafafd] lg:grid-cols-2">
              <div className="flex min-h-[360px] flex-col justify-between p-7 sm:p-10 lg:p-12"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">NFCtron Hub</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-primary-900 sm:text-4xl">Rozhodujte se podle dat, ne podle odhadu</h2><p className="mt-5 max-w-lg text-sm leading-6 text-gray-500">Sledujte prodeje, vytíženost míst i platební provoz v jednom přehledu. Během akce i zpětně.</p></div><a href="https://hub.nfctron.com" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary-700">Přejít do NFCtron Hub <Arrow /></a></div>
              <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-[#2f1a8a] via-[#211567] to-[#090729] p-8 text-white sm:p-10"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" /><div className="relative grid h-full grid-cols-2 content-center gap-3"><div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur"><p className="text-[10px] text-white/50">Prodej vstupenek</p><p className="mt-2 text-2xl font-bold">71 170 Kč</p></div><div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur"><p className="text-[10px] text-white/50">Prodáno</p><p className="mt-2 text-2xl font-bold">1 892</p></div><div className="col-span-2 rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur"><div className="flex h-28 items-end gap-2">{[12,18,25,22,37,45,61,86].map((h,i)=><span key={i} className="flex-1 rounded-t bg-blue-400" style={{height:`${h}%`}} />)}</div></div></div></div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"><div className="mx-auto max-w-[1320px] rounded-2xl bg-primary-700 px-7 py-12 text-center text-white sm:px-12 sm:py-16"><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">Pojďme probrat vaši akci</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Řešení postavíme kolem toho, co skutečně potřebujete</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/65">Napište nám základní informace. Ozveme se a společně projdeme vhodný model.</p><a href="mailto:sales@nfctron.com" className="btn mt-8 rounded-full bg-white px-6 text-primary-900 hover:bg-blue-50">Poptat řešení <Arrow /></a></div></section>
      </main>

      <footer className="border-t border-gray-100 px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1320px] flex-col gap-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between"><Image src="/nfctron-logo-dark.svg" alt="NFCtron" width={90} height={21} /><div className="flex flex-wrap gap-5"><Link href="/">Pro návštěvníky</Link><a href="mailto:sales@nfctron.com">Kontakt</a><Link href="/privacy">Soukromí</Link></div><span>© {new Date().getFullYear()} NFCtron</span></div></footer>
    </div>
  );
}

import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import ActionLink from "@/components/ui/ActionLink";
import type { Locale } from "@/i18n/config";
import PartnerEnquiryForm from "./PartnerEnquiryForm";

const copy = {
  cs: {
    badge: "NFCtron Production",
    eyebrow: "Celý event v jednom funkčním celku",
    title: "Postavíme tým, který vaši akci opravdu unese.",
    description: "NFCtron spojuje vlastní produkční kapacity a prověřené partnery do jednoho řízeného celku. Od prvního plánu po poslední kamion držíme návaznosti, tým i odpovědnost.",
    action: "Probrat produkci akce",
    storyEyebrow: "Vlastní kapacity. Ověřená síť. Jedno vedení.",
    storyTitle: "Jeden tým. Jeden plán. Jedna odpovědnost.",
    storyBody: "Festival, koncert i velká halová show potřebují jinou skladbu lidí, techniky a infrastruktury. NFCtron navrhne celek, určí návaznosti a sestaví tým z vlastních kapacit a ověřených partnerů.",
    phases: [
      ["01", "Navrhneme celek", "Prostor, kapacity, pohyb lidí, technologie a provoz přeložíme do jednoho produkčního plánu."],
      ["02", "Sestavíme tým", "Propojíme vlastní produkci s prověřenými specialisty na stage, areál, vodu, vstupy i show."],
      ["03", "Řídíme návaznosti", "Koordinujeme přípravu, provoz na místě i předání tak, aby pořadatel neřešil mezery mezi dodavateli."],
    ],
    scopeEyebrow: "Zkušenost z reálného provozu",
    scopeTitle: "Od koridoru po stage. Od vody po velkou show.",
    scopeBody: "Produkce není seznam položek. Je to schopnost vidět celý areál, návštěvníka i provoz ve stejnou chvíli.",
    scopeNote: "Podle formátu akce propojujeme vstupy a koridory, stage a techniku, stany, vodní hospodářství, prodejce i specializované dodavatele show.",
    venueCaption: "Areál, infrastruktura a pohyb návštěvníků",
    showCaption: "Stage, technika a živý provoz",
    partnerEyebrow: "Partnerská síť NFCtron",
    partnerTitle: "Děláte svou část eventu opravdu dobře? Pojďme ji propojit s celkem.",
    partnerBody: "Budujeme prověřenou síť profesionálních dodavatelů. Kvalitní firmy propojujeme s pořadateli, konkrétními akcemi a týmem, který drží produkci pohromadě.",
  },
  en: {
    badge: "NFCtron Production",
    eyebrow: "The entire event working as one",
    title: "We build the team your event can rely on.",
    description: "NFCtron combines in-house production capacity and trusted partners into one managed whole. From the first plan to the final truck, we own the connections, the team and the responsibility.",
    action: "Discuss event production",
    storyEyebrow: "In-house capacity. Trusted network. One lead.",
    storyTitle: "One team. One plan. One responsibility.",
    storyBody: "Every festival, concert and large arena show needs a different mix of people, technology and infrastructure. NFCtron designs the whole, defines the handovers and builds the team from in-house capacity and trusted partners.",
    phases: [
      ["01", "Design the whole", "We turn space, capacity, visitor flow, technology and operations into one production plan."],
      ["02", "Build the team", "We connect in-house production with trusted specialists in stages, venues, water, access and show delivery."],
      ["03", "Manage every handover", "We coordinate preparation, on-site operations and delivery so the organizer never has to bridge supplier gaps."],
    ],
    scopeEyebrow: "Experience from real operations",
    scopeTitle: "From access lanes to the stage. From water to a large-scale show.",
    scopeBody: "Production is not a list of items. It is the ability to see the whole venue, the visitor and the operation at the same time.",
    scopeNote: "For each event format, we connect access and corridors, stages and technology, tents, water systems, vendors and specialist show suppliers.",
    venueCaption: "Venue, infrastructure and visitor flow",
    showCaption: "Stage, technology and live operations",
    partnerEyebrow: "NFCtron partner network",
    partnerTitle: "Excellent at your part of an event? Let’s connect it to the whole.",
    partnerBody: "We are building a trusted network of professional suppliers. We connect strong companies with organizers, specific events and the team responsible for the complete production.",
  },
} as const;

const photos = [
  { src: "https://images.nfctron.com/organizers/525fe2b1-e849-4709-bcdf-de37ca5e5534.jpg", alt: "Produkce festivalového areálu" },
  { src: "https://images.nfctron.com/organizers/ad03b28f-4e52-4649-8b20-6ccc15352ecb.jpg", alt: "Produkce koncertního areálu" },
];

export default function ProductionHome({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="production" />
      <main>
        <AudienceHeroSection
          badge={c.badge}
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
          actions={
            <div className="mt-8 flex justify-center">
              <ActionLink href="#partner" arrow>
                {c.action}
              </ActionLink>
            </div>
          }
        />

        <section id="process" className="scroll-mt-20 bg-[#fafafd] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {c.storyEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {c.storyTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {c.storyBody}
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {c.phases.map(([number, title, body]) => (
                <article
                  key={number}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
                >
                  <span className="text-[9px] font-semibold text-blue-700">
                    {number}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-gray-500">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="scroll-mt-20 bg-primary-900 px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">{c.scopeEyebrow}</p><h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">{c.scopeTitle}</h2></div>
              <div><p className="text-sm leading-7 text-white/60 sm:text-base">{c.scopeBody}</p><p className="mt-5 text-xs leading-6 text-white/40">{c.scopeNote}</p></div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {photos.map((photo,index)=><figure key={photo.src} className="group"><div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-white/5"><Image src={photo.src} alt={photo.alt} fill className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100" sizes="(max-width: 640px) 100vw, 50vw" /></div><figcaption className="mt-3 text-[10px] font-medium text-white/45">{index === 0 ? c.venueCaption : c.showCaption}</figcaption></figure>)}
            </div>
          </div>
        </section>

        <section id="partner" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.partnerEyebrow}</p><h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">{c.partnerTitle}</h2><p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">{c.partnerBody}</p></div>
            <div className="rounded-[28px] bg-[#f7f8fb] p-6 sm:p-8"><PartnerEnquiryForm locale={locale} /></div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

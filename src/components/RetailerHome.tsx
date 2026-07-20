import { AudiencePage } from "./audience/AudiencePage";
import { type Locale } from "@/i18n/config";
import RetailerActivity from "@/features/retailers/RetailerActivity";

const copy = {
  cs: {
    badge: "NFCtron pro prodejce",
    eyebrow: "Prodejci jsou součást zážitku",
    title: "Správní prodejci. Správná akce. Fungující provoz.",
    description:
      "NFCtron propojuje prodejce, pořadatele a provozní partnery. Od prvního spojení v Marketplace až po tržby, vyúčtování a podporu přímo na akci.",
    vendorAction: "Chci prodávat na akcích",
    vendorRouteLabel: "Pro prodejce",
    vendorRouteBody: "Najděte aktivní akce a nabídněte svůj koncept.",
    organizerAction: "Hledám prodejce",
    organizerRouteLabel: "Pro pořadatele",
    organizerRouteBody: "Vyberte ověřené prodejce pro svou akci.",
    marketplaceEyebrow: "NFCtron Hub Marketplace",
    marketplaceTitle: "Když chcete být součástí další akce.",
    marketplaceBody:
      "Pořadatel zveřejní akci a její potřeby. Prodejce přihlásí svůj koncept. NFCtron Hub drží nabídku, poptávku a další komunikaci na jednom místě.",
    marketplaceCta: "Otevřít NFCtron Hub",
    organizer: "Pořadatel",
    organizerStep: "Zveřejní akci a její potřeby",
    marketplace: "Marketplace",
    marketplaceStep: "Propojí nabídku s poptávkou",
    vendor: "Prodejce",
    vendorStep: "Přihlásí svůj koncept",
    partnerEyebrow: "Znalost trhu a silní partneři",
    partnerTitle: "Nejen stánek. Když je potřeba, postavíme celý gastro provoz.",
    partnerBody:
      "Každá akce potřebuje jiný rozsah. NFCtron zná trh a umí pořadatele propojit s klíčovým partnerem, který zajistí nápojové partnery, bary, gastro mix i samotný provoz.",
    partnerCta: "Navrhnout řešení pro akci",
    partnerPoints: [
      "Klíčový gastro partner",
      "Nápojové značky a dodavatelé",
      "Kompletní stavba a provoz barů",
      "Výběr prodejců podle typu akce",
    ],
    trustEyebrow: "Bezpečný provoz na NFCtron akcích",
    trustTitle: "Prodejce má prodávat. O platby a podporu se opře o NFCtron.",
    trustBody:
      "Pokud akce běží na NFCtron, držíme jasný proces od každé platby až po vyúčtování. Prodejce má přehled o tržbách, komunikační podporu a jistotu, že ví, co se děje před akcí, na místě i po ní.",
    stat: "1 150",
    statLabel: "prodejců využívá systém NFCtron každou sezonu",
    trustItems: [
      ["Jistota tržeb", "Platby procházejí systémem NFCtron a prodejce má tržby i provozní data přehledně v NFCtron Hub."],
      ["Jasné vyúčtování", "Od uzavření prodeje po předání podkladů má každý krok svého vlastníka."],
      ["Podpora, která komunikuje", "Prodejce nezůstává s provozním problémem nebo dotazem sám."],
    ],
    finalEyebrow: "Prodejce není doplněk programu",
    finalTitle: "Je součástí toho, proč se lidé na akci vracejí.",
    finalBody:
      "Pomůžeme poskládat nabídku, která sedí návštěvníkům, místu i ekonomice celé akce.",
    finalVendor: "Chci do Marketplace",
    finalOrganizer: "Chci řešit prodejce pro akci",
  },
  en: {
    badge: "NFCtron for vendors",
    eyebrow: "Vendors are part of the experience",
    title: "The right vendors. The right event. Smooth operations.",
    description:
      "NFCtron connects vendors, organizers and operating partners — from the first Marketplace match to revenue, settlement and on-site support.",
    vendorAction: "I want to sell at events",
    vendorRouteLabel: "For vendors",
    vendorRouteBody: "Find active events and offer your concept.",
    organizerAction: "I am looking for vendors",
    organizerRouteLabel: "For organizers",
    organizerRouteBody: "Choose trusted vendors for your event.",
    marketplaceEyebrow: "NFCtron Hub Marketplace",
    marketplaceTitle: "Where a great event meets the right vendor.",
    marketplaceBody:
      "Organizers publish an event and open opportunities to vendors. Vendors choose events that fit their concept, while organizers can actively find and approach the right operators.",
    marketplaceCta: "Open NFCtron Hub",
    organizer: "Organizer",
    organizerStep: "Publishes the event and its needs",
    marketplace: "Marketplace",
    marketplaceStep: "Matches supply with demand",
    vendor: "Vendor",
    vendorStep: "Applies with a concept",
    partnerEyebrow: "Market knowledge and strong partners",
    partnerTitle: "More than a stand. When needed, we build the entire gastro operation.",
    partnerBody:
      "Every event needs a different scope. NFCtron knows the market and can connect organizers with a key partner for beverage brands, bars, the gastro mix and complete operations.",
    partnerCta: "Design my event solution",
    partnerPoints: [
      "Key gastro partner",
      "Beverage brands and suppliers",
      "Complete bar build and operation",
      "Vendor mix tailored to the event",
    ],
    trustEyebrow: "Secure operations at NFCtron events",
    trustTitle: "Vendors focus on sales. NFCtron backs payments and support.",
    trustBody:
      "When an event runs on NFCtron, every payment follows a clear path through settlement. Vendors see their revenue, have communication support and know what is happening before, during and after the event.",
    stat: "1,150",
    statLabel: "vendors use the NFCtron system every season",
    trustItems: [
      ["Revenue you can rely on", "Payments run through NFCtron and vendors see their revenue and operating data clearly in NFCtron Hub."],
      ["Clear settlement", "Every step from the last sale to final documents has a clear owner."],
      ["Support that communicates", "Vendors are never left alone with an operational issue or question."],
    ],
    finalEyebrow: "A vendor is not an add-on",
    finalTitle: "They are part of why people return to an event.",
    finalBody:
      "We help build an offer that works for visitors, the venue and the economics of the whole event.",
    finalVendor: "Join the Marketplace",
    finalOrganizer: "Find vendors for my event",
  },
} as const;

const primaryButton =
  "inline-flex h-11 items-center justify-center gap-4 rounded-full bg-primary-700 px-6 text-xs font-semibold text-white transition hover:bg-primary-800";
const secondaryButton =
  "inline-flex h-11 items-center justify-center gap-4 rounded-full border border-gray-200 bg-white px-6 text-xs font-semibold text-primary-700 transition hover:bg-primary-50";

export default function RetailerHome({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const contactHref =
    "mailto:sales@nfctron.com?subject=NFCtron%20Marketplace%20a%20prodejci";

  return (
    <AudiencePage
      locale={locale}
      mode="retailers"
      badge={c.badge}
      eyebrow={c.eyebrow}
      title={c.title}
      description={c.description}
      actions={
        <div className="mx-auto mt-8 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2">
          <a
            href="#active-events"
            className="group flex min-h-[92px] items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5"
          >
            <span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-700">{c.vendorRouteLabel}</span>
              <span className="mt-1.5 block text-sm font-semibold text-primary-800">{c.vendorAction}</span>
              <span className="mt-1 block text-[11px] leading-4 text-gray-500">{c.vendorRouteBody}</span>
            </span>
            <span aria-hidden className="shrink-0 text-primary-700 transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#partner"
            className="group flex min-h-[92px] items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5"
          >
            <span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-700">{c.organizerRouteLabel}</span>
              <span className="mt-1.5 block text-sm font-semibold text-primary-800">{c.organizerAction}</span>
              <span className="mt-1 block text-[11px] leading-4 text-gray-500">{c.organizerRouteBody}</span>
            </span>
            <span aria-hidden className="shrink-0 text-primary-700 transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      }
    >
      <RetailerActivity locale={locale} />

      <section
        id="marketplace"
        className="scroll-mt-24 overflow-hidden rounded-[30px] bg-[#f3f2ff] px-6 py-10 sm:px-10 sm:py-14 lg:px-14"
      >
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            {c.marketplaceEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
            {c.marketplaceTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            {c.marketplaceBody}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {[
            ["01", c.organizer, c.organizerStep],
            ["02", c.marketplace, c.marketplaceStep],
            ["03", c.vendor, c.vendorStep],
          ].map(([number, title, body], index) => (
            <div key={number} className="contents">
              <div className="flex-1 rounded-2xl bg-white/85 p-5 sm:p-6">
                <span className="text-[9px] font-semibold text-blue-700">{number}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.025em]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">{body}</p>
              </div>
              {index < 2 && (
                <span className="self-center text-lg text-blue-700/45" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <a href="https://hub.nfctron.com" className={`${primaryButton} mt-8`}>
          {c.marketplaceCta} <span aria-hidden>→</span>
        </a>
      </section>

      <section
        id="partner"
        className="mt-5 scroll-mt-24 overflow-hidden rounded-[30px] bg-[#090c3b] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              {c.partnerEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              {c.partnerTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
              {c.partnerBody}
            </p>
          </div>

          <div className="w-full max-w-md space-y-4">
            {c.partnerPoints.map((point, index) => (
              <div key={point} className="flex items-center gap-5">
                <span className="text-[9px] font-semibold text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-white/90 sm:text-base">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href={contactHref}
          className="mt-10 inline-flex h-11 items-center justify-center gap-4 rounded-full bg-white px-6 text-xs font-semibold text-[#12145d] transition hover:bg-primary-50"
        >
          {c.partnerCta} <span aria-hidden>→</span>
        </a>
      </section>

      <section id="guarantee" className="scroll-mt-24 px-1 py-16 sm:px-4 sm:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              {c.trustEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              {c.trustTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              {c.trustBody}
            </p>
          </div>

          <div className="w-full max-w-md">
            <p className="text-6xl font-semibold tracking-[-0.06em] text-primary-800 sm:text-7xl">
              {c.stat}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">{c.statLabel}</p>

            <div className="mt-10 space-y-8">
              {c.trustItems.map(([title, body], index) => (
                <div key={title} className="flex gap-5">
                  <span className="pt-1 text-[9px] font-semibold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em]">{title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-gray-500">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 rounded-[30px] bg-[#f7f8fc] px-6 py-12 text-center sm:px-10 sm:py-16">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
          {c.finalEyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
          {c.finalTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          {c.finalBody}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://hub.nfctron.com" className={primaryButton}>
            {c.finalVendor} <span aria-hidden>→</span>
          </a>
          <a href={contactHref} className={secondaryButton}>
            {c.finalOrganizer}
          </a>
        </div>
      </section>
    </AudiencePage>
  );
}

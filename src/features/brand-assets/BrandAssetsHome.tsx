import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import ActionLink from "@/components/ui/ActionLink";
import type { Locale } from "@/i18n/config";

const copy = {
  cs: {
    badge: "NFCtron Brand Assets",
    eyebrow: "Podklady pro pořadatele",
    title: "Jedna grafika. Celá cesta návštěvníka.",
    description:
      "Připravte podklady jednou. NFCtron je využije v nákupním košíku, na webu a v aplikaci i na vstupence nebo dárkovém poukazu.",
    primaryAction: "Zobrazit specifikaci",
    logoAction: "Stáhnout logo NFCtron",
    visualEyebrow: "Hlavní vizuál akce",
    visualTitle: "Začněte formátem 960 × 480 px.",
    visualBody:
      "Tento poměr stran je hlavním bannerem akce v nákupním košíku i v jejím náhledu. Vizuál může nést fotografii, logo akce nebo hlavní jména programu.",
    visualNote:
      "Datum a místo není nutné vkládat přímo do grafiky. NFCtron je zobrazí jako samostatné údaje vedle vizuálu.",
    format: "960 × 480 px",
    files: "JPG nebo PNG",
    size: "Max. 8 MB",
    example: "Ukázka hlavního vizuálu ve formátu 2 : 1",
    journeyEyebrow: "Jeden podklad, více použití",
    journeyTitle: "Vizuál zůstává rozpoznatelný v každém kroku.",
    journeyBody:
      "Základní motiv drží identitu akce. Jednotlivé výstupy potom připravíme podle místa, kde je návštěvník uvidí.",
    journey: [
      ["01", "Nákupní košík", "Hlavní banner při výběru vstupenek a v náhledu akce."],
      ["02", "Web a mobilní aplikace", "Formáty pro doporučení akce a její prezentaci návštěvníkům."],
      ["03", "Vstupenka a dárkový poukaz", "Personalizované PDF podklady navazující na vizuální identitu akce."],
      ["04", "Skupiny akcí a turné", "Společný motiv pro více termínů, měst nebo celou sérii."],
    ],
    extrasEyebrow: "Další podklady",
    extrasTitle: "Všechno důležité na jednom místě.",
    extrasBody:
      "Vedle hlavního vizuálu můžete připravit také podklady pro provoz akce a návaznou komunikaci.",
    extras: [
      ["Logo NFCtron", "Pro partnerské vizuály, web akce a povinné výstupy."],
      ["Šablona náramku", "Podklad pro náramek s čipem u podporovaných akcí."],
      ["Online účtenka", "Doplňkové informace a vizuál pro účtenku u čipových akcí."],
      ["Darování kreditu", "Komunikace možnosti věnovat nevyužitý kredit vybranému projektu."],
    ],
    handoffEyebrow: "Předání podkladů",
    handoffTitle: "Máte hotovo? Pošlete vše svému NFCtron kontaktu.",
    handoffBody:
      "Před nasazením zkontrolujeme formát, čitelnost a návaznost jednotlivých výstupů. Pokud si nejste jistí, stačí poslat zdrojová data a domluvit další krok.",
    handoffAction: "Napsat NFCtron",
  },
  en: {
    badge: "NFCtron Brand Assets",
    eyebrow: "Assets for organizers",
    title: "One visual. The entire visitor journey.",
    description:
      "Prepare your assets once. NFCtron will carry them through checkout, the website and app, as well as tickets and gift vouchers.",
    primaryAction: "View specification",
    logoAction: "Download NFCtron logo",
    visualEyebrow: "Main event visual",
    visualTitle: "Start with 960 × 480 px.",
    visualBody:
      "This aspect ratio is the event's primary banner in checkout and event previews. It can feature photography, the event logo or headline artists.",
    visualNote:
      "The date and venue do not need to be embedded in the artwork. NFCtron displays them as separate event details.",
    format: "960 × 480 px",
    files: "JPG or PNG",
    size: "Max. 8 MB",
    example: "Example of a primary visual in a 2:1 ratio",
    journeyEyebrow: "One asset, multiple uses",
    journeyTitle: "The event stays recognizable at every step.",
    journeyBody:
      "The core visual preserves the event identity. Each output is then adapted to the place where visitors will see it.",
    journey: [
      ["01", "Checkout", "The primary banner shown while selecting tickets and in the event preview."],
      ["02", "Website and mobile app", "Formats used to recommend and present the event to visitors."],
      ["03", "Ticket and gift voucher", "Personalized PDF assets matching the event's visual identity."],
      ["04", "Event series and tours", "One shared visual system across dates, cities or an entire series."],
    ],
    extrasEyebrow: "Additional assets",
    extrasTitle: "Everything important in one place.",
    extrasBody:
      "Alongside the main visual, you can prepare supporting assets for event operations and follow-up communication.",
    extras: [
      ["NFCtron logo", "For partner artwork, the event website and required outputs."],
      ["Wristband template", "Artwork for chip wristbands at supported events."],
      ["Online receipt", "Additional information and artwork for receipts at chip-enabled events."],
      ["Credit donation", "Communication for donating unused credit to a selected project."],
    ],
    handoffEyebrow: "Asset handoff",
    handoffTitle: "Ready? Send everything to your NFCtron contact.",
    handoffBody:
      "Before publishing, we check the format, legibility and consistency of every output. If you are unsure, send us the source files and we will agree on the next step.",
    handoffAction: "Contact NFCtron",
  },
} as const;

export default function BrandAssetsHome({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} />
      <main>
        <AudienceHeroSection
          badge={c.badge}
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
          actions={
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href="#specification" arrow>
                {c.primaryAction}
              </ActionLink>
              <a
                href="/nfctron-logo-dark.svg"
                download
                className="inline-flex h-9 items-center gap-5 rounded-full border border-gray-200 bg-white px-5 text-[11px] font-medium text-primary-700 transition hover:bg-primary-50"
              >
                {c.logoAction}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          }
        />

        <section id="specification" className="scroll-mt-20 bg-[#f7f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <figure>
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-primary-50 shadow-[0_16px_50px_rgba(8,13,72,0.08)]">
                <Image
                  src="/events/vysocina-fest/hero-2027.jpg"
                  alt={c.example}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <figcaption className="mt-3 text-[10px] text-gray-400">{c.example}</figcaption>
            </figure>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.visualEyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl">{c.visualTitle}</h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">{c.visualBody}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[c.format, c.files, c.size].map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-2 text-[10px] font-medium text-primary-700 shadow-sm">{item}</span>
                ))}
              </div>
              <p className="mt-6 text-xs leading-6 text-gray-400">{c.visualNote}</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.journeyEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl">{c.journeyTitle}</h2>
                <p className="mt-5 text-sm leading-7 text-gray-500">{c.journeyBody}</p>
              </div>
              <div className="space-y-3">
                {c.journey.map(([number, title, description]) => (
                  <article key={number} className="flex gap-5 rounded-2xl bg-[#fafafd] p-5 sm:gap-7 sm:p-6">
                    <span className="pt-1 text-[9px] font-semibold text-blue-700">{number}</span>
                    <div>
                      <h3 className="text-base font-semibold tracking-[-0.025em]">{title}</h3>
                      <p className="mt-2 text-xs leading-6 text-gray-500">{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-900 px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">{c.extrasEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl">{c.extrasTitle}</h2>
                <p className="mt-5 text-sm leading-7 text-white/55">{c.extrasBody}</p>
              </div>
              <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {c.extras.map(([title, description], index) => (
                  <article key={title}>
                    <span className="text-[9px] font-semibold text-blue-300">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.025em]">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-white/45">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">{c.handoffEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">{c.handoffTitle}</h2>
            <p className="mt-5 max-w-[660px] text-sm leading-7 text-gray-500">{c.handoffBody}</p>
            <div className="mt-8">
              <ActionLink href="mailto:info@nfctron.com" arrow>{c.handoffAction}</ActionLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

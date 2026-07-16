import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Locale } from "@/i18n/config";

const content = {
  cs: {
    eyebrow: "Novinka v NFCtron ID",
    title: "Jedna karta. Všechny zážitky.",
    description:
      "NFCtron Card propojí platby, zůstatek a přehled transakcí na jednom místě. Virtuálně, bezpečně a vždy po ruce.",
    primaryCta: "Prohlédnout možnosti",
    secondaryCta: "Můj NFCtron",
    previewLabel: "NFCtron Card",
    balanceLabel: "Dostupný zůstatek",
    status: "Aktivní",
    virtual: "Virtuální",
    actions: ["Zmrazit kartu", "Zobrazit údaje", "Dobít kartu"],
    sectionEyebrow: "Karta pod kontrolou",
    sectionTitle: "Všechno důležité v NFCtron ID.",
    sectionDescription:
      "Kartu navrhujeme tak, aby byla jednoduchá na první použití a přehledná při každé další platbě.",
    features: [
      [
        "01",
        "Zůstatek hned po ruce",
        "Aktuální stav karty uvidíte bez hledání v historii nebo e-mailech.",
      ],
      [
        "02",
        "Dobití během chvíle",
        "Peníze na kartu doplníte přímo z přehledu, kdykoliv je potřebujete.",
      ],
      [
        "03",
        "Bezpečnost pod kontrolou",
        "Kartu můžete okamžitě zmrazit a znovu aktivovat podle potřeby.",
      ],
      [
        "04",
        "Přehled transakcí",
        "Každé dobití i platbu uvidíte přehledně na jednom místě.",
      ],
    ],
    historyEyebrow: "Přehled bez hledání",
    historyTitle: "Každý pohyb vidíte hned.",
    historyDescription:
      "Zůstatek i historii transakcí připravujeme jako přirozenou součást účtu NFCtron — od prvního dobití po poslední platbu.",
    topUp: "Dobití karty",
    betaNote:
      "NFCtron Card je nyní ve fázi Beta. Funkce a dostupnost postupně rozšiřujeme.",
  },
  en: {
    eyebrow: "New in NFCtron ID",
    title: "One card. Every experience.",
    description:
      "NFCtron Card brings payments, balance and transaction history into one place. Virtual, secure and always at hand.",
    primaryCta: "Explore features",
    secondaryCta: "My NFCtron",
    previewLabel: "NFCtron Card",
    balanceLabel: "Available balance",
    status: "Active",
    virtual: "Virtual",
    actions: ["Freeze card", "View details", "Top up"],
    sectionEyebrow: "Your card under control",
    sectionTitle: "Everything important in NFCtron ID.",
    sectionDescription:
      "We are designing the card to feel simple from the first use and clear with every payment that follows.",
    features: [
      [
        "01",
        "Balance at a glance",
        "See the current card balance without searching through history or emails.",
      ],
      [
        "02",
        "Top up in moments",
        "Add money directly from the overview whenever you need it.",
      ],
      [
        "03",
        "Security in your hands",
        "Freeze the card instantly and reactivate it whenever needed.",
      ],
      [
        "04",
        "Transaction overview",
        "Every top-up and payment is clearly available in one place.",
      ],
    ],
    historyEyebrow: "No searching required",
    historyTitle: "See every movement instantly.",
    historyDescription:
      "Balance and transaction history are becoming a natural part of NFCtron ID — from the first top-up to the last payment.",
    topUp: "Card top-up",
    betaNote:
      "NFCtron Card is currently in Beta. Features and availability will expand gradually.",
  },
} as const;

function MastercardMark() {
  return (
    <span className="relative block h-7 w-12" aria-hidden="true">
      <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[#eb001b]/75" />
      <span className="absolute right-0 top-0 h-7 w-7 rounded-full bg-[#f79e1b]/75" />
    </span>
  );
}

function CardActionIcon({ type }: { type: "freeze" | "details" | "topup" }) {
  if (type === "freeze") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
        <path
          d="M10 3v14M4 6l12 8M16 6 4 14M5 10h10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
      </svg>
    );
  }

  if (type === "details") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
        <path
          d="M2.8 10s2.7-4.2 7.2-4.2 7.2 4.2 7.2 4.2-2.7 4.2-7.2 4.2S2.8 10 2.8 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle
          cx="10"
          cy="10"
          r="1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 4v12M4 10h12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CardPreview({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <div className="rounded-[28px] bg-gradient-to-br from-[#f1f2ff] via-[#fafaff] to-[#f5f3ff] p-6 sm:p-10">
      <div className="mx-auto max-w-[390px]">
        <div className="relative aspect-[1.58/1] overflow-hidden rounded-[22px] border border-white/80 bg-gradient-to-br from-white via-[#fdfdff] to-[#f2efff] p-6 shadow-[0_24px_55px_rgba(24,20,92,0.14)] sm:p-8">
          <Image
            src="/nfctron-logo-dark.svg"
            alt="NFCtron"
            width={108}
            height={20}
          />
          <div className="mt-8 h-9 w-11 rounded-lg border border-gray-200 bg-gradient-to-br from-[#ecece8] to-[#d8d8d2]" />
          <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[11px] font-medium tracking-[0.24em] text-gray-400">
                •••• •••• •••• 7196
              </p>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-gray-500">
                NFCtron ID
              </p>
            </div>
            <MastercardMark />
          </div>
        </div>

        <div className="mt-7 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            {copy.balanceLabel}
          </p>
          <strong className="mt-1 block text-2xl font-semibold tracking-[-0.04em] text-primary-900">
            700,00 Kč
          </strong>
          <p className="mt-3 text-xs font-semibold text-primary-900">
            {copy.previewLabel}
            <span className="ml-2 rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-600">
              {copy.status}
            </span>
          </p>
          <p className="mt-2 text-[9px] text-gray-400">
            {copy.virtual} · •••• 7196
          </p>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {copy.actions.map((action, index) => (
            <div key={action} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-medium text-primary-700 shadow-sm">
                <CardActionIcon
                  type={
                    index === 0 ? "freeze" : index === 1 ? "details" : "topup"
                  }
                />
              </span>
              <span className="mt-2 block text-[8px] leading-4 text-gray-500">
                {action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CardsHome({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="cards" />
      <main>
        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-primary-700">
                NFCtron Card · Beta
              </span>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                {copy.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="#features" arrow>
                  {copy.primaryCta}
                </ActionLink>
                <ActionLink href="https://pass.nfctron.com" variant="secondary">
                  {copy.secondaryCta}
                </ActionLink>
              </div>
            </div>
            <CardPreview locale={locale} />
          </div>
        </section>

        <section
          id="features"
          className="scroll-mt-20 bg-[#f8f8fb] px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.sectionEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {copy.sectionTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {copy.sectionDescription}
              </p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {copy.features.map(([number, title, description]) => (
                <article
                  key={number}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <span className="text-[9px] font-semibold text-primary-500">
                    {number}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {copy.historyEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {copy.historyTitle}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                {copy.historyDescription}
              </p>
              <p className="mt-6 text-[10px] leading-5 text-gray-400">
                {copy.betaNote}
              </p>
            </div>
            <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              {[500, 200].map((amount, index) => (
                <div
                  key={amount}
                  className="flex items-center justify-between gap-5 border-b border-gray-100 py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  <div>
                    <strong className="block text-xs font-semibold">
                      {copy.topUp}
                    </strong>
                    <span className="mt-1 block text-[9px] text-gray-400">
                      16. 7. 2026 · {index === 0 ? "15:39" : "15:41"}
                    </span>
                  </div>
                  <strong className="text-xs font-semibold text-emerald-600">
                    +{amount},00 Kč
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import type { Translator } from "./types";

const accountFeatures = [
  "Všechny vstupenky po ruce",
  "Přehled plateb na akci",
  "Vrácení kreditu online",
  "Upozornění a novinky",
];
const steps = [
  [
    "01",
    "Kupte vstupenku",
    "Bezpečně online, během několika minut a rovnou do vašeho účtu.",
  ],
  [
    "02",
    "Plaťte bez starostí",
    "Čipem, kartou nebo mobilem. Rychle i tam, kde není internet.",
  ],
  [
    "03",
    "Vraťte si kredit",
    "Zbytek peněz po akci pošlete zpět na účet přímo z aplikace.",
  ],
];

export function AccountSection({ t }: { t: Translator }) {
  return (
    <section className="section bg-[#daebfa]" id="all-events">
      <div className="container-fluid">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div>
            <span className="hub-badge mb-5">{t("NFCtron účet")}</span>
            <h2 className="section-title">
              {t("Celý zážitek na jednom místě.")}
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-gray-500">
              Vstupenky, přehled útraty, hodnocení nákupů i nejrychlejší vrácení
              zbylého kreditu. Bez hledání účtenek a formulářů.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {accountFeatures.map((item, index) => (
                <div
                  key={item}
                  className="ticket-panel flex items-center gap-3 p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {t(item)}
                  </span>
                </div>
              ))}
            </div>
            <Link href="https://pass.nfctron.com" className="btn-primary mt-7">
              {t("Otevřít můj NFCtron účet")} <ArrowIcon />
            </Link>
          </div>
          <AccountPreview />
        </div>
      </div>
    </section>
  );
}

function AccountPreview() {
  return (
    <div className="rounded-xl bg-primary-700 p-6 text-white shadow-md shadow-primary-900/10 sm:p-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <Image
          src="/nfctron-logo-white.svg"
          alt="NFCtron"
          width={106}
          height={20}
        />
        <span className="rounded bg-white/10 px-2 py-1 text-[10px] text-white/70">
          Mobilní aplikace
        </span>
      </div>
      <div className="grid gap-3 py-6 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-5 text-gray-900">
          <p className="text-xs text-gray-400">Moje vstupenky</p>
          <p className="mt-2 text-2xl font-bold">4 aktivní</p>
          <div className="mt-5 h-2 rounded bg-primary-100">
            <div className="h-full w-3/4 rounded bg-primary-500" />
          </div>
        </div>
        <div className="rounded-xl bg-primary-600 p-5">
          <p className="text-xs text-white/60">Kredit k vrácení</p>
          <p className="mt-2 text-2xl font-bold">1 240 Kč</p>
          <button className="mt-5 rounded-full bg-white px-3 py-2 text-[11px] font-semibold text-primary-900">
            Vrátit kredit
          </button>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm font-semibold">LET IT ROLL 2026</p>
        <p className="mt-1 text-xs text-white/50">
          Vstupenka připravena · QR kód v aplikaci
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection({ t }: { t: Translator }) {
  return (
    <section id="how-it-works" className="section scroll-mt-16 bg-white">
      <div className="container-fluid text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
          {t("NFCtron na akcích")}
        </p>
        <h2 className="section-title">{t("Méně čekání. Více zážitků.")}</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 text-left md:grid-cols-3">
          {steps.map(([number, title, copy]) => (
            <div key={number} className="bg-white p-7">
              <span className="text-xs font-semibold text-primary-500">
                {number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-primary-900">
                {t(title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {t(copy)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrganizerCta({ t }: { t: Translator }) {
  return (
    <section className="bg-primary-700 py-10 text-white sm:py-12">
      <div className="container-fluid flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-2xl font-bold tracking-[-.03em]">
            {t("Pořádáte akci?")}
          </p>
          <p className="mt-2 text-sm text-white/55">
            {t("Podívejte se, co NFCtron umí pro pořadatele a prodejce.")}
          </p>
        </div>
        <Link
          href="/for-organizers"
          className="btn bg-white text-primary-900 hover:bg-primary-100"
        >
          {t("Řešení pro pořadatele")} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

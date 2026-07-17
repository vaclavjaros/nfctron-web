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

export function AccountSection({ t }: { t: Translator }) {
  return (
    <section className="section bg-[#daebfa]" id="all-events">
      <div className="container-fluid">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-[42%]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
              {t("NFCtron účet")}
            </p>
            <h2 className="section-title">
              {t("Celý zážitek na jednom místě.")}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
              {t(
                "Vstupenky, platby a vrácení kreditu máte v jednom účtu. Bez hledání účtenek a formulářů.",
              )}
            </p>
            <ul className="mt-7 space-y-3">
              {accountFeatures.map((item, index) => (
                <li key={item} className="flex items-center gap-4 text-sm">
                  <span className="text-[10px] font-semibold text-primary-500">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-primary-900">
                    {t(item)}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="https://pass.nfctron.com" className="btn-primary mt-7">
              {t("Otevřít můj NFCtron účet")} <ArrowIcon />
            </Link>
          </div>
          <div className="min-w-0 flex-1">
            <AccountPreview />
          </div>
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

import Image from "next/image";
import Link from "next/link";
import { events2027 } from "./data";
import { ArrowIcon } from "./icons";
import type { Translator } from "./types";

export default function NextSeasonSection({ t }: { t: Translator }) {
  const [featuredEvent, ...otherEvents] = events2027;

  return (
    <section className="bg-primary-900 py-9 text-white sm:py-10 lg:py-12">
      <div className="container-fluid">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-300">
            {t("Příští sezóna začíná teď")}
          </p>
          <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-.035em] sm:text-[30px]">
            {t("Akce, na které se těšíme v roce 2027")}
          </h2>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/50 sm:text-sm">
            {t(
              "Vybrané akce pro rok 2027 už jsou v prodeji. Objevte, co se chystá, a vyberte si s předstihem.",
            )}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-7 lg:flex-row lg:items-start lg:gap-12">
          <Link
            href={featuredEvent.url ?? "#events"}
            className="group overflow-hidden rounded-xl bg-white/[.045] lg:flex-[1.08]"
          >
            <div className="relative aspect-[16/6.7] overflow-hidden">
              {featuredEvent.image && (
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.015]"
                />
              )}
              <div className="absolute inset-0 bg-primary-950/5" />
            </div>
            <div className="flex items-center justify-between gap-5 px-5 py-4 sm:px-6">
              <div>
                <h3 className="text-lg font-semibold tracking-[-.025em] sm:text-xl">
                  {featuredEvent.title}
                </h3>
                <p className="mt-1 text-xs text-white/50 sm:text-[13px]">
                  {t(featuredEvent.meta)}
                </p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary-900 transition group-hover:bg-primary-100">
                <ArrowIcon />
              </span>
            </div>
          </Link>

          <div className="flex flex-1 flex-col gap-1 lg:pl-1">
            {otherEvents.map((item, index) => (
              <Link
                key={item.title}
                href={item.url ?? "#events"}
                className="group flex items-center justify-between gap-6 rounded-xl px-3 py-5 transition first:pt-0 hover:bg-white/[.045] sm:px-4"
              >
                <div className="flex min-w-0 items-start gap-4">
                  <span className="pt-1 text-[10px] font-semibold text-primary-300">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-.02em] group-hover:text-primary-200 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/45 sm:text-[13px]">
                      {t(item.meta)}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-primary-300 transition group-hover:translate-x-0.5 group-hover:text-white">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
            <Link
              href="https://tickets.nfctron.com/home?locale=cs&category=all"
              className="ml-11 mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-white/70 transition hover:text-white"
            >
              {t("Prohlédnout všechny akce 2027")} <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

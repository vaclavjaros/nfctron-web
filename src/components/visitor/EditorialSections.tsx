import Image from "next/image";
import Link from "next/link";
import { supportItems } from "./data";
import { ArrowIcon } from "./icons";
import type { Translator } from "./types";

export function BlogSection({ t }: { t: Translator }) {
  return (
    <section className="section border-t border-gray-100 bg-[#faf9ff]">
      <div className="container-fluid">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
              {t("Novinky a inspirace")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">
              {t("Blog NFCtron")}
            </h2>
          </div>
          <Link
            href="https://www.nfctron.com/cs/blog"
            className="hidden text-sm font-medium text-primary-700 sm:block"
          >
            {t("Všechny články")} →
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          <Link
            href="https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci"
            className="group relative min-h-[360px] overflow-hidden rounded-2xl lg:min-h-[480px] lg:flex-[1.15]"
          >
            <Image
              src="/yashica-events-acquisition.jpg"
              alt="NFCtron a Yashica Events"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] backdrop-blur">
                {t("Hlavní událost")} · 3. 7. 2026
              </span>
              <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-[-.03em] sm:text-3xl">
                {t("NFCtron dokončil akvizici společnosti Yashica Events")}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                {t(
                  "Rozšiřuje podporu pořadatelům akcí a propojuje technologie s produkčním know-how.",
                )}
              </p>
            </div>
          </Link>
          <div className="flex flex-1 flex-col justify-center">
            <BlogTeaser
              t={t}
              date="27. 3. 2026"
              title="WHOOP UCI Mountain Bike World Series 2026"
              text="Nová sezóna, nové zážitky a atmosféra světového poháru v Novém Městě."
            />
            <BlogTeaser
              t={t}
              date="5. 2. 2026"
              title="Masters of Rock 2026: Čtyři dny metalové vášně"
              text="Legendární festival se vrací do Vizovic už po dvaadvacáté."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogTeaser({
  t,
  date,
  title,
  text,
}: {
  t: Translator;
  date: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href="https://www.nfctron.com/cs/blog"
      className="group border-t border-primary-900/10 py-7 first:border-t-0 lg:first:border-t"
    >
      <span className="text-xs font-semibold text-primary-500">
        {t("Pro návštěvníky")} · {date}
      </span>
      <h3 className="mt-3 text-xl font-bold leading-snug text-primary-900 group-hover:text-primary-700">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-500">{text}</p>
      <span className="mt-5 text-sm font-semibold text-primary-700">
        {t("Přečíst článek")} →
      </span>
    </Link>
  );
}

export function SupportSection({ t }: { t: Translator }) {
  return (
    <section className="section scroll-mt-16 bg-white" id="support">
      <div className="container-fluid">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="max-w-md lg:w-[38%]">
            <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary-600">
              NFCtron Support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-.035em] text-primary-900">
              {t("Máte vstupenku nebo jste právě po akci?")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {t(
                "Vyberte, co potřebujete vyřešit. Návody vás provedou vstupenkou, čipem, kreditem i online účtenkou.",
              )}
            </p>
            <Link
              href="https://tickets.nfctron.com/receipt"
              className="btn-primary mt-5"
            >
              {t("Otevřít veškerou nápovědu")} <ArrowIcon />
            </Link>
          </div>
          <div className="flex min-w-0 flex-1 flex-col border-t border-primary-900/10">
            {supportItems.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center gap-5 border-b border-primary-900/10 py-5 transition hover:text-primary-700"
              >
                <span className="text-[10px] font-semibold text-primary-400">
                  0{index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-primary-900 group-hover:text-primary-700">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                    {t(item.text)}
                  </p>
                </div>
                <span className="shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-primary-600">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

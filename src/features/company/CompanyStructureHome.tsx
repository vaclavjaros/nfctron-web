import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { AudienceHeroSection } from "@/components/audience/AudiencePage";
import ActionLink from "@/components/ui/ActionLink";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routing";

type CompanyUnit = {
  name: string;
  role: string;
  detail?: string;
};

const copy = {
  cs: {
    hero: {
      badge: "Skupina NFCtron",
      eyebrow: "Jeden propojený ekosystém",
      title: "Nejsme jedna služba. Stavíme infrastrukturu pro celý svět akcí.",
      description:
        "Technologie, platby, produkce, hudba, marketing a prodejci v jednom funkčním celku.",
    },
    ecosystem: {
      eyebrow: "Role ve skupině",
      title: "Specializované části. Jeden směr.",
      description:
        "Každá část má vlastní roli. Dohromady pokrývají celý životní cyklus akce.",
      core: {
        name: "NFCtron a.s.",
        role: "Technologie, ticketing a provoz akcí v jednom systému.",
        detail: "Jádro skupiny pro návštěvníky, pořadatele a provoz.",
      },
      pay: {
        name: "NFCtron Pay a.s.",
        role: "Platby, karetní infrastruktura a nové finanční služby pro svět akcí.",
      },
      ventures: {
        name: "NFCtron Ventures s.r.o.",
        role: "Investice do projektů, které rozšiřují svět akcí.",
      },
      production: {
        name: "NFCtron Production s.r.o.",
        role: "Produkční zázemí pro interprety, hudbu a realizaci živých akcí.",
      },
      yashica: {
        name: "Yashica Events a.s.",
        role: "Festivaly, koncertní turné a zkušenosti z reálného provozu.",
        label: "Součást NFCtron Production",
      },
      marketing: {
        name: "NFCtron Marketing s.r.o.",
        role: "Rozvoj interpretů, hudby, značek a obsahu.",
      },
    },
    direction: {
      eyebrow: "Jak vzniká hodnota",
      title: "Od prvního ticketu po poslední světlo na stage.",
      items: [
        {
          number: "01",
          title: "Prodej a vztah s návštěvníkem",
          description: "Ticketing, obsah a komunikace před začátkem akce.",
        },
        {
          number: "02",
          title: "Provoz a platby",
          description: "Vstup, platby a technologie přímo na místě.",
        },
        {
          number: "03",
          title: "Produkce a růst",
          description: "Realizace, hudba, značky a nové projekty po celý rok.",
        },
      ],
    },
    news: {
      eyebrow: "Aktuálně ve skupině",
      title: "NFCtron dokončil akvizici Yashica Events.",
      description:
        "Skupina tak propojuje vlastní technologie s produkčními zkušenostmi z festivalů, koncertů a turné — a rozšiřuje podporu pořadatelům akcí.",
      category: "Akvizice",
      date: "3. července 2026",
      cta: "Přečíst celý článek",
      alt: "NFCtron a Yashica Events na koncertním pódiu",
      href: "https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci",
    },
    close: {
      eyebrow: "Pro váš projekt",
      title: "Jedna skupina. Správné části pro váš projekt.",
      description:
        "Ať připravujete akci, hledáte technologického partnera nebo chcete rozvíjet nový projekt, spojíme vás s týmem, který dává smysl.",
      organizerCta: "Najít správné řešení",
      contactCta: "Kontaktovat NFCtron",
    },
  },
  en: {
    hero: {
      badge: "NFCtron Group",
      eyebrow: "One connected ecosystem",
      title: "We are not a single service. We are building infrastructure for the entire world of events.",
      description:
        "Technology, payments, production, music, marketing and vendors working as one.",
    },
    ecosystem: {
      eyebrow: "Roles across the group",
      title: "Specialized capabilities. One direction.",
      description:
        "Every part has its own role. Together, they cover the complete event lifecycle.",
      core: {
        name: "NFCtron a.s.",
        role: "Technology, ticketing and event operations in one system.",
        detail: "The group core for visitors, organizers and operations.",
      },
      pay: {
        name: "NFCtron Pay a.s.",
        role: "Payments, card infrastructure and new financial services for events.",
      },
      ventures: {
        name: "NFCtron Ventures s.r.o.",
        role: "Investment in projects that expand the world of events.",
      },
      production: {
        name: "NFCtron Production s.r.o.",
        role: "Production support for artists, music and the delivery of live events.",
      },
      yashica: {
        name: "Yashica Events a.s.",
        role: "Festivals, concert tours and experience from real event operations.",
        label: "Part of NFCtron Production",
      },
      marketing: {
        name: "NFCtron Marketing s.r.o.",
        role: "Development of artists, music, brands and content.",
      },
    },
    direction: {
      eyebrow: "How value is created",
      title: "From the first ticket to the last light on stage.",
      items: [
        {
          number: "01",
          title: "Sales and visitor relationships",
          description: "Ticketing, content and communication before the event begins.",
        },
        {
          number: "02",
          title: "Operations and payments",
          description: "Entry, payments and technology directly at the event.",
        },
        {
          number: "03",
          title: "Production and growth",
          description: "Delivery, music, brands and new projects throughout the year.",
        },
      ],
    },
    news: {
      eyebrow: "Latest from the group",
      title: "NFCtron completes the acquisition of Yashica Events.",
      description:
        "The group now connects its technology with hands-on production experience from festivals, concerts and tours — expanding support for event organizers.",
      category: "Acquisition",
      date: "3 July 2026",
      cta: "Read the full story",
      alt: "NFCtron and Yashica Events at a concert stage",
      href: "https://www.nfctron.com/cs/blog/yashica-events-akvizice-rozsireni-podpory-akci",
    },
    close: {
      eyebrow: "For your project",
      title: "One group. The right capabilities for your project.",
      description:
        "Whether you are preparing an event, looking for a technology partner or developing a new project, we will connect you with the right team.",
      organizerCta: "Find the right solution",
      contactCta: "Contact NFCtron",
    },
  },
} satisfies Record<Locale, object>;

export default function CompanyStructureHome({ locale }: { locale: Locale }) {
  const c = copy[locale] as (typeof copy)["cs"];

  return (
    <div className="min-h-screen bg-white text-primary-900">
      <SiteHeader locale={locale} active="company" />
      <main>
        <AudienceHeroSection {...c.hero} />

        <section className="bg-[#f6f7fb] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {c.ecosystem.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                {c.ecosystem.title}
              </h2>
              <p className="mt-4 max-w-[580px] text-sm leading-7 text-gray-500 sm:text-base">
                {c.ecosystem.description}
              </p>
            </div>

            <div className="mt-10 sm:mt-12">
              <div className="mx-auto max-w-[720px]">
                <CompanyCard unit={c.ecosystem.core} tone="core" />
              </div>

              <div className="mt-5 grid gap-4 sm:mt-6 md:grid-cols-2">
                <CompanyCard unit={c.ecosystem.pay} />
                <CompanyCard unit={c.ecosystem.ventures} />
                <ProductionCard
                  production={c.ecosystem.production}
                  yashica={c.ecosystem.yashica}
                />
                <CompanyCard unit={c.ecosystem.marketing} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-900 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
              {c.direction.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[760px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              {c.direction.title}
            </h2>
            <div className="mt-12 flex flex-col gap-9 md:flex-row md:items-start md:gap-5 lg:gap-8">
              {c.direction.items.map((item, index) => (
                <div key={item.number} className="contents">
                  <article className="min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-blue-300">
                      {item.number}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[320px] text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  </article>
                  {index < c.direction.items.length - 1 ? (
                    <span
                      className="hidden pt-[78px] text-lg text-white/25 md:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {c.news.eyebrow}
              </p>
            </div>

            <Link
              href={c.news.href}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 grid overflow-hidden rounded-[28px] bg-[#f5f4fb] transition-colors duration-300 hover:bg-[#f0eff9] md:grid-cols-[0.92fr_1.08fr] sm:mt-8"
            >
              <div className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] md:min-h-[360px]">
                <Image
                  src="/yashica-events-acquisition.jpg"
                  alt={c.news.alt}
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                />
              </div>
              <article className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-500">
                    <span>{c.news.category}</span>
                    <span className="h-1 w-1 rounded-full bg-blue-500" aria-hidden="true" />
                    <time>{c.news.date}</time>
                  </div>
                  <h2 className="mt-6 max-w-[560px] text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                    {c.news.title}
                  </h2>
                  <p className="mt-5 max-w-[580px] text-sm leading-7 text-gray-500 sm:text-base">
                    {c.news.description}
                  </p>
                </div>
                <span className="mt-10 inline-flex items-center gap-4 text-sm font-semibold text-primary-900">
                  {c.news.cta}
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </article>
            </Link>

            <div className="mx-auto mt-20 max-w-[820px] rounded-[28px] bg-[#f6f7fb] px-6 py-12 text-center sm:mt-24 sm:px-10 sm:py-16 lg:mt-28">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                {c.close.eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                {c.close.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[650px] text-sm leading-7 text-gray-500 sm:text-base">
                {c.close.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ActionLink href={localizedPath(locale, "/for-organizers")} arrow>
                  {c.close.organizerCta}
                </ActionLink>
                <ActionLink href="mailto:info@nfctron.com" variant="secondary" arrow>
                  {c.close.contactCta}
                </ActionLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

function CompanyCard({
  unit,
  tone = "light",
  className = "",
}: {
  unit: CompanyUnit;
  tone?: "light" | "core";
  className?: string;
}) {
  const isCore = tone === "core";

  return (
    <article
      className={`${className} flex min-h-[196px] flex-col justify-between rounded-2xl p-6 transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:p-7 ${
        isCore
          ? "bg-primary-900 text-white shadow-xl shadow-primary-900/15 sm:min-h-[220px] sm:px-9 sm:py-8"
          : "bg-white shadow-sm shadow-primary-900/5"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${isCore ? "bg-blue-400" : "bg-blue-600/70"}`}
        aria-hidden="true"
      />
      <div className="mt-10">
        <h3 className="text-xl font-semibold tracking-[-0.035em]">
          {unit.name}
        </h3>
        <p className={`mt-2 text-sm leading-6 ${isCore ? "text-white/65" : "text-gray-500"}`}>
          {unit.role}
        </p>
        {unit.detail ? (
          <p className={`mt-5 text-xs leading-5 ${isCore ? "text-white/45" : "text-gray-400"}`}>
            {unit.detail}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function ProductionCard({
  production,
  yashica,
  className = "",
}: {
  production: CompanyUnit;
  yashica: CompanyUnit & { label: string };
  className?: string;
}) {
  return (
    <article
      className={`${className} min-h-[196px] rounded-2xl bg-white p-6 shadow-sm shadow-primary-900/5 transition-transform duration-300 motion-safe:hover:-translate-y-1 sm:p-7`}
    >
      <span className="block h-2 w-2 rounded-full bg-blue-600/70" aria-hidden="true" />
      <h3 className="mt-10 text-xl font-semibold tracking-[-0.035em]">
        {production.name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-500">{production.role}</p>
      <div className="mt-6 rounded-xl bg-primary-50 p-4 sm:p-5">
        <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-primary-500">
          {yashica.label}
        </span>
        <h4 className="mt-2 text-sm font-semibold tracking-[-0.02em]">
          {yashica.name}
        </h4>
        <p className="mt-1 text-xs leading-5 text-gray-500">{yashica.role}</p>
      </div>
    </article>
  );
}

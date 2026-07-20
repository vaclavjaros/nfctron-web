"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LanguageMenu from "./LanguageMenu";
import { translate, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/routing";

type SiteMode =
  | "home"
  | "company"
  | "organizers"
  | "production"
  | "retailers"
  | "artists"
  | "music"
  | "cards";

interface SiteHeaderProps {
  locale: Locale;
  active?: SiteMode;
}

type NavigableMode = Exclude<SiteMode, "company">;

const MODES: Array<{
  id: NavigableMode;
  label: string;
  href: string;
  beta?: boolean;
}> = [
  { id: "home", label: "Návštěvníci", href: "/" },
  { id: "organizers", label: "Pořadatelé", href: "/for-organizers" },
  { id: "retailers", label: "Prodejci", href: "/for-retailers" },
  { id: "artists", label: "Interpreti", href: "/for-artists" },
  { id: "music", label: "Hudba", href: "/music" },
  { id: "cards", label: "NFCtron Card", href: "/cards", beta: true },
  { id: "production", label: "Produkce", href: "/production" },
];

type MegaMenuCopy = {
  ariaLabel: string;
  back: string;
  overview: string;
  overviewDescription: string;
  groups: Array<{
    title: string;
    links: Array<readonly [label: string, href: string]>;
  }>;
};

const MENU_COPY: Record<Locale, Record<NavigableMode, MegaMenuCopy>> = {
  cs: {
    home: {
      ariaLabel: "Pro návštěvníky",
      back: "Zpět",
      overview: "Přehled pro návštěvníky",
      overviewDescription: "Akce, vstupenky a zážitky v jednom propojeném světě.",
      groups: [
        { title: "Objevovat", links: [["Akce v prodeji", "/#events"], ["Sériové akce", "/#series"], ["Akce 2027", "/#next-season"]] },
        { title: "Můj NFCtron", links: [["Jak to funguje", "/#how-it-works"], ["NFCtron Card", "/cards"], ["Podpora návštěvníků", "/#support"]] },
        { title: "Další zážitky", links: [["Interpreti", "/for-artists"], ["Hudba", "/music"], ["Produkce", "/production"]] },
      ],
    },
    organizers: {
      ariaLabel: "Služby a produkty pro pořadatele",
      back: "Zpět",
      overview: "Přehled pro pořadatele",
      overviewDescription: "Jeden partner pro ticketing, platby a provoz akce.",
      groups: [
        { title: "Produkty", links: [["Ticketing a vstup", "/for-organizers/ticketing"], ["Platby na akci", "/for-organizers#payments"], ["NFCtron Hub", "/for-organizers#ecosystem"]] },
        { title: "Služby", links: [["Provoz na místě", "/for-organizers#operations"], ["Prodejci a gastro", "/for-retailers"], ["Produkce akce", "/production"]] },
        { title: "Začít", links: [["Poptat řešení", "/for-organizers#contact"], ["Jak spolupráce probíhá", "/for-organizers#journey"], ["Akce s NFCtron", "/#events"]] },
      ],
    },
    retailers: {
      ariaLabel: "Prodejci a marketplace",
      back: "Zpět",
      overview: "Přehled pro prodejce",
      overviewDescription: "Příležitosti pro prodejce a ověřená síť pro pořadatele.",
      groups: [
        { title: "Marketplace", links: [["Jak marketplace funguje", "/for-retailers#marketplace"], ["Aktivní akce", "/for-retailers#active-events"], ["Aktivní prodejci", "/for-retailers#active-retailers"]] },
        { title: "Pro prodejce", links: [["Chci prodávat na akcích", "/for-retailers#active-events"], ["Provozní podpora", "/for-retailers#guarantee"], ["NFCtron Hub", "/for-retailers#marketplace"]] },
        { title: "Pro pořadatele", links: [["Hledám prodejce", "/for-retailers#active-retailers"], ["Gastro partner", "/for-retailers#partner"], ["Poptat spolupráci", "/for-retailers#contact"]] },
      ],
    },
    artists: {
      ariaLabel: "Interpreti a booking",
      back: "Zpět",
      overview: "NFCtron Artists",
      overviewDescription: "Booking, hudba, vstupenky a rozvoj interpretů.",
      groups: [
        { title: "Interpreti", links: [["Sebastian", "/for-artists/sebastian"], ["Elizabeth Kopecká", "/for-artists/elizabeth-kopecka"], ["Like-It", "/for-artists/like-it"]] },
        { title: "Pro interprety", links: [["Rozvoj projektu", "/for-artists#pro-interprety"], ["Hudba a distribuce", "/music"], ["NFCtron Card Artist Edition", "/cards#artist-edition"]] },
        { title: "Pro pořadatele", links: [["Poptat interpreta", "/for-artists#booking"], ["Jak booking funguje", "/for-artists#pro-poradatele"], ["Produkce koncertu", "/production"]] },
      ],
    },
    music: {
      ariaLabel: "NFCtron Music",
      back: "Zpět",
      overview: "NFCtron Music",
      overviewDescription: "Od studia přes release až ke koncertnímu pódiu.",
      groups: [
        { title: "Poslouchat", links: [["Aktuální releasy", "/music#releases"], ["Elizabeth Kopecká", "/for-artists/elizabeth-kopecka"], ["Interpreti NFCtron", "/for-artists"]] },
        { title: "Pro interprety", links: [["Vydat hudbu", "/music#distribution"], ["Hudební distribuce", "/music#distribution"], ["Prodat hudbu v Hi-Res", "/music#music-store"]] },
        { title: "Propojený svět", links: [["Artist Edition", "/cards#artist-edition"], ["Booking", "/for-artists#booking"], ["Koncertní produkce", "/production"]] },
      ],
    },
    cards: {
      ariaLabel: "NFCtron Card",
      back: "Zpět",
      overview: "NFCtron Card",
      overviewDescription: "Jedna karta pro vstupenky, refundace a nové zážitky.",
      groups: [
        { title: "Edice", links: [["Artist Edition", "/cards#artist-edition"], ["Festival Edition", "/cards#festival-edition"], ["Vysočina Fest 2027", "/cards#festival-edition"]] },
        { title: "Jak funguje", links: [["Aktivace karty", "/cards#how-it-works"], ["Výhody karty", "/cards#features"], ["Bezpečnost a refundace", "/cards#features"]] },
        { title: "Začít", links: [["Aktivovat kartu", "/cards#how-it-works"], ["Vybrat si interpreta", "/for-artists"], ["Vybrat si akci", "/#events"]] },
      ],
    },
    production: {
      ariaLabel: "Produkce akcí",
      back: "Zpět",
      overview: "NFCtron Production",
      overviewDescription: "Vlastní kapacity a ověření partneři v jednom produkčním týmu.",
      groups: [
        { title: "Realizace", links: [["Jak produkce funguje", "/production#process"], ["Rozsah produkce", "/production#scope"], ["Provoz na místě", "/for-organizers#operations"]] },
        { title: "Propojení", links: [["Pro pořadatele", "/for-organizers"], ["Prodejci a gastro", "/for-retailers"], ["Interpreti a hudba", "/for-artists"]] },
        { title: "Spolupráce", links: [["Poptat produkci", "/production#partner"], ["Stát se partnerem", "/production#partner"], ["NFCtron Production", "/company-structure"]] },
      ],
    },
  },
  en: {
    home: {
      ariaLabel: "For visitors", back: "Back", overview: "For visitors", overviewDescription: "Events, tickets and experiences in one connected world.",
      groups: [
        { title: "Discover", links: [["Events on sale", "/#events"], ["Event series", "/#series"], ["Events in 2027", "/#next-season"]] },
        { title: "My NFCtron", links: [["How it works", "/#how-it-works"], ["NFCtron Card", "/cards"], ["Visitor support", "/#support"]] },
        { title: "More experiences", links: [["Artists", "/for-artists"], ["Music", "/music"], ["Production", "/production"]] },
      ],
    },
    organizers: {
      ariaLabel: "Services and products for organizers", back: "Back", overview: "For organizers", overviewDescription: "One partner for ticketing, payments and event operations.",
      groups: [
        { title: "Products", links: [["Ticketing and entry", "/for-organizers/ticketing"], ["Event payments", "/for-organizers#payments"], ["NFCtron Hub", "/for-organizers#ecosystem"]] },
        { title: "Services", links: [["On-site operations", "/for-organizers#operations"], ["Vendors and hospitality", "/for-retailers"], ["Event production", "/production"]] },
        { title: "Get started", links: [["Request a solution", "/for-organizers#contact"], ["How we work", "/for-organizers#journey"], ["Events with NFCtron", "/#events"]] },
      ],
    },
    retailers: {
      ariaLabel: "Vendors and marketplace", back: "Back", overview: "For vendors", overviewDescription: "Sales opportunities for vendors and a trusted network for organizers.",
      groups: [
        { title: "Marketplace", links: [["How marketplace works", "/for-retailers#marketplace"], ["Active events", "/for-retailers#active-events"], ["Active vendors", "/for-retailers#active-retailers"]] },
        { title: "For vendors", links: [["Sell at events", "/for-retailers#active-events"], ["Operational support", "/for-retailers#guarantee"], ["NFCtron Hub", "/for-retailers#marketplace"]] },
        { title: "For organizers", links: [["Find vendors", "/for-retailers#active-retailers"], ["Hospitality partner", "/for-retailers#partner"], ["Request cooperation", "/for-retailers#contact"]] },
      ],
    },
    artists: {
      ariaLabel: "Artists and booking", back: "Back", overview: "NFCtron Artists", overviewDescription: "Booking, music, ticketing and long-term artist development.",
      groups: [
        { title: "Artists", links: [["Sebastian", "/for-artists/sebastian"], ["Elizabeth Kopecká", "/for-artists/elizabeth-kopecka"], ["Like-It", "/for-artists/like-it"]] },
        { title: "For artists", links: [["Develop your project", "/for-artists#pro-interprety"], ["Music distribution", "/music"], ["NFCtron Card Artist Edition", "/cards#artist-edition"]] },
        { title: "For organizers", links: [["Book an artist", "/for-artists#booking"], ["How booking works", "/for-artists#pro-poradatele"], ["Concert production", "/production"]] },
      ],
    },
    music: {
      ariaLabel: "NFCtron Music", back: "Back", overview: "NFCtron Music", overviewDescription: "From the studio and release to the live stage.",
      groups: [
        { title: "Listen", links: [["Latest releases", "/music#releases"], ["Elizabeth Kopecká", "/for-artists/elizabeth-kopecka"], ["NFCtron artists", "/for-artists"]] },
        { title: "For artists", links: [["Release music", "/music#distribution"], ["Music distribution", "/music#distribution"], ["Sell Hi-Res music", "/music#music-store"]] },
        { title: "Connected world", links: [["Artist Edition", "/cards#artist-edition"], ["Booking", "/for-artists#booking"], ["Concert production", "/production"]] },
      ],
    },
    cards: {
      ariaLabel: "NFCtron Card", back: "Back", overview: "NFCtron Card", overviewDescription: "One card for tickets, refunds and new experiences.",
      groups: [
        { title: "Editions", links: [["Artist Edition", "/cards#artist-edition"], ["Festival Edition", "/cards#festival-edition"], ["Vysočina Fest 2027", "/cards#festival-edition"]] },
        { title: "How it works", links: [["Card activation", "/cards#how-it-works"], ["Card benefits", "/cards#features"], ["Security and refunds", "/cards#features"]] },
        { title: "Get started", links: [["Activate your card", "/cards#how-it-works"], ["Choose an artist", "/for-artists"], ["Choose an event", "/#events"]] },
      ],
    },
    production: {
      ariaLabel: "Event production", back: "Back", overview: "NFCtron Production", overviewDescription: "In-house capacity and trusted partners in one production team.",
      groups: [
        { title: "Delivery", links: [["How production works", "/production#process"], ["Production scope", "/production#scope"], ["On-site operations", "/for-organizers#operations"]] },
        { title: "Connected services", links: [["For organizers", "/for-organizers"], ["Vendors and hospitality", "/for-retailers"], ["Artists and music", "/for-artists"]] },
        { title: "Cooperation", links: [["Request production", "/production#partner"], ["Become a partner", "/production#partner"], ["NFCtron Production", "/company-structure"]] },
      ],
    },
  },
};

function SupportIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v4a2 2 0 0 0 2 2h1v-7H4ZM20 13v4a2 2 0 0 1-2 2h-1v-7h3ZM17 19c0 1.1-.9 2-2 2h-3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

function MenuIcon({ open = false }: { open?: boolean }) {
  return (
    <span className="relative block h-3.5 w-4" aria-hidden="true">
      <span
        className={`absolute left-0 top-[3px] h-px w-4 bg-current transition duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
      />
      <span
        className={`absolute bottom-[3px] left-0 h-px w-4 bg-current transition duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
      />
    </span>
  );
}

function DesktopNavigation({
  active,
  t,
  locale,
  openMenu,
  onMenuOpen,
}: {
  active: SiteMode;
  t: (value: string) => string;
  locale: Locale;
  openMenu: NavigableMode | null;
  onMenuOpen: (mode: NavigableMode) => void;
}) {
  return (
    <div
      className="hidden h-16 items-center gap-4 lg:flex xl:gap-6"
      aria-label={locale === "cs" ? "Hlavní sekce webu" : "Main website sections"}
    >
      {MODES.map((mode) => (
        <Link
          key={mode.id}
          href={localizedPath(locale, mode.href)}
          aria-current={active === mode.id ? "page" : undefined}
          aria-expanded={openMenu === mode.id}
          aria-haspopup="true"
          onMouseEnter={() => onMenuOpen(mode.id)}
          onFocus={() => onMenuOpen(mode.id)}
          className={`relative flex h-full items-center whitespace-nowrap text-[10px] font-medium leading-none transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:bg-primary-700 after:transition-transform after:duration-200 ${openMenu === mode.id || active === mode.id ? "text-primary-700 after:scale-x-100" : "text-gray-500 after:scale-x-0 hover:text-primary-700"}`}
        >
          <span>{t(mode.label)}</span>
          {mode.beta ? (
            <span className="ml-1 text-[6px] font-semibold uppercase tracking-[0.08em] text-primary-400">
              Beta
            </span>
          ) : null}
        </Link>
      ))}
    </div>
  );
}

function MegaMenuContent({
  mode,
  locale,
  compact = false,
  onNavigate,
}: {
  mode: NavigableMode;
  locale: Locale;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  const copy = MENU_COPY[locale][mode];
  const overviewHref = MODES.find((item) => item.id === mode)?.href ?? "/";

  return (
    <div className={compact ? "space-y-8" : "grid grid-cols-[1.35fr_repeat(3,1fr)] gap-12"}>
      <div>
        <Link
          href={localizedPath(locale, overviewHref)}
          onClick={onNavigate}
          className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.035em] text-primary-900 transition hover:text-primary-600 sm:text-[28px]"
        >
          {copy.overview}
          <span className="text-primary-400 transition-transform duration-200 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
        <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
          {copy.overviewDescription}
        </p>
      </div>

      {copy.groups.map((group) => (
        <div key={group.title}>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#969bae]">
            {group.title}
          </p>
          <div className="mt-4 space-y-1">
            {group.links.map(([label, href]) => (
              <Link
                key={label}
                href={localizedPath(locale, href)}
                onClick={onNavigate}
                className="group -mx-2 flex min-h-9 items-center justify-between gap-4 rounded-lg px-2 py-2 text-sm font-medium text-primary-900 transition hover:bg-white/80 hover:text-primary-600"
              >
                {label}
                {compact ? (
                  <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary-400">
                    <ArrowIcon />
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileMenuButton({
  t,
  open,
  onToggle,
}: {
  t: (value: string) => string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={t("Otevřít menu")}
        aria-expanded={open}
        onClick={onToggle}
        className="flex h-8 w-8 items-center justify-center rounded-full text-primary-900 transition hover:bg-gray-100"
      >
        <MenuIcon open={open} />
      </button>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

function MobileMenuOverlay({
  active,
  t,
  locale,
  menuView,
  onMenuView,
  onBack,
  onClose,
}: {
  active: SiteMode;
  t: (value: string) => string;
  locale: Locale;
  menuView: NavigableMode | null;
  onMenuView: (mode: NavigableMode) => void;
  onBack: () => void;
  onClose: () => void;
}) {
  const menuCopy = menuView ? MENU_COPY[locale][menuView] : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={locale === "cs" ? "Hlavní menu" : "Main menu"}
      className="mega-menu-mobile fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-white lg:hidden"
    >
      <div className="sticky top-0 z-10 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-5 sm:px-8">
          <Image src="/nfctron-logo-dark.svg" alt="NFCtron" width={96} height={18} />
          <button
            type="button"
            onClick={onClose}
            aria-label={locale === "cs" ? "Zavřít menu" : "Close menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary-900 transition hover:bg-gray-100"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className={`min-h-[calc(100dvh-4rem)] transition-colors ${menuView ? "bg-[#f8f8fc]" : "bg-white"}`}>
        <div className="mx-auto max-w-2xl px-5 pb-14 pt-8 sm:px-8 sm:pt-10">
          {menuView && menuCopy ? (
            <>
              <button
                type="button"
                onClick={onBack}
                className="mb-7 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-primary-700"
              >
                <span aria-hidden="true">←</span> {menuCopy.back}
              </button>
              <MegaMenuContent mode={menuView} locale={locale} compact onNavigate={onClose} />
            </>
          ) : (
            <div className="space-y-1">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => onMenuView(mode.id)}
                  className={`group flex min-h-16 w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[25px] font-medium tracking-[-0.035em] transition sm:text-[28px] ${active === mode.id ? "text-primary-600" : "text-primary-900 hover:bg-gray-50 hover:text-primary-600"}`}
                >
                  <span className="flex items-center">
                    {t(mode.label)}
                    {mode.beta ? (
                      <span className="ml-2.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-primary-400">
                        Beta
                      </span>
                    ) : null}
                  </span>
                  <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary-400">
                    <ArrowIcon />
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SiteHeader({
  locale,
  active = "home",
}: SiteHeaderProps) {
  const t = (value: string) => translate(locale, value);
  const onHome = active === "home";
  const [openMenu, setOpenMenu] = useState<NavigableMode | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState<NavigableMode | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileMenuView(null);
  };

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileMenuView(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-[70] border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
        <nav
          className="container-fluid relative z-50 flex h-16 items-center justify-between gap-3 bg-white/95 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-5"
          aria-label={t("Hlavní navigace")}
        >
          <div className="flex min-w-0 shrink-0 items-center lg:justify-self-start">
            <Link href={localizedPath(locale, "/")} aria-label="NFCtron domů" className="shrink-0">
              <Image
                src="/nfctron-logo-dark.svg"
                alt="NFCtron"
                width={86}
                height={16}
              />
            </Link>
          </div>

          <DesktopNavigation
            active={active}
            t={t}
            locale={locale}
            openMenu={openMenu}
            onMenuOpen={setOpenMenu}
          />

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1 lg:justify-self-end">
            <MobileMenuButton
              t={t}
              open={mobileOpen}
              onToggle={() => {
                setMobileOpen((value) => !value);
                setMobileMenuView(null);
              }}
            />
            <LanguageMenu locale={locale} />
            <Link
              href={onHome ? "#support" : localizedPath(locale, "/#support")}
              aria-label={t("Přejít na podporu návštěvníků")}
              className="flex h-7 items-center gap-1.5 rounded-full px-2 text-[10px] font-medium leading-none tracking-[0.01em] text-gray-500 transition hover:bg-gray-50 hover:text-primary-700"
            >
              <SupportIcon /> <span className="hidden xl:inline">Support</span>
            </Link>
            <Link
              href="https://tickets.nfctron.com/login"
              className="ml-0.5 inline-flex h-7 items-center whitespace-nowrap rounded-full bg-primary-700 px-3 text-[10px] font-medium leading-none text-white transition hover:bg-primary-900 sm:ml-1"
            >
              {t("Přihlásit se")}
            </Link>
          </div>
        </nav>
      </header>

      {portalReady && openMenu
        ? createPortal(
            <div className="fixed inset-x-0 bottom-0 top-16 z-[60] hidden lg:block">
              <button
                type="button"
                aria-label={locale === "cs" ? "Zavřít menu" : "Close menu"}
                onClick={() => setOpenMenu(null)}
                className="mega-menu-focus absolute inset-0 cursor-default"
              />
              <div
                role="navigation"
                aria-label={MENU_COPY[locale][openMenu].ariaLabel}
                onMouseLeave={() => setOpenMenu(null)}
                className="mega-menu-reveal absolute inset-x-0 top-0 z-10 border-b border-[#e7e7f0] bg-[#f8f8fc] shadow-[0_24px_50px_rgba(17,24,39,0.08)]"
              >
                <div className="container-fluid py-10 xl:py-12">
                  <MegaMenuContent mode={openMenu} locale={locale} onNavigate={() => setOpenMenu(null)} />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}

      {portalReady && mobileOpen
        ? createPortal(
            <MobileMenuOverlay
              active={active}
              t={t}
              locale={locale}
              menuView={mobileMenuView}
              onMenuView={setMobileMenuView}
              onBack={() => setMobileMenuView(null)}
              onClose={closeMobileMenu}
            />,
            document.body,
          )
        : null}
    </>
  );
}

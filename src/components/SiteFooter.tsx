import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { translate, type Locale } from "@/i18n/config";
import CookieSettingsButton from "@/features/privacy/CookieSettingsButton";

const footerLinkClass = "transition hover:text-white";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-fluid py-10 sm:py-12">
        <div className="grid gap-9 border-b border-white/10 pb-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="max-w-xs">
            <Image
              src="/nfctron-logo-white.svg"
              alt="NFCtron"
              width={104}
              height={20}
            />
            <h2 className="mt-5 max-w-[260px] text-lg font-semibold leading-snug tracking-[-0.03em] sm:text-xl">
              {t("Celý svět akcí v jednom ekosystému.")}
            </h2>
            <p className="mt-3 max-w-[280px] text-[11px] leading-5 text-white/50">
              {t(
                "Vstupenky, platby a technologie, které propojují návštěvníky, pořadatele, prodejce a interprety.",
              )}
            </p>
          </div>

          <FooterColumn title={t("Pro koho")}>
            <Link href="/" className={footerLinkClass}>
              {t("Návštěvníci")}
            </Link>
            <Link href="/for-organizers" className={footerLinkClass}>
              {t("Pořadatelé")}
            </Link>
            <Link href="/for-retailers" className={footerLinkClass}>
              {t("Prodejci")}
            </Link>
            <Link href="/for-artists" className={footerLinkClass}>
              {t("Interpreti")}
            </Link>
            <Link
              href="/cards"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              {t("Karty")}
              <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-[0.08em] text-white/55">
                Beta
              </span>
            </Link>
          </FooterColumn>

          <FooterColumn title="NFCtron">
            <Link href="/#events" className={footerLinkClass}>
              {t("Akce")}
            </Link>
            <Link href="/#how-it-works" className={footerLinkClass}>
              {t("Jak to funguje")}
            </Link>
            <a
              href="https://www.nfctron.com/cs/blog"
              className={footerLinkClass}
            >
              Blog
            </a>
            <a href="mailto:info@nfctron.com" className={footerLinkClass}>
              {t("Kontakt")}
            </a>
          </FooterColumn>

          <FooterColumn title={t("Pomoc a účet")}>
            <a
              href="https://tickets.nfctron.com/receipt"
              className={footerLinkClass}
            >
              Support
            </a>
            <a
              href="https://tickets.nfctron.com/login"
              className={footerLinkClass}
            >
              {t("Přihlásit se")}
            </a>
            <a href="https://pass.nfctron.com" className={footerLinkClass}>
              {t("Můj NFCtron")}
            </a>
            <CookieSettingsButton
              label={t("Nastavení cookies")}
              className={footerLinkClass}
            />
          </FooterColumn>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NFCtron</span>
          <span>{t("Na akcích bez zbytečných starostí.")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35">
        {title}
      </p>
      <div className="mt-5 flex flex-col items-start gap-3.5 text-xs text-white/60">
        {children}
      </div>
    </div>
  );
}

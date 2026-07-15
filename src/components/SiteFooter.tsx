import Image from 'next/image';
import Link from 'next/link';
import { translate, type Locale } from '@/i18n/config';

export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <footer className="border-t border-gray-200 bg-[#fafafd] text-primary-900">
      <div className="container-fluid py-10 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Image src="/nfctron-logo-dark.svg" alt="NFCtron" width={94} height={18} />
            <p className="mt-4 text-xs leading-5 text-gray-500">{t('Technologie, které propojují návštěvníky, pořadatele, prodejce a interprety.')}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">{t('Pro koho')}</p>
            <div className="mt-4 flex flex-col items-start gap-3 text-xs text-gray-600">
              <Link href="/" className="transition hover:text-primary-700">{t('Návštěvníci')}</Link>
              <Link href="/for-organizers" className="transition hover:text-primary-700">{t('Pořadatelé')}</Link>
              <Link href="/for-retailers" className="transition hover:text-primary-700">{t('Prodejci')}</Link>
              <Link href="/for-artists" className="transition hover:text-primary-700">{t('Interpreti')}</Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">NFCtron</p>
            <div className="mt-4 flex flex-col items-start gap-3 text-xs text-gray-600">
              <Link href="/#events" className="transition hover:text-primary-700">{t('Akce')}</Link>
              <Link href="/#how-it-works" className="transition hover:text-primary-700">{t('Jak to funguje')}</Link>
              <a href="https://www.nfctron.com/cs/blog" className="transition hover:text-primary-700">Blog</a>
              <a href="mailto:info@nfctron.com" className="transition hover:text-primary-700">{t('Kontakt')}</a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">{t('Pomoc a účet')}</p>
            <div className="mt-4 flex flex-col items-start gap-3 text-xs text-gray-600">
              <a href="https://tickets.nfctron.com/receipt" className="transition hover:text-primary-700">Support</a>
              <a href="https://tickets.nfctron.com/login" className="transition hover:text-primary-700">{t('Přihlásit se')}</a>
              <a href="https://pass.nfctron.com" className="transition hover:text-primary-700">{t('Můj NFCtron')}</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-5 text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NFCtron</span>
          <span>{t('Na akcích bez zbytečných starostí.')}</span>
        </div>
      </div>
    </footer>
  );
}

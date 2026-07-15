import Image from 'next/image';
import Link from 'next/link';
import LanguageMenu from './LanguageMenu';
import { translate, type Locale } from '@/i18n/config';

function SupportIcon() {
  return <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v4a2 2 0 0 0 2 2h1v-7H4ZM20 13v4a2 2 0 0 1-2 2h-1v-7h3ZM17 19c0 1.1-.9 2-2 2h-3"/></svg>;
}

export default function SiteHeader({ locale, active = 'home' }: { locale: Locale; active?: 'home' | 'organizers' }) {
  const t = (value: string) => translate(locale, value);
  const onHome = active === 'home';
  const base = 'flex h-full items-center border-b pt-px text-xs tracking-[0.005em] transition hover:text-primary-700';
  const idle = `${base} border-transparent font-normal text-gray-500`;
  const selected = `${base} border-primary-700 font-medium text-primary-700`;

  return <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
    <nav className="container-fluid flex h-16 items-center justify-between gap-7" aria-label="Hlavní navigace">
      <Link href="/" aria-label="NFCtron domů" className="shrink-0"><Image src="/nfctron-logo-dark.svg" alt="NFCtron" width={86} height={16} priority /></Link>
      <div className="hidden h-full items-center gap-8 md:flex lg:gap-9">
        <Link href={onHome ? '#home' : '/#home'} aria-current={onHome ? 'page' : undefined} className={onHome ? selected : idle}>{t('Domů')}</Link>
        <Link href={onHome ? '#events' : '/#events'} className={idle}>{t('Akce')}</Link>
        <Link href={onHome ? '#how-it-works' : '/#how-it-works'} className={idle}>{t('Jak to funguje')}</Link>
        <Link href="/for-organizers" aria-current={!onHome ? 'page' : undefined} className={!onHome ? selected : idle}>{t('Pro pořadatele')}</Link>
      </div>
      <div className="flex items-center gap-0.5 sm:gap-1">
        <LanguageMenu locale={locale} />
        <Link href={onHome ? '#support' : '/#support'} aria-label="Přejít na podporu návštěvníků" className="flex h-8 items-center gap-1.5 rounded-full px-2 text-[10px] font-medium tracking-[0.01em] text-gray-500 transition hover:bg-gray-50 hover:text-primary-700"><SupportIcon /><span className="hidden lg:inline">Support</span></Link>
        <Link href="https://tickets.nfctron.com/login" className="ml-1 inline-flex h-8 items-center rounded-full bg-primary-700 px-3.5 text-[11px] font-medium text-white transition hover:bg-primary-900 sm:ml-1.5">{t('Přihlásit se')}</Link>
      </div>
    </nav>
  </header>;
}

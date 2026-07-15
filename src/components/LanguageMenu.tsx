'use client';

import { useState } from 'react';
import { localeLabels, locales, type Locale } from '@/i18n/config';

export default function LanguageMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return <div className="relative">
    <button type="button" aria-label="Change language" aria-expanded={open} onClick={() => setOpen(value => !value)} className="flex h-8 items-center gap-1.5 rounded-full px-2 text-[10px] font-medium uppercase tracking-[0.03em] text-gray-500 transition hover:bg-gray-50 hover:text-primary-700">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"/></svg>
      {locale}
    </button>
    {open && <div className="absolute right-0 top-10 z-50 min-w-32 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg shadow-primary-900/5">{locales.map(item => <a key={item} href={`/api/locale?lang=${item}`} className={`block rounded-lg px-3 py-2 text-xs transition ${item === locale ? 'bg-primary-50 font-medium text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}>{localeLabels[item]}</a>)}</div>}
  </div>;
}

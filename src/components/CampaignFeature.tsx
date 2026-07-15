import Image from 'next/image';
import Link from 'next/link';
import { translate, type Locale } from '@/i18n/config';

export interface CampaignMetric {
  value: number;
  label: string;
}

export interface CampaignFeatureData {
  id: string;
  eyebrow: string;
  partner: string;
  title: string;
  description: string;
  benefits: string[];
  metrics: CampaignMetric[];
  activeEventCount: number;
  href: string;
}

const ArrowIcon = () => <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default function CampaignFeature({ campaign, locale }: { campaign: CampaignFeatureData; locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" aria-labelledby={`${campaign.id}-title`}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-600">{t(campaign.eyebrow)}</p>
        <div className="grid overflow-hidden rounded-2xl bg-[#11103f] text-white shadow-[0_16px_50px_rgba(15,12,70,0.12)] lg:grid-cols-[1.12fr_.88fr]">
          <div className="p-7 sm:p-9 lg:p-11">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3"><Image src="/nfctron-logo-white.svg" alt="NFCtron" width={79} height={15} /><span className="h-4 w-px bg-white/20" /><span className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/60">{campaign.partner}</span></div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-medium text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{t('Aktivní kampaň')}</span>
            </div>
            <h2 id={`${campaign.id}-title`} className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">{t(campaign.title)}</h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">{t(campaign.description)}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-white/65">
              {campaign.benefits.map(item => <span key={item} className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff5f00]" />{t(item)}</span>)}
            </div>
            <div className="mt-7 grid grid-cols-3 border-y border-white/10 py-4">
              {campaign.metrics.map((metric, index) => <div key={metric.label} className={`${index ? 'border-l border-white/10 pl-4 sm:pl-5' : ''}`}><strong className="block text-xl font-semibold tracking-[-0.03em] text-white">{metric.value}</strong><span className="mt-1 block text-[9px] text-white/45">{t(metric.label)}</span></div>)}
            </div>
            <Link href={campaign.href} className="mt-7 inline-flex h-9 items-center gap-2 rounded-full bg-white px-5 text-[11px] font-medium text-primary-900 transition hover:bg-primary-50">{t('Zobrazit {count} akcí v kampani').replace('{count}', String(campaign.activeEventCount))} <ArrowIcon /></Link>
          </div>
          <div className="relative hidden min-h-[300px] overflow-hidden border-l border-white/10 lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(79,107,234,.35),transparent_42%),linear-gradient(145deg,#201b68,#090928)]" />
            <div className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-md">
              <div className="flex items-start justify-between gap-5"><div><p className="text-[9px] uppercase tracking-[0.16em] text-white/45">Click to Pay</p><p className="mt-2 text-sm font-medium">{t('Jednou uložit. Příště jen zaplatit.')}</p></div><div className="shrink-0 text-right"><div className="flex justify-end"><span className="h-7 w-7 rounded-full bg-[#eb001b]"/><span className="-ml-2.5 h-7 w-7 rounded-full bg-[#f79e1b] opacity-95"/></div><span className="mt-1 block text-[8px] font-medium tracking-[0.04em] text-white/60">mastercard</span></div></div>
              <div className="mt-14 flex items-end justify-between border-t border-white/10 pt-5"><div><p className="text-[9px] text-white/40">{t('Platba chráněná technologií Mastercard')}</p><p className="mt-1 text-xs text-white/75">•••• 2048</p></div><span className="rounded-full bg-white/10 px-3 py-1 text-[9px] text-white/60">{t('Připraveno k platbě')}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

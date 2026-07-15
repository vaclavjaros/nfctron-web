import CampaignFeature from "./CampaignFeature";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import {
  AccountSection,
  HowItWorksSection,
  OrganizerCta,
} from "./visitor/AccountSections";
import {
  BenefitsSection,
  CollectionsSections,
  HeroSection,
} from "./visitor/DiscoverySections";
import { BlogSection, SupportSection } from "./visitor/EditorialSections";
import EventsCatalogSection from "./visitor/EventsCatalogSection";
import { clickToPayCampaign } from "./visitor/data";
import { translate, type Locale } from "@/i18n/config";

export default function VisitorHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);

  return (
    <div className="tickets-ui min-h-screen">
      <SiteHeader locale={locale} />
      <main>
        <HeroSection t={t} />
        <CampaignFeature campaign={clickToPayCampaign} locale={locale} />
        <CollectionsSections t={t} />
        <BenefitsSection t={t} />
        <EventsCatalogSection t={t} />
        <BlogSection t={t} />
        <SupportSection t={t} />
        <AccountSection t={t} />
        <HowItWorksSection t={t} />
        <OrganizerCta t={t} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

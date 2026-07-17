import CampaignFeature from "./CampaignFeature";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { AccountSection, OrganizerCta } from "./visitor/AccountSections";
import {
  BenefitsSection,
  CollectionsSections,
  HeroSection,
} from "./visitor/DiscoverySections";
import { BlogSection, SupportSection } from "./visitor/EditorialSections";
import EventsCatalogSection from "./visitor/EventsCatalogSection";
import { clickToPayCampaign } from "./visitor/data";
import EventTrendsSection from "@/features/event-trends/EventTrendsSection";
import { getEventTrendGroups } from "@/features/event-trends/get-event-trends";
import { translate, type Locale } from "@/i18n/config";

export default async function VisitorHome({ locale }: { locale: Locale }) {
  const t = (value: string) => translate(locale, value);
  const eventTrendGroups = await getEventTrendGroups();

  return (
    <div className="tickets-ui min-h-screen">
      <SiteHeader locale={locale} />
      <main>
        <HeroSection t={t} />
        <EventTrendsSection groups={eventTrendGroups} locale={locale} />
        <CampaignFeature campaign={clickToPayCampaign} locale={locale} />
        <CollectionsSections t={t} locale={locale} />
        <EventsCatalogSection t={t} />
        <BenefitsSection t={t} />
        <AccountSection t={t} />
        <BlogSection t={t} />
        <SupportSection t={t} />
        <OrganizerCta t={t} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

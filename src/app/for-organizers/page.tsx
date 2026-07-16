import type { Metadata } from "next";
import OrganizerHome from "@/components/OrganizerHome";
import { getLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/for-organizers",
    title:
      locale === "cs"
        ? "Řešení pro pořadatele akcí | NFCtron"
        : "Solutions for event organizers | NFCtron",
    description:
      locale === "cs"
        ? "Vstupenky, bezhotovostní platby a provozní data pro pořadatele akcí v jednom propojeném systému NFCtron."
        : "Tickets, cashless payments and operational data for event organizers in one connected NFCtron system.",
    ogLabel: locale === "cs" ? "Pro pořadatele" : "For organizers",
  });
}

export default async function ForOrganizersPage() {
  const locale = await getLocale();
  return <OrganizerHome locale={locale} />;
}

import VisitorHome from "@/components/VisitorHome";
import { getLocale } from "@/i18n/server";

export default async function Home() {
  const locale = await getLocale();
  return <VisitorHome locale={locale} />;
}

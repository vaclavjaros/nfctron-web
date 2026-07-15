export type Translator = (value: string) => string;

export interface EventItem {
  id: string;
  title: string;
  date: string;
  place: string;
  city: string;
  category: string;
  accent: string;
  description?: string;
  features?: string[];
  image?: string;
  url?: string;
  calendarStart?: string;
  calendarEnd?: string;
  priceFrom?: string;
  featured?: boolean;
}

export interface PromoItem {
  title: string;
  meta: string;
  accent: string;
  action?: string;
  image?: string;
}

export interface SupportItem {
  title: string;
  text: string;
  href: string;
}

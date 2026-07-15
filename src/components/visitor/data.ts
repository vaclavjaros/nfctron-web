import type { CampaignFeatureData } from "../CampaignFeature";
import type { EventItem, PromoItem, SupportItem } from "./types";

export const events: EventItem[] = [
  {
    id: "let-it-roll-2026",
    title: "LET IT ROLL 2026",
    date: "30. července–1. srpna 2026",
    place: "Jezero Most",
    city: "Most",
    category: "Festival",
    description: "Největší drum & bass festival na světě",
    features: [
      "Platba čipem se vstupenkou",
      "Kontrola zálohovaných kelímků",
      "Přijímání EUR",
      "Zabezpečené vstupenky",
    ],
    accent: "from-indigo-950 via-violet-700 to-fuchsia-500",
    image:
      "https://images.nfctron.com/organizers/f56e6361-4114-4691-bbde-8b03e4d760aa.jpg",
    url: "https://tickets.letitroll.cz/festival/2026-czk?backUrl=https%3A%2F%2Ftickets.nfctron.com%2Fhome",
    calendarStart: "20260730",
    calendarEnd: "20260802",
    priceFrom: "4 890 Kč",
    featured: true,
  },
  {
    id: "footfest-2026",
    title: "Footfest 2026",
    date: "17.–19. července 2026",
    place: "Želeč u Tábora",
    city: "Tábor",
    category: "Festival",
    features: ["Platba čipem se vstupenkou", "Kontrola zálohovaných kelímků"],
    accent: "from-fuchsia-900 to-rose-500",
    image:
      "https://images.nfctron.com/organizers/525fe2b1-e849-4709-bcdf-de37ca5e5534.jpg",
    url: "https://tickets.nfctron.com/event/danekr-sro/footfest-2026/cart",
    calendarStart: "20260717",
    calendarEnd: "20260720",
    featured: true,
  },
  {
    id: "mighty-sounds-2027",
    title: "Mighty Sounds 2027",
    date: "25.–27. června 2027",
    place: "Letiště Čápův dvůr",
    city: "Tábor",
    category: "Festival",
    accent: "from-emerald-800 via-teal-500 to-lime-300",
    calendarStart: "20270625",
    calendarEnd: "20270628",
    featured: true,
  },
  {
    id: "chinaski-open-air",
    title: "Chinaski Open Air Léto",
    date: "18 koncertů v létě 2026",
    place: "Nejkrásnější místa Česka",
    city: "Česko",
    category: "Koncert",
    accent: "from-sky-800 via-blue-500 to-cyan-300",
  },
  {
    id: "techmission-2026",
    title: "Techmission: Hardtech",
    date: "19. září 2026",
    place: "Sportovní hala Fortuna",
    city: "Praha",
    category: "Rave",
    accent: "from-neutral-950 via-rose-700 to-red-400",
    calendarStart: "20260919",
    calendarEnd: "20260920",
  },
  {
    id: "jelenfest-2026",
    title: "JelenFest 2026",
    date: "20 koncertů po celém Česku",
    place: "Turné",
    city: "Česko",
    category: "Koncert",
    accent: "from-amber-900 via-orange-600 to-yellow-300",
  },
  {
    id: "sterkovna-open-music",
    title: "Štěrkovna Open Music 2026",
    date: "23.–26. července 2026",
    place: "Hlučínské jezero",
    city: "Hlučín",
    category: "Hudba",
    features: ["Platba čipem se vstupenkou", "Kontrola zálohovaných kelímků"],
    accent: "from-blue-950 via-blue-600 to-cyan-300",
    image:
      "https://images.nfctron.com/organizers/ad03b28f-4e52-4649-8b20-6ccc15352ecb.jpg",
    url: "https://tickets.nfctron.com/event/new-wind-production/sterkovna-open-music-2026",
    calendarStart: "20260723",
    calendarEnd: "20260727",
  },
  {
    id: "machac-2026",
    title: "Mácháč 2026",
    date: "14.–15. srpna 2026",
    place: "Pláž Klůček",
    city: "Doksy",
    category: "Hudba",
    features: ["Platba čipem se vstupenkou", "Zabezpečené vstupenky"],
    accent: "from-pink-700 via-purple-600 to-cyan-400",
    image:
      "https://images.nfctron.com/organizers/b340d8ac-c528-4985-9b57-9ff463308a67.jpg",
    url: "https://tickets.nfctron.com/event/machac-entertainment/machac-2026",
    calendarStart: "20260814",
    calendarEnd: "20260816",
  },
  {
    id: "26-sunset-tour-praha",
    title: "26SUNSET TOUR Sofian Medjmedj",
    date: "28. srpna 2026",
    place: "Ostrov Štvanice",
    city: "Praha",
    category: "Hudba",
    features: ["Platba čipem se vstupenkou", "Kontrola zálohovaných kelímků"],
    accent: "from-slate-800 via-amber-700 to-orange-300",
    image:
      "https://images.nfctron.com/organizers/5c55adb1-d640-4b2c-bc77-e9c1cdcad74c.jpg",
    url: "https://tickets.nfctron.com/event/wisemusic-s-r-o/26sunset-tour-sofian-medjmedj-praha",
    calendarStart: "20260828",
    calendarEnd: "20260829",
  },
  {
    id: "90s-explosion",
    title: "90s Explosion 2027",
    date: "22. května 2027",
    place: "Výstaviště Holešovice",
    city: "Praha",
    category: "Koncert",
    accent: "from-purple-900 via-pink-500 to-yellow-300",
    calendarStart: "20270522",
    calendarEnd: "20270523",
  },
];

export const featuredEvent = events[0];
export const categories = [
  ["Vše", ""],
  ["Výběr NFCtron", "☆"],
  ["Výhodnější vstupenky", "◉"],
  ["Hudba", "♫"],
  ["Gastro", "♨"],
  ["Kultura", "▦"],
  ["Víno", "♜"],
  ["Sportovní", "♙"],
  ["Sériové akce", "▣"],
  ["Festival", "△"],
] as const;
export const catalogEvents = [
  "footfest-2026",
  "sterkovna-open-music",
  "machac-2026",
  "26-sunset-tour-praha",
  "let-it-roll-2026",
  "mighty-sounds-2027",
  "chinaski-open-air",
  "90s-explosion",
]
  .map((id) => events.find((event) => event.id === id))
  .filter((event): event is EventItem => Boolean(event));

export const series: PromoItem[] = [
  {
    title: "Hrady CZ 2026",
    meta: "8 hradů · 8 víkendů",
    action: "Vybrat hrad",
    accent: "from-amber-700 via-orange-500 to-yellow-300",
    image:
      "https://images.nfctron.com/event-groups/53e004e4-09d9-4d48-8c0b-663a2d04bfee.png",
  },
  {
    title: "26SUNSET TOUR",
    meta: "Karviná · Brno · Praha",
    action: "Vybrat město",
    accent: "from-slate-900 via-violet-700 to-orange-300",
    image: events.find((event) => event.id === "26-sunset-tour-praha")?.image,
  },
  {
    title: "Chinaski Open Air Léto",
    meta: "18 koncertů po celém Česku",
    action: "Vybrat koncert",
    accent: "from-sky-900 via-blue-600 to-cyan-300",
    image:
      "https://images.nfctron.com/organizers/b1fb6904-12c0-403d-9675-1ac61ef440b7.jpg",
  },
];

export const events2027: PromoItem[] = [
  {
    title: "Mighty Sounds 2027",
    meta: "25.–27. června · Letiště Tábor",
    accent: "from-purple-950 via-lime-700 to-lime-300",
    image:
      "https://images.nfctron.com/organizers/5101aa82-c8a3-46bb-a68f-1c2657e59726.png",
  },
  {
    title: "90s Explosion 2027",
    meta: "22. května · Praha",
    accent: "from-fuchsia-950 via-pink-600 to-yellow-300",
    image:
      "https://images.nfctron.com/organizers/b4b3fa28-912c-421f-ac0f-8b88f5541699.png",
  },
  {
    title: "Metalfest Open Air 2027",
    meta: "Plzeň · Amfiteátr Lochotín",
    accent: "from-neutral-950 via-red-900 to-orange-400",
    image:
      "https://images.nfctron.com/organizers/179d2e51-6b5b-49cf-abb5-5502315b3a1f.png",
  },
];

export const supportItems: SupportItem[] = [
  {
    title: "Vrátit zbývající kredit",
    text: "Pošlete nevyužité peníze z čipu zpět na bankovní účet.",
    href: "https://tickets.nfctron.com/receipt",
  },
  {
    title: "Dobít kredit",
    text: "Připravte si placení na podporované akci ještě před jejím začátkem.",
    href: "https://tickets.nfctron.com/receipt",
  },
  {
    title: "Vstupenka a QR kód",
    text: "Zjistěte, kde vstupenku najdete a zda ji potřebujete tisknout.",
    href: "https://tickets.nfctron.com/receipt",
  },
  {
    title: "Ztracený QR kód",
    text: "Poradíme, jak znovu získat přístup k online účtence a čipu.",
    href: "https://tickets.nfctron.com/receipt",
  },
];

export const clickToPayCampaign: CampaignFeatureData = {
  id: "mastercard-click-to-pay",
  eyebrow: "Aktivní kampaně a spolupráce",
  partner: "Mastercard Click to Pay",
  title: "Levnější vstupenky. Méně vyplňování.",
  description:
    "Zaplaťte kartou Mastercard přes Click to Pay a u vybraných akcí získejte výhodnější cenu. Jeden bezpečný profil, žádné opakované zadávání údajů.",
  benefits: [
    "Výhodnější ceny",
    "Bezpečně uložené karty",
    "Rychlejší online platba",
  ],
  metrics: [
    { value: 70, label: "Akcí 2026" },
    { value: 17, label: "Akcí 2027" },
    { value: 71, label: "Proběhlých akcí" },
  ],
  activeEventCount: 87,
  href: "https://tickets.nfctron.com/tour/mastercard-clicktopay",
};

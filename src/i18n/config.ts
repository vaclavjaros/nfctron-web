export const locales = ['cs', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = { cs: 'Čeština', en: 'English' };

export function resolveLocale(value?: string | null): Locale {
  const normalized = value?.toLowerCase() ?? '';
  return normalized.startsWith('cs') || normalized.startsWith('sk') ? 'cs' : 'en';
}

const en: Record<string, string> = {
  'Domů': 'Home', 'Akce': 'Events', 'Jak to funguje': 'How it works', 'Pro pořadatele': 'For organizers', 'Přihlásit se': 'Sign in', 'Návštěvníci': 'Visitors', 'Pořadatelé': 'Organizers', 'Prodejci': 'Vendors', 'Zobrazení webu': 'Website view', 'Hlavní navigace': 'Main navigation', 'Přejít na podporu návštěvníků': 'Open visitor support', 'Otevřít menu': 'Open menu', 'Přepnout na web pro pořadatele': 'Switch to the organizer website', 'Přepnout na web pro návštěvníky': 'Switch to the visitor website',
  'Řešení pro prodejce': 'Solutions for vendors', 'Prodej bez zbytečných překážek.': 'Selling without unnecessary friction.', 'Připravujeme místo pro vše, co prodejci na akcích potřebují — od NFCtron Hubu po Marketplace.': 'We are preparing a place for everything event vendors need — from NFCtron Hub to Marketplace.', 'Připravujeme': 'In progress', 'NFCtron Hub pro prodejce': 'NFCtron Hub for vendors', 'Přehled tržeb, provozu a vyúčtování na jednom místě.': 'Revenue, operations and settlement in one place.', 'NFCtron Marketplace': 'NFCtron Marketplace', 'Jednodušší cesta k vybavení, službám a příležitostem pro váš prodej.': 'A simpler path to equipment, services and opportunities for your business.', 'Zpět na hlavní stránku': 'Back to the homepage',
  'Vstupenky a placení na akcích': 'Tickets and event payments',
  'Na akci bez starostí. Od vstupenky až po poslední drink.': 'Enjoy the event. From your ticket to the last drink.',
  'Objevte akce a kupte si vstupenku jednoduše online. NFCtron vám podle typu akce pomůže také s rychlým vstupem, pohodlným placením nebo vrácením nevyužitého kreditu.': 'Discover events and buy tickets easily online. Depending on the event, NFCtron also helps with fast entry, convenient payments or refunds of unused credit.',
  'Prohlédnout akce': 'Browse events', 'Můj NFCtron': 'My NFCtron', 'Více míst, jeden zážitek': 'More places, one experience', 'Sériové akce': 'Event series', 'Zobrazit všechny': 'View all',
  'Vybrat hrad': 'Choose a castle', 'Vybrat město': 'Choose a city', 'Vybrat koncert': 'Choose a concert', 'Detail akce': 'Event details', 'Sériová akce': 'Event series',
  'Příští sezóna začíná teď': 'Next season starts now', 'Akce, na které se těšíme v roce 2027': 'Events we look forward to in 2027',
  'První festivaly a koncerty jsou v prodeji. Vyberte si včas a mějte příští léto naplánované.': 'The first festivals and concerts are on sale. Choose early and start planning next summer.', 'V prodeji na rok 2027': 'On sale for 2027',
  'Vše důležité pro návštěvníky': 'Everything visitors need', 'NFCtron drží celý zážitek pohromadě.': 'NFCtron keeps the whole experience together.',
  'Vstupenka vždy po ruce': 'Your ticket always at hand', 'Nákup online a rychlý vstup na akci bez hledání e-mailů.': 'Buy online and enter quickly without searching through emails.',
  'Rychlé placení': 'Fast payments', 'Čip, karta nebo telefon. Jednoduše u stánku i bez hotovosti.': 'Chip, card or phone. Easy and cashless at every stand.',
  'Vrácení kreditu': 'Credit refunds', 'Nevyužité peníze po akci odešlete zpět přímo online.': 'Send unused funds back after the event directly online.',
  'Vstupenky v prodeji': 'Tickets on sale', 'Vyhledejte akce podle názvu nebo místa…': 'Search events by name or place…', 'Všechny akce': 'All events',
  'Vše': 'All', 'Výběr NFCtron': 'NFCtron picks', 'Výhodnější vstupenky': 'Better-value tickets', 'Hudba': 'Music', 'Kultura': 'Culture', 'Víno': 'Wine', 'Sportovní': 'Sports', 'Festival': 'Festival',
  'Festival plný hudby a zážitků': 'A festival full of music and experiences', 'Objevte akci v NFCtron Tickets': 'Discover the event in NFCtron Tickets', 'Vstupenky od': 'Tickets from', 'Vybrat vstupenky': 'Choose tickets',
  'Levnější vstupenky. Méně vyplňování.': 'Better-value tickets. Less form filling.', 'Zaplaťte kartou Mastercard přes Click to Pay a u vybraných akcí získejte výhodnější cenu. Jeden bezpečný profil, žádné opakované zadávání údajů.': 'Pay with Mastercard through Click to Pay and get a better price on selected events. One secure profile with no repeated card entry.', 'Výhodnější ceny': 'Better prices', 'Bezpečně uložené karty': 'Securely stored cards', 'Rychlejší online platba': 'Faster online payment', 'Prohlédnout výhodnější vstupenky': 'Explore better-value tickets',
  'Jednou uložit. Příště jen zaplatit.': 'Save once. Pay in a few clicks next time.', 'Platba chráněná technologií Mastercard': 'Payment protected by Mastercard technology', 'Připraveno k platbě': 'Ready to pay',
  'Platba čipem se vstupenkou': 'Chip payment with ticket', 'Kontrola zálohovaných kelímků': 'Reusable cup control', 'Přijímání EUR': 'EUR accepted', 'Zabezpečené vstupenky': 'Secured tickets',
  'Novinky a inspirace': 'News and inspiration', 'Blog NFCtron': 'NFCtron blog', 'Všechny články': 'All articles', 'Hlavní událost': 'Top story', 'Pro návštěvníky': 'For visitors', 'Přečíst článek': 'Read article',
  'NFCtron dokončil akvizici společnosti Yashica Events': 'NFCtron completes the acquisition of Yashica Events', 'Rozšiřuje podporu pořadatelům akcí a propojuje technologie s produkčním know-how.': 'Expanding support for organizers by connecting technology with production know-how.',
  'NFCtron Support': 'NFCtron Support', 'Máte vstupenku nebo jste právě po akci?': 'Already have a ticket or just returned from an event?', 'Vyberte, co potřebujete vyřešit. Návody vás provedou vstupenkou, čipem, kreditem i online účtenkou.': 'Choose what you need help with. Our guides cover tickets, chips, credit and online receipts.', 'Otevřít veškerou nápovědu': 'Open all help',
  'Vrátit zbývající kredit': 'Refund remaining credit', 'Pošlete nevyužité peníze z čipu zpět na bankovní účet.': 'Send unused chip funds back to your bank account.', 'Dobít kredit': 'Top up credit', 'Připravte si placení na podporované akci ještě před jejím začátkem.': 'Prepare payments for a supported event before it starts.', 'Vstupenka a QR kód': 'Ticket and QR code', 'Zjistěte, kde vstupenku najdete a zda ji potřebujete tisknout.': 'Find your ticket and learn whether you need to print it.', 'Ztracený QR kód': 'Lost QR code', 'Poradíme, jak znovu získat přístup k online účtence a čipu.': 'Learn how to regain access to your online receipt and chip.',
  'NFCtron účet': 'NFCtron account', 'Celý zážitek na jednom místě.': 'Your whole experience in one place.', 'Všechny vstupenky po ruce': 'All tickets at hand', 'Přehled plateb na akci': 'Event payment overview', 'Vrácení kreditu online': 'Online credit refunds', 'Upozornění a novinky': 'Alerts and updates', 'Otevřít můj NFCtron účet': 'Open my NFCtron account', 'Mobilní aplikace': 'Mobile app', 'Moje vstupenky': 'My tickets', '4 aktivní': '4 active', 'Kredit k vrácení': 'Credit to refund', 'Vrátit kredit': 'Refund credit', 'Vstupenka připravena · QR kód v aplikaci': 'Ticket ready · QR code in the app',
  'NFCtron na akcích': 'NFCtron at events', 'Méně čekání. Více zážitků.': 'Less waiting. More experiences.', 'Kupte vstupenku': 'Buy a ticket', 'Bezpečně online, během několika minut a rovnou do vašeho účtu.': 'Securely online, in minutes and straight to your account.', 'Plaťte bez starostí': 'Pay with ease', 'Čipem, kartou nebo mobilem. Rychle i tam, kde není internet.': 'By chip, card or phone. Fast even without connectivity.', 'Vraťte si kredit': 'Refund your credit', 'Zbytek peněz po akci pošlete zpět na účet přímo z aplikace.': 'Send the remaining funds back after the event directly from the app.',
  'Pořádáte akci?': 'Organizing an event?', 'Podívejte se, co NFCtron umí pro pořadatele a prodejce.': 'See what NFCtron offers organizers and vendors.', 'Řešení pro pořadatele': 'Solutions for organizers', 'Vstupenky a bezstarostné placení na akcích.': 'Tickets and effortless event payments.', 'Kontakt': 'Contact', 'Soukromí': 'Privacy',
};

export function translate(locale: Locale, value: string): string {
  return locale === 'en' ? en[value] ?? value : value;
}

export const seo = {
  cs: { title: 'NFCtron — Akce, vstupenky a bezstarostné placení', description: 'Objevte festivaly, koncerty a další akce. Kupte vstupenky online a zjistěte, jaké služby NFCtron jsou na konkrétní akci dostupné.' },
  en: { title: 'NFCtron — Events, tickets and effortless payments', description: 'Discover festivals, concerts and other events. Buy tickets online and see which NFCtron services are available at each event.' },
} satisfies Record<Locale, { title: string; description: string }>;

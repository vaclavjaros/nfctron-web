export const locales = ["cs", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  cs: "Čeština",
  en: "English",
};

export function resolveLocale(value?: string | null): Locale {
  const normalized = value?.toLowerCase() ?? "";
  return normalized.startsWith("cs") || normalized.startsWith("sk")
    ? "cs"
    : "en";
}

const en: Record<string, string> = {
  Domů: "Home",
  Akce: "Events",
  "Jak to funguje": "How it works",
  "Pro pořadatele": "For organizers",
  "Přihlásit se": "Sign in",
  Návštěvníci: "Visitors",
  Pořadatelé: "Organizers",
  Prodejci: "Vendors",
  Interpreti: "Artists",
  "Zobrazení webu": "Website view",
  "Hlavní navigace": "Main navigation",
  "Přejít na podporu návštěvníků": "Open visitor support",
  "Otevřít menu": "Open menu",
  "Přepnout na web pro pořadatele": "Switch to the organizer website",
  "Přepnout na web pro návštěvníky": "Switch to the visitor website",
  "Řešení pro prodejce": "Solutions for vendors",
  "Prodej bez zbytečných překážek.": "Selling without unnecessary friction.",
  "Připravujeme místo pro vše, co prodejci na akcích potřebují — od NFCtron Hubu po Marketplace.":
    "We are preparing a place for everything event vendors need — from NFCtron Hub to Marketplace.",
  Připravujeme: "In progress",
  "NFCtron Hub pro prodejce": "NFCtron Hub for vendors",
  "Přehled tržeb, provozu a vyúčtování na jednom místě.":
    "Revenue, operations and settlement in one place.",
  "NFCtron Marketplace": "NFCtron Marketplace",
  "Jednodušší cesta k vybavení, službám a příležitostem pro váš prodej.":
    "A simpler path to equipment, services and opportunities for your business.",
  "Zpět na hlavní stránku": "Back to the homepage",
  "Řešení pro interprety": "Solutions for artists",
  "Od prvního fanouška až po vyprodanou show.":
    "From the first fan to a sold-out show.",
  "Připravujeme prostor, kde interpreti propojí vstupenky, merchandise a data ze svých akcí v jednom přehledu.":
    "We are preparing a place where artists can connect tickets, merchandise and event data in one view.",
  "Vstupenky a vlastní akce": "Tickets and your own events",
  "Prodej vstupenek, přehled návštěvnosti a správa vlastních koncertů.":
    "Ticket sales, attendance overview and management of your own shows.",
  "Merchandise a fanoušci": "Merchandise and fans",
  "Prodej merchandise a lepší přehled o tom, co vaše publikum opravdu zajímá.":
    "Merchandise sales and a clearer view of what your audience really wants.",
  "Interpreti, se kterými pracujeme": "Artists we work with",
  "NFCtron Artists": "NFCtron Artists",
  "Ekosystém pro interprety": "An ecosystem for artists",
  "Váš talent. Jeden ekosystém. Víc možností růst.":
    "Your talent. One ecosystem. More ways to grow.",
  "NFCtron propojuje vlastní prodej vstupenek, booking, distribuci hudby a investice do dalšího rozvoje interpreta.":
    "NFCtron connects direct ticket sales, booking, music distribution and investment in the artist's continued growth.",
  "Vše, co posouvá hudební projekt dál.":
    "Everything that moves a music project forward.",
  "Celý hudební projekt": "The whole music project",
  Vstupenky: "Tickets",
  "Vlastní prodej": "Direct sales",
  Booking: "Booking",
  "Nové koncerty": "New shows",
  Distribuce: "Distribution",
  "Hudba k fanouškům": "Music to fans",
  Investice: "Investment",
  "Prostor pro růst": "Room to grow",
  "Interpreti a pořadatelé na jednom pódiu.":
    "Artists and organizers on one stage.",
  "Rozvíjíme místo, kde interpreti získají silnější prezentaci a nové příležitosti — a pořadatelé rychlou cestu k ověřenému bookingu.":
    "We are building a place where artists gain stronger presentation and new opportunities — while organizers get a direct path to trusted booking.",
  "Jsem interpret": "I am an artist",
  "Pořádám akci": "I organize events",
  "NFCtron roster": "NFCtron roster",
  "Interpreti, které zastupujeme a rozvíjíme.":
    "Artists we represent and develop.",
  "Nejsou pro nás jen položkou v katalogu. Každému interpretovi postupně stavíme vlastní prezentaci, booking a propojení s akcemi.":
    "They are not just entries in a catalogue. We are gradually building every artist a dedicated profile, booking path and connection to events.",
  "Pop · live band · festivalová show": "Pop · live band · festival show",
  "Pop · koncertní vystoupení": "Pop · live performance",
  "Pop rock · klubová a festivalová show": "Pop rock · club and festival show",
  "Profil a booking": "Profile and booking",
  "Profil připravujeme": "Profile coming soon",
  "Pro interprety": "For artists",
  "Váš projekt má dostat prostor růst.": "Your project deserves room to grow.",
  "Pomůžeme vám proměnit hudební projekt v přehlednou nabídku pro pořadatele a fanoušky. Od první poptávky až po vyprodanou show.":
    "We help turn your music project into a clear proposition for organizers and fans. From the first enquiry to a sold-out show.",
  "Chci spolupracovat": "I want to collaborate",
  "Nejen služba. Partner pro celý hudební projekt.":
    "More than a service. A partner for the whole music project.",
  "Stavíme vlastní ekosystém interpreta. Propojujeme vydávání hudby, prodej vstupenek, booking i kapitál pro další růst.":
    "We build an artist's own ecosystem by connecting music releases, ticket sales, booking and capital for further growth.",
  "Vlastní prodej vstupenek": "Direct ticket sales",
  "Prodej pod jménem interpreta, vlastní koncerty a přímý vztah s fanoušky bez zbytečných mezičlánků.":
    "Sales under the artist's own name, headline shows and a direct relationship with fans without unnecessary middlemen.",
  "Vlastní booking": "Dedicated booking",
  "Aktivně hledáme nové příležitosti a propojujeme interpreta s pořadateli, kterým jeho show dává smysl.":
    "We actively seek new opportunities and connect the artist with organizers whose events are the right fit.",
  "Vlastní distribuce": "Dedicated distribution",
  "Pomáháme dostat hudbu k posluchačům, rozvíjet digitální dosah a propojit vydání s živými koncerty.":
    "We help music reach listeners, grow its digital audience and connect releases with live shows.",
  "Investice do hudby": "Investment in music",
  "Vstupujeme do projektů, kterým věříme — od nové tvorby a obsahu až po rozvoj koncertní show.":
    "We invest in projects we believe in — from new music and content to the development of the live show.",
  "Booking a nové příležitosti": "Booking and new opportunities",
  "Propojujeme interprety s pořadateli a pomáháme proměnit poptávku v dobře připravenou show.":
    "We connect artists with organizers and help turn an enquiry into a well-prepared show.",
  "Vlastní profil a koncerty": "Your own profile and shows",
  "Jedno místo pro představení interpreta, termíny koncertů, vstupenky a přímou bookingovou poptávku.":
    "One place for the artist story, show dates, tickets and direct booking enquiries.",
  "Data, která pomáhají růst": "Data that supports growth",
  "Postupně propojíme prodeje, návštěvnost a zájem fanoušků do srozumitelného přehledu.":
    "We will gradually connect sales, attendance and fan interest in one clear overview.",
  "Interpret, který sedne právě vaší akci.": "The right artist for your event.",
  "Na jednom místě uvidíte charakter show, koncertní možnosti i cestu k bookingu. O zbytek se postará náš tým.":
    "See the character of the show, performance options and the path to booking in one place. Our team handles the rest.",
  "Poptat interpreta": "Enquire about an artist",
  "Vyberte interpreta": "Choose an artist",
  "Rychle porovnejte styl, formát vystoupení a produkční možnosti pro svou akci.":
    "Quickly compare style, performance format and production options for your event.",
  "Pošlete poptávku": "Send an enquiry",
  "Stačí termín, místo, typ akce a kapacita. Bookingový tým ověří dostupnost.":
    "Just share the date, venue, event type and capacity. The booking team will check availability.",
  "Připravíme vystoupení": "We prepare the performance",
  "Propojíme booking s produkcí a podle akce také se vstupenkami a dalšími službami NFCtron.":
    "We connect booking with production and, where relevant, tickets and other NFCtron services.",
  "Spojme správného interpreta se správnou akcí.":
    "Let us connect the right artist with the right event.",
  "Ať hledáte další koncertní příležitost, nebo jméno pro svůj program, začněte krátkou poptávkou.":
    "Whether you are looking for your next show or the right name for your line-up, start with a short enquiry.",
  "Zpět na interprety": "Back to artists",
  "Emoce, energie a show, která funguje na klubovém pódiu i před festivalovým publikem.":
    "Emotion, energy and a show built for club stages and festival crowds alike.",
  "Poptat booking": "Request booking",
  "Zobrazit koncerty": "View shows",
  "Aktivní akce": "Active shows",
  "Odehráno v roce 2026": "Played in 2026",
  "Ještě letos": "Still to come this year",
  "Potvrzeno na rok 2027": "Confirmed for 2027",
  "Sebastian live": "Sebastian live",
  "Generační výpověď, která naživo dostává nový rozměr.":
    "A generational voice that takes on a new dimension live.",
  "Sebastian propojuje silné melodie s moderní popovou produkcí a bezprostředním kontaktem s publikem. Jeho koncerty stojí na energii celé kapely, známých hitech i nové tvorbě.":
    "Sebastian combines strong melodies, modern pop production and a direct connection with the audience. His concerts are driven by a full live band, familiar hits and new music.",
  "NFCtron zajišťuje booking a postupně propojí koncertní nabídku, vstupenky a data z jednotlivých akcí na jednom místě.":
    "NFCtron manages booking and will gradually connect show availability, tickets and event data in one place.",
  "Poslouchejte Sebastiana": "Listen to Sebastian",
  "Hudba, kterou fanoušci znají ještě před první notou na pódiu.":
    "Music fans recognize before the first note is played on stage.",
  "měsíčních posluchačů na Spotify": "monthly listeners on Spotify",
  "streamů skladby Toulavá": "streams of Toulavá",
  "zhlédnutí Toulavé na YouTube": "views of Toulavá on YouTube",
  "Otevřít profil": "Open profile",
  "Show postavená pro pódium": "A show built for the stage",
  "Silná kapela. Velká energie. Efekty, které si publikum zapamatuje.":
    "A powerful band. Big energy. Effects the audience will remember.",
  "Sebastian nabízí plnohodnotnou koncertní show pro festivaly, městské slavnosti i samostatné koncerty. Rozsah produkce přizpůsobíme prostoru a technickým možnostem akce.":
    "Sebastian delivers a complete live show for festivals, city celebrations and headline concerts. The production can be tailored to the venue and its technical setup.",
  "Světelná show": "Lighting show",
  "Pyro a ohňové efekty": "Pyro and fire effects",
  "Sezóna 2026–2027": "2026–2027 season",
  "Nejbližší koncerty": "Upcoming shows",
  "Další termíny průběžně doplňujeme": "More dates are added regularly",
  "V prodeji": "On sale",
  "Již brzy": "Coming soon",
  "Chcete Sebastiana na svou akci?": "Want Sebastian at your event?",
  "Pošlete nám termín, místo, typ akce a předpokládanou kapacitu. Bookingový tým NFCtron se vám ozve s dostupností a dalšími kroky.":
    "Send us the date, venue, event type and expected capacity. The NFCtron booking team will get back to you with availability and next steps.",
  "Odeslat poptávku": "Send enquiry",
  "Hudební projekt": "Music project",
  "Technologie a služby pro akce": "Technology and services for events",
  "Vaše akce. Jeden propojený systém.": "Your event. One connected system.",
  "Vstupenky, platby a provozní data propojujeme podle toho, co vaše akce skutečně potřebuje — od přípravy až po vyúčtování.":
    "We connect tickets, payments and operational data around what your event truly needs — from planning to settlement.",
  "Poptat řešení": "Request a solution",
  "Prohlédnout možnosti": "Explore options",
  "Základ, na kterém budeme stavět": "The foundation we will build on",
  "Vstupenky a vstup": "Tickets and entry",
  "Prodej vstupenek, kontrola vstupů a přehled objednávek v jednom systému.":
    "Ticket sales, entry control and order overview in one system.",
  "Platby a provoz akce": "Payments and event operations",
  "Rychlé bezhotovostní placení doplněné technologií a podporou přímo na místě.":
    "Fast cashless payments supported by technology and an on-site team.",
  "Data v NFCtron Hubu": "Data in NFCtron Hub",
  "Prodeje, tržby a provozní data dostupná vašemu týmu v reálném čase.":
    "Sales, revenue and operational data available to your team in real time.",
  "Technologie, které propojují návštěvníky, pořadatele, prodejce a interprety.":
    "Technology connecting visitors, organizers, vendors and artists.",
  "Celý svět akcí v jednom ekosystému.":
    "The entire world of events in one ecosystem.",
  "Vstupenky, platby a technologie, které propojují návštěvníky, pořadatele, prodejce a interprety.":
    "Tickets, payments and technology connecting visitors, organizers, vendors and artists.",
  "Pro koho": "For whom",
  "Pomoc a účet": "Help and account",
  "Nastavení cookies": "Cookie settings",
  "Na akcích bez zbytečných starostí.": "Effortless event experiences.",
  "Vstupenky a placení na akcích": "Tickets and event payments",
  "Vstupenky. Platby. Zážitek.": "Tickets. Payments. Experiences.",
  "Od vstupenky rovnou k zážitku.":
    "From your ticket straight to the experience.",
  "Objevte akce, kupte vstupenku a mějte vše důležité po ruce. Jednoduše před akcí, na místě i po ní.":
    "Discover events, buy your ticket and keep everything important close at hand. Simple before, during and after the event.",
  "Bezpečný nákup": "Secure checkout",
  "Vstupenka v telefonu": "Ticket on your phone",
  "Na akci bez starostí. Od vstupenky až po poslední drink.":
    "Enjoy the event. From your ticket to the last drink.",
  "Objevte akce a kupte si vstupenku jednoduše online. NFCtron vám podle typu akce pomůže také s rychlým vstupem, pohodlným placením nebo vrácením nevyužitého kreditu.":
    "Discover events and buy tickets easily online. Depending on the event, NFCtron also helps with fast entry, convenient payments or refunds of unused credit.",
  "Prohlédnout akce": "Browse events",
  "Prohlédnout akci": "View event",
  "Můj NFCtron": "My NFCtron",
  Karty: "Cards",
  "Trendy mezi návštěvníky": "Trending with visitors",
  "Co právě nejvíc baví návštěvníky?": "What are visitors into right now?",
  "Vyberte si oblast a podívejte se, o jaké akce mají lidé právě největší zájem.":
    "Choose an area and see which events are attracting the most interest right now.",
  "Preference doporučení": "Recommendation preference",
  Výhodněji: "Deals",
  "Největší zájem o zvýhodněné akce": "Most popular better-value events",
  "Co teď vede mezi festivaly": "Trending festivals right now",
  "Co teď vede mezi koncerty": "Trending concerts right now",
  "Co teď vede v hudbě": "Trending in music right now",
  "17.–19. července · Želeč u Tábora": "17–19 July · Želeč near Tábor",
  "23.–26. července · Hlučínské jezero": "23–26 July · Lake Hlučín",
  "30. července–1. srpna · Jezero Most": "30 July–1 August · Lake Most",
  "14.–15. srpna · Pláž Klůček": "14–15 August · Klůček Beach",
  "28. srpna · Ostrov Štvanice, Praha": "28 August · Štvanice Island, Prague",
  "23.–26. července · Areál Cihelka": "23–26 July · Cihelka grounds",
  "Více míst, jeden zážitek": "More places, one experience",
  "Sériové akce": "Event series",
  "Zobrazit všechny": "View all",
  "Zobrazit méně": "Show less",
  "Vybrat hrad": "Choose a castle",
  "Vybrat město": "Choose a city",
  "Vybrat koncert": "Choose a concert",
  "5 měst · únor 2027": "5 cities · February 2027",
  "20 zastávek po celém Česku": "20 stops across Czechia",
  "9 koncertů v prodeji · 2026–2027": "9 shows on sale · 2026–2027",
  "Detail akce": "Event details",
  "Sériová akce": "Event series",
  "Příští sezóna začíná teď": "Next season starts now",
  "Akce, na které se těšíme v roce 2027": "Events we look forward to in 2027",
  "Vybrané akce pro rok 2027 už jsou v prodeji. Objevte, co se chystá, a vyberte si s předstihem.":
    "Selected 2027 events are already on sale. See what is coming and choose your plans ahead of time.",
  "V prodeji na rok 2027": "On sale for 2027",
  "Prohlédnout všechny akce 2027": "Explore all 2027 events",
  "25.–27. června · Letiště Tábor": "25–27 June · Tábor Airport",
  "22. května · Praha": "22 May · Prague",
  "Plzeň · Amfiteátr Lochotín": "Pilsen · Lochotín Amphitheatre",
  "Zobrazit pořadatele": "View organizer",
  "Vše důležité pro návštěvníky": "Everything visitors need",
  "NFCtron drží celý zážitek pohromadě.":
    "NFCtron keeps the whole experience together.",
  "Vstupenka vždy po ruce": "Your ticket always at hand",
  "Nákup online a rychlý vstup na akci bez hledání e-mailů.":
    "Buy online and enter quickly without searching through emails.",
  "Rychlé placení": "Fast payments",
  "Čip, karta nebo telefon. Jednoduše u stánku i bez hotovosti.":
    "Chip, card or phone. Easy and cashless at every stand.",
  "Vrácení kreditu": "Credit refunds",
  "Nevyužité peníze po akci odešlete zpět přímo online.":
    "Send unused funds back after the event directly online.",
  "Před akcí": "Before the event",
  "Vstupenka v telefonu, informace na jednom místě a žádné hledání v e-mailu.":
    "Your ticket on your phone, all key details in one place and no searching through email.",
  "Na místě": "At the event",
  "Rychlý vstup a podle typu akce pohodlné placení čipem, kartou nebo telefonem.":
    "Fast entry and, depending on the event, easy payment by chip, card or phone.",
  "Po akci": "After the event",
  "Přehled plateb, online účtenka a jednoduché vrácení nevyužitého kreditu.":
    "Payment history, online receipts and a simple refund of unused credit.",
  "Najděte svůj další zážitek": "Find your next experience",
  "Vstupenky v prodeji": "Tickets on sale",
  "Vyhledejte akce podle názvu nebo místa…": "Search events by name or place…",
  "Všechny akce": "All events",
  "Zobrazit všechny akce": "View all events",
  Vše: "All",
  "Výběr NFCtron": "NFCtron picks",
  "Výhodnější vstupenky": "Better-value tickets",
  Hudba: "Music",
  Koncert: "Concert",
  Kultura: "Culture",
  Víno: "Wine",
  Sportovní: "Sports",
  Festival: "Festival",
  "Festival plný hudby a zážitků": "A festival full of music and experiences",
  "Objevte akci v NFCtron Tickets": "Discover the event in NFCtron Tickets",
  "Vstupenky od": "Tickets from",
  "Vybrat vstupenky": "Choose tickets",
  "Levnější vstupenky. Méně vyplňování.":
    "Better-value tickets. Less form filling.",
  "Zaplaťte kartou Mastercard přes Click to Pay a u vybraných akcí získejte výhodnější cenu. Jeden bezpečný profil, žádné opakované zadávání údajů.":
    "Pay with Mastercard through Click to Pay and get a better price on selected events. One secure profile with no repeated card entry.",
  "Výhodnější ceny": "Better prices",
  "Bezpečně uložené karty": "Securely stored cards",
  "Rychlejší online platba": "Faster online payment",
  "Prohlédnout výhodnější vstupenky": "Explore better-value tickets",
  "Aktivní kampaně a spolupráce": "Active campaigns and partnerships",
  "Aktivní kampaň": "Active campaign",
  "Akcí 2026": "2026 events",
  "Akcí 2027": "2027 events",
  "Proběhlých akcí": "Past events",
  "Zobrazit {count} akcí v kampani": "View {count} campaign events",
  "Jednou uložit. Příště jen zaplatit.":
    "Save once. Pay in a few clicks next time.",
  "Platba chráněná technologií Mastercard":
    "Payment protected by Mastercard technology",
  "Připraveno k platbě": "Ready to pay",
  "Platba čipem se vstupenkou": "Chip payment with ticket",
  "Kontrola zálohovaných kelímků": "Reusable cup control",
  "Přijímání EUR": "EUR accepted",
  "Zabezpečené vstupenky": "Secured tickets",
  "Novinky a inspirace": "News and inspiration",
  "Blog NFCtron": "NFCtron blog",
  "Všechny články": "All articles",
  "Hlavní událost": "Top story",
  "Pro návštěvníky": "For visitors",
  "Přečíst článek": "Read article",
  "NFCtron dokončil akvizici společnosti Yashica Events":
    "NFCtron completes the acquisition of Yashica Events",
  "Rozšiřuje podporu pořadatelům akcí a propojuje technologie s produkčním know-how.":
    "Expanding support for organizers by connecting technology with production know-how.",
  "NFCtron Support": "NFCtron Support",
  "Máte vstupenku nebo jste právě po akci?":
    "Already have a ticket or just returned from an event?",
  "Vyberte, co potřebujete vyřešit. Návody vás provedou vstupenkou, čipem, kreditem i online účtenkou.":
    "Choose what you need help with. Our guides cover tickets, chips, credit and online receipts.",
  "Otevřít veškerou nápovědu": "Open all help",
  "Vrátit zbývající kredit": "Refund remaining credit",
  "Pošlete nevyužité peníze z čipu zpět na bankovní účet.":
    "Send unused chip funds back to your bank account.",
  "Dobít kredit": "Top up credit",
  "Připravte si placení na podporované akci ještě před jejím začátkem.":
    "Prepare payments for a supported event before it starts.",
  "Vstupenka a QR kód": "Ticket and QR code",
  "Zjistěte, kde vstupenku najdete a zda ji potřebujete tisknout.":
    "Find your ticket and learn whether you need to print it.",
  "Ztracený QR kód": "Lost QR code",
  "Poradíme, jak znovu získat přístup k online účtence a čipu.":
    "Learn how to regain access to your online receipt and chip.",
  "NFCtron účet": "NFCtron account",
  "Celý zážitek na jednom místě.": "Your whole experience in one place.",
  "Vstupenky, platby a vrácení kreditu máte v jednom účtu. Bez hledání účtenek a formulářů.":
    "Keep tickets, payments and credit refunds in one account. No searching for receipts or forms.",
  "Všechny vstupenky po ruce": "All tickets at hand",
  "Přehled plateb na akci": "Event payment overview",
  "Vrácení kreditu online": "Online credit refunds",
  "Upozornění a novinky": "Alerts and updates",
  "Otevřít můj NFCtron účet": "Open my NFCtron account",
  "Mobilní aplikace": "Mobile app",
  "Moje vstupenky": "My tickets",
  "4 aktivní": "4 active",
  "Kredit k vrácení": "Credit to refund",
  "Vrátit kredit": "Refund credit",
  "Vstupenka připravena · QR kód v aplikaci":
    "Ticket ready · QR code in the app",
  "NFCtron na akcích": "NFCtron at events",
  "Méně čekání. Více zážitků.": "Less waiting. More experiences.",
  "Kupte vstupenku": "Buy a ticket",
  "Bezpečně online, během několika minut a rovnou do vašeho účtu.":
    "Securely online, in minutes and straight to your account.",
  "Plaťte bez starostí": "Pay with ease",
  "Čipem, kartou nebo mobilem. Rychle i tam, kde není internet.":
    "By chip, card or phone. Fast even without connectivity.",
  "Vraťte si kredit": "Refund your credit",
  "Zbytek peněz po akci pošlete zpět na účet přímo z aplikace.":
    "Send the remaining funds back after the event directly from the app.",
  "Pořádáte akci?": "Organizing an event?",
  "Podívejte se, co NFCtron umí pro pořadatele a prodejce.":
    "See what NFCtron offers organizers and vendors.",
  "Řešení pro pořadatele": "Solutions for organizers",
  "Vstupenky a bezstarostné placení na akcích.":
    "Tickets and effortless event payments.",
  Kontakt: "Contact",
  Soukromí: "Privacy",
};

export function translate(locale: Locale, value: string): string {
  return locale === "en" ? (en[value] ?? value) : value;
}

export const seo = {
  cs: {
    title: "NFCtron — Akce, vstupenky a bezstarostné placení",
    description:
      "Objevte festivaly, koncerty a další akce. Kupte vstupenky online a zjistěte, jaké služby NFCtron jsou na konkrétní akci dostupné.",
  },
  en: {
    title: "NFCtron — Events, tickets and effortless payments",
    description:
      "Discover festivals, concerts and other events. Buy tickets online and see which NFCtron services are available at each event.",
  },
} satisfies Record<Locale, { title: string; description: string }>;

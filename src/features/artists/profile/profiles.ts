import { localized, type ArtistProfileConfig } from "./types";

export const artistProfiles = {
  sebastian: {
    slug: "sebastian",
    name: "Sebastian",
    bookingName: localized("Sebastiana", "Sebastian"),
    tagline: localized(
      "Emoce, energie a show pro klubové pódium i festivalové publikum.",
      "Emotion, energy and a show for club stages and festival crowds.",
    ),
    heroImage: "/artists/sebastian/hero.jpg",
    portraitImage: "/artists/sebastian/portrait.jpg",
    showImage: "/artists/sebastian/show.jpg",
    bookingEmail: "booking@nfctron.com",
    bioEyebrow: localized("Sebastian live", "Sebastian live"),
    bioTitle: localized(
      "Generační výpověď, která naživo dostává nový rozměr.",
      "A generational voice that takes on a new dimension live.",
    ),
    bio: [
      localized(
        "Sebastian propojuje silné melodie s moderní popovou produkcí a bezprostředním kontaktem s publikem. Jeho koncerty stojí na energii celé kapely, známých hitech i nové tvorbě.",
        "Sebastian combines strong melodies, modern pop production and a direct connection with the audience. His concerts are driven by a full live band, familiar hits and new music.",
      ),
      localized(
        "NFCtron zajišťuje booking a postupně propojuje koncertní nabídku, vstupenky a data z jednotlivých akcí na jednom místě.",
        "NFCtron manages booking and gradually connects show availability, tickets and event data in one place.",
      ),
    ],
    stats: [
      { value: "24", label: localized("aktivních akcí", "active shows") },
      {
        value: "12",
        label: localized("odehráno v roce 2026", "played in 2026"),
      },
      { value: "8", label: localized("ještě letos", "still this year") },
      {
        value: "4",
        label: localized("potvrzeno na rok 2027", "confirmed for 2027"),
      },
    ],
    spotify: {
      artistId: "1ucovYZ0AOZZ0ZIfjhYFfQ",
      metrics: [
        {
          value: "279,8 tis.",
          label: localized("měsíčních posluchačů", "monthly listeners"),
        },
        {
          value: "12,3 mil.",
          label: localized("streamů skladby Toulavá", "streams of Toulavá"),
        },
        {
          value: "37 mil.+",
          label: localized("zhlédnutí Toulavé", "views of Toulavá"),
        },
      ],
    },
    video: {
      title: "Sebastian — ALMA ft. Patrik Malý",
      url: "https://www.youtube.com/watch?v=Ls4JABaEhEE",
      image: "/artists/sebastian/alma-youtube.jpg",
    },
    live: {
      eyebrow: localized(
        "Show postavená pro pódium",
        "A show built for the stage",
      ),
      title: localized(
        "Silná kapela. Velká energie. Efekty, které si publikum zapamatuje.",
        "A powerful band. Big energy. Effects the audience will remember.",
      ),
      description: localized(
        "Plnohodnotnou koncertní show přizpůsobíme festivalu, městské slavnosti i samostatnému koncertu.",
        "The complete live show can be tailored to a festival, city celebration or headline concert.",
      ),
      features: [
        localized("Live band", "Live band"),
        localized("Světelná show", "Lighting show"),
        localized("CO₂ a konfety", "CO₂ and confetti"),
        localized("Pyro a ohňové efekty", "Pyro and fire effects"),
      ],
    },
    events: [
      {
        date: "28. 8. 2026",
        city: "Praha",
        venue: "Ostrov Štvanice",
        status: localized("V prodeji", "On sale"),
      },
      {
        date: "podzim 2026",
        city: "Česko",
        venue: "Další termíny připravujeme",
        status: localized("Již brzy", "Coming soon"),
      },
    ],
  },
  elizabeth: {
    slug: "elizabeth-kopecka",
    name: "Elizabeth Kopecká",
    bookingName: localized("Elizabeth Kopeckou", "Elizabeth Kopecká"),
    tagline: localized(
      "Výrazný hlas, přirozené charisma a nový český pop.",
      "A distinctive voice, natural charisma and a new chapter in Czech pop.",
    ),
    heroImage: "/artists/elizabeth/hero.jpg",
    portraitImage: "/artists/elizabeth/portrait.jpg",
    showImage: "/artists/elizabeth/show.jpg",
    heroPosition: "object-[center_28%]",
    bookingEmail: "booking@nfctron.com",
    bioEyebrow: localized("Elizabeth live", "Elizabeth live"),
    bioTitle: localized(
      "Silný hlas a osobní písně, které fungují i na velkém pódiu.",
      "A powerful voice and personal songs made for a big stage.",
    ),
    bio: [
      localized(
        "Elizabeth Kopecká zaujala výraznou barvou hlasu a charismatem už ve finále Česko Slovenské SuperStar. Od té doby staví vlastní repertoár na autentických českých textech a moderní popové produkci.",
        "Elizabeth Kopecká first captivated audiences with her distinctive voice and charisma as a finalist of Czech & Slovak SuperStar. She now builds her own repertoire around authentic Czech lyrics and modern pop production.",
      ),
      localized(
        "Po vystoupeních na Tour de léto Marka Ztraceného, v Lucerně i během halftime show Oktagonu otevírá s NFCtron další etapu — vlastní booking, koncerty a dlouhodobý rozvoj projektu.",
        "Following appearances on Marek Ztracený's Tour de léto, at Lucerna and during an Oktagon halftime show, she is opening a new chapter with NFCtron — dedicated booking, live shows and long-term artist development.",
      ),
    ],
    stats: [
      {
        value: "2.",
        label: localized("místo v SuperStar", "place in SuperStar"),
      },
      {
        value: "6,7 tis.",
        label: localized("měsíčních posluchačů", "monthly listeners"),
      },
      {
        value: "286 tis.+",
        label: localized("streamů Plánu B", "streams of Plán B"),
      },
      {
        value: "2026",
        label: localized("nová etapa s NFCtron", "new chapter with NFCtron"),
      },
    ],
    spotify: {
      artistId: "4bp0VqiC1SbgLXMp1vDcD8",
      metrics: [
        {
          value: "6,7 tis.",
          label: localized("měsíčních posluchačů", "monthly listeners"),
        },
        {
          value: "286 tis.+",
          label: localized("streamů skladby Plán B", "streams of Plán B"),
        },
        {
          value: "9",
          label: localized("vydaných singlů a EP", "released singles and EPs"),
        },
      ],
    },
    video: {
      title: "Elizabeth Kopecká — Tak schválně (Au Au Au)",
      url: "https://www.youtube.com/watch?v=M8xPs5O3PM8",
      image: "/artists/elizabeth/show.jpg",
    },
    live: {
      eyebrow: localized(
        "Pop s vlastním rukopisem",
        "Pop with a signature sound",
      ),
      title: localized(
        "Od intimního koncertu po velkou festivalovou scénu.",
        "From an intimate concert to a major festival stage.",
      ),
      description: localized(
        "Elizabeth staví show na výrazném vokálu, osobním kontaktu s publikem a repertoáru v češtině i angličtině.",
        "Elizabeth builds her show around a distinctive vocal, a personal connection with the audience and a repertoire in Czech and English.",
      ),
      features: [
        localized("Live band", "Live band"),
        localized("Festivaly", "Festivals"),
        localized("Městské slavnosti", "City celebrations"),
        localized("Firemní eventy", "Corporate events"),
      ],
    },
    events: [
      {
        date: "2026–2027",
        city: "Česko",
        venue: "Nové koncerty připravujeme",
        status: localized("Booking otevřen", "Booking open"),
      },
    ],
  },
  likeIt: {
    slug: "like-it",
    name: "Like-It",
    bookingName: localized("Like-It", "Like-It"),
    tagline: localized(
      "Energický český pop rock, silné refrény a koncertní tah.",
      "Energetic Czech pop rock, powerful hooks and real live momentum.",
    ),
    heroImage: "/artists/like-it/hero.jpg",
    portraitImage: "/artists/like-it/hero.jpg",
    showImage: "/artists/like-it/show.jpg",
    bookingEmail: "booking@nfctron.com",
    bioEyebrow: localized("Like-It live", "Like-It live"),
    bioTitle: localized(
      "Kapela z Třebíče, která ví, jak rozhýbat klub i festival.",
      "A band from Třebíč that knows how to move a club and a festival.",
    ),
    bio: [
      localized(
        "Like-It se dostali do širšího povědomí písněmi Nádech a Křídla. Singl Mrazí zazněl také ve filmu Špindl 2 a tvorba kapely pravidelně míří do českých rádií.",
        "Like-It reached a wider audience with the songs Nádech and Křídla. Their single Mrazí also appeared in the film Špindl 2 and the band's music regularly reaches Czech radio playlists.",
      ),
      localized(
        "Za sebou mají desítky festivalů a dvě turné jako předkapela Chinaski. NFCtron zajišťuje booking a propojuje další koncertní sezónu s přímým prodejem vstupenek.",
        "They have played dozens of festivals and completed two tours supporting Chinaski. NFCtron manages booking and connects the next live season with direct ticket sales.",
      ),
    ],
    stats: [
      {
        value: "65,7 tis.",
        label: localized("měsíčních posluchačů", "monthly listeners"),
      },
      {
        value: "2",
        label: localized("turné s Chinaski", "tours with Chinaski"),
      },
      { value: "20+", label: localized("vydaných klipů", "released videos") },
      {
        value: "3",
        label: localized("potvrzené koncerty 2026", "confirmed 2026 shows"),
      },
    ],
    spotify: {
      artistId: "74YFXiSUy88vIxiKAgQehC",
      metrics: [
        {
          value: "65,7 tis.",
          label: localized("měsíčních posluchačů", "monthly listeners"),
        },
        {
          value: "2",
          label: localized("vydaná alba a EP", "released albums and EPs"),
        },
        {
          value: "20+",
          label: localized("oficiálních videoklipů", "official music videos"),
        },
      ],
    },
    video: {
      title: "Like-It — Nezapomenout",
      url: "https://youtu.be/L4vFd73Q2eY",
      image: "/artists/like-it/hero.jpg",
    },
    live: {
      eyebrow: localized("Energie bez kompromisu", "Energy without compromise"),
      title: localized(
        "Chytlavé melodie a show, která jde přímo za publikem.",
        "Catchy melodies and a show that connects directly with the crowd.",
      ),
      description: localized(
        "Like-It přinášejí plnohodnotný pop-rockový set pro festivaly, městské slavnosti, kluby i společné koncerty.",
        "Like-It deliver a complete pop-rock set for festivals, city celebrations, clubs and co-headline shows.",
      ),
      features: [
        localized("Live band", "Live band"),
        localized("Festivalový set", "Festival set"),
        localized("Klubová show", "Club show"),
        localized("Známé rádiové singly", "Familiar radio singles"),
      ],
    },
    events: [
      {
        date: "18. 7. 2026",
        city: "Ledeč nad Sázavou",
        venue: "Phoenix fest",
        status: localized("V prodeji", "On sale"),
      },
      {
        date: "8. 8. 2026",
        city: "Králův Dvůr",
        venue: "Like-It + O5 a Radeček",
        status: localized("V prodeji", "On sale"),
      },
      {
        date: "29. 8. 2026",
        city: "Hořice",
        venue: "Slavnosti hořických trubiček",
        status: localized("Potvrzeno", "Confirmed"),
      },
    ],
  },
} satisfies Record<string, ArtistProfileConfig>;

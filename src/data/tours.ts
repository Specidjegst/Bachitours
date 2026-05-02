import type { Tour } from "@/lib/types";

const PRICE = 35;

export const tours: Tour[] = [
  {
    id: "dolphin-private",
    durationHours: 3,
    maxGuests: 10,
    isPrivate: true,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: PRICE, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=1600&q=80", alt: "Delfin im Meer" },
      { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80", alt: "Boot bei Sonnenuntergang" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80", alt: "Adriaküste" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Private Delfin- & Kormoran-Beobachtungstour",
        slug: "private-delfin-kormoran-tour",
        shortDescription: "Privat auf dem Boot Delfine und Kormorane vor Poreč erleben.",
        description: "Eine private Tour exklusiv für Sie und Ihre Liebsten. In Begleitung unseres Skippers fahren wir zu den Lieblingsplätzen der Adria-Delfine. Nebenbei beobachten wir die seltenen Kormoran-Kolonien an der felsigen Küste vor Poreč.",
        highlights: ["Privatboot nur für Ihre Gruppe", "Beste Zeit für Delfin-Beobachtung", "Erfahrener lokaler Skipper", "Ruhige, kleine Buchten"],
        included: ["Privater Skipper", "Wasser & Erfrischungen", "Schwimmwesten", "Kraftstoff"],
        notIncluded: ["Mittagessen", "Hotelabholung"],
        schedule: [
          { time: "09:00", text: "Treffen am Pier in der Marina Poreč" },
          { time: "09:15", text: "Abfahrt Richtung Delfin-Gebiet" },
          { time: "10:30", text: "Delfin- und Kormoran-Beobachtung" },
          { time: "12:00", text: "Rückkehr in die Marina Poreč" }
        ],
        importantNotes: ["Wetterabhängig, Skipper entscheidet", "Sonnencreme & Hut empfohlen", "Festes Schuhwerk hilfreich"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Private Dolphin & Cormorant Watching Tour",
        slug: "private-dolphin-cormorant-tour",
        shortDescription: "Private boat tour to spot dolphins and cormorants off Poreč.",
        description: "A private tour exclusively for you and your loved ones. Together with our skipper we head out to the favorite spots of Adriatic dolphins, while watching the rare cormorant colonies along the rocky coast.",
        highlights: ["Private boat for your group", "Best time for dolphin watching", "Experienced local skipper", "Quiet small bays"],
        included: ["Private skipper", "Water & refreshments", "Life jackets", "Fuel"],
        notIncluded: ["Lunch", "Hotel pickup"],
        schedule: [
          { time: "09:00", text: "Meet at the pier in Marina Poreč" },
          { time: "09:15", text: "Departure to dolphin area" },
          { time: "10:30", text: "Dolphin & cormorant watching" },
          { time: "12:00", text: "Return to Marina Poreč" }
        ],
        importantNotes: ["Weather-dependent, skipper decides", "Sunscreen & hat recommended", "Sturdy shoes helpful"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Privatni izlet – promatranje dupina i vranaca",
        slug: "privatni-izlet-dupini-vranci",
        shortDescription: "Privatni izlet brodom uz dupine i vrance ispred Poreča.",
        description: "Privatni izlet samo za vas i vaše najbliže. Sa skiperom plovimo do omiljenih mjesta jadranskih dupina i promatramo rijetke kolonije vranaca uz stjenovitu obalu.",
        highlights: ["Privatni brod samo za vašu grupu", "Najbolje vrijeme za dupine", "Iskusan lokalni skiper", "Mirne male uvale"],
        included: ["Privatni skiper", "Voda i osvježenje", "Prsluci", "Gorivo"],
        notIncluded: ["Ručak", "Preuzimanje iz hotela"],
        schedule: [
          { time: "09:00", text: "Susret na pristaništu u Marini Poreč" },
          { time: "09:15", text: "Polazak prema području dupina" },
          { time: "10:30", text: "Promatranje dupina i vranaca" },
          { time: "12:00", text: "Povratak u Marinu Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu, skiper odlučuje", "Preporučujemo kremu i šešir", "Dobro je obuti čvrste cipele"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Tour privé – observation des dauphins et cormorans",
        slug: "tour-privee-dauphins-cormorans",
        shortDescription: "Tour privé en bateau pour observer dauphins et cormorans au large de Poreč.",
        description: "Une excursion privée exclusivement pour vous. Avec notre skipper, nous nous rendons aux endroits préférés des dauphins de l'Adriatique tout en observant les rares colonies de cormorans le long de la côte rocheuse.",
        highlights: ["Bateau privé pour votre groupe", "Meilleur moment pour les dauphins", "Skipper local expérimenté", "Petites criques tranquilles"],
        included: ["Skipper privé", "Eau et rafraîchissements", "Gilets de sauvetage", "Carburant"],
        notIncluded: ["Déjeuner", "Prise en charge à l'hôtel"],
        schedule: [
          { time: "09:00", text: "Rendez-vous au quai de la Marina Poreč" },
          { time: "09:15", text: "Départ vers la zone des dauphins" },
          { time: "10:30", text: "Observation des dauphins et cormorans" },
          { time: "12:00", text: "Retour à la Marina Poreč" }
        ],
        importantNotes: ["Selon la météo, décision du skipper", "Crème solaire et chapeau recommandés", "Chaussures fermées conseillées"],
        meetingPointLabel: "Marina Poreč, quai 3"
      }
    }
  },
  {
    id: "rovinj-food",
    durationHours: 6,
    maxGuests: 12,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: PRICE, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1600&q=80", alt: "Rovinj Altstadt" },
      { src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1600&q=80", alt: "Boot in Rovinj" },
      { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80", alt: "Mediterranes Essen" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Rovinj-Bootsfahrt mit Getränken & Essen",
        slug: "rovinj-bootsfahrt-essen-getraenke",
        shortDescription: "Tagesfahrt nach Rovinj mit Mittagessen und Getränken an Bord.",
        description: "Genießen Sie einen entspannten Tag auf der Adria. Wir fahren von Poreč nach Rovinj, der wohl schönsten Stadt Istriens, mit Pause für ein leckeres Mittagessen und Getränken an Bord.",
        highlights: ["Mittagessen an Bord inklusive", "Freie Zeit in Rovinj", "Schwimmen in türkisem Wasser", "Bar an Bord"],
        included: ["Skipper", "Mittagessen", "Getränke (Wasser, Wein, Bier)", "Schwimmwesten"],
        notIncluded: ["Eintrittsgelder in Rovinj", "Trinkgeld"],
        schedule: [
          { time: "10:00", text: "Treffen Marina Poreč" },
          { time: "10:30", text: "Abfahrt Richtung Rovinj" },
          { time: "12:00", text: "Ankunft Rovinj, freie Zeit" },
          { time: "13:30", text: "Mittagessen an Bord" },
          { time: "15:00", text: "Schwimmstopp in einer Bucht" },
          { time: "16:00", text: "Rückkehr Poreč" }
        ],
        importantNotes: ["Wetterabhängig", "Allergien bitte vorab melden", "Bademode mitnehmen"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Rovinj Boat Tour with Food & Drinks",
        slug: "rovinj-boat-tour-food-drinks",
        shortDescription: "Day trip to Rovinj with lunch and drinks on board.",
        description: "Enjoy a relaxed day on the Adriatic. We sail from Poreč to Rovinj, arguably Istria's most beautiful town, with stops for swimming and a delicious lunch on board.",
        highlights: ["Lunch on board included", "Free time in Rovinj", "Swimming in turquoise water", "Bar on board"],
        included: ["Skipper", "Lunch", "Drinks (water, wine, beer)", "Life jackets"],
        notIncluded: ["Entrance fees in Rovinj", "Tips"],
        schedule: [
          { time: "10:00", text: "Meet at Marina Poreč" },
          { time: "10:30", text: "Departure to Rovinj" },
          { time: "12:00", text: "Arrival Rovinj, free time" },
          { time: "13:30", text: "Lunch on board" },
          { time: "15:00", text: "Swimming stop" },
          { time: "16:00", text: "Return to Poreč" }
        ],
        importantNotes: ["Weather-dependent", "Please report allergies in advance", "Bring swimwear"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Izlet brodom u Rovinj s hranom i pićem",
        slug: "izlet-rovinj-hrana-pice",
        shortDescription: "Cjelodnevni izlet u Rovinj s ručkom i pićem na brodu.",
        description: "Uživajte u opuštenom danu na Jadranu. Plovimo iz Poreča u Rovinj uz pauze za kupanje i ukusan ručak na brodu.",
        highlights: ["Ručak na brodu uključen", "Slobodno vrijeme u Rovinju", "Kupanje u tirkiznoj vodi", "Bar na brodu"],
        included: ["Skiper", "Ručak", "Pića (voda, vino, pivo)", "Prsluci"],
        notIncluded: ["Ulaznice u Rovinju", "Napojnice"],
        schedule: [
          { time: "10:00", text: "Sastanak u Marini Poreč" },
          { time: "10:30", text: "Polazak prema Rovinju" },
          { time: "12:00", text: "Dolazak u Rovinj, slobodno vrijeme" },
          { time: "13:30", text: "Ručak na brodu" },
          { time: "15:00", text: "Kupanje" },
          { time: "16:00", text: "Povratak u Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu", "Molimo prijaviti alergije", "Ponijeti kupaći kostim"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Excursion à Rovinj avec repas & boissons",
        slug: "excursion-rovinj-repas-boissons",
        shortDescription: "Excursion d'une journée à Rovinj avec déjeuner et boissons à bord.",
        description: "Profitez d'une journée détendue sur l'Adriatique. Nous naviguons de Poreč à Rovinj, sans doute la plus belle ville d'Istrie, avec des pauses baignade et un délicieux déjeuner à bord.",
        highlights: ["Déjeuner à bord inclus", "Temps libre à Rovinj", "Baignade en eau turquoise", "Bar à bord"],
        included: ["Skipper", "Déjeuner", "Boissons (eau, vin, bière)", "Gilets de sauvetage"],
        notIncluded: ["Entrées à Rovinj", "Pourboires"],
        schedule: [
          { time: "10:00", text: "Rendez-vous à la Marina Poreč" },
          { time: "10:30", text: "Départ pour Rovinj" },
          { time: "12:00", text: "Arrivée à Rovinj, temps libre" },
          { time: "13:30", text: "Déjeuner à bord" },
          { time: "15:00", text: "Pause baignade" },
          { time: "16:00", text: "Retour à Poreč" }
        ],
        importantNotes: ["Selon la météo", "Merci de signaler les allergies", "Prévoir maillot de bain"],
        meetingPointLabel: "Marina Poreč, quai 3"
      }
    }
  },
  {
    id: "dolphin-yacht",
    durationHours: 2,
    maxGuests: 8,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: PRICE, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80", alt: "Yacht auf Adria" },
      { src: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=1600&q=80", alt: "Delfine" },
      { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80", alt: "Sonnenuntergang" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Delfin-Safari mit der Yacht",
        slug: "delfin-safari-yacht",
        shortDescription: "Komfortable Yacht-Safari zu den Delfinen vor Poreč.",
        description: "Erleben Sie eine entspannte Yacht-Tour zur besten Zeit für Delfin-Beobachtung. Mit Sonnendeck, Liegeflächen und Bordbar – ideal auch für Paare und kleine Familien.",
        highlights: ["Komfortable Yacht mit Sonnendeck", "Beste Tageszeit für Delfine", "Kleine Gruppe (max. 8)", "Erfrischungen an Bord"],
        included: ["Skipper", "Wasser & Erfrischungen", "Schwimmwesten", "Sonnendeck"],
        notIncluded: ["Mittagessen", "Hotelabholung"],
        schedule: [
          { time: "17:00", text: "Treffen Marina Poreč" },
          { time: "17:15", text: "Abfahrt Richtung Delfin-Gebiet" },
          { time: "18:00", text: "Beobachtung & Fotostopp" },
          { time: "19:00", text: "Rückkehr Marina Poreč" }
        ],
        importantNotes: ["Wetterabhängig", "Sonnencreme empfohlen", "Kameras erlaubt", "Auch verfügbar 19:00–21:00"],
        meetingPointLabel: "Marina Poreč, Pier 5"
      },
      en: {
        title: "Dolphin Safari by Yacht",
        slug: "dolphin-safari-yacht",
        shortDescription: "Comfortable yacht safari to the dolphins off Poreč.",
        description: "Enjoy a relaxed yacht tour at the best time for dolphin watching. With sun deck, lounging areas and an on-board bar – ideal for couples and small families.",
        highlights: ["Comfortable yacht with sun deck", "Best time for dolphins", "Small group (max 8)", "Refreshments on board"],
        included: ["Skipper", "Water & refreshments", "Life jackets", "Sun deck"],
        notIncluded: ["Lunch", "Hotel pickup"],
        schedule: [
          { time: "17:00", text: "Meet at Marina Poreč" },
          { time: "17:15", text: "Departure to dolphin area" },
          { time: "18:00", text: "Watching & photo stop" },
          { time: "19:00", text: "Return to Marina Poreč" }
        ],
        importantNotes: ["Weather-dependent", "Sunscreen recommended", "Cameras welcome", "Also available 19:00–21:00"],
        meetingPointLabel: "Marina Poreč, Pier 5"
      },
      hr: {
        title: "Delfin Safari jahtom",
        slug: "delfin-safari-jahta",
        shortDescription: "Komforna jahta safari do dupina ispred Poreča.",
        description: "Uživajte u opuštenom izletu jahtom u najbolje vrijeme za promatranje dupina. Sa sunčanom palubom, ležajevima i barom – idealno za parove i obitelji.",
        highlights: ["Komforna jahta sa sunčanom palubom", "Najbolje vrijeme za dupine", "Mala grupa (maks. 8)", "Osvježenje na brodu"],
        included: ["Skiper", "Voda i osvježenje", "Prsluci", "Sunčana paluba"],
        notIncluded: ["Ručak", "Preuzimanje iz hotela"],
        schedule: [
          { time: "17:00", text: "Sastanak u Marini Poreč" },
          { time: "17:15", text: "Polazak" },
          { time: "18:00", text: "Promatranje i fotografiranje" },
          { time: "19:00", text: "Povratak u Marinu Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu", "Preporučujemo kremu", "Kamere dobrodošle", "Dostupno i 19:00–21:00"],
        meetingPointLabel: "Marina Poreč, gat 5"
      },
      fr: {
        title: "Safari dauphins en yacht",
        slug: "safari-dauphins-yacht",
        shortDescription: "Safari confortable en yacht pour observer les dauphins au large de Poreč.",
        description: "Profitez d'une excursion détendue en yacht au meilleur moment pour observer les dauphins. Pont solarium, espaces lounge et bar à bord – idéal pour couples et petites familles.",
        highlights: ["Yacht avec pont solarium", "Meilleur moment pour les dauphins", "Petit groupe (max 8)", "Rafraîchissements à bord"],
        included: ["Skipper", "Eau et rafraîchissements", "Gilets de sauvetage", "Pont solarium"],
        notIncluded: ["Déjeuner", "Prise en charge hôtel"],
        schedule: [
          { time: "17:00", text: "Rendez-vous Marina Poreč" },
          { time: "17:15", text: "Départ" },
          { time: "18:00", text: "Observation et photos" },
          { time: "19:00", text: "Retour à la Marina Poreč" }
        ],
        importantNotes: ["Selon la météo", "Crème solaire conseillée", "Appareils photo bienvenus", "Également disponible 19h00–21h00"],
        meetingPointLabel: "Marina Poreč, quai 5"
      }
    }
  },
  {
    id: "rovinj-lim-vrsar",
    durationHours: 8,
    maxGuests: 12,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: 50, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80", alt: "Limfjord" },
      { src: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1600&q=80", alt: "Rovinj" },
      { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80", alt: "Vrsar" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Rovinj, Limfjord & Vrsar – Tagestour mit Mittagessen",
        slug: "rovinj-limfjord-vrsar-mittagessen",
        shortDescription: "Drei Highlights Istriens an einem Tag inkl. Mittagessen.",
        description: "Die ultimative Tagestour: malerischer Limfjord, das künstlerische Vrsar und das berühmte Rovinj – mit Mittagessen an Bord, Schwimmpause und Zeit für Fotos.",
        highlights: ["Limfjord von der Wasserseite", "Vrsar – Hafen und Hügelstadt", "Rovinj – Altstadt zu Fuß", "Essen & Getränke an Bord inklusive", "Ab 20 Pers.: Eintritte (40€/Pers.) inklusive"],
        included: ["Skipper", "Mittagessen", "Getränke", "Schwimmwesten"],
        notIncluded: ["Eintritte", "Trinkgeld"],
        schedule: [
          { time: "09:00", text: "Treffen Marina Poreč" },
          { time: "09:30", text: "Limfjord" },
          { time: "11:00", text: "Vrsar – kurzer Stopp" },
          { time: "13:00", text: "Rovinj – Altstadt & freie Zeit" },
          { time: "14:30", text: "Mittagessen an Bord" },
          { time: "16:00", text: "Schwimmstopp" },
          { time: "17:00", text: "Rückkehr Poreč" }
        ],
        importantNotes: ["Wetterabhängig", "Bademode mitnehmen", "Sonnenschutz wichtig"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Rovinj, Lim Fjord & Vrsar – Day Tour with Lunch",
        slug: "rovinj-lim-fjord-vrsar-lunch",
        shortDescription: "Three Istrian highlights in one day incl. lunch.",
        description: "The ultimate day tour: scenic Lim fjord, artistic Vrsar and famous Rovinj – with lunch on board, swim stop and time for photos.",
        highlights: ["Lim fjord from the water", "Vrsar – harbor and hilltop", "Rovinj – walking the old town", "Food & drinks on board included", "Groups 20+: entrance fees (€40/p.p.) included"],
        included: ["Skipper", "Lunch", "Drinks", "Life jackets"],
        notIncluded: ["Entrance fees", "Tips"],
        schedule: [
          { time: "09:00", text: "Meet at Marina Poreč" },
          { time: "09:30", text: "Lim fjord" },
          { time: "11:00", text: "Vrsar – short stop" },
          { time: "13:00", text: "Rovinj – old town & free time" },
          { time: "14:30", text: "Lunch on board" },
          { time: "16:00", text: "Swimming stop" },
          { time: "17:00", text: "Return to Poreč" }
        ],
        importantNotes: ["Weather-dependent", "Bring swimwear", "Sun protection important"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Rovinj, Limski kanal i Vrsar – cjelodnevni izlet s ručkom",
        slug: "rovinj-limski-kanal-vrsar-rucak",
        shortDescription: "Tri istarska vrhunca u jednom danu uz ručak.",
        description: "Konačni cjelodnevni izlet: slikoviti Limski kanal, umjetnički Vrsar i poznati Rovinj – s ručkom na brodu, kupanjem i vremenom za fotografiranje.",
        highlights: ["Limski kanal s vode", "Vrsar – luka i brežuljak", "Rovinj – stari grad", "Hrana i piće na brodu uključeno", "Grupe 20+: ulaznice (40€/os.) uključene"],
        included: ["Skiper", "Ručak", "Pića", "Prsluci"],
        notIncluded: ["Ulaznice", "Napojnice"],
        schedule: [
          { time: "09:00", text: "Sastanak u Marini Poreč" },
          { time: "09:30", text: "Limski kanal" },
          { time: "11:00", text: "Vrsar – kratki stop" },
          { time: "13:00", text: "Rovinj – stari grad i slobodno vrijeme" },
          { time: "14:30", text: "Ručak na brodu" },
          { time: "16:00", text: "Kupanje" },
          { time: "17:00", text: "Povratak u Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu", "Ponijeti kupaći", "Zaštita od sunca"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Rovinj, Fjord de Lim & Vrsar – Journée avec déjeuner",
        slug: "rovinj-fjord-lim-vrsar-dejeuner",
        shortDescription: "Trois points forts d'Istrie en un jour, déjeuner inclus.",
        description: "L'excursion ultime : pittoresque fjord de Lim, Vrsar artistique et célèbre Rovinj – avec déjeuner à bord, pause baignade et temps pour les photos.",
        highlights: ["Fjord de Lim depuis la mer", "Vrsar – port et colline", "Rovinj – vieille ville à pied", "Repas & boissons à bord inclus", "Groupes 20+: entrées (40€/p.p.) incluses"],
        included: ["Skipper", "Déjeuner", "Boissons", "Gilets de sauvetage"],
        notIncluded: ["Entrées", "Pourboires"],
        schedule: [
          { time: "09:00", text: "Rendez-vous Marina Poreč" },
          { time: "09:30", text: "Fjord de Lim" },
          { time: "11:00", text: "Vrsar – arrêt court" },
          { time: "13:00", text: "Rovinj – vieille ville & temps libre" },
          { time: "14:30", text: "Déjeuner à bord" },
          { time: "16:00", text: "Pause baignade" },
          { time: "17:00", text: "Retour à Poreč" }
        ],
        importantNotes: ["Selon la météo", "Prévoir maillot", "Protection solaire essentielle"],
        meetingPointLabel: "Marina Poreč, quai 3"
      }
    }
  }
];

export const getTourById = (id: string) => tours.find((t) => t.id === id);

export const getTourBySlug = (locale: string, slug: string) =>
  tours.find((t) => t.i18n[locale as keyof typeof t.i18n]?.slug === slug);

export const getAllSlugsForLocale = (locale: string) =>
  tours.map((t) => t.i18n[locale as keyof typeof t.i18n]?.slug).filter(Boolean) as string[];

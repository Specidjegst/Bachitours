import type { Tour } from "@/lib/types";

const PRICE = 35;

export const tours: Tour[] = [
  {
    id: "dolphin-safari",
    durationHours: 2,
    maxGuests: 10,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: PRICE, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://i.imgur.com/Czfx5FO.jpg", alt: "Delfine springen aus dem Wasser vor Poreč" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Delfin Safari",
        slug: "delfin-safari",
        shortDescription: "Delfine vor Poreč erleben – kleine Gruppe, lokaler Skipper, Getränke an Bord.",
        description: "Erleben Sie die Adria-Delfine in ihrem natürlichen Lebensraum. Wir fahren zu den Lieblingsplätzen der Delfine vor der Küste Poreč. Auf dem Weg sehen Sie oft auch Kormoran-Kolonien an der felsigen Küste.",
        highlights: ["Delfin-Beobachtung zur besten Zeit", "Lokaler erfahrener Skipper", "Getränke an Bord inklusive", "Kleine Gruppe (max. 10)"],
        included: ["Skipper", "Getränke"],
        notIncluded: ["Abendessen", "Hotelabholung"],
        schedule: [
          { time: "17:00", text: "Treffen am Pier in der Marina Poreč" },
          { time: "17:15", text: "Abfahrt Richtung Delfin-Gebiet" },
          { time: "18:00", text: "Delfin- und Kormoran-Beobachtung" },
          { time: "19:00", text: "Rückkehr in die Marina Poreč" }
        ],
        importantNotes: ["Wetterabhängig, Skipper entscheidet", "Sonnencreme & Hut empfohlen", "Festes Schuhwerk hilfreich"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Dolphin Safari",
        slug: "dolphin-safari",
        shortDescription: "Watch dolphins off Poreč – small group, local skipper, drinks on board.",
        description: "Watch Adriatic dolphins in their natural habitat. We head to the dolphins' favorite spots along the Poreč coast. On the way you often also see cormorant colonies on the rocky shore.",
        highlights: ["Dolphin watching at the best time", "Experienced local skipper", "Drinks on board included", "Small group (max 10)"],
        included: ["Skipper", "Drinks"],
        notIncluded: ["Dinner", "Hotel pickup"],
        schedule: [
          { time: "17:00", text: "Meet at the pier in Marina Poreč" },
          { time: "17:15", text: "Departure to dolphin area" },
          { time: "18:00", text: "Dolphin & cormorant watching" },
          { time: "19:00", text: "Return to Marina Poreč" }
        ],
        importantNotes: ["Weather-dependent, skipper decides", "Sunscreen & hat recommended", "Sturdy shoes helpful"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Delfin Safari",
        slug: "delfin-safari",
        shortDescription: "Promatranje dupina ispred Poreča – mala grupa, lokalni skiper, pića na brodu.",
        description: "Promatrajte jadranske dupine u njihovom prirodnom okruženju. Plovimo do omiljenih mjesta dupina uz obalu Poreča. Usput često vidite i kolonije vranaca na stjenovitoj obali.",
        highlights: ["Promatranje dupina u najboljem vremenu", "Iskusan lokalni skiper", "Pića na brodu uključena", "Mala grupa (maks. 10)"],
        included: ["Skiper", "Pića"],
        notIncluded: ["Večera", "Preuzimanje iz hotela"],
        schedule: [
          { time: "17:00", text: "Susret na pristaništu u Marini Poreč" },
          { time: "17:15", text: "Polazak prema području dupina" },
          { time: "18:00", text: "Promatranje dupina i vranaca" },
          { time: "19:00", text: "Povratak u Marinu Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu, skiper odlučuje", "Preporučujemo kremu i šešir", "Dobro je obuti čvrste cipele"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Safari Dauphins",
        slug: "safari-dauphins",
        shortDescription: "Observation des dauphins au large de Poreč – petit groupe, skipper local, boissons à bord.",
        description: "Observez les dauphins de l'Adriatique dans leur habitat naturel. Nous nous rendons aux endroits préférés des dauphins le long de la côte de Poreč. En chemin, vous voyez souvent aussi des colonies de cormorans sur la côte rocheuse.",
        highlights: ["Observation des dauphins au meilleur moment", "Skipper local expérimenté", "Boissons à bord incluses", "Petit groupe (max 10)"],
        included: ["Skipper", "Boissons"],
        notIncluded: ["Dîner", "Prise en charge à l'hôtel"],
        schedule: [
          { time: "17:00", text: "Rendez-vous au quai de la Marina Poreč" },
          { time: "17:15", text: "Départ vers la zone des dauphins" },
          { time: "18:00", text: "Observation des dauphins et cormorans" },
          { time: "19:00", text: "Retour à la Marina Poreč" }
        ],
        importantNotes: ["Selon la météo, décision du skipper", "Crème solaire et chapeau recommandés", "Chaussures fermées conseillées"],
        meetingPointLabel: "Marina Poreč, quai 3"
      }
    }
  },
  {
    id: "dolphin-sunset",
    durationHours: 2,
    maxGuests: 10,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: PRICE, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://i.imgur.com/4R2qlQA.jpg", alt: "Sonnenuntergang mit Delfinen vor Poreč" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Delfin Sunset",
        slug: "delfin-sunset",
        shortDescription: "Delfine im goldenen Abendlicht – die magische Stunde vor Poreč.",
        description: "Erleben Sie Delfine in der goldenen Stunde vor Poreč. Während die Sonne im Adria-Wasser versinkt, sind die Delfine besonders aktiv – eine unvergessliche Stimmung für Foto und Erlebnis.",
        highlights: ["Delfine zur goldenen Stunde", "Spektakulärer Sonnenuntergang", "Getränke an Bord inklusive", "Kleine Gruppe (max. 10)"],
        included: ["Skipper", "Getränke"],
        notIncluded: ["Abendessen", "Hotelabholung"],
        schedule: [
          { time: "19:00", text: "Treffen am Pier in der Marina Poreč" },
          { time: "19:15", text: "Abfahrt Richtung Delfin-Gebiet" },
          { time: "20:00", text: "Delfin-Beobachtung & Sonnenuntergang" },
          { time: "21:00", text: "Rückkehr in die Marina Poreč" }
        ],
        importantNotes: ["Wetterabhängig, Skipper entscheidet", "Warme Schicht für den Abend empfohlen", "Kamera nicht vergessen"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Dolphin Sunset",
        slug: "dolphin-sunset",
        shortDescription: "Dolphins in the golden evening light – the magic hour off Poreč.",
        description: "Experience dolphins during the golden hour off Poreč. As the sun sets into the Adriatic, the dolphins are especially active – an unforgettable mood for both photos and memories.",
        highlights: ["Dolphins at the golden hour", "Spectacular sunset", "Drinks on board included", "Small group (max 10)"],
        included: ["Skipper", "Drinks"],
        notIncluded: ["Dinner", "Hotel pickup"],
        schedule: [
          { time: "19:00", text: "Meet at the pier in Marina Poreč" },
          { time: "19:15", text: "Departure to dolphin area" },
          { time: "20:00", text: "Dolphin watching & sunset" },
          { time: "21:00", text: "Return to Marina Poreč" }
        ],
        importantNotes: ["Weather-dependent, skipper decides", "Bring a warm layer for the evening", "Don't forget your camera"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Delfin Sunset",
        slug: "delfin-sunset",
        shortDescription: "Dupini u zlatnoj večernjoj svjetlosti – čarobni sat ispred Poreča.",
        description: "Doživite dupine u zlatnom satu ispred Poreča. Dok sunce zalazi u Jadran, dupini su posebno aktivni – nezaboravna atmosfera za fotografije i uspomene.",
        highlights: ["Dupini u zlatnom satu", "Spektakularan zalazak sunca", "Pića na brodu uključena", "Mala grupa (maks. 10)"],
        included: ["Skiper", "Pića"],
        notIncluded: ["Večera", "Preuzimanje iz hotela"],
        schedule: [
          { time: "19:00", text: "Susret na pristaništu u Marini Poreč" },
          { time: "19:15", text: "Polazak prema području dupina" },
          { time: "20:00", text: "Promatranje dupina i zalazak sunca" },
          { time: "21:00", text: "Povratak u Marinu Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu, skiper odlučuje", "Ponijeti topliji sloj za večer", "Ne zaboravite kameru"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Sunset Dauphins",
        slug: "sunset-dauphins",
        shortDescription: "Dauphins dans la lumière dorée du soir – l'heure magique au large de Poreč.",
        description: "Découvrez les dauphins à l'heure dorée au large de Poreč. Pendant que le soleil se couche dans l'Adriatique, les dauphins sont particulièrement actifs – une ambiance inoubliable pour les photos comme pour les souvenirs.",
        highlights: ["Dauphins à l'heure dorée", "Coucher de soleil spectaculaire", "Boissons à bord incluses", "Petit groupe (max 10)"],
        included: ["Skipper", "Boissons"],
        notIncluded: ["Dîner", "Prise en charge à l'hôtel"],
        schedule: [
          { time: "19:00", text: "Rendez-vous au quai de la Marina Poreč" },
          { time: "19:15", text: "Départ vers la zone des dauphins" },
          { time: "20:00", text: "Observation des dauphins et coucher de soleil" },
          { time: "21:00", text: "Retour à la Marina Poreč" }
        ],
        importantNotes: ["Selon la météo, décision du skipper", "Prévoir une couche chaude pour le soir", "N'oubliez pas votre appareil photo"],
        meetingPointLabel: "Marina Poreč, quai 3"
      }
    }
  },
  {
    id: "rovinj-food",
    durationHours: 8,
    maxGuests: 12,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: 50, childDiscountPct: 50, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://i.imgur.com/9bBQnZ3.jpg", alt: "Rovinj – Altstadt am Meer" },
      { src: "https://i.imgur.com/gxXWdXz.jpg", alt: "Limfjord – Durchfahrt mit dem Boot" },
      { src: "https://i.imgur.com/c8QQ5cB.jpg", alt: "Vrsar – Hafen und Hügelstadt" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Rovinj Limfjord Vrsar",
        slug: "rovinj-limfjord-vrsar",
        shortDescription: "Tagestour: Rovinj-Altstadt, Limfjord und Vrsar – Mittagessen und Getränke an Bord inklusive.",
        description: "Eine entspannte Tagestour entlang der schönsten Plätze Istriens. Wir starten um 10 Uhr in Poreč, fahren in 1 Stunde nach Rovinj für eine 2-stündige Pause in der Altstadt. Anschließend genießen Sie das Mittagessen an Bord (vegetarisch, Fisch oder Fleisch) während wir durch den malerischen Limfjord weiter nach Vrsar fahren. In Vrsar bleiben 1,5 Stunden zum Baden oder Erkunden des Ortes.",
        highlights: ["Drei Highlights an einem Tag", "2 Stunden freie Zeit in Rovinj", "Panorama-Fahrt durch den Limfjord", "Mittagessen an Bord (vegetarisch, Fisch oder Fleisch)", "Getränke inklusive", "1,5 Stunden Stop in Vrsar zum Baden"],
        included: ["Skipper", "Mittagessen", "Getränke"],
        notIncluded: ["Eintrittsgelder", "Trinkgeld"],
        schedule: [
          { time: "10:00", text: "Abfahrt Marina Poreč" },
          { time: "11:00", text: "Ankunft Rovinj – 2 Stunden freie Zeit in der Altstadt" },
          { time: "13:00", text: "Abfahrt Rovinj, Mittagessen an Bord (vegetarisch, Fisch oder Fleisch)" },
          { time: "14:30", text: "Durchfahrt Limfjord" },
          { time: "15:30", text: "Ankunft Vrsar – 1,5 Stunden zum Baden oder Erkunden" },
          { time: "17:00", text: "Rückfahrt nach Poreč" },
          { time: "18:00", text: "Rückkehr Marina Poreč" }
        ],
        importantNotes: ["Wetterabhängig", "Essenwahl (vegetarisch/Fisch/Fleisch) und Allergien bitte vorab melden", "Bademode mitnehmen"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Rovinj Limfjord Vrsar",
        slug: "rovinj-limfjord-vrsar",
        shortDescription: "Day tour: Rovinj old town, Lim fjord and Vrsar – lunch and drinks on board included.",
        description: "A relaxed day tour along Istria's most beautiful spots. We start at 10 AM in Poreč, sail one hour to Rovinj for a 2-hour break in the old town. Afterwards enjoy lunch on board (vegetarian, fish or meat) while we sail through the scenic Lim fjord toward Vrsar. In Vrsar you have 1.5 hours to swim or stroll through the village.",
        highlights: ["Three highlights in one day", "2 hours free time in Rovinj", "Panorama cruise through the Lim fjord", "Lunch on board (vegetarian, fish or meat)", "Drinks included", "1.5-hour stop in Vrsar for swimming"],
        included: ["Skipper", "Lunch", "Drinks"],
        notIncluded: ["Entrance fees", "Tips"],
        schedule: [
          { time: "10:00", text: "Departure Marina Poreč" },
          { time: "11:00", text: "Arrival Rovinj – 2 hours free time in the old town" },
          { time: "13:00", text: "Depart Rovinj, lunch on board (vegetarian, fish or meat)" },
          { time: "14:30", text: "Sail through the Lim fjord" },
          { time: "15:30", text: "Arrival Vrsar – 1.5 hours to swim or explore" },
          { time: "17:00", text: "Return to Poreč" },
          { time: "18:00", text: "Back at Marina Poreč" }
        ],
        importantNotes: ["Weather-dependent", "Please report meal choice (veggie/fish/meat) and allergies in advance", "Bring swimwear"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Rovinj Limski kanal Vrsar",
        slug: "rovinj-limski-kanal-vrsar",
        shortDescription: "Cjelodnevni izlet: Rovinj, Limski kanal i Vrsar – ručak i pića na brodu uključeni.",
        description: "Opušten cjelodnevni izlet uz najljepša mjesta Istre. Krećemo u 10 sati iz Poreča, plovimo sat vremena u Rovinj na 2-satnu pauzu u starom gradu. Zatim uživate u ručku na brodu (vegetarijanski, riba ili meso) dok plovimo kroz slikoviti Limski kanal prema Vrsaru. U Vrsaru imate 1,5 sat za kupanje ili razgled mjesta.",
        highlights: ["Tri vrhunca u jednom danu", "2 sata slobodnog vremena u Rovinju", "Panoramska plovidba Limskim kanalom", "Ručak na brodu (vegetarijanski, riba ili meso)", "Pića uključena", "1,5 sat stop u Vrsaru za kupanje"],
        included: ["Skiper", "Ručak", "Pića"],
        notIncluded: ["Ulaznice", "Napojnice"],
        schedule: [
          { time: "10:00", text: "Polazak iz Marine Poreč" },
          { time: "11:00", text: "Dolazak u Rovinj – 2 sata slobodnog vremena u starom gradu" },
          { time: "13:00", text: "Polazak iz Rovinja, ručak na brodu (vegetarijanski, riba ili meso)" },
          { time: "14:30", text: "Plovidba kroz Limski kanal" },
          { time: "15:30", text: "Dolazak u Vrsar – 1,5 sat za kupanje ili razgled" },
          { time: "17:00", text: "Povratak prema Poreču" },
          { time: "18:00", text: "Povratak u Marinu Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu", "Molimo unaprijed prijaviti izbor jela (veg/riba/meso) i alergije", "Ponijeti kupaći kostim"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Rovinj Fjord de Lim Vrsar",
        slug: "rovinj-fjord-lim-vrsar",
        shortDescription: "Journée: Rovinj, fjord de Lim et Vrsar – déjeuner et boissons à bord inclus.",
        description: "Une journée détendue le long des plus beaux sites d'Istrie. Nous partons à 10h de Poreč, naviguons une heure vers Rovinj pour une pause de 2 heures dans la vieille ville. Puis profitez du déjeuner à bord (végétarien, poisson ou viande) pendant que nous traversons le pittoresque fjord de Lim vers Vrsar. À Vrsar, vous avez 1h30 pour vous baigner ou flâner dans le village.",
        highlights: ["Trois points forts en un jour", "2 heures de temps libre à Rovinj", "Traversée panoramique du fjord de Lim", "Déjeuner à bord (végétarien, poisson ou viande)", "Boissons incluses", "Arrêt de 1h30 à Vrsar pour la baignade"],
        included: ["Skipper", "Déjeuner", "Boissons"],
        notIncluded: ["Entrées", "Pourboires"],
        schedule: [
          { time: "10:00", text: "Départ Marina Poreč" },
          { time: "11:00", text: "Arrivée à Rovinj – 2 heures de temps libre dans la vieille ville" },
          { time: "13:00", text: "Départ de Rovinj, déjeuner à bord (végétarien, poisson ou viande)" },
          { time: "14:30", text: "Traversée du fjord de Lim" },
          { time: "15:30", text: "Arrivée à Vrsar – 1h30 pour se baigner ou se balader" },
          { time: "17:00", text: "Retour vers Poreč" },
          { time: "18:00", text: "Retour à la Marina Poreč" }
        ],
        importantNotes: ["Selon la météo", "Merci de signaler à l'avance le choix de plat (végé/poisson/viande) et les allergies", "Prévoir maillot de bain"],
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

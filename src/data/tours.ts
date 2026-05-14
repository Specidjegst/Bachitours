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
      { src: "https://i.imgur.com/Czfx5FO.jpg", alt: "Delfine springen aus dem Wasser" },
      { src: "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=1600&q=80", alt: "Delfin im Meer" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80", alt: "Adriaküste vor Poreč" },
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
      { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80", alt: "Boot bei Sonnenuntergang" },
      { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80", alt: "Goldene Stunde Adria" },
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
        included: ["Skipper", "Mittagessen"],
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
        included: ["Skipper", "Lunch"],
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
        included: ["Skiper", "Ručak"],
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
        included: ["Skipper", "Déjeuner"],
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
        included: ["Skipper", "Sonnendeck"],
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
        included: ["Skipper", "Sun deck"],
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
        included: ["Skiper", "Sunčana paluba"],
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
        included: ["Skipper", "Pont solarium"],
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
        highlights: ["Limfjord von der Wasserseite", "Vrsar – Hafen und Hügelstadt", "Rovinj – Altstadt zu Fuß", "Essen & Getränke an Bord inklusive", "Ab 20 Pers.: nur 40€/Person (statt 50€)"],
        included: ["Skipper", "Mittagessen"],
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
        highlights: ["Lim fjord from the water", "Vrsar – harbor and hilltop", "Rovinj – walking the old town", "Food & drinks on board included", "Groups 20+: only €40/p.p. (instead of €50)"],
        included: ["Skipper", "Lunch"],
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
        highlights: ["Limski kanal s vode", "Vrsar – luka i brežuljak", "Rovinj – stari grad", "Hrana i piće na brodu uključeno", "Grupe 20+: samo 40€/os. (umjesto 50€)"],
        included: ["Skiper", "Ručak"],
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
        highlights: ["Fjord de Lim depuis la mer", "Vrsar – port et colline", "Rovinj – vieille ville à pied", "Repas & boissons à bord inclus", "Groupes 20+: seulement 40€/p.p. (au lieu de 50€)"],
        included: ["Skipper", "Déjeuner"],
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

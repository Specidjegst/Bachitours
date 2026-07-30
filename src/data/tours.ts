import type { Tour } from "@/lib/types";

const PRICE = 30;

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
        highlights: ["Delfin-Beobachtung zur besten Zeit", "Lokaler erfahrener Skipper", "Getränke an Bord inklusive", "Bis 10 Pers.: Speedboot · ab 11 Pers.: größeres Schiff"],
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
        highlights: ["Dolphin watching at the best time", "Experienced local skipper", "Drinks on board included", "Up to 10 guests: speedboat · 11+ guests: bigger boat"],
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
        highlights: ["Promatranje dupina u najboljem vremenu", "Iskusan lokalni skiper", "Pića na brodu uključena", "Do 10 osoba: gliser · 11+ osoba: veći brod"],
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
        highlights: ["Observation des dauphins au meilleur moment", "Skipper local expérimenté", "Boissons à bord incluses", "Jusqu'à 10 pers. : hors-bord · 11+ : bateau plus grand"],
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
      },
      it: {
        title: "Safari Delfini",
        slug: "safari-delfini",
        shortDescription: "Avvistamento delfini al largo di Poreč – piccolo gruppo, skipper locale, bevande a bordo.",
        description: "Osserva i delfini dell'Adriatico nel loro habitat naturale. Andiamo nei luoghi preferiti dei delfini lungo la costa di Poreč. Lungo il percorso vedrai spesso anche colonie di cormorani sulla costa rocciosa.",
        highlights: ["Avvistamento delfini al momento migliore", "Skipper locale esperto", "Bevande a bordo incluse", "Fino a 10 persone: motoscafo · 11+: barca più grande"],
        included: ["Skipper", "Bevande"],
        notIncluded: ["Cena", "Trasferimento dall'hotel"],
        schedule: [
          { time: "17:00", text: "Incontro al molo della Marina di Poreč" },
          { time: "17:15", text: "Partenza verso l'area dei delfini" },
          { time: "18:00", text: "Avvistamento delfini e cormorani" },
          { time: "19:00", text: "Rientro alla Marina di Poreč" }
        ],
        importantNotes: ["Dipende dal meteo, decide lo skipper", "Consigliati crema solare e cappello", "Scarpe chiuse utili"],
        meetingPointLabel: "Marina di Poreč, Molo 3"
      },
      ru: {
        title: "Сафари с дельфинами",
        slug: "delfin-safari",
        shortDescription: "Наблюдение за дельфинами у Пореча – маленькая группа, местный шкипер, напитки на борту.",
        description: "Наблюдайте за дельфинами Адриатики в их естественной среде. Мы отправляемся в любимые места дельфинов вдоль побережья Пореча. По пути вы часто увидите также колонии бакланов на скалистом берегу.",
        highlights: ["Наблюдение за дельфинами в лучшее время", "Опытный местный шкипер", "Напитки на борту включены", "До 10 человек: катер · от 11: судно побольше"],
        included: ["Шкипер", "Напитки"],
        notIncluded: ["Ужин", "Трансфер из отеля"],
        schedule: [
          { time: "17:00", text: "Встреча на причале Марина Пореч" },
          { time: "17:15", text: "Отправление к району дельфинов" },
          { time: "18:00", text: "Наблюдение за дельфинами и бакланами" },
          { time: "19:00", text: "Возвращение в Марину Пореч" }
        ],
        importantNotes: ["Зависит от погоды, решение шкипера", "Рекомендуется крем от солнца и шляпа", "Удобная обувь приветствуется"],
        meetingPointLabel: "Марина Пореч, причал 3"
      },
      pl: {
        title: "Safari z delfinami",
        slug: "safari-z-delfinami",
        shortDescription: "Obserwacja delfinów u wybrzeży Poreča – mała grupa, lokalny skipper, napoje na pokładzie.",
        description: "Obserwuj adriatyckie delfiny w ich naturalnym środowisku. Płyniemy w ulubione miejsca delfinów wzdłuż wybrzeża Poreča. Po drodze często zobaczysz też kolonie kormoranów na skalistym wybrzeżu.",
        highlights: ["Obserwacja delfinów w najlepszym czasie", "Doświadczony lokalny skipper", "Napoje na pokładzie w cenie", "Do 10 osób: motorówka · od 11 osób: większa łódź"],
        included: ["Skipper", "Napoje"],
        notIncluded: ["Kolacja", "Odbiór z hotelu"],
        schedule: [
          { time: "17:00", text: "Spotkanie na nabrzeżu Mariny Poreč" },
          { time: "17:15", text: "Wypłynięcie w stronę obszaru delfinów" },
          { time: "18:00", text: "Obserwacja delfinów i kormoranów" },
          { time: "19:00", text: "Powrót do Mariny Poreč" }
        ],
        importantNotes: ["Zależnie od pogody, decyduje skipper", "Zalecany krem do opalania i kapelusz", "Wygodne buty mile widziane"],
        meetingPointLabel: "Marina Poreč, Nabrzeże 3"
      }
    }
  },
  {
    id: "dolphin-sunset",
    durationHours: 2,
    maxGuests: 10,
    isPrivate: false,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: 35, childDiscountPct: 50, infantFree: true, currency: "EUR" },
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
        highlights: ["Delfine zur goldenen Stunde", "Spektakulärer Sonnenuntergang", "Getränke an Bord inklusive", "Bis 10 Pers.: Speedboot · ab 11 Pers.: größeres Schiff"],
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
        highlights: ["Dolphins at the golden hour", "Spectacular sunset", "Drinks on board included", "Up to 10 guests: speedboat · 11+ guests: bigger boat"],
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
        highlights: ["Dupini u zlatnom satu", "Spektakularan zalazak sunca", "Pića na brodu uključena", "Do 10 osoba: gliser · 11+ osoba: veći brod"],
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
        highlights: ["Dauphins à l'heure dorée", "Coucher de soleil spectaculaire", "Boissons à bord incluses", "Jusqu'à 10 pers. : hors-bord · 11+ : bateau plus grand"],
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
      },
      it: {
        title: "Sunset Delfini",
        slug: "sunset-delfini",
        shortDescription: "Delfini nella luce dorata della sera – l'ora magica al largo di Poreč.",
        description: "Vivi i delfini nell'ora dorata al largo di Poreč. Mentre il sole tramonta nell'Adriatico, i delfini sono particolarmente attivi – un'atmosfera indimenticabile per foto e ricordi.",
        highlights: ["Delfini nell'ora dorata", "Tramonto spettacolare", "Bevande a bordo incluse", "Fino a 10 persone: motoscafo · 11+: barca più grande"],
        included: ["Skipper", "Bevande"],
        notIncluded: ["Cena", "Trasferimento dall'hotel"],
        schedule: [
          { time: "19:00", text: "Incontro al molo della Marina di Poreč" },
          { time: "19:15", text: "Partenza verso l'area dei delfini" },
          { time: "20:00", text: "Avvistamento delfini e tramonto" },
          { time: "21:00", text: "Rientro alla Marina di Poreč" }
        ],
        importantNotes: ["Dipende dal meteo, decide lo skipper", "Consigliato uno strato caldo per la sera", "Non dimenticare la macchina fotografica"],
        meetingPointLabel: "Marina di Poreč, Molo 3"
      },
      ru: {
        title: "Сансет с дельфинами",
        slug: "delfin-sunset",
        shortDescription: "Дельфины в золотом вечернем свете – волшебный час у Пореча.",
        description: "Откройте для себя дельфинов в золотой час у Пореча. Пока солнце садится в Адриатику, дельфины особенно активны – незабываемая атмосфера для фото и воспоминаний.",
        highlights: ["Дельфины в золотой час", "Захватывающий закат", "Напитки на борту включены", "До 10 человек: катер · от 11: судно побольше"],
        included: ["Шкипер", "Напитки"],
        notIncluded: ["Ужин", "Трансфер из отеля"],
        schedule: [
          { time: "19:00", text: "Встреча на причале Марина Пореч" },
          { time: "19:15", text: "Отправление к району дельфинов" },
          { time: "20:00", text: "Наблюдение за дельфинами и закат" },
          { time: "21:00", text: "Возвращение в Марину Пореч" }
        ],
        importantNotes: ["Зависит от погоды, решение шкипера", "Рекомендуем взять тёплую одежду на вечер", "Не забудьте камеру"],
        meetingPointLabel: "Марина Пореч, причал 3"
      },
      pl: {
        title: "Sunset z delfinami",
        slug: "sunset-z-delfinami",
        shortDescription: "Delfiny w złotym wieczornym świetle – magiczna godzina u wybrzeży Poreča.",
        description: "Doświadcz delfinów w złotej godzinie u wybrzeży Poreča. Gdy słońce zachodzi w Adriatyku, delfiny są szczególnie aktywne – niezapomniana atmosfera na zdjęcia i wspomnienia.",
        highlights: ["Delfiny w złotej godzinie", "Spektakularny zachód słońca", "Napoje na pokładzie w cenie", "Do 10 osób: motorówka · od 11 osób: większa łódź"],
        included: ["Skipper", "Napoje"],
        notIncluded: ["Kolacja", "Odbiór z hotelu"],
        schedule: [
          { time: "19:00", text: "Spotkanie na nabrzeżu Mariny Poreč" },
          { time: "19:15", text: "Wypłynięcie w stronę obszaru delfinów" },
          { time: "20:00", text: "Obserwacja delfinów i zachód słońca" },
          { time: "21:00", text: "Powrót do Mariny Poreč" }
        ],
        importantNotes: ["Zależnie od pogody, decyduje skipper", "Zalecamy ciepłą warstwę na wieczór", "Nie zapomnij aparatu"],
        meetingPointLabel: "Marina Poreč, Nabrzeże 3"
      }
    }
  },
  {
    id: "rovinj-food",
    durationHours: 7,
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
        highlights: ["Drei Highlights an einem Tag", "Transfer von Hotel/Apartment hin und zurück", "2 Stunden freie Zeit in Rovinj", "Panorama-Fahrt durch den Limfjord", "Mittagessen an Bord (vegetarisch, Fisch oder Fleisch)", "Getränke inklusive", "1,5 Stunden Stop in Vrsar zum Baden"],
        included: ["Skipper", "Mittagessen", "Getränke", "Hotel-/Apartmenttransfer (hin und zurück)"],
        notIncluded: ["Eintrittsgelder", "Trinkgeld"],
        schedule: [
          { time: "10:00", text: "Abfahrt Marina Poreč" },
          { time: "11:00", text: "Ankunft Rovinj – 2 Stunden freie Zeit in der Altstadt" },
          { time: "13:00", text: "Abfahrt Rovinj, Mittagessen an Bord (vegetarisch, Fisch oder Fleisch)" },
          { time: "13:30", text: "Durchfahrt Limfjord" },
          { time: "14:30", text: "Ankunft Vrsar – 1,5 Stunden zum Baden oder Erkunden" },
          { time: "16:00", text: "Rückfahrt nach Poreč" },
          { time: "17:00", text: "Rückkehr Marina Poreč" }
        ],
        importantNotes: ["Wetterabhängig", "Essenwahl (vegetarisch/Fisch/Fleisch) und Allergien bitte vorab melden", "Bademode mitnehmen"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      en: {
        title: "Rovinj Limfjord Vrsar",
        slug: "rovinj-limfjord-vrsar",
        shortDescription: "Day tour: Rovinj old town, Lim fjord and Vrsar – lunch and drinks on board included.",
        description: "A relaxed day tour along Istria's most beautiful spots. We start at 10 AM in Poreč, sail one hour to Rovinj for a 2-hour break in the old town. Afterwards enjoy lunch on board (vegetarian, fish or meat) while we sail through the scenic Lim fjord toward Vrsar. In Vrsar you have 1.5 hours to swim or stroll through the village.",
        highlights: ["Three highlights in one day", "Hotel/apartment transfer round trip", "2 hours free time in Rovinj", "Panorama cruise through the Lim fjord", "Lunch on board (vegetarian, fish or meat)", "Drinks included", "1.5-hour stop in Vrsar for swimming"],
        included: ["Skipper", "Lunch", "Drinks", "Hotel/apartment transfer (round trip)"],
        notIncluded: ["Entrance fees", "Tips"],
        schedule: [
          { time: "10:00", text: "Departure Marina Poreč" },
          { time: "11:00", text: "Arrival Rovinj – 2 hours free time in the old town" },
          { time: "13:00", text: "Depart Rovinj, lunch on board (vegetarian, fish or meat)" },
          { time: "13:30", text: "Sail through the Lim fjord" },
          { time: "14:30", text: "Arrival Vrsar – 1.5 hours to swim or explore" },
          { time: "16:00", text: "Return to Poreč" },
          { time: "17:00", text: "Back at Marina Poreč" }
        ],
        importantNotes: ["Weather-dependent", "Please report meal choice (veggie/fish/meat) and allergies in advance", "Bring swimwear"],
        meetingPointLabel: "Marina Poreč, Pier 3"
      },
      hr: {
        title: "Rovinj Limski kanal Vrsar",
        slug: "rovinj-limski-kanal-vrsar",
        shortDescription: "Cjelodnevni izlet: Rovinj, Limski kanal i Vrsar – ručak i pića na brodu uključeni.",
        description: "Opušten cjelodnevni izlet uz najljepša mjesta Istre. Krećemo u 10 sati iz Poreča, plovimo sat vremena u Rovinj na 2-satnu pauzu u starom gradu. Zatim uživate u ručku na brodu (vegetarijanski, riba ili meso) dok plovimo kroz slikoviti Limski kanal prema Vrsaru. U Vrsaru imate 1,5 sat za kupanje ili razgled mjesta.",
        highlights: ["Tri vrhunca u jednom danu", "Transfer iz hotela/apartmana, povratno", "2 sata slobodnog vremena u Rovinju", "Panoramska plovidba Limskim kanalom", "Ručak na brodu (vegetarijanski, riba ili meso)", "Pića uključena", "1,5 sat stop u Vrsaru za kupanje"],
        included: ["Skiper", "Ručak", "Pića", "Transfer iz hotela/apartmana (povratno)"],
        notIncluded: ["Ulaznice", "Napojnice"],
        schedule: [
          { time: "10:00", text: "Polazak iz Marine Poreč" },
          { time: "11:00", text: "Dolazak u Rovinj – 2 sata slobodnog vremena u starom gradu" },
          { time: "13:00", text: "Polazak iz Rovinja, ručak na brodu (vegetarijanski, riba ili meso)" },
          { time: "13:30", text: "Plovidba kroz Limski kanal" },
          { time: "14:30", text: "Dolazak u Vrsar – 1,5 sat za kupanje ili razgled" },
          { time: "16:00", text: "Povratak prema Poreču" },
          { time: "17:00", text: "Povratak u Marinu Poreč" }
        ],
        importantNotes: ["Ovisno o vremenu", "Molimo unaprijed prijaviti izbor jela (veg/riba/meso) i alergije", "Ponijeti kupaći kostim"],
        meetingPointLabel: "Marina Poreč, gat 3"
      },
      fr: {
        title: "Rovinj Fjord de Lim Vrsar",
        slug: "rovinj-fjord-lim-vrsar",
        shortDescription: "Journée: Rovinj, fjord de Lim et Vrsar – déjeuner et boissons à bord inclus.",
        description: "Une journée détendue le long des plus beaux sites d'Istrie. Nous partons à 10h de Poreč, naviguons une heure vers Rovinj pour une pause de 2 heures dans la vieille ville. Puis profitez du déjeuner à bord (végétarien, poisson ou viande) pendant que nous traversons le pittoresque fjord de Lim vers Vrsar. À Vrsar, vous avez 1h30 pour vous baigner ou flâner dans le village.",
        highlights: ["Trois points forts en un jour", "Transfert hôtel/appartement aller-retour", "2 heures de temps libre à Rovinj", "Traversée panoramique du fjord de Lim", "Déjeuner à bord (végétarien, poisson ou viande)", "Boissons incluses", "Arrêt de 1h30 à Vrsar pour la baignade"],
        included: ["Skipper", "Déjeuner", "Boissons", "Transfert hôtel/appartement (aller-retour)"],
        notIncluded: ["Entrées", "Pourboires"],
        schedule: [
          { time: "10:00", text: "Départ Marina Poreč" },
          { time: "11:00", text: "Arrivée à Rovinj – 2 heures de temps libre dans la vieille ville" },
          { time: "13:00", text: "Départ de Rovinj, déjeuner à bord (végétarien, poisson ou viande)" },
          { time: "13:30", text: "Traversée du fjord de Lim" },
          { time: "14:30", text: "Arrivée à Vrsar – 1h30 pour se baigner ou se balader" },
          { time: "16:00", text: "Retour vers Poreč" },
          { time: "17:00", text: "Retour à la Marina Poreč" }
        ],
        importantNotes: ["Selon la météo", "Merci de signaler à l'avance le choix de plat (végé/poisson/viande) et les allergies", "Prévoir maillot de bain"],
        meetingPointLabel: "Marina Poreč, quai 3"
      },
      it: {
        title: "Rovinj Limfjord Vrsar",
        slug: "rovinj-limfjord-vrsar",
        shortDescription: "Giornata intera: centro storico di Rovinj, fiordo di Lim e Vrsar – pranzo e bevande a bordo inclusi.",
        description: "Una rilassante giornata lungo i luoghi più belli dell'Istria. Partiamo alle 10 da Poreč, navigando un'ora fino a Rovinj per una pausa di 2 ore nel centro storico. Poi gustiamo il pranzo a bordo (vegetariano, pesce o carne) mentre attraversiamo il pittoresco fiordo di Lim verso Vrsar. A Vrsar avete 1 ora e mezza per fare il bagno o passeggiare nel villaggio.",
        highlights: ["Tre punti salienti in un giorno", "Transfer da hotel/appartamento andata e ritorno", "2 ore libere a Rovinj", "Crociera panoramica nel fiordo di Lim", "Pranzo a bordo (vegetariano, pesce o carne)", "Bevande incluse", "Sosta di 1,5 ore a Vrsar per il bagno"],
        included: ["Skipper", "Pranzo", "Bevande", "Transfer hotel/appartamento (andata e ritorno)"],
        notIncluded: ["Biglietti d'ingresso", "Mance"],
        schedule: [
          { time: "10:00", text: "Partenza Marina di Poreč" },
          { time: "11:00", text: "Arrivo a Rovinj – 2 ore di tempo libero nel centro storico" },
          { time: "13:00", text: "Partenza da Rovinj, pranzo a bordo (vegetariano, pesce o carne)" },
          { time: "13:30", text: "Attraversamento del fiordo di Lim" },
          { time: "14:30", text: "Arrivo a Vrsar – 1,5 ore per fare il bagno o esplorare" },
          { time: "16:00", text: "Ritorno verso Poreč" },
          { time: "17:00", text: "Rientro alla Marina di Poreč" }
        ],
        importantNotes: ["Dipende dal meteo", "Si prega di comunicare in anticipo la scelta del pasto (vegetariano/pesce/carne) e le allergie", "Portare costume da bagno"],
        meetingPointLabel: "Marina di Poreč, Molo 3"
      },
      ru: {
        title: "Ровинь Лим-фьорд Врсар",
        slug: "rovinj-limfjord-vrsar",
        shortDescription: "Целодневный тур: старый город Ровинь, Лим-фьорд и Врсар – обед и напитки на борту включены.",
        description: "Расслабленный целодневный тур по самым красивым местам Истрии. Стартуем в 10 утра из Пореча, час плывём в Ровинь на 2-часовую остановку в старом городе. Затем обед на борту (вегетарианский, рыба или мясо) пока плывём через живописный Лим-фьорд к Врсару. В Врсаре у вас 1,5 часа на купание или прогулку по посёлку.",
        highlights: ["Три ярких момента за один день", "Трансфер от отеля/апартаментов туда и обратно", "2 часа свободного времени в Ровине", "Панорамный круиз по Лим-фьорду", "Обед на борту (вегетарианский, рыба или мясо)", "Напитки включены", "1,5-часовая остановка в Врсаре для купания"],
        included: ["Шкипер", "Обед", "Напитки", "Трансфер от отеля/апартаментов (туда и обратно)"],
        notIncluded: ["Входные билеты", "Чаевые"],
        schedule: [
          { time: "10:00", text: "Отправление из Марины Пореч" },
          { time: "11:00", text: "Прибытие в Ровинь – 2 часа свободного времени в старом городе" },
          { time: "13:00", text: "Отправление из Ровиня, обед на борту (вегетарианский, рыба или мясо)" },
          { time: "13:30", text: "Прохождение Лим-фьорда" },
          { time: "14:30", text: "Прибытие в Врсар – 1,5 часа для купания или прогулки" },
          { time: "16:00", text: "Возвращение в Пореч" },
          { time: "17:00", text: "Возвращение в Марину Пореч" }
        ],
        importantNotes: ["Зависит от погоды", "Просим заранее сообщить выбор блюда (вег/рыба/мясо) и аллергии", "Возьмите купальный костюм"],
        meetingPointLabel: "Марина Пореч, причал 3"
      },
      pl: {
        title: "Rovinj Limfjord Vrsar",
        slug: "rovinj-limfjord-vrsar",
        shortDescription: "Całodniowa wycieczka: stare miasto Rovinj, fiord Lim i Vrsar – obiad i napoje na pokładzie w cenie.",
        description: "Spokojna całodniowa wycieczka wzdłuż najpiękniejszych miejsc Istrii. Startujemy o 10:00 z Poreča, godzinę płyniemy do Rovinj na 2-godzinną przerwę w starym mieście. Następnie obiad na pokładzie (wegetariański, ryba lub mięso) podczas rejsu przez malowniczy fiord Lim do Vrsaru. We Vrsarze macie 1,5 godziny na kąpiel lub spacer po miasteczku.",
        highlights: ["Trzy atrakcje w jeden dzień", "Transfer z hotelu/apartamentu w obie strony", "2 godziny wolnego czasu w Rovinj", "Panoramiczny rejs przez fiord Lim", "Obiad na pokładzie (wegetariański, ryba lub mięso)", "Napoje w cenie", "1,5-godzinny postój we Vrsarze na kąpiel"],
        included: ["Skipper", "Obiad", "Napoje", "Transfer z hotelu/apartamentu (w obie strony)"],
        notIncluded: ["Bilety wstępu", "Napiwki"],
        schedule: [
          { time: "10:00", text: "Wypłynięcie z Mariny Poreč" },
          { time: "11:00", text: "Przybycie do Rovinj – 2 godziny wolnego w starym mieście" },
          { time: "13:00", text: "Wypłynięcie z Rovinj, obiad na pokładzie (wegetariański, ryba lub mięso)" },
          { time: "13:30", text: "Przepłynięcie fiordu Lim" },
          { time: "14:30", text: "Przybycie do Vrsar – 1,5 godziny na kąpiel lub spacer" },
          { time: "16:00", text: "Powrót do Poreča" },
          { time: "17:00", text: "Powrót do Mariny Poreč" }
        ],
        importantNotes: ["Zależnie od pogody", "Prosimy o wcześniejsze zgłoszenie wyboru dania (weg/ryba/mięso) i alergii", "Zabrać strój kąpielowy"],
        meetingPointLabel: "Marina Poreč, Nabrzeże 3"
      }
    }
  },
  {
    id: "speedboat-charter",
    durationHours: 4,
    maxGuests: 8,
    isPrivate: true,
    languages: ["de", "en", "hr", "fr"],
    pricing: { adult: 0, childDiscountPct: 0, infantFree: true, currency: "EUR" },
    meetingPoint: { lat: 45.2269, lng: 13.5944 },
    images: [
      { src: "https://i.imgur.com/rngySEF.jpg", alt: "Speedboot für private Tour" },
    ],
    featured: true,
    i18n: {
      de: {
        title: "Privat Speedboot Tour",
        slug: "privat-speedboot-tour",
        shortDescription: "Halber oder ganzer Tag Speedboot privat – Preis nach Boot und Personenzahl. Kontaktiere uns für eine Offerte.",
        description: "Eine private Speedboot-Tour ganz nach deinen Wünschen – halber oder ganzer Tag. Du fährst entweder selbst (Bootsführerschein erforderlich) oder mit unserem Skipper. Der Preis variiert je nach Bootsgröße, Personenzahl und Dauer. Schreib uns für eine individuelle Offerte – wir melden uns schnell per WhatsApp zurück.",
        highlights: ["Privatboot nur für deine Gruppe", "Halber oder ganzer Tag", "Mit eigenem Bootsführerschein oder Skipper", "Preis individuell nach Boot & Personenzahl", "Persönliche Offerte per WhatsApp"],
        included: ["Boot", "Kraftstoffpaket auf Anfrage"],
        notIncluded: ["Eintritte", "Verpflegung", "Skipper optional gegen Aufpreis"],
        schedule: [],
        importantNotes: ["Bootsführerschein oder gebuchter Skipper erforderlich", "Wetterabhängig", "Verbindlicher Preis erst nach Offerte"],
        meetingPointLabel: "Marina Poreč"
      },
      en: {
        title: "Private Speedboat Tour",
        slug: "private-speedboat-tour",
        shortDescription: "Half or full day private speedboat – price depends on boat and group. Contact us for a quote.",
        description: "A private speedboat tour tailored to you – half day or full day. You can either skipper yourself (boat license required) or hire our skipper. The price depends on boat size, group size and duration. Send us a message for a personal quote – we reply quickly on WhatsApp.",
        highlights: ["Private boat just for your group", "Half day or full day", "Self-skipper (license) or with our skipper", "Custom price by boat & group size", "Personal quote via WhatsApp"],
        included: ["Boat", "Fuel package on request"],
        notIncluded: ["Entrance fees", "Food & drinks", "Skipper optional, extra fee"],
        schedule: [],
        importantNotes: ["Boat license or booked skipper required", "Weather-dependent", "Final price after quote"],
        meetingPointLabel: "Marina Poreč"
      },
      hr: {
        title: "Privatni izlet glisserom",
        slug: "privatni-izlet-glisserom",
        shortDescription: "Pola ili cijeli dan privatni gliser – cijena ovisi o brodu i broju osoba. Pišite za ponudu.",
        description: "Privatni izlet glisserom po vašim željama – pola ili cijeli dan. Možete sami upravljati brodom (potrebna dozvola) ili s našim skiperom. Cijena ovisi o veličini broda, broju osoba i trajanju. Pošaljite nam poruku za individualnu ponudu – brzo odgovaramo putem WhatsAppa.",
        highlights: ["Privatni brod samo za vašu grupu", "Pola ili cijeli dan", "Vlastiti skiper (s dozvolom) ili naš skiper", "Cijena prema brodu i broju osoba", "Osobna ponuda putem WhatsAppa"],
        included: ["Brod", "Paket goriva na upit"],
        notIncluded: ["Ulaznice", "Hrana i piće", "Skiper opcionalno uz doplatu"],
        schedule: [],
        importantNotes: ["Potrebna dozvola za upravljanje ili rezerviran skiper", "Ovisno o vremenu", "Konačna cijena nakon ponude"],
        meetingPointLabel: "Marina Poreč"
      },
      fr: {
        title: "Tour privé en hors-bord",
        slug: "tour-prive-hors-bord",
        shortDescription: "Demi-journée ou journée en hors-bord privé – prix selon le bateau et le groupe. Contactez-nous pour un devis.",
        description: "Une excursion privée en hors-bord sur mesure – demi-journée ou journée complète. Vous pouvez piloter vous-même (permis bateau requis) ou avec notre skipper. Le prix dépend de la taille du bateau, du nombre de personnes et de la durée. Écrivez-nous pour un devis personnalisé – nous répondons rapidement par WhatsApp.",
        highlights: ["Bateau privé pour votre groupe", "Demi-journée ou journée complète", "Pilotage perso (permis) ou avec skipper", "Prix selon bateau & groupe", "Devis personnalisé par WhatsApp"],
        included: ["Bateau", "Forfait carburant sur demande"],
        notIncluded: ["Entrées", "Restauration", "Skipper en option, supplément"],
        schedule: [],
        importantNotes: ["Permis bateau ou skipper réservé requis", "Selon la météo", "Prix définitif après devis"],
        meetingPointLabel: "Marina Poreč"
      },
      it: {
        title: "Tour privato in motoscafo",
        slug: "tour-privato-motoscafo",
        shortDescription: "Mezza giornata o giornata intera in motoscafo privato – prezzo secondo barca e gruppo. Contattaci per un preventivo.",
        description: "Un'escursione privata in motoscafo su misura – mezza giornata o giornata intera. Puoi pilotare tu (patente nautica richiesta) o con il nostro skipper. Il prezzo dipende dalla dimensione della barca, dal numero di persone e dalla durata. Scrivici per un preventivo personalizzato – rispondiamo rapidamente su WhatsApp.",
        highlights: ["Barca privata solo per il tuo gruppo", "Mezza giornata o giornata intera", "Auto-skipper (con patente) o con il nostro skipper", "Prezzo personalizzato per barca e gruppo", "Preventivo personale via WhatsApp"],
        included: ["Barca", "Pacchetto carburante su richiesta"],
        notIncluded: ["Biglietti d'ingresso", "Cibo e bevande", "Skipper opzionale a costo extra"],
        schedule: [],
        importantNotes: ["Patente nautica o skipper prenotato richiesto", "Dipende dal meteo", "Prezzo definitivo dopo il preventivo"],
        meetingPointLabel: "Marina di Poreč"
      },
      ru: {
        title: "Частная прогулка на катере",
        slug: "chastnaya-progulka-kater",
        shortDescription: "Полдня или целый день на частном катере – цена зависит от лодки и группы. Свяжитесь с нами для предложения.",
        description: "Частная прогулка на катере специально для вас – полдня или целый день. Можно управлять самостоятельно (нужно удостоверение судоводителя) или с нашим шкипером. Цена зависит от размера лодки, количества людей и продолжительности. Напишите нам для индивидуального предложения – мы быстро отвечаем в WhatsApp.",
        highlights: ["Частная лодка только для вашей группы", "Полдня или целый день", "Самостоятельное управление (нужны права) или с нашим шкипером", "Цена индивидуально по лодке и группе", "Личное предложение через WhatsApp"],
        included: ["Лодка", "Топливный пакет по запросу"],
        notIncluded: ["Входные билеты", "Еда и напитки", "Шкипер опционально за доплату"],
        schedule: [],
        importantNotes: ["Требуются права судоводителя или забронированный шкипер", "Зависит от погоды", "Окончательная цена после предложения"],
        meetingPointLabel: "Марина Пореч"
      },
      pl: {
        title: "Prywatna wycieczka motorówką",
        slug: "prywatna-wycieczka-motorowka",
        shortDescription: "Pół dnia lub cały dzień motorówką prywatnie – cena zależy od łodzi i grupy. Skontaktuj się z nami po wycenę.",
        description: "Prywatna wycieczka motorówką uszyta na miarę – pół dnia lub cały dzień. Możesz sterować sam (potrzebny patent) lub z naszym skipperem. Cena zależy od wielkości łodzi, liczby osób i długości. Napisz do nas po indywidualną wycenę – szybko odpowiadamy na WhatsApp.",
        highlights: ["Prywatna łódź tylko dla Twojej grupy", "Pół dnia lub cały dzień", "Własny skipper (z patentem) lub nasz skipper", "Cena indywidualna według łodzi i grupy", "Osobista wycena przez WhatsApp"],
        included: ["Łódź", "Pakiet paliwowy na życzenie"],
        notIncluded: ["Bilety wstępu", "Jedzenie i napoje", "Skipper opcjonalnie za dopłatą"],
        schedule: [],
        importantNotes: ["Wymagany patent żeglarski lub zarezerwowany skipper", "Zależnie od pogody", "Ostateczna cena po wycenie"],
        meetingPointLabel: "Marina Poreč"
      }
    }
  }
];

export const getTourById = (id: string) => tours.find((t) => t.id === id);

export const getTourBySlug = (locale: string, slug: string) =>
  tours.find((t) => t.i18n[locale as keyof typeof t.i18n]?.slug === slug);

export const getAllSlugsForLocale = (locale: string) =>
  tours.map((t) => t.i18n[locale as keyof typeof t.i18n]?.slug).filter(Boolean) as string[];

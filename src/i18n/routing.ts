import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["de", "en", "hr", "fr", "it", "ru", "pl"],
  defaultLocale: "de",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/tours": {
      de: "/bootstouren",
      en: "/boat-tours",
      hr: "/izleti-brodom",
      fr: "/excursions-bateau",
      it: "/escursioni-barca",
      ru: "/morskie-progulki",
      pl: "/wycieczki-lodzia",
    },
    "/tours/[slug]": {
      de: "/bootstouren/[slug]",
      en: "/boat-tours/[slug]",
      hr: "/izleti-brodom/[slug]",
      fr: "/excursions-bateau/[slug]",
      it: "/escursioni-barca/[slug]",
      ru: "/morskie-progulki/[slug]",
      pl: "/wycieczki-lodzia/[slug]",
    },
    "/booking": {
      de: "/reservierung",
      en: "/booking",
      hr: "/rezervacija",
      fr: "/reservation",
      it: "/prenotazione",
      ru: "/bronirovanie",
      pl: "/rezerwacja",
    },
    "/booking/thanks": {
      de: "/reservierung/danke",
      en: "/booking/thanks",
      hr: "/rezervacija/hvala",
      fr: "/reservation/merci",
      it: "/prenotazione/grazie",
      ru: "/bronirovanie/spasibo",
      pl: "/rezerwacja/dziekujemy",
    },
    "/about": {
      de: "/ueber-uns",
      en: "/about",
      hr: "/o-nama",
      fr: "/a-propos",
      it: "/chi-siamo",
      ru: "/o-nas",
      pl: "/o-nas",
    },
    "/contact": {
      de: "/kontakt",
      en: "/contact",
      hr: "/kontakt",
      fr: "/contact",
      it: "/contatti",
      ru: "/kontakty",
      pl: "/kontakt",
    },
    "/faq": "/faq",
    "/terms": {
      de: "/agb",
      en: "/terms",
      hr: "/uvjeti",
      fr: "/conditions",
      it: "/condizioni",
      ru: "/usloviya",
      pl: "/regulamin",
    },
    "/cancellation": {
      de: "/stornierung",
      en: "/cancellation",
      hr: "/otkazivanje",
      fr: "/annulation",
      it: "/cancellazione",
      ru: "/otmena",
      pl: "/anulowanie",
    },
    "/privacy": {
      de: "/datenschutz",
      en: "/privacy",
      hr: "/privatnost",
      fr: "/confidentialite",
      it: "/privacy",
      ru: "/konfidencialnost",
      pl: "/prywatnosc",
    },
    "/imprint": {
      de: "/impressum",
      en: "/imprint",
      hr: "/impressum",
      fr: "/mentions-legales",
      it: "/impressum",
      ru: "/impressum",
      pl: "/impressum",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

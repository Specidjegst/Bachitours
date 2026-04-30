import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["de", "en", "hr", "fr"],
  defaultLocale: "de",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/tours": {
      de: "/bootstouren",
      en: "/boat-tours",
      hr: "/izleti-brodom",
      fr: "/excursions-bateau",
    },
    "/tours/[slug]": {
      de: "/bootstouren/[slug]",
      en: "/boat-tours/[slug]",
      hr: "/izleti-brodom/[slug]",
      fr: "/excursions-bateau/[slug]",
    },
    "/booking": {
      de: "/reservierung",
      en: "/booking",
      hr: "/rezervacija",
      fr: "/reservation",
    },
    "/booking/thanks": {
      de: "/reservierung/danke",
      en: "/booking/thanks",
      hr: "/rezervacija/hvala",
      fr: "/reservation/merci",
    },
    "/about": {
      de: "/ueber-uns",
      en: "/about",
      hr: "/o-nama",
      fr: "/a-propos",
    },
    "/contact": {
      de: "/kontakt",
      en: "/contact",
      hr: "/kontakt",
      fr: "/contact",
    },
    "/faq": "/faq",
    "/terms": {
      de: "/agb",
      en: "/terms",
      hr: "/uvjeti",
      fr: "/conditions",
    },
    "/cancellation": {
      de: "/stornierung",
      en: "/cancellation",
      hr: "/otkazivanje",
      fr: "/annulation",
    },
    "/privacy": {
      de: "/datenschutz",
      en: "/privacy",
      hr: "/privatnost",
      fr: "/confidentialite",
    },
    "/imprint": {
      de: "/impressum",
      en: "/imprint",
      hr: "/impressum",
      fr: "/mentions-legales",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

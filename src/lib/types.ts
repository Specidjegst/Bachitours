import type { Locale } from "@/i18n/routing";

export type TourLocaleContent = {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  schedule: { time: string; text: string }[];
  importantNotes: string[];
  meetingPointLabel: string;
};

export type Tour = {
  id: string;
  durationHours: number;
  maxGuests: number;
  isPrivate: boolean;
  languages: Locale[];
  pricing: {
    adult: number;
    childDiscountPct: number;
    infantFree: boolean;
    currency: "EUR";
  };
  meetingPoint: { lat: number; lng: number };
  images: { src: string; alt: string }[];
  featured: boolean;
  i18n: Record<Locale, TourLocaleContent>;
};

export type BookingPayload = {
  tourId: string;
  date: string;
  time?: string;
  adults: number;
  kids: number;
  infants: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: Locale;
  message?: string;
  consentTerms: boolean;
  consentPrivacy: boolean;
  locale: Locale;
};

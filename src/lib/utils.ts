import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const onRequestLabels: Record<string, string> = {
  de: "Auf Anfrage",
  en: "On request",
  hr: "Na upit",
  fr: "Sur demande",
  it: "Su richiesta",
  ru: "По запросу",
  pl: "Na zapytanie",
};

const intlLocale: Record<string, string> = {
  en: "en-GB",
  ru: "ru-RU",
  pl: "pl-PL",
  it: "it-IT",
};

export function formatPrice(amount: number, locale = "de") {
  if (amount === 0) {
    return onRequestLabels[locale] ?? onRequestLabels.en;
  }
  return new Intl.NumberFormat(intlLocale[locale] ?? locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calcTotal(
  base: number,
  adults: number,
  kids6to16: number,
  childDiscountPct: number
) {
  const adultTotal = adults * base;
  const kidPrice = base * (1 - childDiscountPct / 100);
  const kidTotal = kids6to16 * kidPrice;
  return adultTotal + kidTotal;
}

export function generateBookingRef() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `BCH-${year}-${random}`;
}

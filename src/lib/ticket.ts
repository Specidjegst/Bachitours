import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { readFileSync } from "fs";
import path from "path";
import type { BookingRecord } from "./db";
import { tours } from "@/data/tours";
import { formatPrice } from "./utils";
import type { Locale } from "@/i18n/routing";

type Labels = {
  ticket: string;
  paid: string;
  ref: string;
  tour: string;
  date: string;
  time: string;
  guests: string;
  name: string;
  total: string;
  meeting: string;
  adults: string;
  kids: string;
  infants: string;
  footer: string;
};

const L: Record<Locale, Labels> = {
  de: { ticket: "TICKET", paid: "BEZAHLT", ref: "Buchungsnr.", tour: "Tour", date: "Datum", time: "Uhrzeit", guests: "Personen", name: "Name", total: "Preis", meeting: "Treffpunkt", adults: "Erwachsene", kids: "Kinder", infants: "Babys", footer: "Bitte dieses Ticket am Treffpunkt vorzeigen. Gute Fahrt!" },
  en: { ticket: "TICKET", paid: "PAID", ref: "Booking no.", tour: "Tour", date: "Date", time: "Time", guests: "Guests", name: "Name", total: "Price", meeting: "Meeting point", adults: "Adults", kids: "Children", infants: "Infants", footer: "Please show this ticket at the meeting point. Enjoy your trip!" },
  hr: { ticket: "KARTA", paid: "PLAĆENO", ref: "Broj rezervacije", tour: "Izlet", date: "Datum", time: "Vrijeme", guests: "Osobe", name: "Ime", total: "Cijena", meeting: "Mjesto polaska", adults: "Odrasli", kids: "Djeca", infants: "Mala djeca", footer: "Molimo pokažite ovu kartu na mjestu polaska. Ugodan izlet!" },
  fr: { ticket: "BILLET", paid: "PAYÉ", ref: "N° de réservation", tour: "Excursion", date: "Date", time: "Heure", guests: "Personnes", name: "Nom", total: "Prix", meeting: "Point de rencontre", adults: "Adultes", kids: "Enfants", infants: "Bébés", footer: "Veuillez présenter ce billet au point de rencontre. Bonne excursion !" },
  it: { ticket: "BIGLIETTO", paid: "PAGATO", ref: "N. prenotazione", tour: "Escursione", date: "Data", time: "Ora", guests: "Persone", name: "Nome", total: "Prezzo", meeting: "Punto d'incontro", adults: "Adulti", kids: "Bambini", infants: "Neonati", footer: "Si prega di mostrare questo biglietto al punto d'incontro. Buona gita!" },
  ru: { ticket: "БИЛЕТ", paid: "ОПЛАЧЕНО", ref: "Номер брони", tour: "Прогулка", date: "Дата", time: "Время", guests: "Человек", name: "Имя", total: "Цена", meeting: "Место встречи", adults: "Взрослые", kids: "Дети", infants: "Малыши", footer: "Пожалуйста, покажите этот билет в месте встречи. Хорошей прогулки!" },
  pl: { ticket: "BILET", paid: "OPŁACONE", ref: "Nr rezerwacji", tour: "Wycieczka", date: "Data", time: "Godzina", guests: "Osoby", name: "Imię", total: "Cena", meeting: "Miejsce spotkania", adults: "Dorośli", kids: "Dzieci", infants: "Niemowlęta", footer: "Prosimy okazać ten bilet w miejscu spotkania. Udanej wycieczki!" },
};

const DEEP = rgb(10 / 255, 77 / 255, 110 / 255);
const ACCENT = rgb(56 / 255, 191 / 255, 201 / 255);
const SUCCESS = rgb(46 / 255, 166 / 255, 106 / 255);
const INK = rgb(14 / 255, 31 / 255, 44 / 255);
const MUTED = rgb(92 / 255, 107 / 255, 120 / 255);
const WHITE = rgb(1, 1, 1);

export async function generateTicketPdf(b: BookingRecord): Promise<Uint8Array> {
  const locale = (L[b.locale as Locale] ? b.locale : "en") as Locale;
  const t = L[locale];

  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const fontDir = path.join(process.cwd(), "public", "fonts");
  const regular = await doc.embedFont(readFileSync(path.join(fontDir, "NotoSans-Regular.ttf")), { subset: true });
  const bold = await doc.embedFont(readFileSync(path.join(fontDir, "NotoSans-Bold.ttf")), { subset: true });

  const W = 595;
  const H = 842;
  const page = doc.addPage([W, H]);
  const M = 50;

  // Header bar
  page.drawRectangle({ x: 0, y: H - 110, width: W, height: 110, color: DEEP });
  page.drawText("BACHITOURS", { x: M, y: H - 62, size: 26, font: bold, color: WHITE });
  page.drawText("Poreč · Istria · Croatia", { x: M, y: H - 86, size: 11, font: regular, color: ACCENT });
  page.drawText(t.ticket, { x: W - M - bold.widthOfTextAtSize(t.ticket, 22), y: H - 64, size: 22, font: bold, color: WHITE });

  // PAID badge
  const badgeText = t.paid;
  const badgeW = bold.widthOfTextAtSize(badgeText, 18) + 36;
  page.drawRectangle({ x: M, y: H - 175, width: badgeW, height: 40, color: SUCCESS, opacity: 1 });
  page.drawText(badgeText, { x: M + 18, y: H - 163, size: 18, font: bold, color: WHITE });

  const tour = tours.find((x) => x.id === b.tour_id);
  const meeting = tour?.i18n[locale]?.meetingPointLabel ?? "Marina Poreč";
  const guestsStr = `${b.adults} ${t.adults} · ${b.kids} ${t.kids} · ${b.infants} ${t.infants}`;
  const priceStr = b.total_estimate > 0 ? formatPrice(b.total_estimate, locale) : "—";

  const rows: [string, string][] = [
    [t.ref, b.ref],
    [t.tour, b.tour_title],
    [t.date, b.time ? `${b.date}, ${b.time}` : b.date],
    [t.name, `${b.first_name} ${b.last_name}`],
    [t.guests, guestsStr],
    [t.total, priceStr],
    [t.meeting, meeting],
  ];

  let y = H - 230;
  for (const [label, value] of rows) {
    page.drawText(label.toUpperCase(), { x: M, y, size: 9, font: bold, color: MUTED });
    page.drawText(value, { x: M, y: y - 18, size: 14, font: regular, color: INK });
    page.drawLine({ start: { x: M, y: y - 30 }, end: { x: W - M, y: y - 30 }, thickness: 0.5, color: rgb(0.9, 0.88, 0.82) });
    y -= 52;
  }

  // Footer
  page.drawText(t.footer, { x: M, y: 70, size: 10, font: regular, color: MUTED, maxWidth: W - 2 * M, lineHeight: 14 });
  page.drawText("info@bachitours.com  ·  +385 98 935 6521", { x: M, y: 45, size: 10, font: bold, color: DEEP });

  return doc.save();
}

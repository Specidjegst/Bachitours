import { PDFDocument, rgb, PDFPage, PDFFont } from "pdf-lib";
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
  de: { ticket: "TICKET", paid: "BEZAHLT", ref: "Buchungsnummer", tour: "Tour", date: "Datum", time: "Uhrzeit", guests: "Personen", name: "Name", total: "Preis", meeting: "Treffpunkt", adults: "Erw.", kids: "Kinder", infants: "Babys", footer: "Bitte dieses Ticket am Treffpunkt vorzeigen. Wir wünschen eine gute Fahrt!" },
  en: { ticket: "TICKET", paid: "PAID", ref: "Booking number", tour: "Tour", date: "Date", time: "Time", guests: "Guests", name: "Name", total: "Price", meeting: "Meeting point", adults: "Adults", kids: "Children", infants: "Infants", footer: "Please show this ticket at the meeting point. Enjoy your trip!" },
  hr: { ticket: "KARTA", paid: "PLAĆENO", ref: "Broj rezervacije", tour: "Izlet", date: "Datum", time: "Vrijeme", guests: "Osobe", name: "Ime", total: "Cijena", meeting: "Mjesto polaska", adults: "Odrasli", kids: "Djeca", infants: "Mala djeca", footer: "Molimo pokažite ovu kartu na mjestu polaska. Ugodan izlet!" },
  fr: { ticket: "BILLET", paid: "PAYÉ", ref: "N° de réservation", tour: "Excursion", date: "Date", time: "Heure", guests: "Personnes", name: "Nom", total: "Prix", meeting: "Point de rencontre", adults: "Adultes", kids: "Enfants", infants: "Bébés", footer: "Veuillez présenter ce billet au point de rencontre. Bonne excursion !" },
  it: { ticket: "BIGLIETTO", paid: "PAGATO", ref: "N. prenotazione", tour: "Escursione", date: "Data", time: "Ora", guests: "Persone", name: "Nome", total: "Prezzo", meeting: "Punto d'incontro", adults: "Adulti", kids: "Bambini", infants: "Neonati", footer: "Si prega di mostrare questo biglietto al punto d'incontro. Buona gita!" },
  ru: { ticket: "БИЛЕТ", paid: "ОПЛАЧЕНО", ref: "Номер брони", tour: "Прогулка", date: "Дата", time: "Время", guests: "Человек", name: "Имя", total: "Цена", meeting: "Место встречи", adults: "Взр.", kids: "Дети", infants: "Малыши", footer: "Пожалуйста, покажите этот билет в месте встречи. Хорошей прогулки!" },
  pl: { ticket: "BILET", paid: "OPŁACONE", ref: "Nr rezerwacji", tour: "Wycieczka", date: "Data", time: "Godzina", guests: "Osoby", name: "Imię", total: "Cena", meeting: "Miejsce spotkania", adults: "Dorośli", kids: "Dzieci", infants: "Niemowlęta", footer: "Prosimy okazać ten bilet w miejscu spotkania. Udanej wycieczki!" },
};

const DEEP = rgb(10 / 255, 77 / 255, 110 / 255);
const ACCENT = rgb(56 / 255, 191 / 255, 201 / 255);
const SUCCESS = rgb(46 / 255, 166 / 255, 106 / 255);
const SUN = rgb(244 / 255, 163 / 255, 64 / 255);
const INK = rgb(14 / 255, 31 / 255, 44 / 255);
const MUTED = rgb(92 / 255, 107 / 255, 120 / 255);
const CREAM = rgb(251 / 255, 247 / 255, 238 / 255);
const LINE = rgb(229 / 255, 223 / 255, 210 / 255);
const WHITE = rgb(1, 1, 1);

// Draws the Bachitours logo mark (boat, dolphin, sun, waves) from the SVG
// vector paths. (x, y) is where SVG (0,0) maps to; the art extends right
// and downward, scaled by `scale`.
function drawLogoMark(page: PDFPage, x: number, y: number, scale: number) {
  const o = { x, y, scale } as const;
  // sun arc
  page.drawSvgPath("M 30 100 Q 100 0 170 100", { ...o, borderColor: SUN, borderWidth: 1.4 });
  // Rovinj skyline
  page.drawSvgPath("M35 78 h6 v22 h-6 Z M42 72 h8 v28 h-8 Z M51 68 h5 v32 h-5 Z M55 68 L58 62 L61 68 Z M61 74 h9 v26 h-9 Z M71 80 h7 v20 h-7 Z", { ...o, color: SUN });
  // dolphin
  page.drawSvgPath("M 130 60 C 138 50, 150 50, 155 58 C 158 64, 156 72, 152 76 L 158 78 L 154 82 C 150 86, 144 88, 138 86 L 132 92 L 134 84 C 128 80, 126 70, 130 60 Z", { ...o, color: DEEP });
  // boat hull + cabin
  page.drawSvgPath("M 60 105 L 145 105 L 138 122 L 70 122 Z", { ...o, color: DEEP });
  page.drawSvgPath("M 85 90 L 130 90 L 135 105 L 80 105 Z", { ...o, color: DEEP });
  page.drawSvgPath("M92 94 h35 v8 h-35 Z", { ...o, color: ACCENT });
  // waves (T commands expanded to explicit Q for parser safety)
  page.drawSvgPath("M 10 130 Q 35 122 60 130 Q 85 138 110 130 Q 135 122 160 130 Q 185 138 195 130 L 195 145 L 10 145 Z", { ...o, color: ACCENT });
}

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
  const M = 48;
  const page = doc.addPage([W, H]);

  const tour = tours.find((x) => x.id === b.tour_id);
  const meeting = tour?.i18n[locale]?.meetingPointLabel ?? "Marina Poreč";
  const guestsStr = `${b.adults} ${t.adults} · ${b.kids} ${t.kids} · ${b.infants} ${t.infants}`;
  const priceStr = b.total_estimate > 0 ? formatPrice(b.total_estimate, locale) : "—";

  // ---- HEADER ----
  const headerH = 132;
  page.drawRectangle({ x: 0, y: H - headerH, width: W, height: headerH, color: DEEP });
  page.drawRectangle({ x: 0, y: H - headerH - 4, width: W, height: 4, color: ACCENT });

  // logo badge
  const badgeCx = M + 36;
  const badgeCy = H - 66;
  page.drawCircle({ x: badgeCx, y: badgeCy, size: 38, color: CREAM });
  drawLogoMark(page, badgeCx - 30, badgeCy + 24, 0.3);

  const wordX = badgeCx + 56;
  page.drawText("BACHITOURS", { x: wordX, y: H - 58, size: 23, font: bold, color: WHITE });
  page.drawText("Boat Tours · Poreč, Croatia", { x: wordX, y: H - 78, size: 10, font: regular, color: ACCENT });
  page.drawText(t.ticket, { x: W - M - bold.widthOfTextAtSize(t.ticket, 19), y: H - 56, size: 19, font: bold, color: WHITE });

  // ---- BOOKING NUMBER BOX ----
  let y = H - headerH - 36;
  const boxH = 64;
  page.drawRectangle({ x: M, y: y - boxH, width: W - 2 * M, height: boxH, color: CREAM, borderColor: LINE, borderWidth: 1 });
  page.drawText(t.ref.toUpperCase(), { x: M + 18, y: y - 22, size: 9, font: bold, color: MUTED });
  page.drawText(b.ref, { x: M + 18, y: y - 48, size: 22, font: bold, color: DEEP });

  // PAID badge
  const paidTxt = t.paid;
  const paidW = bold.widthOfTextAtSize(paidTxt, 13) + 30;
  const paidH = 34;
  const paidX = W - M - 18 - paidW;
  const paidY = y - boxH / 2 - paidH / 2;
  page.drawRectangle({ x: paidX, y: paidY, width: paidW, height: paidH, color: SUCCESS });
  page.drawText(paidTxt, { x: paidX + 15, y: paidY + 11, size: 13, font: bold, color: WHITE });

  y -= boxH + 34;

  // ---- DETAIL FIELDS ----
  const col2 = W / 2 + 14;
  const field = (label: string, value: string, fx: number, fy: number, vSize = 13, vFont: PDFFont = regular) => {
    page.drawText(label.toUpperCase(), { x: fx, y: fy, size: 8.5, font: bold, color: MUTED });
    page.drawText(value, { x: fx, y: fy - 18, size: vSize, font: vFont, color: INK, maxWidth: W / 2 - M });
  };
  const divider = (dy: number) => {
    page.drawLine({ start: { x: M, y: dy }, end: { x: W - M, y: dy }, thickness: 0.5, color: LINE });
  };

  field(t.tour, b.tour_title, M, y, 17, bold);
  y -= 42; divider(y); y -= 24;

  field(t.date, b.date, M, y);
  field(t.time, b.time || "—", col2, y);
  y -= 42; divider(y); y -= 24;

  field(t.name, `${b.first_name} ${b.last_name}`, M, y);
  y -= 42; divider(y); y -= 24;

  field(t.guests, guestsStr, M, y);
  y -= 42; divider(y); y -= 24;

  field(t.total, priceStr, M, y, 15, bold);
  field(t.meeting, meeting, col2, y);

  // ---- PERFORATION + FOOTER ----
  page.drawLine({ start: { x: M, y: 128 }, end: { x: W - M, y: 128 }, thickness: 1, color: LINE, dashArray: [4, 4] });
  page.drawText(t.footer, { x: M, y: 100, size: 10, font: regular, color: MUTED, maxWidth: W - 2 * M, lineHeight: 14 });
  page.drawText("info@bachitours.com   ·   +385 98 935 6521", { x: M, y: 58, size: 11, font: bold, color: DEEP });
  const site = "bachitours.com";
  page.drawText(site, { x: W - M - bold.widthOfTextAtSize(site, 11), y: 58, size: 11, font: bold, color: ACCENT });

  return doc.save();
}

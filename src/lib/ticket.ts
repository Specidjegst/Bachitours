import { PDFDocument, rgb, degrees, PDFPage, PDFFont } from "pdf-lib";
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
  thanks: string;
  footer: string;
};

const L: Record<Locale, Labels> = {
  de: { ticket: "E-TICKET", paid: "BEZAHLT", ref: "Buchungsnummer", tour: "Tour", date: "Datum", time: "Uhrzeit", guests: "Personen", name: "Name", total: "Gesamtpreis", meeting: "Treffpunkt", adults: "Erw.", kids: "Kinder", infants: "Babys", thanks: "Vielen Dank für Ihre Buchung — wir freuen uns auf Sie!", footer: "Bitte dieses Ticket am Treffpunkt vorzeigen. Wir wünschen eine unvergessliche Fahrt!" },
  en: { ticket: "E-TICKET", paid: "PAID", ref: "Booking number", tour: "Tour", date: "Date", time: "Time", guests: "Guests", name: "Name", total: "Total price", meeting: "Meeting point", adults: "Adults", kids: "Children", infants: "Infants", thanks: "Thank you for your booking — we look forward to seeing you!", footer: "Please show this ticket at the meeting point. Enjoy your trip!" },
  hr: { ticket: "E-KARTA", paid: "PLAĆENO", ref: "Broj rezervacije", tour: "Izlet", date: "Datum", time: "Vrijeme", guests: "Osobe", name: "Ime", total: "Ukupno", meeting: "Mjesto polaska", adults: "Odrasli", kids: "Djeca", infants: "Mala djeca", thanks: "Hvala na rezervaciji — radujemo se vašem dolasku!", footer: "Molimo pokažite ovu kartu na mjestu polaska. Ugodan izlet!" },
  fr: { ticket: "E-BILLET", paid: "PAYÉ", ref: "N° de réservation", tour: "Excursion", date: "Date", time: "Heure", guests: "Personnes", name: "Nom", total: "Prix total", meeting: "Point de rencontre", adults: "Adultes", kids: "Enfants", infants: "Bébés", thanks: "Merci pour votre réservation — au plaisir de vous accueillir !", footer: "Veuillez présenter ce billet au point de rencontre. Bonne excursion !" },
  it: { ticket: "E-BIGLIETTO", paid: "PAGATO", ref: "N. prenotazione", tour: "Escursione", date: "Data", time: "Ora", guests: "Persone", name: "Nome", total: "Totale", meeting: "Punto d'incontro", adults: "Adulti", kids: "Bambini", infants: "Neonati", thanks: "Grazie per la prenotazione — non vediamo l'ora di accogliervi!", footer: "Si prega di mostrare questo biglietto al punto d'incontro. Buona gita!" },
  ru: { ticket: "E-БИЛЕТ", paid: "ОПЛАЧЕНО", ref: "Номер брони", tour: "Прогулка", date: "Дата", time: "Время", guests: "Человек", name: "Имя", total: "Итого", meeting: "Место встречи", adults: "Взр.", kids: "Дети", infants: "Малыши", thanks: "Спасибо за бронирование — будем рады вас видеть!", footer: "Пожалуйста, покажите этот билет в месте встречи. Хорошей прогулки!" },
  pl: { ticket: "E-BILET", paid: "OPŁACONE", ref: "Nr rezerwacji", tour: "Wycieczka", date: "Data", time: "Godzina", guests: "Osoby", name: "Imię", total: "Razem", meeting: "Miejsce spotkania", adults: "Dorośli", kids: "Dzieci", infants: "Niemowlęta", thanks: "Dziękujemy za rezerwację — czekamy na Ciebie!", footer: "Prosimy okazać ten bilet w miejscu spotkania. Udanej wycieczki!" },
};

const DEEP = rgb(10 / 255, 77 / 255, 110 / 255);
const PRIMARY = rgb(30 / 255, 136 / 255, 176 / 255);
const ACCENT = rgb(56 / 255, 191 / 255, 201 / 255);
const SUCCESS = rgb(46 / 255, 166 / 255, 106 / 255);
const SUN = rgb(244 / 255, 163 / 255, 64 / 255);
const INK = rgb(14 / 255, 31 / 255, 44 / 255);
const MUTED = rgb(92 / 255, 107 / 255, 120 / 255);
const CREAM = rgb(251 / 255, 247 / 255, 238 / 255);
const SAND = rgb(244 / 255, 231 / 255, 209 / 255);
const LINE = rgb(229 / 255, 223 / 255, 210 / 255);
const WHITE = rgb(1, 1, 1);
const FOOT = rgb(0.82, 0.9, 0.94);

// Rounded rectangle whose TOP edge sits at PDF y = topY, extending downward.
function roundedRect(
  page: PDFPage,
  x: number,
  topY: number,
  w: number,
  h: number,
  r: number,
  opts: Parameters<PDFPage["drawSvgPath"]>[1]
) {
  const d = `M ${r} 0 L ${w - r} 0 Q ${w} 0 ${w} ${r} L ${w} ${h - r} Q ${w} ${h} ${w - r} ${h} L ${r} ${h} Q 0 ${h} 0 ${h - r} L 0 ${r} Q 0 0 ${r} 0 Z`;
  page.drawSvgPath(d, { x, y: topY, ...opts });
}

function waveStrip(page: PDFPage, baseY: number, width: number, color: ReturnType<typeof rgb>, opacity = 1) {
  const seg = 46;
  const depth = 70;
  let d = "M 0 0";
  let up = true;
  for (let cx = 0; cx < width + seg; cx += seg) {
    d += ` Q ${cx + seg / 2} ${up ? -8 : 8} ${cx + seg} 0`;
    up = !up;
  }
  d += ` L ${width + seg} ${depth} L 0 ${depth} Z`;
  page.drawSvgPath(d, { x: 0, y: baseY, color, opacity });
}

function drawLogoMark(page: PDFPage, x: number, y: number, scale: number) {
  const o = { x, y, scale } as const;
  page.drawSvgPath("M 30 100 Q 100 0 170 100", { ...o, borderColor: SUN, borderWidth: 1.6 });
  page.drawSvgPath("M35 78 h6 v22 h-6 Z M42 72 h8 v28 h-8 Z M51 68 h5 v32 h-5 Z M55 68 L58 62 L61 68 Z M61 74 h9 v26 h-9 Z M71 80 h7 v20 h-7 Z", { ...o, color: SUN });
  page.drawSvgPath("M 130 60 C 138 50, 150 50, 155 58 C 158 64, 156 72, 152 76 L 158 78 L 154 82 C 150 86, 144 88, 138 86 L 132 92 L 134 84 C 128 80, 126 70, 130 60 Z", { ...o, color: DEEP });
  page.drawSvgPath("M 60 105 L 145 105 L 138 122 L 70 122 Z", { ...o, color: DEEP });
  page.drawSvgPath("M 85 90 L 130 90 L 135 105 L 80 105 Z", { ...o, color: DEEP });
  page.drawSvgPath("M92 94 h35 v8 h-35 Z", { ...o, color: ACCENT });
  page.drawSvgPath("M 10 130 Q 35 122 60 130 Q 85 138 110 130 Q 135 122 160 130 Q 185 138 195 130 L 195 145 L 10 145 Z", { ...o, color: ACCENT });
}

export async function generateTicketPdf(b: BookingRecord): Promise<Uint8Array> {
  const locale = (L[b.locale as Locale] ? b.locale : "en") as Locale;
  const t = L[locale];

  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const fontDir = path.join(process.cwd(), "public", "fonts");
  const regular = await doc.embedFont(readFileSync(path.join(fontDir, "NotoSans-Regular.ttf")));
  const bold = await doc.embedFont(readFileSync(path.join(fontDir, "NotoSans-Bold.ttf")));

  const W = 595;
  const H = 842;
  const M = 44;
  const page = doc.addPage([W, H]);
  page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: WHITE });

  const tour = tours.find((x) => x.id === b.tour_id);
  const meeting = tour?.i18n[locale]?.meetingPointLabel ?? "Marina Poreč";
  const guestsStr = `${b.adults} ${t.adults} · ${b.kids} ${t.kids} · ${b.infants} ${t.infants}`;
  const priceStr = b.total_estimate > 0 ? formatPrice(b.total_estimate, locale) : "—";
  const center = (text: string, font: PDFFont, size: number) => (W - font.widthOfTextAtSize(text, size)) / 2;

  // ---------- HEADER ----------
  const headerH = 170;
  page.drawRectangle({ x: 0, y: H - headerH, width: W, height: headerH, color: DEEP });
  page.drawCircle({ x: W - 26, y: H - 26, size: 46, color: PRIMARY, opacity: 0.5 });
  waveStrip(page, H - headerH + 18, W, PRIMARY, 0.55);
  waveStrip(page, H - headerH + 8, W, ACCENT, 0.9);
  waveStrip(page, H - headerH - 1, W, WHITE, 1);

  const badgeCx = M + 42;
  const badgeCy = H - 74;
  page.drawCircle({ x: badgeCx, y: badgeCy, size: 46, color: WHITE });
  drawLogoMark(page, badgeCx - 36, badgeCy + 29, 0.36);

  const wordX = badgeCx + 64;
  page.drawText("BACHITOURS", { x: wordX, y: H - 62, size: 27, font: bold, color: WHITE });
  page.drawText("BOAT TOURS · POREČ, CROATIA", { x: wordX + 2, y: H - 84, size: 9.5, font: bold, color: ACCENT });
  const tw = bold.widthOfTextAtSize(t.ticket, 11);
  roundedRect(page, W - M - tw - 26, H - 40, tw + 26, 26, 13, { color: ACCENT });
  page.drawText(t.ticket, { x: W - M - tw - 13, y: H - 57, size: 11, font: bold, color: DEEP });

  // ---------- BOOKING NUMBER HERO ----------
  let y = H - headerH - 28;
  const heroH = 78;
  roundedRect(page, M, y, W - 2 * M, heroH, 14, { color: DEEP });
  page.drawText(t.ref.toUpperCase(), { x: M + 24, y: y - 30, size: 9, font: bold, color: ACCENT });
  page.drawText(b.ref, { x: M + 24, y: y - 60, size: 26, font: bold, color: WHITE });

  const stampW = bold.widthOfTextAtSize(t.paid, 14) + 32;
  const stampH = 40;
  const sx = W - M - 28 - stampW;
  const sy = y - heroH / 2 - stampH / 2 + 2;
  page.drawRectangle({ x: sx, y: sy, width: stampW, height: stampH, borderColor: ACCENT, borderWidth: 2, color: SUCCESS, rotate: degrees(-7) });
  page.drawText(t.paid, { x: sx + 19, y: sy + 13, size: 14, font: bold, color: WHITE, rotate: degrees(-7) });

  y -= heroH + 34;

  // ---------- TOUR NAME ----------
  page.drawRectangle({ x: M, y: y - 22, width: 5, height: 32, color: SUN });
  page.drawText(t.tour.toUpperCase(), { x: M + 16, y: y + 1, size: 9, font: bold, color: MUTED });
  page.drawText(b.tour_title, { x: M + 16, y: y - 20, size: 21, font: bold, color: DEEP, maxWidth: W - 2 * M - 16 });
  y -= 54;

  // ---------- DETAIL CARDS ----------
  const gap = 14;
  const cardW = (W - 2 * M - gap) / 2;
  const cardH = 60;
  const card = (label: string, value: string, cx: number, topY: number, w: number, fill: ReturnType<typeof rgb>, vColor = INK, vSize = 14) => {
    roundedRect(page, cx, topY, w, cardH, 10, { color: fill, borderColor: LINE, borderWidth: 1 });
    page.drawText(label.toUpperCase(), { x: cx + 16, y: topY - 23, size: 8, font: bold, color: MUTED });
    page.drawText(value, { x: cx + 16, y: topY - 45, size: vSize, font: bold, color: vColor, maxWidth: w - 28 });
  };

  card(t.date, b.date, M, y, cardW, CREAM);
  card(t.time, b.time || "—", M + cardW + gap, y, cardW, CREAM);
  y -= cardH + gap;
  card(t.name, `${b.first_name} ${b.last_name}`, M, y, W - 2 * M, CREAM);
  y -= cardH + gap;
  card(t.guests, guestsStr, M, y, cardW, CREAM, INK, 12);
  card(t.total, priceStr, M + cardW + gap, y, cardW, SAND, DEEP, 17);
  y -= cardH + gap;
  card(t.meeting, meeting, M, y, W - 2 * M, SAND, DEEP, 15);

  // ---------- PERFORATION + THANK YOU ----------
  page.drawCircle({ x: 0, y: 196, size: 10, color: WHITE, borderColor: LINE, borderWidth: 1 });
  page.drawCircle({ x: W, y: 196, size: 10, color: WHITE, borderColor: LINE, borderWidth: 1 });
  page.drawLine({ start: { x: 16, y: 196 }, end: { x: W - 16, y: 196 }, thickness: 1, color: LINE, dashArray: [5, 5] });
  page.drawText(t.thanks, { x: center(t.thanks, regular, 11), y: 162, size: 11, font: regular, color: MUTED });

  // ---------- FOOTER ----------
  const footerH = 96;
  page.drawRectangle({ x: 0, y: 0, width: W, height: footerH, color: DEEP });
  page.drawText(t.footer, { x: M, y: footerH - 30, size: 10, font: regular, color: FOOT, maxWidth: W - 2 * M, lineHeight: 14 });
  page.drawText("info@bachitours.com   ·   +385 98 935 6521", { x: M, y: 28, size: 11, font: bold, color: WHITE });
  const site = "bachitours.com";
  page.drawText(site, { x: W - M - bold.widthOfTextAtSize(site, 11), y: 28, size: 11, font: bold, color: ACCENT });

  return doc.save();
}

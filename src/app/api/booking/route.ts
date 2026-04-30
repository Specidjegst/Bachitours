import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/schema";
import { generateBookingRef } from "@/lib/utils";
import { sendBookingEmails } from "@/lib/email";
import { tours } from "@/data/tours";
import { operatorWaUrl } from "@/lib/whatsapp";

const prefillByLocale = {
  de: (ref: string, tour: string, date: string, guests: number) =>
    `Hallo Bachitours, ich habe gerade meine Reservierung ${ref} (${tour}, ${date}, ${guests} Personen) abgeschickt. Bitte bestätigen Sie mir den Termin. Danke!`,
  en: (ref: string, tour: string, date: string, guests: number) =>
    `Hi Bachitours, I just submitted reservation ${ref} (${tour}, ${date}, ${guests} guests). Please confirm. Thanks!`,
  hr: (ref: string, tour: string, date: string, guests: number) =>
    `Bok Bachitours, upravo sam poslao/la rezervaciju ${ref} (${tour}, ${date}, ${guests} osoba). Molim potvrdu. Hvala!`,
  fr: (ref: string, tour: string, date: string, guests: number) =>
    `Bonjour Bachitours, je viens d'envoyer la réservation ${ref} (${tour}, ${date}, ${guests} personnes). Merci de confirmer.`,
} as const;

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bookingSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "invalid", issues: parsed.error.issues }, { status: 400 });
    }
    const values = parsed.data;

    if (values.honeypot && values.honeypot.length > 0) {
      return NextResponse.json({ ref: "spam" }, { status: 200 });
    }

    const tour = tours.find((t) => t.id === values.tourId);
    if (!tour) {
      return NextResponse.json({ error: "tour_not_found" }, { status: 400 });
    }

    const ref = generateBookingRef();
    const guests = values.adults + values.kids + values.infants;
    const tourTitle = tour.i18n[values.locale].title;

    try {
      await sendBookingEmails(values, ref);
    } catch (e) {
      console.error("[booking] email error", e);
    }

    const text = prefillByLocale[values.locale](ref, tourTitle, values.date, guests);
    const whatsappUrl = operatorWaUrl(text);

    return NextResponse.json({ ref, whatsappUrl });
  } catch (e) {
    console.error("[booking] error", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/schema";
import { generateBookingRef } from "@/lib/utils";
import { sendBookingEmails } from "@/lib/email";
import { tours } from "@/data/tours";
import { operatorWaUrl } from "@/lib/whatsapp";

type PrefillData = {
  ref: string;
  tour: string;
  date: string;
  time: string;
  adults: number;
  kids: number;
  infants: number;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const prefillByLocale: Record<string, (d: PrefillData) => string> = {
  de: (d) =>
    `Hallo Bachitours, hier meine Reservierung ${d.ref}:\n\n` +
    `Tour: ${d.tour}\n` +
    `Datum: ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Personen: ${d.adults} Erwachsene, ${d.kids} Kinder (6-13), ${d.infants} Babys (0-5)\n` +
    `Name: ${d.name}\n` +
    `Telefon: ${d.phone}\n` +
    `E-Mail: ${d.email}` +
    `${d.message ? `\nNachricht: ${d.message}` : ""}\n\n` +
    `Bitte bestätigen Sie mir den Termin. Danke!`,
  en: (d) =>
    `Hi Bachitours, here is my reservation ${d.ref}:\n\n` +
    `Tour: ${d.tour}\n` +
    `Date: ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Guests: ${d.adults} adults, ${d.kids} children (6-13), ${d.infants} infants (0-5)\n` +
    `Name: ${d.name}\n` +
    `Phone: ${d.phone}\n` +
    `Email: ${d.email}` +
    `${d.message ? `\nMessage: ${d.message}` : ""}\n\n` +
    `Please confirm. Thanks!`,
  hr: (d) =>
    `Bok Bachitours, evo moja rezervacija ${d.ref}:\n\n` +
    `Izlet: ${d.tour}\n` +
    `Datum: ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Osobe: ${d.adults} odraslih, ${d.kids} djece (6-13), ${d.infants} male djece (0-5)\n` +
    `Ime: ${d.name}\n` +
    `Telefon: ${d.phone}\n` +
    `E-mail: ${d.email}` +
    `${d.message ? `\nPoruka: ${d.message}` : ""}\n\n` +
    `Molim potvrdu. Hvala!`,
  fr: (d) =>
    `Bonjour Bachitours, voici ma réservation ${d.ref} :\n\n` +
    `Excursion : ${d.tour}\n` +
    `Date : ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Personnes : ${d.adults} adultes, ${d.kids} enfants (6-13), ${d.infants} bébés (0-5)\n` +
    `Nom : ${d.name}\n` +
    `Téléphone : ${d.phone}\n` +
    `E-mail : ${d.email}` +
    `${d.message ? `\nMessage : ${d.message}` : ""}\n\n` +
    `Merci de confirmer.`,
  it: (d) =>
    `Ciao Bachitours, ecco la mia prenotazione ${d.ref}:\n\n` +
    `Escursione: ${d.tour}\n` +
    `Data: ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Persone: ${d.adults} adulti, ${d.kids} bambini (6-13), ${d.infants} neonati (0-5)\n` +
    `Nome: ${d.name}\n` +
    `Telefono: ${d.phone}\n` +
    `Email: ${d.email}` +
    `${d.message ? `\nMessaggio: ${d.message}` : ""}\n\n` +
    `Confermate per favore. Grazie!`,
  ru: (d) =>
    `Здравствуйте Bachitours, вот моё бронирование ${d.ref}:\n\n` +
    `Прогулка: ${d.tour}\n` +
    `Дата: ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Человек: ${d.adults} взрослых, ${d.kids} детей (6-13), ${d.infants} малышей (0-5)\n` +
    `Имя: ${d.name}\n` +
    `Телефон: ${d.phone}\n` +
    `Email: ${d.email}` +
    `${d.message ? `\nСообщение: ${d.message}` : ""}\n\n` +
    `Подтвердите, пожалуйста. Спасибо!`,
  pl: (d) =>
    `Cześć Bachitours, oto moja rezerwacja ${d.ref}:\n\n` +
    `Wycieczka: ${d.tour}\n` +
    `Data: ${d.date}${d.time ? `, ${d.time}` : ""}\n` +
    `Osoby: ${d.adults} dorosłych, ${d.kids} dzieci (6-13), ${d.infants} niemowląt (0-5)\n` +
    `Imię: ${d.name}\n` +
    `Telefon: ${d.phone}\n` +
    `Email: ${d.email}` +
    `${d.message ? `\nWiadomość: ${d.message}` : ""}\n\n` +
    `Proszę o potwierdzenie. Dzięki!`,
};

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
    const tourTitle = tour.i18n[values.locale].title;

    try {
      await sendBookingEmails(values, ref);
    } catch (e) {
      console.error("[booking] email error", e);
    }

    const text = prefillByLocale[values.locale]({
      ref,
      tour: tourTitle,
      date: values.date,
      time: values.time || "",
      adults: values.adults,
      kids: values.kids,
      infants: values.infants,
      name: `${values.firstName} ${values.lastName}`,
      phone: values.phone,
      email: values.email,
      message: values.message || "",
    });
    const whatsappUrl = operatorWaUrl(text);

    return NextResponse.json({ ref, whatsappUrl });
  } catch (e) {
    console.error("[booking] error", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

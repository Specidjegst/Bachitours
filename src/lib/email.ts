import { Resend } from "resend";
import type { BookingInput } from "./schema";
import { tours } from "@/data/tours";
import { calcTotal, formatPrice } from "./utils";
import type { Locale } from "@/i18n/routing";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const operatorEmail = process.env.OPERATOR_EMAIL || "info@bachitours.com";
const senderEmail = process.env.SENDER_EMAIL || "Bachitours <onboarding@resend.dev>";

const customerSubjects: Record<Locale, (ref: string) => string> = {
  de: (r) => `Ihre Reservierung ${r} bei Bachitours`,
  en: (r) => `Your reservation ${r} at Bachitours`,
  hr: (r) => `Vaša rezervacija ${r} kod Bachitoursa`,
  fr: (r) => `Votre réservation ${r} chez Bachitours`,
  it: (r) => `La tua prenotazione ${r} presso Bachitours`,
  ru: (r) => `Ваше бронирование ${r} в Bachitours`,
  pl: (r) => `Twoja rezerwacja ${r} w Bachitours`,
};

const customerBodies: Record<Locale, (args: { name: string; tour: string; date: string; guests: string; total: string; ref: string }) => string> = {
  de: ({ name, tour, date, guests, total, ref }) => `
Hallo ${name},

vielen Dank für Ihre Reservierung der Tour "${tour}" am ${date} für ${guests} Personen.

Wir melden uns in Kürze per WhatsApp zur Bestätigung und Zahlung. Sobald die Zahlung eingegangen ist, senden wir Ihnen Ihre Tickets per E-Mail.

Buchungs-Referenz: ${ref}
Geschätzter Preis: ${total}

Bei Fragen erreichen Sie uns jederzeit auf WhatsApp oder per E-Mail an info@bachitours.com.

Adriatische Grüße aus Poreč,
Ihr Bachitours-Team
`,
  en: ({ name, tour, date, guests, total, ref }) => `
Hi ${name},

thank you for booking "${tour}" on ${date} for ${guests} guests.

We'll reach out shortly via WhatsApp to confirm and arrange payment. Tickets follow by email after payment.

Booking reference: ${ref}
Estimated price: ${total}

For questions reach us anytime on WhatsApp or by email at info@bachitours.com.

Warm regards from Poreč,
Bachitours
`,
  hr: ({ name, tour, date, guests, total, ref }) => `
Bok ${name},

hvala na rezervaciji izleta "${tour}" dana ${date} za ${guests} osoba.

Uskoro ćemo vam se javiti putem WhatsAppa za potvrdu i plaćanje. Karte šaljemo e-mailom nakon uplate.

Broj rezervacije: ${ref}
Procijenjena cijena: ${total}

Kontaktirajte nas putem WhatsAppa ili na info@bachitours.com.

Pozdrav iz Poreča,
Bachitours
`,
  fr: ({ name, tour, date, guests, total, ref }) => `
Bonjour ${name},

merci pour votre réservation "${tour}" le ${date} pour ${guests} personnes.

Nous vous contacterons sous peu via WhatsApp pour la confirmation et le paiement. Les billets seront envoyés par e-mail après paiement.

Référence : ${ref}
Prix estimé : ${total}

Pour toute question, écrivez-nous sur WhatsApp ou à info@bachitours.com.

Cordialement depuis Poreč,
Bachitours
`,
  it: ({ name, tour, date, guests, total, ref }) => `
Ciao ${name},

grazie per la prenotazione "${tour}" il ${date} per ${guests} persone.

Ti contatteremo a breve via WhatsApp per confermare e organizzare il pagamento. I biglietti seguono via email dopo il pagamento.

Numero di prenotazione: ${ref}
Prezzo stimato: ${total}

Per qualsiasi domanda, scrivici su WhatsApp o a info@bachitours.com.

Saluti adriatici da Poreč,
Bachitours
`,
  ru: ({ name, tour, date, guests, total, ref }) => `
Здравствуйте, ${name}!

Спасибо за бронирование "${tour}" на ${date} для ${guests} человек.

Мы свяжемся с вами в WhatsApp для подтверждения и оплаты. Билеты придут по email после оплаты.

Номер бронирования: ${ref}
Примерная цена: ${total}

По любым вопросам пишите нам в WhatsApp или на info@bachitours.com.

С приветом из Пореча,
Bachitours
`,
  pl: ({ name, tour, date, guests, total, ref }) => `
Cześć ${name},

dziękujemy za rezerwację "${tour}" w dniu ${date} dla ${guests} osób.

Wkrótce skontaktujemy się przez WhatsApp w sprawie potwierdzenia i płatności. Bilety wyślemy emailem po płatności.

Numer rezerwacji: ${ref}
Szacowana cena: ${total}

W razie pytań pisz do nas na WhatsApp lub na info@bachitours.com.

Pozdrowienia z Poreča,
Bachitours
`,
};

export async function sendBookingEmails(values: BookingInput, ref: string) {
  const tour = tours.find((t) => t.id === values.tourId);
  if (!tour) throw new Error("Tour not found");
  const tourTitle = tour.i18n[values.locale].title;
  const total = calcTotal(tour.pricing.adult, values.adults, values.kids, tour.pricing.childDiscountPct);
  const totalStr = formatPrice(total, values.locale);
  const guestsStr = `${values.adults} + ${values.kids} + ${values.infants}`;

  const operatorBody = `
NEW RESERVATION ${ref}

Tour: ${tourTitle}
Date: ${values.date}${values.time ? " " + values.time : ""}
Guests: ${values.adults} adults · ${values.kids} kids (6-13) · ${values.infants} infants (0-5)
Estimated total: ${totalStr}

Customer: ${values.firstName} ${values.lastName}
Email: ${values.email}
Phone/WhatsApp: ${values.phone}
Customer language: ${values.language}

Message: ${values.message || "—"}

Reply via WhatsApp: https://wa.me/${values.phone.replace(/\D/g, "")}
Reply via Email: mailto:${values.email}
`;

  if (!resend) {
    console.log("[booking] Resend not configured, would send:");
    console.log(operatorBody);
    return;
  }

  await resend.emails.send({
    from: senderEmail,
    to: operatorEmail,
    replyTo: values.email,
    subject: `New reservation ${ref} – ${tourTitle} (${values.date}, ${values.adults + values.kids + values.infants} guests)`,
    text: operatorBody,
  });

  await resend.emails.send({
    from: senderEmail,
    to: values.email,
    subject: customerSubjects[values.locale](ref),
    text: customerBodies[values.locale]({
      name: values.firstName,
      tour: tourTitle,
      date: values.date,
      guests: guestsStr,
      total: totalStr,
      ref,
    }),
  });
}

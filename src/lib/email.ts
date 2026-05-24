import { Resend } from "resend";
import type { BookingInput } from "./schema";
import type { BookingRecord } from "./db";
import { tours } from "@/data/tours";
import { calcTotal, formatPrice } from "./utils";
import { generateTicketPdf } from "./ticket";
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

const ticketSubjects: Record<Locale, (ref: string) => string> = {
  de: (r) => `Ihr Ticket ${r} – Zahlung bestätigt | Bachitours`,
  en: (r) => `Your ticket ${r} – payment confirmed | Bachitours`,
  hr: (r) => `Vaša karta ${r} – uplata potvrđena | Bachitours`,
  fr: (r) => `Votre billet ${r} – paiement confirmé | Bachitours`,
  it: (r) => `Il tuo biglietto ${r} – pagamento confermato | Bachitours`,
  ru: (r) => `Ваш билет ${r} – оплата подтверждена | Bachitours`,
  pl: (r) => `Twój bilet ${r} – płatność potwierdzona | Bachitours`,
};

const ticketBodies: Record<Locale, (args: { name: string; tour: string; ref: string }) => string> = {
  de: ({ name, tour, ref }) => `Hallo ${name},\n\nvielen Dank – wir haben Ihre Zahlung erhalten. Im Anhang finden Sie Ihr Ticket für "${tour}".\n\nBuchungs-Referenz: ${ref}\n\nBitte zeigen Sie das Ticket (ausgedruckt oder auf dem Handy) am Treffpunkt vor.\n\nWir freuen uns auf Sie!\nIhr Bachitours-Team`,
  en: ({ name, tour, ref }) => `Hi ${name},\n\nthank you – we received your payment. Your ticket for "${tour}" is attached.\n\nBooking reference: ${ref}\n\nPlease show the ticket (printed or on your phone) at the meeting point.\n\nWe look forward to seeing you!\nBachitours`,
  hr: ({ name, tour, ref }) => `Bok ${name},\n\nhvala – primili smo vašu uplatu. U privitku je vaša karta za "${tour}".\n\nBroj rezervacije: ${ref}\n\nMolimo pokažite kartu (ispisanu ili na mobitelu) na mjestu polaska.\n\nVeselimo se!\nBachitours`,
  fr: ({ name, tour, ref }) => `Bonjour ${name},\n\nmerci – nous avons reçu votre paiement. Votre billet pour "${tour}" est en pièce jointe.\n\nRéférence : ${ref}\n\nMerci de présenter le billet (imprimé ou sur le téléphone) au point de rencontre.\n\nÀ bientôt !\nBachitours`,
  it: ({ name, tour, ref }) => `Ciao ${name},\n\ngrazie – abbiamo ricevuto il pagamento. In allegato il tuo biglietto per "${tour}".\n\nNumero di prenotazione: ${ref}\n\nMostra il biglietto (stampato o sul telefono) al punto d'incontro.\n\nA presto!\nBachitours`,
  ru: ({ name, tour, ref }) => `Здравствуйте, ${name}!\n\nспасибо – мы получили вашу оплату. Ваш билет на "${tour}" во вложении.\n\nНомер брони: ${ref}\n\nПожалуйста, покажите билет (распечатанный или на телефоне) в месте встречи.\n\nЖдём вас!\nBachitours`,
  pl: ({ name, tour, ref }) => `Cześć ${name},\n\ndziękujemy – otrzymaliśmy Twoją płatność. W załączniku Twój bilet na "${tour}".\n\nNumer rezerwacji: ${ref}\n\nProsimy okazać bilet (wydrukowany lub na telefonie) w miejscu spotkania.\n\nDo zobaczenia!\nBachitours`,
};

export async function sendTicketEmail(booking: BookingRecord): Promise<void> {
  const locale = (booking.locale in ticketSubjects ? booking.locale : "en") as Locale;
  const pdf = await generateTicketPdf(booking);
  const base64 = Buffer.from(pdf).toString("base64");

  if (!resend) {
    console.log(`[ticket] Resend not configured, would send ticket ${booking.ref} to ${booking.email}`);
    return;
  }

  await resend.emails.send({
    from: senderEmail,
    to: booking.email,
    subject: ticketSubjects[locale](booking.ref),
    text: ticketBodies[locale]({
      name: booking.first_name,
      tour: booking.tour_title,
      ref: booking.ref,
    }),
    attachments: [
      {
        filename: `Bachitours-Ticket-${booking.ref}.pdf`,
        content: base64,
      },
    ],
  });
}

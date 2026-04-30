# Bachitours

Boat tours from Poreč, Croatia. Multilingual booking website (DE / EN / HR / FR).

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **next-intl** for 4-language routing with localized slugs
- **Tailwind CSS** + custom design tokens (mediterranean palette)
- **react-hook-form** + **zod** for the booking form
- **Resend** for transactional emails
- **WhatsApp deeplinks** for operator/customer follow-up
- Static tour data in `src/data/tours.ts`

## Setup

```bash
npm install
cp .env.example .env.local
# fill in RESEND_API_KEY, OPERATOR_EMAIL, NEXT_PUBLIC_OPERATOR_WHATSAPP, etc.
npm run dev
```

Visit http://localhost:3000 (auto-redirects to `/de`).

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending email |
| `OPERATOR_EMAIL` | Where reservations are sent (e.g. `info@bachitours.com`) |
| `SENDER_EMAIL` | From address (must be a verified Resend domain) |
| `NEXT_PUBLIC_OPERATOR_WHATSAPP` | Operator WhatsApp number, digits only with country code |
| `NEXT_PUBLIC_SITE_URL` | Public site URL for sitemap/canonicals |

If `RESEND_API_KEY` is empty the booking flow still works — the API logs the email payload to the console instead.

## Routes

- `/{de,en,hr,fr}` – home
- `/{de,en,hr,fr}/{tours-slug}` – tour overview
- `/{de,en,hr,fr}/{tours-slug}/{tour-slug}` – tour detail
- `/{de,en,hr,fr}/{booking-slug}` – reservation form
- `/{de,en,hr,fr}/{booking-slug}/{thanks-slug}` – confirmation
- `/api/booking` – `POST` JSON booking endpoint

## Booking flow

1. Customer submits the 3-step form
2. `/api/booking` validates with zod, generates a reference (`BCH-YYYY-XXXXX`)
3. Sends two emails via Resend (operator + customer in customer language)
4. Returns a pre-filled WhatsApp deeplink to the operator's number
5. Customer is redirected to a thank-you page with that WhatsApp button

Payment happens off-site (cash at meeting point or pickup at accommodation).

## Pricing logic

- Adults: 100% of base price
- Kids 6–16: 50%
- Infants 0–5: free, but counted for capacity

Edit base prices per tour in `src/data/tours.ts` (`pricing.adult`).

## Deploy

Push to GitHub, import into Vercel, set the env vars above, point `bachitours.com` DNS to Vercel.

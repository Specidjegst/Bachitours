import { z } from "zod";

export const bookingSchema = z.object({
  tourId: z.string().min(1),
  date: z.string().min(1),
  time: z.string().optional(),
  adults: z.number().int().min(1).max(50),
  kids: z.number().int().min(0).max(50),
  infants: z.number().int().min(0).max(20),
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email(),
  phone: z.string().min(6).max(40),
  language: z.enum(["de", "en", "hr", "fr"]),
  message: z.string().max(2000).optional(),
  consentTerms: z.literal(true),
  consentPrivacy: z.literal(true),
  locale: z.enum(["de", "en", "hr", "fr"]),
  honeypot: z.string().max(0).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

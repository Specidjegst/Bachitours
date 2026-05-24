import { Pool } from "pg";
import type { Locale } from "@/i18n/routing";

declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined;
  // eslint-disable-next-line no-var
  var _schemaReady: Promise<void> | undefined;
}

function getPool(): Pool {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!global._pgPool) {
    global._pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes("localhost")
        ? false
        : { rejectUnauthorized: false },
    });
  }
  return global._pgPool;
}

async function ensureSchema(): Promise<void> {
  if (!global._schemaReady) {
    global._schemaReady = getPool()
      .query(
        `CREATE TABLE IF NOT EXISTS bookings (
          id SERIAL PRIMARY KEY,
          ref TEXT UNIQUE NOT NULL,
          tour_id TEXT NOT NULL,
          tour_title TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT,
          adults INTEGER NOT NULL,
          kids INTEGER NOT NULL,
          infants INTEGER NOT NULL,
          first_name TEXT NOT NULL,
          last_name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT NOT NULL,
          locale TEXT NOT NULL,
          message TEXT,
          total_estimate INTEGER NOT NULL,
          paid BOOLEAN NOT NULL DEFAULT FALSE,
          paid_at TIMESTAMPTZ,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )`
      )
      .then(() => undefined)
      .catch((e) => {
        global._schemaReady = undefined;
        throw e;
      });
  }
  return global._schemaReady;
}

export type BookingRecord = {
  id: number;
  ref: string;
  tour_id: string;
  tour_title: string;
  date: string;
  time: string | null;
  adults: number;
  kids: number;
  infants: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  locale: Locale;
  message: string | null;
  total_estimate: number;
  paid: boolean;
  paid_at: string | null;
  created_at: string;
};

export type NewBooking = {
  ref: string;
  tourId: string;
  tourTitle: string;
  date: string;
  time: string;
  adults: number;
  kids: number;
  infants: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  locale: string;
  message: string;
  totalEstimate: number;
};

export async function saveBooking(b: NewBooking): Promise<void> {
  await ensureSchema();
  await getPool().query(
    `INSERT INTO bookings
      (ref, tour_id, tour_title, date, time, adults, kids, infants,
       first_name, last_name, email, phone, locale, message, total_estimate)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
     ON CONFLICT (ref) DO NOTHING`,
    [
      b.ref, b.tourId, b.tourTitle, b.date, b.time, b.adults, b.kids, b.infants,
      b.firstName, b.lastName, b.email, b.phone, b.locale, b.message, b.totalEstimate,
    ]
  );
}

export async function listBookings(): Promise<BookingRecord[]> {
  await ensureSchema();
  const { rows } = await getPool().query<BookingRecord>(
    `SELECT * FROM bookings ORDER BY created_at DESC LIMIT 500`
  );
  return rows;
}

export async function getBookingByRef(ref: string): Promise<BookingRecord | null> {
  await ensureSchema();
  const { rows } = await getPool().query<BookingRecord>(
    `SELECT * FROM bookings WHERE ref = $1`,
    [ref]
  );
  return rows[0] ?? null;
}

export async function markBookingPaid(ref: string): Promise<BookingRecord | null> {
  await ensureSchema();
  const { rows } = await getPool().query<BookingRecord>(
    `UPDATE bookings SET paid = TRUE, paid_at = NOW() WHERE ref = $1 RETURNING *`,
    [ref]
  );
  return rows[0] ?? null;
}

import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";
import { listBookings } from "@/lib/db";

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const bookings = await listBookings();
  return NextResponse.json({ bookings });
}

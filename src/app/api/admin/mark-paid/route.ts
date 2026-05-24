import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";
import { markBookingPaid } from "@/lib/db";
import { sendTicketEmail } from "@/lib/email";

export async function POST(request: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let ref = "";
  try {
    const body = await request.json();
    ref = typeof body?.ref === "string" ? body.ref : "";
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  if (!ref) {
    return NextResponse.json({ error: "missing_ref" }, { status: 400 });
  }

  const booking = await markBookingPaid(ref);
  if (!booking) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  try {
    await sendTicketEmail(booking);
  } catch (e) {
    console.error("[mark-paid] ticket email error", e);
    return NextResponse.json({ ok: true, ticketSent: false });
  }

  return NextResponse.json({ ok: true, ticketSent: true });
}

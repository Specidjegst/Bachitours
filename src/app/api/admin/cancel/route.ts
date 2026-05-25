import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/admin-auth";
import { cancelBooking } from "@/lib/db";

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

  const booking = await cancelBooking(ref);
  if (!booking) {
    return NextResponse.json({ error: "not_found_or_paid" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { checkPassword, setAuthCookie } from "@/lib/admin-auth";

export async function POST(request: Request) {
  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }

  await setAuthCookie();
  return NextResponse.json({ ok: true });
}

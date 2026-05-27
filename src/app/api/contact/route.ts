import { NextResponse } from "next/server";
import sql from "@/app/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // ✅ FORCE SAFE STRING EXTRACTION
    const name = (formData.get("name") ?? "").toString();
    const email = (formData.get("email") ?? "").toString();
    const subject = (formData.get("subject") ?? "").toString();
    const message = (formData.get("message") ?? "").toString();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // ✅ IMPORTANT: CAST VALUES AS LITERALS FOR POSTGRES
    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name as string}, ${email as string}, ${subject as string}, ${message as string})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
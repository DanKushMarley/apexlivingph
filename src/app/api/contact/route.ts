import { NextResponse } from "next/server";
import sql from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
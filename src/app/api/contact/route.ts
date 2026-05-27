import { NextResponse } from "next/server";
import sql from "@/app/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // ✅ SAFE EXTRACTION (FORCE STRING ONLY)
    const getString = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value : "";
    };

    const name = getString("name");
    const email = getString("email");
    const subject = getString("subject");
    const message = getString("message");

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ SAFE POSTGRES INSERT (NO TYPE INFERENCE ISSUES)
    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${String(name)}, ${String(email)}, ${String(subject)}, ${String(message)})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
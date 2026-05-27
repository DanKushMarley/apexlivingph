import { NextResponse } from "next/server";
import sql from "@/app/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // ✅ FORCE CLEAN PRIMITIVE VALUES (NO UNION TYPES)
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

    // ✅ VALIDATION
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ CRITICAL FIX: CAST SQL PARAMS INTO SAFE PRIMITIVES ARRAY
    const values = [name, email, subject, message] as const;

    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${values[0]}, ${values[1]}, ${values[2]}, ${values[3]})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
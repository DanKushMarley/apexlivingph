export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = process.process.env.DB;
  await db.prepare('INSERT INTO contact_messages (name,email,subject,message) VALUES (?,?,?,?)').bind(fd.get('name'),fd.get('email'),fd.get('subject'),fd.get('message')).run();
  return Response.redirect(new URL('/contact?success=1',req.url));
}
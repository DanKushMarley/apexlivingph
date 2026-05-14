import { env } from "cloudflare:workers";
export const runtime = 'edge';
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const fd = await req.formData();
  const db = env.DB;
  await db.prepare('UPDATE properties SET title=?,type=?,location=?,price=?,description=?,images=?,agent_contact=?,status=? WHERE id=?').bind(fd.get('title'),fd.get('type'),fd.get('location'),fd.get('price'),fd.get('description'),fd.get('images'),fd.get('agent_contact'),fd.get('status'),params.id).run();
  return Response.redirect(new URL('/admin/properties?saved=1',req.url));
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const db = env.DB;
  await db.prepare('DELETE FROM properties WHERE id=?').bind(params.id).run();
  return Response.json({ ok: true });
}
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getRequestContext().env.DB;
  await db.prepare('DELETE FROM properties WHERE id=?').bind(id).run();
  return Response.json({ ok: true });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getRequestContext().env.DB;
  const fd = await req.formData();
  await db.prepare('UPDATE properties SET title=?, location=?, price=?, type=?, bedrooms=?, bathrooms=?, area=?, image_url=?, description=? WHERE id=?')
    .bind(fd.get('title'), fd.get('location'), fd.get('price'), fd.get('type'), fd.get('bedrooms'), fd.get('bathrooms'), fd.get('area'), fd.get('image_url'), fd.get('description'), id)
    .run();
  return Response.json({ ok: true });
}

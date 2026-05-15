import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function GET() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM properties ORDER BY created_at DESC').all();
  return Response.json(results);
}

export async function POST(req: Request) {
  const db = getRequestContext().env.DB;
  const fd = await req.formData();
  await db.prepare('INSERT INTO properties (title, location, price, type, bedrooms, bathrooms, area, image_url, description) VALUES (?,?,?,?,?,?,?,?,?)')
    .bind(fd.get('title'), fd.get('location'), fd.get('price'), fd.get('type'), fd.get('bedrooms'), fd.get('bathrooms'), fd.get('area'), fd.get('image_url'), fd.get('description'))
    .run();
  return Response.json({ ok: true });
}

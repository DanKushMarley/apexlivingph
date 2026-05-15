export const runtime = 'edge';
export async function GET() {
  const db = import { getRequestContext } from '@cloudflare/next-on-pages';().env.DB;
  const { results } = await db.prepare('SELECT * FROM properties ORDER BY created_at DESC').all();
  return Response.json(results);
}
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = import { getRequestContext } from '@cloudflare/next-on-pages';().env.DB;
  await db.prepare('INSERT INTO properties (title,type,location,price,description,images,agent_contact,status) VALUES (?,?,?,?,?,?,?,?)').bind(fd.get('title'),fd.get('type'),fd.get('location'),fd.get('price'),fd.get('description'),fd.get('images'),fd.get('agent_contact'),fd.get('status')||'Available').run();
  return Response.redirect(new URL('/admin/properties?saved=1',req.url));
}
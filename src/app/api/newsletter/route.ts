import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  try { await db.prepare('INSERT INTO newsletter_subscribers (email) VALUES (?)').bind(fd.get('email')).run(); } catch(e){}
  return Response.redirect(new URL('/?subscribed=1',req.url));
}
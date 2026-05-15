import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO hotel_inquiries (guest_name,contact_info,email,destination,check_in,check_out,guests) VALUES (?,?,?,?,?,?,?)')
    .bind(fd.get('guest_name'), fd.get('contact_info'), fd.get('email'), fd.get('destination'), fd.get('check_in'), fd.get('check_out'), fd.get('guests'))
    .run();
  return Response.redirect(new URL('/hotels?success=1', req.url));
}

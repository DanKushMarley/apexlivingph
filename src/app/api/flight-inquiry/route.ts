import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO flight_inquiries (full_name,contact_number,email,departure,destination,travel_date,passengers) VALUES (?,?,?,?,?,?,?)')
    .bind(fd.get('full_name'), fd.get('contact_number'), fd.get('email'), fd.get('departure'), fd.get('destination'), fd.get('travel_date'), fd.get('passengers'))
    .run();
  return Response.redirect(new URL('/flights?success=1', req.url));
}

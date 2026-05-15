import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO tour_inquiries (customer_name, package_name, travelers, travel_date, email, phone) VALUES (?,?,?,?,?,?)')
    .bind(fd.get('customer_name'), fd.get('package_name'), fd.get('travelers'), fd.get('travel_date'), fd.get('email'), fd.get('phone'))
    .run();
  return Response.redirect(new URL('/tours?success=1', req.url));
}

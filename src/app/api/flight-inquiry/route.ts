export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = process.env.DB;
  await db.prepare('INSERT INTO flight_inquiries (full_name,contact_number,email,departure,destination,travel_date,return_date,passengers,preferred_airline,budget_range,notes) VALUES (?,?,?,?,?,?,?,?,?,?,?)').bind(fd.get('full_name'),fd.get('contact_number'),fd.get('email'),fd.get('departure'),fd.get('destination'),fd.get('travel_date'),fd.get('return_date'),fd.get('passengers')||1,fd.get('preferred_airline'),fd.get('budget_range'),fd.get('notes')).run();
  return Response.redirect(new URL('/flights?success=1',req.url));
}
const fs = require('fs');
const path = require('path');
function w(f,c){fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,c,'utf8');console.log('OK '+f);}
const b='D:/Projects/apexliving/src/app';

w(b+'/api/flight-inquiry/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO flight_inquiries (full_name,contact_number,email,departure,destination,travel_date,return_date,passengers,preferred_airline,budget_range,notes) VALUES (?,?,?,?,?,?,?,?,?,?,?)').bind(fd.get('full_name'),fd.get('contact_number'),fd.get('email'),fd.get('departure'),fd.get('destination'),fd.get('travel_date'),fd.get('return_date'),fd.get('passengers')||1,fd.get('preferred_airline'),fd.get('budget_range'),fd.get('notes')).run();
  return Response.redirect(new URL('/flights?success=1',req.url));
}`);

w(b+'/api/hotel-inquiry/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO hotel_inquiries (guest_name,contact_info,email,destination,check_in,check_out,guests,room_type,budget,special_requests) VALUES (?,?,?,?,?,?,?,?,?,?)').bind(fd.get('guest_name'),fd.get('contact_info'),fd.get('email'),fd.get('destination'),fd.get('check_in'),fd.get('check_out'),fd.get('guests')||1,fd.get('room_type'),fd.get('budget'),fd.get('special_requests')).run();
  return Response.redirect(new URL('/hotels?success=1',req.url));
}`);

w(b+'/api/tour-inquiry/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO tour_inquiries (customer_name,package_name,travelers,travel_date,contact_details,email,notes) VALUES (?,?,?,?,?,?,?)').bind(fd.get('customer_name'),fd.get('package_name'),fd.get('travelers')||1,fd.get('travel_date'),fd.get('contact_details'),fd.get('email'),fd.get('notes')).run();
  return Response.redirect(new URL('/tours?success=1',req.url));
}`);

w(b+'/api/contact/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO contact_messages (name,email,subject,message) VALUES (?,?,?,?)').bind(fd.get('name'),fd.get('email'),fd.get('subject'),fd.get('message')).run();
  return Response.redirect(new URL('/contact?success=1',req.url));
}`);

w(b+'/api/newsletter/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  try { await db.prepare('INSERT INTO newsletter_subscribers (email) VALUES (?)').bind(fd.get('email')).run(); } catch(e){}
  return Response.redirect(new URL('/?subscribed=1',req.url));
}`);

console.log('All API routes created!');

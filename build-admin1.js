const fs = require('fs');
const path = require('path');
function w(f,c){fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,c,'utf8');console.log('OK '+f);}
const b='D:/Projects/apexliving/src/app';

// Admin Flights
w(b+'/admin/flights/page.tsx',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export default async function AdminFlights() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM flight_inquiries ORDER BY created_at DESC').all();
  return (
    <div>
      <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d', marginBottom: '2rem' }}>Flight Inquiries</h1>
      {(results as any[]).length === 0 ? <p style={{color:'#666'}}>No inquiries yet.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(results as any[]).map((r: any) => (
            <div key={r.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#00112d' }}>{r.full_name}</strong>
                <span style={{ color: '#999', fontSize: '0.85rem' }}>{r.created_at}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem', color: '#444', fontSize: '0.9rem' }}>
                <span>{r.departure} to {r.destination}</span>
                <span>Phone: {r.contact_number}</span>
                <span>Travel: {r.travel_date} {r.return_date ? '- ' + r.return_date : ''}</span>
                <span>Passengers: {r.passengers}</span>
                <span>Budget: {r.budget_range}</span>
                <span>Email: {r.email}</span>
              </div>
              {r.preferred_airline && <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.3rem' }}>Airline: {r.preferred_airline}</div>}
              {r.notes && <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.3rem', fontStyle: 'italic' }}>Notes: {r.notes}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`);

// Admin Hotels
w(b+'/admin/hotels/page.tsx',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export default async function AdminHotels() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM hotel_inquiries ORDER BY created_at DESC').all();
  return (
    <div>
      <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d', marginBottom: '2rem' }}>Hotel Inquiries</h1>
      {(results as any[]).length === 0 ? <p style={{color:'#666'}}>No inquiries yet.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(results as any[]).map((r: any) => (
            <div key={r.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#00112d' }}>{r.guest_name}</strong>
                <span style={{ color: '#999', fontSize: '0.85rem' }}>{r.created_at}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem', color: '#444', fontSize: '0.9rem' }}>
                <span>Destination: {r.destination}</span>
                <span>Phone: {r.contact_info}</span>
                <span>Check-in: {r.check_in}</span>
                <span>Check-out: {r.check_out}</span>
                <span>Guests: {r.guests}</span>
                <span>Room: {r.room_type}</span>
                <span>Budget: {r.budget}</span>
                <span>Email: {r.email}</span>
              </div>
              {r.special_requests && <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.3rem', fontStyle: 'italic' }}>Requests: {r.special_requests}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`);

// Admin Tours
w(b+'/admin/tours/page.tsx',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export default async function AdminTours() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM tour_inquiries ORDER BY created_at DESC').all();
  return (
    <div>
      <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d', marginBottom: '2rem' }}>Tour Inquiries</h1>
      {(results as any[]).length === 0 ? <p style={{color:'#666'}}>No inquiries yet.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(results as any[]).map((r: any) => (
            <div key={r.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#00112d' }}>{r.customer_name}</strong>
                <span style={{ color: '#999', fontSize: '0.85rem' }}>{r.created_at}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem', color: '#444', fontSize: '0.9rem' }}>
                <span>Package: {r.package_name}</span>
                <span>Contact: {r.contact_details}</span>
                <span>Travel Date: {r.travel_date}</span>
                <span>Travelers: {r.travelers}</span>
                <span>Email: {r.email}</span>
              </div>
              {r.notes && <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.3rem', fontStyle: 'italic' }}>Notes: {r.notes}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`);

// Admin Contacts
w(b+'/admin/contacts/page.tsx',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export default async function AdminContacts() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM contact_messages ORDER BY created_at DESC').all();
  return (
    <div>
      <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d', marginBottom: '2rem' }}>Contact Messages</h1>
      {(results as any[]).length === 0 ? <p style={{color:'#666'}}>No messages yet.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(results as any[]).map((r: any) => (
            <div key={r.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#00112d' }}>{r.name}</strong>
                <span style={{ color: '#999', fontSize: '0.85rem' }}>{r.created_at}</span>
              </div>
              <div style={{ color: '#444', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{r.email} | {r.subject}</div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>{r.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`);

// Admin Subscribers
w(b+'/admin/subscribers/page.tsx',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export default async function AdminSubscribers() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC').all();
  return (
    <div>
      <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d', marginBottom: '2rem' }}>Newsletter Subscribers</h1>
      {(results as any[]).length === 0 ? <p style={{color:'#666'}}>No subscribers yet.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {(results as any[]).map((r: any) => (
            <div key={r.id} style={{ background: '#fff', padding: '1rem 1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#00112d' }}>{r.email}</span>
              <span style={{ color: '#999', fontSize: '0.85rem' }}>{r.subscribed_at}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`);

console.log('Admin inquiry pages created!');

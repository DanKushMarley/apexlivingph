const fs = require('fs');
const path = require('path');
function w(f,c){fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,c,'utf8');console.log('OK '+f);}
const b='D:/Projects/apexliving/src/app';

// Admin Properties
w(b+'/admin/properties/page.tsx',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export default async function AdminProperties() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM properties ORDER BY created_at DESC').all();
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d' }}>Properties</h1>
        <a href="/admin/properties/new" style={{ background: '#d4a437', color: '#00112d', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>Add Property</a>
      </div>
      {(results as any[]).length === 0 ? <p style={{color:'#666'}}>No properties yet. Click Add Property to create one.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(results as any[]).map((r: any) => (
            <div key={r.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ color: '#00112d', fontSize: '1.1rem' }}>{r.title}</strong>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>{r.type} | {r.location}</div>
                <div style={{ color: '#d4a437', fontWeight: 700 }}>{r.price ? '\\u20B1' + r.price : 'Price on request'}</div>
                <span style={{ background: r.status === 'Available' ? '#d4edda' : '#f8d7da', color: r.status === 'Available' ? '#155724' : '#721c24', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem' }}>{r.status}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={'/admin/properties/' + r.id + '/edit'} style={{ background: '#00112d', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.85rem' }}>Edit</a>
                <button onClick="fetch('/api/admin/properties/'+this.dataset.id,{method:'DELETE'}).then(()=>location.reload())" data-id={r.id} style={{ background: '#dc3545', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.85rem', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`);

// Admin Properties New
w(b+'/admin/properties/new/page.tsx',`export default function NewPropertyPage() {
  return (
    <div>
      <h1 style={{ fontFamily: 'Cinzel, serif', color: '#00112d', marginBottom: '2rem' }}>Add New Property</h1>
      <form action="/api/admin/properties" method="POST" style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label style={{ fontWeight: 600, color: '#00112d' }}>Property Title *</label>
        <input name="title" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <label style={{ fontWeight: 600, color: '#00112d' }}>Type *</label>
        <select name="type" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}>
          <option>Condo</option><option>House</option><option>Lot</option><option>Townhouse</option><option>Commercial</option>
        </select>
        <label style={{ fontWeight: 600, color: '#00112d' }}>Location *</label>
        <input name="location" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <label style={{ fontWeight: 600, color: '#00112d' }}>Price</label>
        <input name="price" type="number" placeholder="e.g. 5200000" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <label style={{ fontWeight: 600, color: '#00112d' }}>Description</label>
        <textarea name="description" rows={4} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <label style={{ fontWeight: 600, color: '#00112d' }}>Image URLs (comma separated)</label>
        <input name="images" placeholder="https://example.com/image1.jpg,https://example.com/image2.jpg" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <label style={{ fontWeight: 600, color: '#00112d' }}>Agent Contact</label>
        <input name="agent_contact" placeholder="Phone or email" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <label style={{ fontWeight: 600, color: '#00112d' }}>Status</label>
        <select name="status" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}>
          <option>Available</option><option>Sold</option><option>Rented</option>
        </select>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <button type="submit" style={{ background: '#d4a437', color: '#00112d', padding: '0.8rem 2rem', borderRadius: '8px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>Save Property</button>
          <a href="/admin/properties" style={{ background: '#ccc', color: '#333', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Cancel</a>
        </div>
      </form>
    </div>
  );
}`);

// API: Admin Properties
w(b+'/api/admin/properties/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function GET() {
  const db = getRequestContext().env.DB;
  const { results } = await db.prepare('SELECT * FROM properties ORDER BY created_at DESC').all();
  return Response.json(results);
}
export async function POST(req: Request) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('INSERT INTO properties (title,type,location,price,description,images,agent_contact,status) VALUES (?,?,?,?,?,?,?,?)').bind(fd.get('title'),fd.get('type'),fd.get('location'),fd.get('price'),fd.get('description'),fd.get('images'),fd.get('agent_contact'),fd.get('status')||'Available').run();
  return Response.redirect(new URL('/admin/properties?saved=1',req.url));
}`);

// API: Admin Properties [id]
w(b+'/api/admin/properties/[id]/route.ts',`import { getRequestContext } from '@cloudflare/next-on-pages';
export const runtime = 'edge';
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const fd = await req.formData();
  const db = getRequestContext().env.DB;
  await db.prepare('UPDATE properties SET title=?,type=?,location=?,price=?,description=?,images=?,agent_contact=?,status=? WHERE id=?').bind(fd.get('title'),fd.get('type'),fd.get('location'),fd.get('price'),fd.get('description'),fd.get('images'),fd.get('agent_contact'),fd.get('status'),params.id).run();
  return Response.redirect(new URL('/admin/properties?saved=1',req.url));
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const db = getRequestContext().env.DB;
  await db.prepare('DELETE FROM properties WHERE id=?').bind(params.id).run();
  return Response.json({ ok: true });
}`);

console.log('Admin properties CRUD created!');

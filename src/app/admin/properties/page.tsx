export const runtime = 'edge';
export default async function AdminProperties() {
  const db = process.process.env.DB;
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
                <div style={{ color: '#d4a437', fontWeight: 700 }}>{r.price ? '\u20B1' + r.price : 'Price on request'}</div>
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
}
import { env } from "cloudflare:workers";
export const runtime = 'edge';
export default async function AdminContacts() {
  const db = env.DB;
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
}
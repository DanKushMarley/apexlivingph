import { env } from "cloudflare:workers";
export const runtime = 'edge';
export default async function AdminSubscribers() {
  const db = env.DB;
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
}
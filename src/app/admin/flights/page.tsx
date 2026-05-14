export const runtime = 'edge';
export default async function AdminFlights() {
  const db = process.process.env.DB;
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
}
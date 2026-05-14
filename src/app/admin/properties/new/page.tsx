export default function NewPropertyPage() {
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
}
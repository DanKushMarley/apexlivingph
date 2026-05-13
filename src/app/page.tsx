export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: 'white', padding: '5rem 2rem', textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✈️ Apex Living PH</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Your gateway to premium travel experiences, airline ticketing, hotel reservations, tours, and property opportunities.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/flights" style={{
            background: '#e94560', color: 'white', padding: '0.8rem 2rem',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem'
          }}>✈️ Book a Flight</a>
          <a href="/tours" style={{
            background: '#0f3460', color: 'white', padding: '0.8rem 2rem',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem',
            border: '2px solid #e94560'
          }}>🏝 Explore Tours</a>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <a href="/flights" style={{
            padding: '2rem', borderRadius: '12px', background: '#f8f9fa',
            textDecoration: 'none', color: 'inherit', textAlign: 'center',
            border: '2px solid #e0e0e0', transition: 'transform 0.2s'
          }}>
            <div style={{ fontSize: '3rem' }}>✈️</div>
            <h3 style={{ color: '#1a1a2e' }}>Flight Booking</h3>
            <p style={{ color: '#666' }}>International & domestic airline ticketing with the best rates</p>
          </a>
          <a href="/tours" style={{
            padding: '2rem', borderRadius: '12px', background: '#f8f9fa',
            textDecoration: 'none', color: 'inherit', textAlign: 'center',
            border: '2px solid #e0e0e0'
          }}>
            <div style={{ fontSize:

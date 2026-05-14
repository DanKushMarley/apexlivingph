const services = [
  { emoji: "\u{1F3E2}", title: "Real Estate", desc: "Premium property investments" },
  { emoji: "\u{2708}\u{FE0F}", title: "Flight Booking", desc: "International & domestic ticketing" },
  { emoji: "\u{1F3E8}", title: "Hotel Reservations", desc: "Worldwide hotel and resort bookings" },
  { emoji: "\u{1F334}", title: "Tours & Experiences", desc: "Curated travel packages" },
];

const pkgs = [
  { name: "Palawan Paradise", price: "\u20B112,999", dur: "4D/3N", emoji: "\u{1F3DD}", desc: "El Nido island hopping, underground river" },
  { name: "Boracay Bliss", price: "\u20B19,999", dur: "3D/2N", emoji: "\u{1F3D6}", desc: "White beach, water sports, sunset sailing" },
  { name: "Dubai Explorer", price: "\u20B135,999", dur: "5D/4N", emoji: "\u{1F3D9}", desc: "Burj Khalifa, desert safari, city tours" },
  { name: "Tokyo Discovery", price: "\u20B132,999", dur: "5D/4N", emoji: "\u{1F5FE}", desc: "Mt. Fuji, Shibuya, temples, food tours" },
];

const props = [
  { title: "Beachfront Condo in Boracay", type: "Condo", loc: "Boracay", price: "\u20B15.2M", emoji: "\u{1F3D6}" },
  { title: "Modern Unit in BGC", type: "Condo", loc: "Taguig", price: "\u20B18.5M", emoji: "\u{1F3D9}" },
  { title: "Vacation House in Tagaytay", type: "House", loc: "Tagaytay", price: "\u20B112M", emoji: "\u{1F3E1}" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h3>YOUR GLOBAL PARTNER IN</h3>
          <h1>{"LIVING"}{"& TRAVEL"}</h1>
          <p>Homes. Travel. Experiences. Worldwide.</p>
          <div className="services-icons">
            {services.map((s) => (
              <div key={s.title} className="service-box">
                <span>{s.emoji}</span>
                <h4>{s.title}</h4>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/flights" className="btn-primary">Book a Flight</a>
            <a href="/tours" className="btn-outline">Explore Tours</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Travel Packages</h2>
        <p className="section-subtitle">Curated experiences at the best prices</p>
        <div className="card-grid">
          {pkgs.map((p) => (
            <div key={p.name} className="card">
              <div className="emoji">{p.emoji}</div>
              <h3>{p.name}</h3>
              <p className="meta">{p.desc}</p>
              <p className="price">{p.price}</p>
              <p className="meta">{p.dur}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/tours" className="btn-primary">View All Packages</a>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <h2 className="section-title">Property Opportunities</h2>
        <p className="section-subtitle">Invest in your future with premium real estate</p>
        <div className="card-grid">
          {props.map((p) => (
            <div key={p.title} className="card">
              <div className="emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p className="meta">{p.type} &bull; {p.loc}</p>
              <p className="price">{p.price}</p>
              <span className="badge-available">Available</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/properties" className="btn-primary">View All Properties</a>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Travel?</h2>
        <p>Get the best deals on flights, hotels, and tours</p>
        <a href="/contact" className="btn-primary">Contact Us Now</a>
      </section>
    </main>
  );
}

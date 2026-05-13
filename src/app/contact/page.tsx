export default function ContactPage() {
  return (
    <main>
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>We&apos;d love to hear from you</p>
      </section>
      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="emoji">📧</div>
            <h3>Email</h3>
            <p className="meta">info@apexlivingph.com</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="emoji">📱</div>
            <h3>Mobile</h3>
            <p className="meta">+63 9XX XXX XXXX</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="emoji">💬</div>
            <h3>Messenger</h3>
            <p className="meta">m.me/apexlivingph</p>
          </div>
        </div>
        <h2 className="section-title">Send Us a Message</h2>
        <div className="form-container">
          <form action="/api/contact" method="POST">
            <label>Your Name *</label>
            <input name="name" required placeholder="Your full name" />
            <label>Email Address *</label>
            <input name="email" type="email" required placeholder="you@email.com" />
            <label>Subject</label>
            <input name="subject" placeholder="How can we help?" />
            <label>Message *</label>
            <textarea name="message" required rows={5} placeholder="Tell us about your inquiry..." />
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

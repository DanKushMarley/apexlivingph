import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Living PH - Travel, Flights, Hotels, Tours & Properties",
  description: "Your gateway to premium travel experiences, airline ticketing, hotel reservations, tours, and property opportunities in the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1rem 2rem', background: '#1a1a2e', color: 'white',
          position: 'sticky', top: 0, zIndex: 1000
        }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
            ✈️ Apex Living PH
          </a>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/flights" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Flights</a>
            <a href="/tours" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Tours</a>
            <a href="/hotels" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Hotels</a>
            <a href="/properties" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Properties</a>
            <a href="/about" style={{ color: '#e0e0e0', textDecoration: 'none' }}>About</a>
            <a href="/contact" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>
        {children}
        <footer style={{
          background: '#1a1a2e', color: '#aaa', padding: '2rem',
          textAlign: 'center', marginTop: '3rem'
        }}>
          <p>© 2026 Apex Living PH. All rights reserved.</p>
          <p>Travel | Flights | Hotels | Tours | Properties</p>
        </footer>
      </body>
    </html>
  );
}

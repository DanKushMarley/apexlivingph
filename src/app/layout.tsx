import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Living PH — Travel, Flights, Hotels, Tours & Properties",
  description: "Your global partner in living and travel. Premium airline ticketing, hotel reservations, tours, and property opportunities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <a href="/" className="logo">Apex Living PH</a>
          <nav>
            <a href="/flights">Flights</a>
            <a href="/tours">Tours</a>
            <a href="/hotels">Hotels</a>
            <a href="/properties">Properties</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="brand">Apex Living PH</div>
          <p>Homes. Travel. Experiences. Worldwide.</p>
          <p>&copy; 2026 Apex Living PH. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

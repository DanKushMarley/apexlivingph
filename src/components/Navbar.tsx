"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Real Estate", href: "/properties" },
  { label: "Flights", href: "/flights" },
  { label: "Hotels", href: "/hotels" },
  { label: "Tours & Experiences", href: "/tours" },
  { label: "Visa Assistance", href: "/visa" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        .apex-nav { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(247,244,238,0.97); backdrop-filter:blur(8px); border-bottom:1px solid rgba(184,148,74,0.18); padding:0 4rem; display:flex; align-items:center; justify-content:space-between; height:68px; }
        .apex-logo { display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; }
        .apex-logo-icon { width:40px; height:40px; background:#2C4A3E; clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%); display:flex; align-items:center; justify-content:center; font-family:'Cormorant Garamond',serif; font-size:16px; font-weight:700; color:#D4AE6B; letter-spacing:1px; flex-shrink:0; }
        .apex-logo-text { display:flex; flex-direction:column; line-height:1.1; }
        .apex-logo-text span:first-child { font-family:'Cormorant Garamond',serif; font-size:18px; font-weight:700; color:#2C4A3E; letter-spacing:3px; text-transform:uppercase; }
        .apex-logo-text span:last-child { font-size:9px; font-weight:400; color:#B8944A; letter-spacing:4px; text-transform:uppercase; }
        .apex-nav-links { display:flex; gap:0; list-style:none; margin:0; padding:0; }
        .apex-nav-links a { display:block; padding:0 14px; font-size:12px; font-weight:500; letter-spacing:1.5px; text-transform:uppercase; color:#4A4A3A; text-decoration:none; transition:color 0.2s; font-family:'DM Sans',sans-serif; }
        .apex-nav-links a:hover { color:#B8944A; }
        .apex-nav-links a.active { color:#B8944A; border-bottom:2px solid #B8944A; padding-bottom:2px; }
        .btn-inquire { background:#2C4A3E; color:#fff; border:none; cursor:pointer; padding:9px 22px; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; transition:background 0.2s; }
        .btn-inquire:hover { background:#3D6B5A; }
        @media(max-width:1100px){ .apex-nav{ padding:0 1.5rem; } .apex-nav-links a{ padding:0 8px; font-size:11px; } }
      `}</style>
      <nav className="apex-nav">
        <Link href="/" className="apex-logo">
          <div className="apex-logo-icon">AL</div>
          <div className="apex-logo-text">
            <span>Apex Living</span>
            <span>International</span>
          </div>
        </Link>
        <ul className="apex-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 12, color: "#4A4A3A", letterSpacing: 0.5, fontFamily: "'DM Sans',sans-serif" }}>
            📞 +63 912 345 6789
          </span>
          <button className="btn-inquire">Inquire Now</button>
        </div>
      </nav>
      <div style={{ height: 68 }} />
    </>
  );
}

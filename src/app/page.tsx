"use client";

import { useState } from "react";
import Link from "next/link";

// ── DATA ──
const destinations = [
  { city: "Dubai", country: "United Arab Emirates", from: "$499", stars: 5, bg: "dest-dubai" },
  { city: "Bali", country: "Indonesia", from: "$299", stars: 5, bg: "dest-bali" },
  { city: "Santorini", country: "Greece", from: "$699", stars: 5, bg: "dest-santorini" },
  { city: "Maldives", country: "Maldives", from: "$799", stars: 4, bg: "dest-maldives" },
  { city: "Kyoto", country: "Japan", from: "$549", stars: 5, bg: "dest-bali" },
  { city: "Amalfi", country: "Italy", from: "$629", stars: 5, bg: "dest-santorini" },
  { city: "Phuket", country: "Thailand", from: "$349", stars: 4, bg: "dest-maldives" },
  { city: "Cape Town", country: "South Africa", from: "$449", stars: 5, bg: "dest-dubai" },
];

const flightResults = [
  { airline: "Emirates · EK 337", depart: "23:05", arrive: "05:30+1", price: "From $499", stops: "Direct" },
  { airline: "Philippine Airlines · PR 659", depart: "10:25", arrive: "17:45", price: "From $389", stops: "1 Stop · Abu Dhabi" },
  { airline: "Qatar Airways · QR 924", depart: "00:55", arrive: "07:20+1", price: "From $429", stops: "1 Stop · Doha" },
];

const features = [
  {
    title: "Flight Booking", desc: "Domestic & international flights at the best value.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:36,height:36}}><path d="M21 16l-9-9-9 9"/><path d="M12 7v14"/></svg>
  },
  {
    title: "Hotel Reservations", desc: "Comfortable stays anywhere in the world.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:36,height:36}}><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
  },
  {
    title: "Tours & Experiences", desc: "Curated tours and activities for unforgettable moments.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:36,height:36}}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    title: "Real Estate", desc: "Find, buy and invest in properties worldwide.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:36,height:36}}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    title: "Premium Service", desc: "Personalized. Reliable. Trusted every step of the way.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width:36,height:36}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16h.2z"/></svg>
  },
];

const bgMap: Record<string, string> = {
  "dest-dubai": "linear-gradient(160deg,#c4a882 0%,#d4b896 50%,#e8c9a8 100%)",
  "dest-bali": "linear-gradient(160deg,#5a9e8c 0%,#3d8c78 50%,#2c7a66 100%)",
  "dest-santorini": "linear-gradient(160deg,#6890c4 0%,#7aa0d4 50%,#a4c0e4 100%)",
  "dest-maldives": "linear-gradient(160deg,#4ab4c8 0%,#5ec4d8 50%,#7ed4e8 100%)",
};

type SearchTab = "flights" | "hotels" | "tours" | "realestate";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<SearchTab>("flights");
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [results, setResults] = useState<{ heading: string; items: { emoji: string; name: string; detail: string; price: string }[] } | null>(null);
  const [toast, setToast] = useState("");
  const [showFrom, setShowFrom] = useState("");
  const [showTo, setShowTo] = useState("");
  const [showDate, setShowDate] = useState("");
  const [travelers, setTravelers] = useState("1 Traveler");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const doSearch = () => {
    const from = showFrom || "Manila";
    const to = showTo || "Dubai";
    if (activeTab === "flights") {
      setResults({
        heading: `Flights: ${from} → ${to}`,
        items: flightResults.map(r => ({ emoji: "✈", name: r.airline, detail: `${r.depart} → ${r.arrive} · ${r.stops}`, price: r.price }))
      });
    } else if (activeTab === "hotels") {
      setResults({
        heading: `Hotels in ${from}`,
        items: [
          { emoji: "🏨", name: "The Ritz-Carlton", detail: "5-star · Beachfront · Breakfast incl.", price: "From $340/night" },
          { emoji: "🏨", name: "Four Seasons Resort", detail: "5-star · Private Pool Villas", price: "From $580/night" },
          { emoji: "🏨", name: "Alila Villas", detail: "5-star · Cliff-top · Infinity Pool", price: "From $420/night" },
        ]
      });
    } else {
      setResults({
        heading: `Tours & Packages: ${from}`,
        items: [
          { emoji: "🌴", name: `${from} Island Hopping`, detail: "7 Days · All Inclusive · Private Yacht", price: "From $1,299/person" },
          { emoji: "🌴", name: `${from} Cultural Immersion`, detail: "5 Days · Small Group · Expert Guide", price: "From $799/person" },
          { emoji: "🌴", name: `${from} Luxury Escape`, detail: "10 Days · Private Tour · 5-star Hotels", price: "From $3,499/person" },
        ]
      });
    }
  };

  const carousel = (dir: number) => {
    setCarouselOffset((prev) => (prev + dir * 4 + destinations.length) % destinations.length);
  };

  const visibleDests = destinations.slice(carouselOffset, carouselOffset + 4).length === 4
    ? destinations.slice(carouselOffset, carouselOffset + 4)
    : [...destinations.slice(carouselOffset), ...destinations.slice(0, 4 - (destinations.length - carouselOffset))];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        :root {
          --gold: #B8944A; --gold-light: #D4AE6B; --gold-pale: #F5EDD6;
          --forest: #2C4A3E; --forest-light: #3D6B5A;
          --cream: #F7F4EE; --cream-dark: #EDE8DF;
          --text-dark: #1A1A14; --text-mid: #4A4A3A; --text-muted: #888876;
          --card-shadow: 0 2px 20px rgba(44,74,62,0.10);
        }
        .apex-body { font-family:'DM Sans',sans-serif; background:var(--cream); color:var(--text-dark); }
        .cormorant { font-family:'Cormorant Garamond',serif; }
        .search-tab-btn { flex:1; padding:14px 10px; background:none; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:var(--text-muted); display:flex; align-items:center; justify-content:center; gap:6px; border-bottom:2px solid transparent; margin-bottom:-1px; transition:all 0.2s; }
        .search-tab-btn.active { color:var(--forest); border-bottom-color:var(--gold); }
        .search-tab-btn:hover { color:var(--gold); }
        .search-tab-btn svg { width:14px; height:14px; }
        .form-field { display:flex; flex-direction:column; gap:4px; }
        .form-field label { font-size:9px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--gold); }
        .form-field input, .form-field select { border:none; border-bottom:1px solid var(--cream-dark); padding:8px 0; background:none; font-family:'DM Sans',sans-serif; font-size:13px; color:var(--text-dark); outline:none; transition:border-color 0.2s; }
        .form-field input:focus, .form-field select:focus { border-bottom-color:var(--gold); }
        .form-field input::placeholder { color:var(--text-muted); }
        .btn-search { background:var(--forest); color:#fff; border:none; cursor:pointer; padding:12px 24px; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; transition:background 0.2s; white-space:nowrap; }
        .btn-search:hover { background:var(--gold); }
        .dest-card { position:relative; overflow:hidden; cursor:pointer; border-radius:2px; aspect-ratio:3/4; }
        .dest-card:hover .dest-inner { transform:scale(1.07); }
        .dest-inner { width:100%; height:100%; transition:transform 0.6s ease; display:flex; align-items:center; justify-content:center; font-family:'Cormorant Garamond',serif; font-size:18px; letter-spacing:2px; color:rgba(255,255,255,0.8); }
        .dest-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(26,26,20,0.85) 0%,transparent 55%); }
        .dest-info { position:absolute; bottom:0; left:0; right:0; padding:20px; }
        .dest-from { display:inline-block; background:var(--gold); color:#fff; font-size:11px; font-weight:600; letter-spacing:1px; padding:3px 10px; margin-bottom:8px; }
        .dest-city { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:600; color:#fff; letter-spacing:1px; display:block; line-height:1.2; }
        .dest-country { font-size:11px; font-weight:500; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.65); display:block; margin-bottom:8px; }
        .dest-stars { color:var(--gold-light); font-size:12px; letter-spacing:2px; }
        .carousel-btn { position:absolute; top:50%; transform:translateY(-50%); width:44px; height:44px; background:#fff; border:1px solid var(--cream-dark); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:18px; color:var(--forest); transition:background 0.2s; z-index:5; }
        .carousel-btn:hover { background:var(--forest); color:#fff; }
        .carousel-prev { left:-22px; }
        .carousel-next { right:-22px; }
        .footer-badge-icon { width:40px; height:40px; border:1px solid rgba(184,148,74,0.5); display:flex; align-items:center; justify-content:center; color:var(--gold-light); }
        .footer-badge-icon svg { width:22px; height:22px; }
        .result-item { display:flex; gap:16px; padding:16px 0; border-bottom:1px solid var(--cream-dark); cursor:pointer; }
        .result-item:hover { background:var(--cream); }
        .result-thumb { width:80px; height:60px; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:24px; background:var(--cream-dark); }
        .result-name { font-family:'Cormorant Garamond',serif; font-size:18px; color:var(--forest); font-weight:600; }
        .result-detail { font-size:12px; color:var(--text-muted); margin-top:4px; }
        .result-price { font-size:13px; font-weight:600; color:var(--gold); white-space:nowrap; }
        @keyframes flyby { 0%{transform:translate(80px,-20px) rotate(-5deg);} 100%{transform:translate(-600px,60px) rotate(-5deg);} }
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .scene-plane { animation:flyby 20s linear infinite; }
        .scene-luggage { animation:float 3s ease-in-out infinite; }
        .toast-bar { position:fixed; bottom:32px; right:32px; background:var(--forest); color:#fff; padding:14px 24px; font-size:13px; border-left:3px solid var(--gold); transition:all 0.3s; z-index:300; }
      `}</style>

      <div className="apex-body">

        {/* ── HERO ── */}
        <section style={{display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"calc(100vh - 68px)", overflow:"hidden"}}>
          {/* Left */}
          <div style={{background:"var(--cream)", padding:"80px 4rem 60px", display:"flex", flexDirection:"column", justifyContent:"center", position:"relative", zIndex:2}}>
            <div style={{fontSize:11, fontWeight:500, letterSpacing:4, textTransform:"uppercase", color:"var(--gold)", marginBottom:20}}>Your Global Partner In</div>
            <h1 className="cormorant" style={{fontSize:"clamp(52px,5vw,80px)", fontWeight:300, lineHeight:1.0, color:"var(--forest)", marginBottom:8}}>
              LIVING &amp;
              <span className="cormorant" style={{color:"var(--gold)", fontStyle:"italic", display:"block"}}>Travel</span>
            </h1>
            <div style={{width:60, height:1, background:"var(--gold)", margin:"24px 0", position:"relative"}}>
              <span style={{position:"absolute", top:-8, left:"50%", transform:"translateX(-50%)", fontSize:10, color:"var(--gold)", background:"var(--cream)", padding:"0 4px"}}>✦</span>
            </div>
            <p style={{fontSize:14, color:"var(--text-muted)", lineHeight:1.8, maxWidth:320, marginBottom:40}}>
              Connecting people to places that inspire and opportunities that last.
            </p>

            {/* Search Widget */}
            <div style={{background:"#fff", border:"1px solid rgba(184,148,74,0.2)", boxShadow:"var(--card-shadow)"}}>
              {/* Tabs */}
              <div style={{display:"flex", borderBottom:"1px solid var(--cream-dark)"}}>
                {([
                  { key:"flights", label:"Flights", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16l-9-9-9 9"/><path d="M12 7v14"/></svg> },
                  { key:"hotels", label:"Hotels", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
                  { key:"tours", label:"Tours", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg> },
                  { key:"realestate", label:"Real Estate", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                ] as const).map(t => (
                  <button key={t.key} className={`search-tab-btn${activeTab===t.key?" active":""}`} onClick={() => setActiveTab(t.key)}>
                    {t.icon}{t.label}
                  </button>
                ))}
              </div>

              {/* Form */}
              <div style={{padding:20, display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr auto", gap:10, alignItems:"end"}}>
                {activeTab === "flights" && <>
                  <div className="form-field"><label>From</label><input placeholder="City or Airport" value={showFrom} onChange={e=>setShowFrom(e.target.value)}/></div>
                  <div className="form-field"><label>To</label><input placeholder="City or Airport" value={showTo} onChange={e=>setShowTo(e.target.value)}/></div>
                  <div className="form-field"><label>Depart</label><input type="date" value={showDate} onChange={e=>setShowDate(e.target.value)}/></div>
                  <div className="form-field"><label>Travelers</label><select value={travelers} onChange={e=>setTravelers(e.target.value)}><option>1 Traveler</option><option>2 Travelers</option><option>3–5 Travelers</option><option>Group (6+)</option></select></div>
                </>}
                {activeTab === "hotels" && <>
                  <div className="form-field"><label>Destination</label><input placeholder="City, Hotel or Area" value={showFrom} onChange={e=>setShowFrom(e.target.value)}/></div>
                  <div className="form-field"><label>Check-in</label><input type="date"/></div>
                  <div className="form-field"><label>Check-out</label><input type="date"/></div>
                  <div className="form-field"><label>Guests</label><select><option>1 Guest</option><option>2 Guests</option><option>3–5 Guests</option></select></div>
                </>}
                {activeTab === "tours" && <>
                  <div className="form-field"><label>Destination</label><input placeholder="Country or City" value={showFrom} onChange={e=>setShowFrom(e.target.value)}/></div>
                  <div className="form-field"><label>Tour Type</label><select><option>All Tours</option><option>Adventure</option><option>Cultural</option><option>Luxury</option></select></div>
                  <div className="form-field"><label>Date</label><input type="date"/></div>
                  <div className="form-field"><label>Group Size</label><select><option>1–2 People</option><option>3–5 People</option><option>6+ People</option></select></div>
                </>}
                {activeTab === "realestate" && <>
                  <div className="form-field"><label>Location</label><input placeholder="Country, City or Area" value={showFrom} onChange={e=>setShowFrom(e.target.value)}/></div>
                  <div className="form-field"><label>Property Type</label><select><option>All Types</option><option>Villa</option><option>Condo</option><option>House</option><option>Land</option></select></div>
                  <div className="form-field"><label>Budget</label><select><option>Any Budget</option><option>Under $100K</option><option>$100K–500K</option><option>$500K–1M</option><option>$1M+</option></select></div>
                  <div className="form-field"><label>Bedrooms</label><select><option>Any</option><option>1–2 Beds</option><option>3–4 Beds</option><option>5+ Beds</option></select></div>
                </>}
                <button className="btn-search" onClick={doSearch}>Search Now</button>
              </div>
            </div>
          </div>

          {/* Right — illustrated scene */}
          <div style={{position:"relative", overflow:"hidden"}}>
            <div style={{width:"100%", height:"100%", position:"relative"}}>
              {/* Sky bg */}
              <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at 60% 40%,rgba(93,202,165,0.3) 0%,transparent 60%),radial-gradient(ellipse at 80% 80%,rgba(29,158,117,0.2) 0%,transparent 50%),linear-gradient(160deg,#b8d4c4 0%,#8ec4b0 40%,#5a9e88 100%)"}} />
              {/* Overlay gradient left edge */}
              <div style={{position:"absolute", inset:0, background:"linear-gradient(to right,rgba(247,244,238,0.3) 0%,transparent 40%)"}} />
              {/* Mountains */}
              <svg style={{position:"absolute", top:"5%", right:0, width:"55%", opacity:0.5}} viewBox="0 0 300 200" fill="none">
                <path d="M0 200 Q30 120 80 80 Q120 50 150 100 Q170 60 200 40 Q240 10 280 60 Q300 80 300 200 Z" fill="#3a6858" opacity="0.4"/>
                <path d="M100 200 Q130 130 160 100 Q190 70 220 110 Q240 80 270 90 Q290 95 300 150 L300 200 Z" fill="#4a7868" opacity="0.5"/>
              </svg>
              {/* Plane */}
              <svg className="scene-plane" style={{position:"absolute", top:"12%", right:"8%"}} width="160" height="80" viewBox="0 0 160 80" fill="none">
                <g opacity="0.9">
                  <ellipse cx="80" cy="42" rx="65" ry="16" fill="#f0f4f8" stroke="#d0d8e4" strokeWidth="0.5"/>
                  <rect x="42" y="22" width="70" height="28" rx="14" fill="#e8eef4"/>
                  <path d="M112 36 L142 32 L142 40 L112 42 Z" fill="#dce5ed"/>
                  <rect x="42" y="22" width="18" height="28" rx="9" fill="#e0e8f0"/>
                  <path d="M68 22 L88 8 L96 12 L80 28 Z" fill="#d8e2ec"/>
                  <path d="M68 50 L88 62 L96 58 L80 44 Z" fill="#d0dae6"/>
                  <rect x="50" y="27" width="8" height="6" rx="2" fill="#b8cde0" opacity="0.8"/>
                  <rect x="62" y="27" width="8" height="6" rx="2" fill="#b8cde0" opacity="0.8"/>
                  <rect x="74" y="27" width="8" height="6" rx="2" fill="#b8cde0" opacity="0.8"/>
                  <circle cx="43" cy="36" r="8" fill="#b8cde0" opacity="0.6"/>
                </g>
              </svg>
              {/* Villa */}
              <svg style={{position:"absolute", bottom:"8%", left:"5%", width:"90%"}} viewBox="0 0 560 260" fill="none">
                <ellipse cx="280" cy="210" rx="200" ry="30" fill="rgba(74,180,200,0.25)" stroke="rgba(74,180,200,0.4)" strokeWidth="0.5"/>
                <rect x="130" y="190" width="300" height="40" rx="4" fill="rgba(74,180,200,0.35)" stroke="rgba(74,180,200,0.5)" strokeWidth="0.5"/>
                <rect x="100" y="225" width="360" height="20" rx="2" fill="#d4c4a4" opacity="0.7"/>
                <rect x="170" y="120" width="220" height="120" rx="3" fill="#e8e0d0" stroke="#c8b898" strokeWidth="0.5"/>
                <rect x="170" y="100" width="220" height="30" rx="2" fill="#c8b898" opacity="0.8"/>
                <path d="M165 100 L280 75 L395 100 Z" fill="#a89878"/>
                <rect x="185" y="135" width="40" height="50" rx="2" fill="#a8c4d0" opacity="0.8"/>
                <rect x="240" y="135" width="40" height="50" rx="2" fill="#a8c4d0" opacity="0.8"/>
                <rect x="295" y="135" width="40" height="50" rx="2" fill="#a8c4d0" opacity="0.8"/>
                <rect x="350" y="135" width="30" height="50" rx="2" fill="#a8c4d0" opacity="0.8"/>
                <rect x="255" y="185" width="50" height="55" rx="2" fill="#c0a870"/>
                <rect x="150" y="200" width="50" height="18" rx="3" fill="#e8d8b0" opacity="0.9"/>
                <rect x="360" y="200" width="50" height="18" rx="3" fill="#e8d8b0" opacity="0.9"/>
                <rect x="90" y="145" width="80" height="80" rx="2" fill="#ddd4c0" stroke="#c0b090" strokeWidth="0.5"/>
                <rect x="90" y="132" width="80" height="20" rx="1" fill="#c0b090"/>
                <rect x="440" y="145" width="80" height="80" rx="2" fill="#ddd4c0" stroke="#c0b090" strokeWidth="0.5"/>
                <rect x="440" y="132" width="80" height="20" rx="1" fill="#c0b090"/>
              </svg>
              {/* Water */}
              <svg style={{position:"absolute", bottom:0, left:0, right:0, width:"100%", height:"25%"}} viewBox="0 0 560 120" preserveAspectRatio="none" fill="none">
                <rect width="560" height="120" fill="rgba(74,180,200,0.15)"/>
                <path d="M0 40 Q70 30 140 40 Q210 50 280 40 Q350 30 420 40 Q490 50 560 40 L560 120 L0 120 Z" fill="rgba(74,180,200,0.2)"/>
                <path d="M0 60 Q80 48 160 60 Q240 72 320 60 Q400 48 480 60 Q520 66 560 60 L560 120 L0 120 Z" fill="rgba(74,180,200,0.15)"/>
              </svg>
              {/* Palm left */}
              <svg style={{position:"absolute", left:"2%", bottom:0, width:100}} viewBox="0 0 100 200" fill="none">
                <path d="M50 200 Q48 150 45 120 Q42 90 38 70" stroke="#2d5a3a" strokeWidth="6" strokeLinecap="round" fill="none"/>
                <ellipse cx="38" cy="70" rx="30" ry="10" fill="#3a7048" transform="rotate(-20 38 70)"/>
                <ellipse cx="38" cy="70" rx="28" ry="9" fill="#3a7048" transform="rotate(20 38 70)"/>
                <ellipse cx="38" cy="70" rx="25" ry="8" fill="#4a8858" transform="rotate(-60 38 70)"/>
                <ellipse cx="38" cy="70" rx="25" ry="8" fill="#4a8858" transform="rotate(60 38 70)"/>
              </svg>
              {/* Palm right */}
              <svg style={{position:"absolute", right:"3%", bottom:0, width:80}} viewBox="0 0 100 220" fill="none">
                <path d="M50 220 Q52 160 56 130 Q60 100 65 78" stroke="#2d5a3a" strokeWidth="5" strokeLinecap="round" fill="none"/>
                <ellipse cx="65" cy="78" rx="28" ry="9" fill="#3a7048" transform="rotate(25 65 78)"/>
                <ellipse cx="65" cy="78" rx="26" ry="8" fill="#3a7048" transform="rotate(-25 65 78)"/>
                <ellipse cx="65" cy="78" rx="22" ry="7" fill="#4a8858" transform="rotate(65 65 78)"/>
              </svg>
              {/* Luggage */}
              <svg className="scene-luggage" style={{position:"absolute", right:"6%", bottom:"10%", width:100}} viewBox="0 0 100 130" fill="none">
                <rect x="20" y="35" width="60" height="70" rx="6" fill="#7a9e98" stroke="#5a8078" strokeWidth="1"/>
                <rect x="35" y="25" width="30" height="15" rx="3" fill="#5a8078"/>
                <line x1="50" y1="35" x2="50" y2="105" stroke="#5a8078" strokeWidth="1.5"/>
                <line x1="20" y1="70" x2="80" y2="70" stroke="#5a8078" strokeWidth="1.5"/>
                <rect x="40" y="57" width="20" height="26" rx="2" fill="#d4b87a" stroke="#b8984a" strokeWidth="0.5"/>
                <rect x="42" y="59" width="16" height="22" rx="1" fill="#e8cc8e"/>
                <text x="50" y="73" textAnchor="middle" fontSize="7" fill="#8a6830" fontWeight="600">PASSPORT</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── FEATURES STRIP ── */}
        <section style={{background:"#fff", borderTop:"1px solid var(--cream-dark)", borderBottom:"1px solid var(--cream-dark)", padding:"36px 4rem", display:"grid", gridTemplateColumns:"repeat(5,1fr)"}}>
          {features.map((f, i) => (
            <div key={f.title} style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:10, padding:"0 12px", borderRight: i<4 ? "1px solid var(--cream-dark)" : "none"}}>
              <div style={{color:"var(--gold)", display:"flex", alignItems:"center", justifyContent:"center", width:44, height:44}}>{f.icon}</div>
              <div style={{fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"var(--forest)"}}>{f.title}</div>
              <div style={{fontSize:12, color:"var(--text-muted)", lineHeight:1.6}}>{f.desc}</div>
            </div>
          ))}
        </section>

        {/* ── DESTINATIONS ── */}
        <section style={{padding:"80px 4rem", background:"var(--cream)"}}>
          <div style={{textAlign:"center", marginBottom:48, display:"flex", flexDirection:"column", alignItems:"center", gap:12}}>
            <div style={{fontSize:10, fontWeight:600, letterSpacing:5, textTransform:"uppercase", color:"var(--gold)", display:"flex", alignItems:"center", gap:12}}>
              <span style={{display:"block", width:40, height:1, background:"var(--gold-light)"}} />
              Featured Destinations
              <span style={{display:"block", width:40, height:1, background:"var(--gold-light)"}} />
            </div>
            <h2 className="cormorant" style={{fontSize:42, fontWeight:300, color:"var(--forest)", letterSpacing:1}}>Where Will You Go Next?</h2>
          </div>

          <div style={{position:"relative"}}>
            <button className="carousel-btn carousel-prev" onClick={() => carousel(-1)}>←</button>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20}}>
              {visibleDests.map((d) => (
                <div key={d.city} className="dest-card" onClick={() => showToast(`Exploring ${d.city} packages...`)}>
                  <div className="dest-inner" style={{background: bgMap[d.bg] || bgMap["dest-dubai"]}}>{d.city}</div>
                  <div className="dest-overlay" />
                  <div className="dest-info">
                    <div className="dest-from">{d.from}</div>
                    <span className="dest-city">{d.city}</span>
                    <span className="dest-country">{d.country}</span>
                    <div className="dest-stars">{"★".repeat(d.stars)}{"☆".repeat(5-d.stars)}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn carousel-next" onClick={() => carousel(1)}>→</button>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <footer style={{background:"var(--forest)", padding:"28px 4rem", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:"flex", gap:60}}>
            {[
              { title:"Global Reach", sub:"Local Expertise", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
              { title:"Trusted & Reliable", sub:"Your satisfaction is our priority", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
              { title:"Client Focused", sub:"Solutions tailored for you", icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
            ].map(b => (
              <div key={b.title} style={{display:"flex", alignItems:"center", gap:14, color:"#fff"}}>
                <div className="footer-badge-icon">{b.icon}</div>
                <div>
                  <div style={{fontSize:12, fontWeight:600, letterSpacing:1.5, textTransform:"uppercase", color:"#fff"}}>{b.title}</div>
                  <div style={{fontSize:11, color:"rgba(255,255,255,0.5)", marginTop:2}}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="cormorant" style={{fontSize:28, fontStyle:"italic", color:"var(--gold-light)", letterSpacing:1}}>Live Beyond Borders.</div>
        </footer>

        {/* ── SEARCH RESULTS OVERLAY ── */}
        {results && (
          <div style={{position:"fixed", top:68, left:0, right:0, bottom:0, background:"rgba(26,26,20,0.6)", zIndex:99, backdropFilter:"blur(4px)"}} onClick={() => setResults(null)}>
            <div style={{background:"#fff", maxWidth:800, margin:"40px auto", padding:32, maxHeight:"calc(100vh - 160px)", overflowY:"auto"}} onClick={e => e.stopPropagation()}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24}}>
                <span className="cormorant" style={{fontSize:28, fontWeight:300, color:"var(--forest)"}}>{results.heading}</span>
                <button style={{background:"none", border:"none", cursor:"pointer", fontSize:22, color:"var(--text-muted)"}} onClick={() => setResults(null)}>✕</button>
              </div>
              {results.items.map((item, i) => (
                <div key={i} className="result-item">
                  <div className="result-thumb">{item.emoji}</div>
                  <div style={{flex:1}}>
                    <div className="result-name">{item.name}</div>
                    <div className="result-detail">{item.detail}</div>
                  </div>
                  <div className="result-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TOAST ── */}
        {toast && <div className="toast-bar">{toast}</div>}
      </div>
    </>
  );
}

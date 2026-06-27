const items = [
  { title: "Real Estate", desc: "Buy & invest worldwide" },
  { title: "Flight Booking", desc: "Best international deals" },
  { title: "Hotel Reservations", desc: "Luxury stays anywhere" },
  { title: "Tours & Experiences", desc: "Curated adventures" },
  { title: "Premium Service", desc: "Personalized support" },
];

export default function Features() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-6 px-10 py-16">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-sm p-5 text-center border hover:shadow-md transition"
        >
          <div className="text-[#c8a96a] text-2xl mb-2">✦</div>
          <h3 className="font-semibold text-[#1f3d2b]">{item.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
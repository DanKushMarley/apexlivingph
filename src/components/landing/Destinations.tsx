const data = [
  { name: "Dubai", price: "$499", img: "/dubai.jpg" },
  { name: "Bali", price: "$299", img: "/bali.jpg" },
  { name: "Santorini", price: "$699", img: "/santorini.jpg" },
  { name: "Maldives", price: "$799", img: "/maldives.jpg" },
];

export default function Destinations() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-2xl font-bold text-[#1f3d2b] mb-6">
        Featured Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.map((d, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img src={d.img} className="h-44 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{d.name}</h3>
              <p className="text-[#c8a96a] font-medium">{d.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
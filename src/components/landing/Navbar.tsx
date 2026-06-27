export default function Hero() {
  return (
    <section
      className="relative h-[85vh] flex items-center px-10"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative max-w-2xl">
        <p className="text-sm tracking-widest text-gray-600 uppercase">
          Your Global Partner in
        </p>

        <h1 className="text-5xl font-bold leading-tight text-[#1f3d2b] mt-3">
          LIVING & <span className="text-[#c8a96a]">TRAVEL</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-md">
          Connecting people to places that inspire and opportunities that last.
        </p>

        <button className="mt-6 px-6 py-3 bg-[#1f3d2b] text-white rounded-full hover:bg-black">
          Explore Now
        </button>
      </div>

      {/* decorative plane */}
      <img
        src="/plane.png"
        className="absolute right-10 top-20 w-[300px] opacity-90"
      />
    </section>
  );
}
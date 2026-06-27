export default function Search() {
  return (
    <div className="relative -mt-16 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-6 grid grid-cols-5 gap-4 w-[90%] max-w-5xl">
        <input className="border p-3 rounded-lg" placeholder="From City or Airport" />
        <input className="border p-3 rounded-lg" placeholder="To City or Airport" />
        <input type="date" className="border p-3 rounded-lg" />
        <input type="date" className="border p-3 rounded-lg" />
        <button className="bg-[#1f3d2b] text-white rounded-lg hover:bg-black">
          SEARCH NOW
        </button>
      </div>
    </div>
  );
}
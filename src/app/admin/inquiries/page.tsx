Set-Content src/app/admin/inquiries/page.tsx -Encoding UTF8 -Value @'
import { supabase } from "@/lib/supabaseClient";

async function getInquiries() {
  const { data } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  return data || [];
}

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();
  const total = inquiries.length;
  const newToday = inquiries.filter((i: any) => {
    const d = new Date(i.created_at);
    const today = new Date();
    return d.toDateString() === today.toDateString();
  }).length;
  const uniqueProperties = new Set(inquiries.map((i: any) => i.property_id)).size;

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Customer Inquiries</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="text-sm text-gray-500">Total Inquiries</h3>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="text-sm text-gray-500">New Today</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{newToday}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="text-sm text-gray-500">Active Properties</h3>
          <p className="text-3xl font-bold mt-2">{uniqueProperties}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inquiries.map((inq: any) => (
          <div key={inq.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
            <div className="flex justify-between items-start">
              <h2 className="font-semibold text-lg text-gray-800">{inq.name}</h2>
              <span className="text-xs text-gray-400">
                {new Date(inq.created_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{inq.email}</p>
            <div className="mt-3">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                inq.status === "new" ? "bg-blue-100 text-blue-600"
                : inq.status === "contacted" ? "bg-yellow-100 text-yellow-700"
                : inq.status === "closed" ? "bg-gray-200 text-gray-700"
                : "bg-green-100 text-green-700"
              }`}>
                {inq.status?.toUpperCase()}
              </span>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
              {inq.message}
            </div>
            <p className="text-xs text-gray-400 mt-3">Property ID: {inq.property_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
'@
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
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Customer Inquiries</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inquiries.map((inq: any) => (
          <div key={inq.id} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="font-semibold text-lg">{inq.name}</h2>
            <p className="text-sm text-gray-500">{inq.email}</p>
            <p className="text-xs mt-2">{inq.status?.toUpperCase()}</p>
            <div className="mt-4 text-sm text-gray-700">{inq.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

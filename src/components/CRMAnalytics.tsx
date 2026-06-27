"use client";

export default function CRMAnalytics({ inquiries }: any) {
  const total = inquiries?.length || 0;

  const newLeads = inquiries?.filter((i: any) => i.status === "new").length || 0;
  const contacted = inquiries?.filter((i: any) => i.status === "contacted").length || 0;
  const closed = inquiries?.filter((i: any) => i.status === "closed").length || 0;
  const sold = inquiries?.filter((i: any) => i.status === "sold").length || 0;

  const conversionRate =
    total > 0 ? ((sold / total) * 100).toFixed(1) : "0";

  return (
    <div className="grid md:grid-cols-5 gap-4 mb-8">

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-xs text-gray-400 uppercase">Total</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-xs text-gray-400 uppercase">New</p>
        <p className="text-2xl font-bold">{newLeads}</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-xs text-gray-400 uppercase">Contacted</p>
        <p className="text-2xl font-bold">{contacted}</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-xs text-gray-400 uppercase">Closed</p>
        <p className="text-2xl font-bold">{closed}</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-xs text-gray-400 uppercase">Sold</p>
        <p className="text-2xl font-bold">{sold}</p>
        <p className="text-xs text-gray-500 mt-1">
          {conversionRate}% conversion
        </p>
      </div>

    </div>
  );
}
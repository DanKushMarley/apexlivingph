"use client";
import { updateInquiryStatus } from "@/lib/inquiries";

export default function InquiryCard({ inq }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border">
      <h2 className="font-semibold text-lg">{inq.name}</h2>
      <p className="text-sm text-gray-500">{inq.email}</p>
      <div className="mt-3 bg-gray-50 p-3 rounded text-sm">{inq.message}</div>
      <div className="mt-3">
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
          inq.status === "new" ? "bg-blue-100 text-blue-600"
          : inq.status === "contacted" ? "bg-yellow-100 text-yellow-700"
          : inq.status === "closed" ? "bg-gray-200 text-gray-700"
          : "bg-green-100 text-green-700"
        }`}>{inq.status?.toUpperCase()}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => updateInquiryStatus(inq.id, "new")} className="text-xs px-3 py-1 border rounded">New</button>
        <button onClick={() => updateInquiryStatus(inq.id, "contacted")} className="text-xs px-3 py-1 border rounded">Contacted</button>
        <button onClick={() => updateInquiryStatus(inq.id, "closed")} className="text-xs px-3 py-1 border rounded">Closed</button>
        <button onClick={() => updateInquiryStatus(inq.id, "sold")} className="text-xs px-3 py-1 border rounded">Sold</button>
      </div>
    </div>
  );
}

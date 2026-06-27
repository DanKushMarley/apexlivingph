"use client";

import { updateInquiryStatus } from "@/lib/inquiries";
import InquiryCard from "@/components/InquiryCard";

{inquiries?.map((inq: any) => (
  <InquiryCard key={inq.id} inq={inq} />
))}

export default function InquiryCard({ inq }: any) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border">

      <h2 className="font-semibold text-lg">{inq.name}</h2>
      <p className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5">📧 {inq.email}</p>

      <div className="mt-3 bg-gray-50 p-3 rounded">
        {inq.message}
      </div>

      {/* STATUS BADGE */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium
            ${
              inq.status === "new"
                ? "bg-blue-100 text-blue-600"
                : inq.status === "contacted"
                ? "bg-yellow-100 text-yellow-700"
                : inq.status === "closed"
                ? "bg-gray-200 text-gray-700"
                : "bg-green-100 text-green-700"
            }`}
        >
          {inq.status?.toUpperCase()}
        </span>
      </div>

      {/* ACTIONS */}
      <div className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black transition text-sm">

        <button onClick={() => updateInquiryStatus(inq.id, "new")}
          className="text-xs px-3 py-1 border rounded">
          New
        </button>

        <button onClick={() => updateInquiryStatus(inq.id, "contacted")}
          className="text-xs px-3 py-1 border rounded">
          Contacted
        </button>

        <button onClick={() => updateInquiryStatus(inq.id, "closed")}
          className="text-xs px-3 py-1 border rounded">
          Closed
        </button>

        <button onClick={() => updateInquiryStatus(inq.id, "sold")}
          className="text-xs px-3 py-1 border rounded">
          Sold
        </button>

      </div>

    </div>
  );
}
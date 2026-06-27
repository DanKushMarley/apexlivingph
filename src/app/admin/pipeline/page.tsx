import CRMBoard from "@/components/CRMBoard";
import CRMAnalytics from "@/components/CRMAnalytics";
<CRMAnalytics inquiries={inquiries} />

async function getInquiries() {
  const { data } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function PipelinePage() {
  "use client";

import CRMBoard from "@/components/CRMBoard";
import { useInquiriesPolling } from "@/hooks/useInquiriesPolling";

export default function PipelinePage() {
  const inquiries = useInquiriesPolling();

  return (
    <div className={ui.page}>
  <div className={ui.container + " p-10"}></div>
  <div className={ui.sectionGap}></div>
    <div>
  <h1 className={ui.title}>CRM Pipeline</h1>
  <p className={ui.subtitle}>
    Manage and track all property leads in one place
  </p>
</div>
  );

      <CRMBoard inquiries={inquiries} />
    </div>
  );
}

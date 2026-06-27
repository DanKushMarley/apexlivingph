"use client";
import CRMBoard from "@/components/CRMBoard";
import CRMAnalytics from "@/components/CRMAnalytics";
import { useInquiriesPolling } from "@/hooks/useInquiriesPolling";
export default function PipelinePage() {
  const inquiries = useInquiriesPolling();
  return (<div><CRMBoard inquiries={inquiries} /><CRMAnalytics inquiries={inquiries} /></div>);
}

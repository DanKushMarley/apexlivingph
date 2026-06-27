"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function useInquiriesPolling() {
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      setInquiries(data || []);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return inquiries;
}
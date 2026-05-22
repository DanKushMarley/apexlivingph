"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function AdminPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      router.push("/login");
    } else {
      fetchBookings();
    }
  };

  const fetchBookings = async () => {
    const { data } = await supabase.from("bookings").select("*");
    setBookings(data || []);
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {bookings.map((b) => (
        <div key={b.id} className="p-4 border rounded mb-3">
          <p><strong>Name:</strong> {b.name}</p>
          <p><strong>Email:</strong> {b.email}</p>
          <p><strong>From:</strong> {b.from_location}</p>
          <p><strong>To:</strong> {b.to_location}</p>
          <p><strong>Date:</strong> {b.travel_date}</p>
        </div>
      ))}
    </main>
  );
}
"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function FlightForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("bookings").insert([
      {
        name: form.name,
        email: form.email,
        from_location: form.from,
        to_location: form.to,
        travel_date: form.date,
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
      console.error(error);
    } else {
      alert("Booking saved!");
      setForm({ name: "", email: "", from: "", to: "", date: "" });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded">
      <h2 className="text-xl font-bold">Flight Booking</h2>

      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="border p-2 w-full" />

      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" />

      <input name="from" placeholder="From (e.g. Cebu)" value={form.from} onChange={handleChange} className="border p-2 w-full" />

      <input name="to" placeholder="To (e.g. Manila)" value={form.to} onChange={handleChange} className="border p-2 w-full" />

      <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 w-full" />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Booking..." : "Book Flight"}
      </button>
    </form>
  );
}
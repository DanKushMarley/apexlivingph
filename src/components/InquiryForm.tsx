"use client";

import { useState } from "react";
import { addInquiry } from "@/lib/inquiries";

export default function InquiryForm({
  propertyId,
}: {
  propertyId: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await addInquiry({
      property_id: propertyId,
      name: form.name,
      email: form.email,
      message: form.message
    });

    setLoading(false);

    alert("Inquiry sent!");

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-3">

      <h3 className="text-xl font-semibold">
        Send Inquiry
      </h3>

      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-6 py-2 rounded"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>

    </form>
  );
}
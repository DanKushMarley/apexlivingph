import { supabase } from "@/lib/supabaseClient";

export async function addInquiry(data: {
  property_id: string;
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await supabase.from("inquiries").insert([data]);

  if (error) {
    console.error(error.message);
    return { success: false };
  }

  return { success: true };
}

export async function updateInquiryStatus(id: string, status: string) {
  const { error } = await supabase
    .from("inquiries")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error(error.message);
    return { success: false };
  }

  return { success: true };
}
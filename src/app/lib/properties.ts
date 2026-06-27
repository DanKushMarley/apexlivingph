import { supabase } from "@/lib/supabaseClient";

export async function getProperties() {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function addProperty(property: {
  title: string;
  description?: string;
  price: number;
  location?: string;
  image_url?: string;
}) {
  const { data, error } = await supabase
    .from("properties")
    .insert([property])
    .select();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
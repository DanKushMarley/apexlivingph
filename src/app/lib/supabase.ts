import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldlotvdxognbqowmscqm.supabase.co";
const supabaseKey = "sb_publishable_qVGaVGG3WWp9YfM5nT7_Bg_0m85p7IR";

export const supabase = createClient(supabaseUrl, supabaseKey);
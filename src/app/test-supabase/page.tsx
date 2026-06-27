import { supabase } from "/lib/test-supabase/supabaseClient";

export default async function TestPage() {
  const { data, error } = await supabase.from("your_table_name").select("*");

  return (
    <div>
      <h1>Supabase Test</h1>

      {error && <pre>Error: {error.message}</pre>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not configured. Waitlist will use in-memory storage. " +
    "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables."
  );
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function addToWaitlist(email: string, name: string) {
  if (!supabase) {
    throw new Error("Supabase not configured");
  }

  const { data, error } = await supabase
    .from("waitlist")
    .insert([{ email: email.toLowerCase(), name }])
    .select();

  if (error) {
    if (error.code === "23505") {
      // Unique constraint violation
      throw new Error("Email already on waitlist");
    }
    throw new Error(error.message || "Failed to add to waitlist");
  }

  return data?.[0];
}

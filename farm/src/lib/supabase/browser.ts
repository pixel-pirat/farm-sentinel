import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

// ✅ Supabase client for client components
export const supabaseBrowser = () =>
  createPagesBrowserClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });

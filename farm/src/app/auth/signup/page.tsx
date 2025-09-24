"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const supabase = supabaseBrowser(); // ✅ client instance
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Sign up user with Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 2. Insert into "users" table with default role "viewer"
    if (data.user) {
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: data.user.id,
          name,
          role: "viewer",
        },
      ]);

      if (insertError) {
        setError(insertError.message);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    router.push("/dashboard");
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/auth/login" className="text-green-600 hover:underline">
            Log in
          </a>
        </p>
      </form>
    </main>
  );
}

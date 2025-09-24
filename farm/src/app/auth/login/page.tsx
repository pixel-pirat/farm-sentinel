"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const supabase = supabaseBrowser(); // ✅ client instance
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

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
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="/auth/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </main>
  );
}

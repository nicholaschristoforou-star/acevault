"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/onboarding");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h1 className="text-3xl font-semibold tracking-tight">
          Log in
        </h1>

        <p className="mt-2 text-white/60">
          Access your AceVault account.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4 outline-none"
          />
        </div>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 h-14 w-full rounded-2xl bg-[#2453FF] font-medium transition hover:bg-[#3561ff]"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
    </main>
  );
}
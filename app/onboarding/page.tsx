"use client";

import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight">
          Welcome to AceVault
        </h1>

        <p className="mt-4 text-lg text-white/60">
          Let’s set up your financial command centre.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <button
            onClick={() => router.push("/onboarding/manual")}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition hover:bg-white/10"
          >
            <h2 className="text-2xl font-semibold">
              Add payments manually
            </h2>

            <p className="mt-3 text-white/60">
              Add your recurring payments and subscriptions yourself.
            </p>
          </button>

          <button
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left opacity-60"
          >
            <h2 className="text-2xl font-semibold">
              Upload statement
            </h2>

            <p className="mt-3 text-white/60">
              Automatically detect recurring payments from a statement.
            </p>

            <p className="mt-6 text-sm text-blue-400">
              Coming soon
            </p>
          </button>
        </div>
      </div>
    </main>
  );
}
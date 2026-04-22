"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function ManualEntryPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("monthly");
  const [nextDueDate, setNextDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [isSubscription, setIsSubscription] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debugMessage, setDebugMessage] = useState("Checking session...");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        setDebugMessage(`Auth error: ${error.message}`);
        return;
      }

      if (!user) {
        setDebugMessage("No logged-in user found.");
        return;
      }

      setUserId(user.id);
      setDebugMessage(`Logged in as: ${user.email}`);
    }

    checkUser();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      setErrorMessage(`Auth error: ${userError.message}`);
      setLoading(false);
      return;
    }

    if (!user) {
      setErrorMessage("No logged-in user found. Please sign up or log in again.");
      setLoading(false);
      return;
    }

    const payload = {
      user_id: user.id,
      name,
      amount: Number(amount),
      frequency,
      next_due_date: nextDueDate,
      category,
      is_subscription: isSubscription,
    };

    const { error } = await supabase.from("recurring_commitments").insert(payload);

    if (error) {
      setErrorMessage(`Insert error: ${error.message}`);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h1 className="text-4xl font-semibold">Add recurring payment</h1>

        <p className="mt-3 text-sm text-white/60">{debugMessage}</p>
        {userId && <p className="mt-1 text-xs text-white/40">User ID: {userId}</p>}

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4"
          />

          <input
            type="number"
            step="0.01"
            placeholder="Amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4"
          />

          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>

          <input
            type="date"
            required
            value={nextDueDate}
            onChange={(e) => setNextDueDate(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4"
          />

          <input
            type="text"
            placeholder="Category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-4"
          />

          <label className="flex items-center gap-3 text-white/70">
            <input
              type="checkbox"
              checked={isSubscription}
              onChange={(e) => setIsSubscription(e.target.checked)}
            />
            This is a subscription
          </label>
        </div>

        {errorMessage && (
          <p className="mt-4 text-sm text-red-400 whitespace-pre-wrap">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-[#2453FF] font-medium disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save payment"}
        </button>
      </form>
    </main>
  );
}
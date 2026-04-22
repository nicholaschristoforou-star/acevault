"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Commitment = {
  id: string;
  name: string;
  amount: number;
  frequency: string;
  next_due_date: string;
  category: string;
  is_subscription: boolean;
};

export default function DashboardPage() {
  const [payments, setPayments] = useState<Commitment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPayments();
  }, []);

  async function loadPayments() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("recurring_commitments")
      .select("*")
      .eq("user_id", user.id)
      .order("next_due_date", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setPayments(data || []);
    setLoading(false);
  }

  async function deletePayment(id: string) {
    await supabase
      .from("recurring_commitments")
      .delete()
      .eq("id", id);

    loadPayments();
  }

  const monthlySpend = payments.reduce(
    (total, payment) => total + Number(payment.amount),
    0
  );

  const subscriptions = payments.filter(
    (payment) => payment.is_subscription
  );

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-3 text-white/60">
              Your financial overview.
            </p>
          </div>

          <a
            href="/onboarding/manual"
            className="rounded-2xl bg-[#2453FF] px-5 py-3 font-medium"
          >
            Add Payment
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/60">
              Total Monthly Spend
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              £{monthlySpend.toFixed(2)}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/60">
              Active Payments
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              {payments.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/60">
              Subscriptions
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              {subscriptions.length}
            </h2>
          </div>

        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Upcoming Payments
            </h2>
          </div>

          {loading ? (
            <p className="mt-6 text-white/60">
              Loading...
            </p>
          ) : payments.length === 0 ? (
            <p className="mt-6 text-white/60">
              No payments added yet.
            </p>
          ) : (
            <div className="mt-6 space-y-4">

              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div>
                    <h3 className="text-xl font-medium">
                      {payment.name}
                    </h3>

                    <div className="mt-2 flex gap-3 text-sm text-white/50">
                      <span>{payment.category}</span>
                      <span>•</span>
                      <span>{payment.frequency}</span>

                      {payment.is_subscription && (
                        <>
                          <span>•</span>
                          <span className="text-blue-400">
                            Subscription
                          </span>
                        </>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-white/40">
                      Due: {payment.next_due_date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-semibold">
                      £{Number(payment.amount).toFixed(2)}
                    </p>

                    <button
                      onClick={() => deletePayment(payment.id)}
                      className="mt-3 text-sm text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </main>
  );
}
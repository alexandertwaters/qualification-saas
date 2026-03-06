"use client";

import { useState } from "react";

const PLANS = [
  { id: "starter", name: "Starter", monthlyPrice: "$99", annualPrice: "$990", drafts: 10 },
  { id: "growth", name: "Growth", monthlyPrice: "$249", annualPrice: "$2,490", drafts: 25 },
  { id: "scale", name: "Scale", monthlyPrice: "$499", annualPrice: "$4,990", drafts: 60 },
];

export function SubscribeButtons() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSubscribe(plan: string, annual: boolean) {
    setLoading(`${plan}-${annual ? "annual" : "monthly"}`);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan,
          annual,
          successUrl: `${window.location.origin}/dashboard?subscription=success`,
          cancelUrl: `${window.location.origin}/billing`,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Checkout failed");
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6"
        >
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{plan.name}</h3>
          <p className="text-2xl font-bold mt-2">{plan.annualPrice}<span className="text-sm font-normal text-zinc-500">/yr</span></p>
          <p className="text-sm text-zinc-500 mt-1">{plan.drafts} drafts/month</p>
          <button
            onClick={() => handleSubscribe(plan.id, true)}
            disabled={!!loading}
            className="mt-4 w-full rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-2 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50"
          >
            {loading?.startsWith(plan.id) ? "Redirecting…" : "Subscribe (annual)"}
          </button>
        </div>
      ))}
    </div>
  );
}

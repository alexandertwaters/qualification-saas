"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        <Card key={plan.id}>
          <CardHeader className="pb-2">
            <h3 className="font-semibold text-foreground">{plan.name}</h3>
            <p className="text-2xl font-bold text-foreground">
              {plan.annualPrice}
              <span className="text-sm font-normal text-muted-foreground">/yr</span>
            </p>
            <p className="text-sm text-muted-foreground">{plan.drafts} drafts/month</p>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => handleSubscribe(plan.id, true)}
              disabled={!!loading}
              className="w-full"
            >
              {loading?.startsWith(plan.id) ? "Redirecting…" : "Subscribe (annual)"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

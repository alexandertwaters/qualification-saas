"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ManageSubscriptionButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to open portal");
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to open portal");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleClick} disabled={loading} size="sm">
      {loading ? "Opening…" : "Manage subscription"}
    </Button>
  );
}

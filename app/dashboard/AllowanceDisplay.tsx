"use client";

import { useEffect, useState } from "react";

export function AllowanceDisplay() {
  const [allowance, setAllowance] = useState<{ used: number; limit: number } | null>(null);

  useEffect(() => {
    fetch("/api/allowance", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.used !== undefined && data.limit !== undefined) {
          setAllowance({ used: data.used, limit: data.limit });
        }
      })
      .catch(() => {});
  }, []);

  if (!allowance) return null;

  return (
    <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
      Drafts this month: {allowance.used} of {allowance.limit} used
    </p>
  );
}

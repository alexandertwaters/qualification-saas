"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ProtocolSummary = {
  id: string;
  equipmentType: string;
  equipmentCohort: string;
  intendedUse?: string;
  status: string;
  createdAt: string;
};

export function DraftList() {
  const [protocols, setProtocols] = useState<ProtocolSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/protocols")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load drafts");
        return r.json();
      })
      .then(setProtocols)
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center text-zinc-500">
        Loading drafts…
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-4 text-red-700 dark:text-red-400">
        {error}
      </div>
    );
  }

  if (protocols.length === 0) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center text-zinc-500 dark:text-zinc-400">
        <p className="mb-4">No drafts yet.</p>
        <p className="text-sm">Generate a draft from the home page to see it here.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {protocols.map((p) => (
        <li
          key={p.id}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 flex items-center justify-between gap-4"
        >
          <div className="min-w-0">
            <Link
              href={`/protocol/${p.id}`}
              className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
            >
              {p.equipmentType} · {p.equipmentCohort}
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {new Date(p.createdAt).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })}
              {p.intendedUse ? ` · ${p.intendedUse}` : ""}
            </p>
          </div>
          <Link
            href={`/protocol/${p.id}`}
            className="shrink-0 rounded bg-zinc-200 dark:bg-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-600"
          >
            View
          </Link>
        </li>
      ))}
    </ul>
  );
}

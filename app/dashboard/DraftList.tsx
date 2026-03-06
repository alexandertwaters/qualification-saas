"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      <Card className="mb-6">
        <CardContent className="py-12 text-center text-muted-foreground">
          Loading drafts…
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mb-6 border-destructive/50 bg-destructive/10">
        <CardContent className="py-4 text-destructive">
          {error}
        </CardContent>
      </Card>
    );
  }

  if (protocols.length === 0) {
    return (
      <Card className="mb-6">
        <CardContent className="py-12 text-center">
          <p className="mb-4 text-muted-foreground">No drafts yet.</p>
          <p className="text-sm text-muted-foreground">Generate a draft from the home page to see it here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <ul className="space-y-2 mb-6">
      {protocols.map((p) => (
        <Card key={p.id}>
          <CardContent className="py-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <Link
                href={`/protocol/${p.id}`}
                className="font-medium text-foreground hover:underline truncate block"
              >
                {p.equipmentType} · {p.equipmentCohort}
              </Link>
              <p className="text-sm text-muted-foreground mt-0.5">
                {new Date(p.createdAt).toLocaleDateString(undefined, {
                  dateStyle: "medium",
                })}
                {p.intendedUse ? ` · ${p.intendedUse}` : ""}
              </p>
            </div>
            <Link href={`/protocol/${p.id}`} className={buttonVariants({ variant: "secondary", size: "sm" })}>
              View
            </Link>
          </CardContent>
        </Card>
      ))}
    </ul>
  );
}

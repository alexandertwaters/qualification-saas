"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CohortForUI } from "../../src/api/getEquipmentCatalogForUI";
import { DraftPreviewView } from "./DraftPreviewView";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type ResolvedObligation = {
  obligation_id: string;
  qualification_phase: string;
  obligation_domain: string;
  obligation_text: string;
  standards_references?: Array<{ standard_id: string; clause_reference: string }>;
};

type DraftPreview = {
  draft_metadata: { generated_at: string };
  version_anchors: { catalog_version: string };
  resolved_obligations: ResolvedObligation[];
  protocol_id?: string;
};

export default function DraftProtocolForm() {
  const [cohorts, setCohorts] = useState<CohortForUI[]>([]);
  const [cohortId, setCohortId] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [intendedUse, setIntendedUse] = useState("");
  const [capabilities, setCapabilities] = useState<string[]>([]);
  const [draft, setDraft] = useState<DraftPreview | null>(null);
  const [useCaseOptions, setUseCaseOptions] = useState<Array<{ id: string; label: string }>>([]);
  const [capabilityOptions, setCapabilityOptions] = useState<Array<{ id: string; label: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) =>
      setUser(session?.user ?? null)
    );
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetch("/api/equipment-catalog")
      .then((r) => r.json())
      .then((data) => {
        setCohorts(data);
        if (data.length > 0 && !cohortId) setCohortId(data[0].id);
      })
      .catch(() => setError("Failed to load equipment catalog"));
  }, []);

  const selectedCohort = cohorts.find((c) => c.id === cohortId);
  const equipmentOptions = selectedCohort?.equipment ?? [];

  useEffect(() => {
    if (equipmentOptions.length > 0 && !equipmentOptions.find((e) => e.id === equipmentId)) {
      setEquipmentId(equipmentOptions[0].id);
    } else if (equipmentOptions.length === 0) {
      setEquipmentId("");
    }
  }, [cohortId, equipmentOptions, equipmentId]);

  useEffect(() => {
    if (!cohortId || !equipmentId) {
      setUseCaseOptions([]);
      setCapabilityOptions([]);
      setIntendedUse("");
      setCapabilities([]);
      return;
    }
    fetch(`/api/equipment-options?cohort=${encodeURIComponent(cohortId)}&equipment=${encodeURIComponent(equipmentId)}`)
      .then((r) => r.json())
      .then((data) => {
        setUseCaseOptions(data.use_case_options ?? []);
        setCapabilityOptions(data.capability_options ?? []);
        setIntendedUse("");
        setCapabilities([]);
      })
      .catch(() => {
        setUseCaseOptions([]);
        setCapabilityOptions([]);
      });
  }, [cohortId, equipmentId]);

  const requestPayload = () => ({
    equipment_context: {
      equipment_type: equipmentId,
      equipment_cohort: cohortId,
      declared_capabilities: capabilities,
      intended_use: intendedUse,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setDraft(null);
    setLoading(true);

    try {
      const res = await fetch("/api/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestPayload()),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || res.statusText);
      }

      const data = (await res.json()) as DraftPreview;
      setDraft(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate draft");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadWord = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/draft?format=docx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestPayload()),
      });
      if (!res.ok) {
        const ct = res.headers.get("content-type") ?? "";
        if (ct.includes("application/json")) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Download failed");
        }
        throw new Error("Download failed");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `protocol-draft-${equipmentId}-${Date.now()}.docx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setLoading(false);
    }
  };

  const toggleCapability = (id: string) => {
    setCapabilities((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl">
      <h2 className="text-xl font-semibold text-foreground">
        Equipment selection
      </h2>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cohort">Cohort</Label>
        <select
          id="cohort"
          value={cohortId}
          onChange={(e) => setCohortId(e.target.value)}
          className={cn(
            "flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          required
        >
          <option value="">Select cohort…</option>
          {cohorts.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="equipment">Equipment type</Label>
        <select
          id="equipment"
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          className={cn(
            "flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          required
        >
          <option value="">Select equipment…</option>
          {equipmentOptions.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-xl font-semibold text-foreground mt-4">
        Selection parameters
      </h2>
      <p className="text-sm text-muted-foreground">
        Use case and capabilities inform obligation inclusion. Qualification
        phases and obligation domains are determined by the engine.
      </p>

      <div className="flex flex-col gap-2">
        <Label htmlFor="use-case">Use case <span className="text-destructive">*</span></Label>
        <select
          id="use-case"
          value={intendedUse}
          onChange={(e) => setIntendedUse(e.target.value)}
          className={cn(
            "flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
          required
          disabled={useCaseOptions.length === 0}
        >
          <option value="">
            {useCaseOptions.length === 0 ? "Select equipment first" : "Select use case…"}
          </option>
          {useCaseOptions.map((u) => (
            <option key={u.id} value={u.id}>
              {u.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>
          Capabilities (select at least one) <span className="text-destructive">*</span>
        </Label>
        <div className="flex flex-wrap gap-3">
          {capabilityOptions.map((c) => (
            <label
              key={c.id}
              className="flex items-center gap-2 cursor-pointer text-sm text-foreground"
            >
              <input
                type="checkbox"
                checked={capabilities.includes(c.id)}
                onChange={() => toggleCapability(c.id)}
                className="rounded border-input"
              />
              {c.label}
            </label>
          ))}
        </div>
      </div>

      {!user && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          Sign in or{" "}
          <Link href="/signup" className="font-medium underline hover:no-underline">sign up</Link>
          {" "}to generate protocol drafts.
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={!user || loading || !cohortId || !equipmentId || !intendedUse || capabilities.length === 0}
      >
        {loading ? "Generating…" : "Generate draft"}
      </Button>

      {draft && (
        <section className="mt-8 border-t border-border pt-8">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-foreground">Draft preview</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[60vh] overflow-y-auto p-6">
                <DraftPreviewView draft={draft} equipmentName={selectedCohort?.equipment.find(e => e.id === equipmentId)?.name ?? equipmentId} cohortName={selectedCohort?.name ?? cohortId} />
              </div>
              <div className="border-t border-border px-6 py-4 flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={handleDownloadWord}
                  disabled={loading}
                >
                  Download .docx
                </Button>
              {draft.protocol_id && (
                <a
                  href={`/protocol/${draft.protocol_id}`}
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  Saved to My drafts →
                </a>
              )}
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </form>
  );
}

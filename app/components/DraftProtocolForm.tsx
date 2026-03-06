"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { CohortForUI } from "../../src/api/getEquipmentCatalogForUI";
import { DraftPreviewView } from "./DraftPreviewView";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

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
        <label htmlFor="cohort" className="text-sm font-medium text-foreground">
          Cohort
        </label>
        <select
          id="cohort"
          value={cohortId}
          onChange={(e) => setCohortId(e.target.value)}
          className="rounded border border-zinc-300 bg-white px-3 py-2 text-foreground dark:border-zinc-600 dark:bg-zinc-900"
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
        <label htmlFor="equipment" className="text-sm font-medium text-foreground">
          Equipment type
        </label>
        <select
          id="equipment"
          value={equipmentId}
          onChange={(e) => setEquipmentId(e.target.value)}
          className="rounded border border-zinc-300 bg-white px-3 py-2 text-foreground dark:border-zinc-600 dark:bg-zinc-900"
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
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Use case and capabilities inform obligation inclusion. Qualification
        phases and obligation domains are determined by the engine.
      </p>

      <div className="flex flex-col gap-2">
        <label htmlFor="use-case" className="text-sm font-medium text-foreground">
          Use case <span className="text-red-600">*</span>
        </label>
        <select
          id="use-case"
          value={intendedUse}
          onChange={(e) => setIntendedUse(e.target.value)}
          className="rounded border border-zinc-300 bg-white px-3 py-2 text-foreground dark:border-zinc-600 dark:bg-zinc-900"
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
        <span className="text-sm font-medium text-foreground">
          Capabilities (select at least one) <span className="text-red-600">*</span>
        </span>
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
                className="rounded border-zinc-300"
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
        <div className="rounded bg-red-100 px-3 py-2 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!user || loading || !cohortId || !equipmentId || !intendedUse || capabilities.length === 0}
        className="rounded bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Generating…" : "Generate draft"}
      </button>

      {draft && (
        <section className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-foreground mb-4">Draft preview</h2>
          <div className="rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900 overflow-hidden">
            <div className="max-h-[60vh] overflow-y-auto p-6">
              <DraftPreviewView draft={draft} equipmentName={selectedCohort?.equipment.find(e => e.id === equipmentId)?.name ?? equipmentId} cohortName={selectedCohort?.name ?? cohortId} />
            </div>
            <div className="border-t border-zinc-200 dark:border-zinc-700 px-6 py-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleDownloadWord}
                disabled={loading}
                className="rounded bg-foreground px-4 py-2 text-background text-sm font-medium hover:opacity-90 disabled:opacity-50"
              >
                Download .docx
              </button>
              {draft.protocol_id && (
                <a
                  href={`/protocol/${draft.protocol_id}`}
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
                >
                  Saved to My drafts →
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </form>
  );
}

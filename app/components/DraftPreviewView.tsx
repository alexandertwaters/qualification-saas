"use client";

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
};

const phaseLabels: Record<string, string> = {
  IQ: "Installation Qualification",
  OQ: "Operational Qualification",
  PQ: "Performance Qualification",
};

export function DraftPreviewView({
  draft,
  equipmentName,
  cohortName,
}: {
  draft: DraftPreview;
  equipmentName: string;
  cohortName: string;
}) {
  const byPhase = new Map<string, ResolvedObligation[]>();
  for (const o of draft.resolved_obligations) {
    const list = byPhase.get(o.qualification_phase) ?? [];
    list.push(o);
    byPhase.set(o.qualification_phase, list);
  }
  const phases = ["IQ", "OQ", "PQ"].filter((p) => (byPhase.get(p)?.length ?? 0) > 0);

  return (
    <article className="prose prose-sm max-w-none dark:prose-invert">
      <header className="mb-6">
        <h1 className="text-lg font-semibold m-0">Protocol draft</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0 mt-1">
          {equipmentName} | {cohortName}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-500 m-0 mt-1">
          Generated {new Date(draft.draft_metadata.generated_at).toLocaleString()} · Catalog: {draft.version_anchors.catalog_version}
        </p>
        <p className="text-xs italic text-zinc-500 dark:text-zinc-500 mt-2">
          This draft is advisory. Refine and edit before QMS submission. User bears responsibility for compliance.
        </p>
      </header>

      {phases.map((phase) => (
        <section key={phase} className="mb-8">
          <h2 className="text-base font-semibold mt-0 mb-3">{phase} — {phaseLabels[phase] ?? phase}</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-600">
                <th className="text-left py-2 pr-4 font-medium w-8">#</th>
                <th className="text-left py-2 pr-4 font-medium w-36">Domain</th>
                <th className="text-left py-2 font-medium">Obligation</th>
                <th className="text-left py-2 pl-4 font-medium w-40">Standard(s)</th>
              </tr>
            </thead>
            <tbody>
              {(byPhase.get(phase) ?? []).map((o, i) => (
                <tr key={o.obligation_id} className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 text-zinc-500">{i + 1}</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{o.obligation_domain}</td>
                  <td className="py-2">{o.obligation_text}</td>
                  <td className="py-2 pl-4 text-zinc-600 dark:text-zinc-400 text-xs">
                    {(o.standards_references ?? [])
                      .map((s) => `${s.standard_id}${s.clause_reference ? ` ${s.clause_reference}` : ""}`)
                      .join("; ") || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </article>
  );
}

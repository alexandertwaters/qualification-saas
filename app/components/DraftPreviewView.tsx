"use client";

import { formatStandardClause } from "@/src/draft/protocolTemplate";

type ResolvedObligation = {
  obligation_id: string;
  qualification_phase: string;
  obligation_domain: string;
  obligation_text: string;
  rationale?: string;
  acceptance_criteria?: string;
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

const PLACEHOLDER = "_____";

function formatDomain(domain: string): string {
  return domain.replace(/_/g, " ");
}

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
        <h1 className="text-xl font-semibold m-0 text-center">
          Qualification Protocol Draft
        </h1>
        <p className="text-base font-medium m-0 mt-2 text-center">
          {equipmentName} | {cohortName}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 m-0 mt-2 text-center">
          Protocol ID: [Enter protocol ID] · Revision: [Rev] · Effective date: [Date]
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 m-0 mt-1 text-center">
          Generated {new Date(draft.draft_metadata.generated_at).toLocaleString()} · Catalog: {draft.version_anchors.catalog_version}
        </p>
        <p className="text-xs italic text-zinc-500 dark:text-zinc-400 mt-3 text-center">
          This draft is advisory. Replace all [placeholders] with your specific information. Refine and edit before QMS submission. User bears responsibility for compliance.
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-base font-semibold mt-0 mb-2">1. Objective and Scope</h2>
        <p className="text-sm m-0">
          This protocol defines the qualification activities for the equipment listed below. Complete all sections applicable to your installation and intended use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-base font-semibold mt-0 mb-2">2. Equipment Identification</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-600">
              <th className="text-left py-2 pr-4 font-medium">Attribute</th>
              <th className="text-left py-2 font-medium">Value (replace with your information)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Manufacturer</td><td className="py-2">{PLACEHOLDER}</td></tr>
            <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Model</td><td className="py-2">{PLACEHOLDER}</td></tr>
            <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Serial number</td><td className="py-2">{PLACEHOLDER}</td></tr>
            <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Asset tag</td><td className="py-2">{PLACEHOLDER}</td></tr>
            <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Location (room/area)</td><td className="py-2">{PLACEHOLDER}</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-base font-semibold mt-0 mb-2">3. Site / Company Context</h2>
        <p className="text-sm m-0 mb-1">Company/Site: [Enter company name and site]</p>
        <p className="text-sm m-0 mb-1">Department: [Enter department]</p>
        <p className="text-sm m-0">Location: Building [_____], Room/Area [_____]</p>
      </section>

      {phases.map((phase, phaseIdx) => {
        const obligations = byPhase.get(phase) ?? [];
        const sectionNum = 4 + phaseIdx;

        const summaryRows = (() => {
          const seen = new Set<string>();
          const rows: Array<{ standard: string; clause: string; requirement: string }> = [];
          for (const o of obligations) {
            const refs = o.standards_references ?? [];
            const reqText = o.obligation_text;
            if (refs.length === 0) {
              const key = `—|${reqText}`;
              if (!seen.has(key)) {
                seen.add(key);
                rows.push({ standard: "—", clause: "—", requirement: reqText });
              }
            } else {
              for (const r of refs) {
                const stdDisplay = r.standard_id.replace(/^STD_/, "").replace(/_/g, " ");
                const key = `${stdDisplay}|${reqText}`;
                if (!seen.has(key)) {
                  seen.add(key);
                  rows.push({
                    standard: stdDisplay,
                    clause: r.clause_reference || "—",
                    requirement: reqText,
                  });
                }
              }
            }
          }
          return rows;
        })();

        return (
          <section key={phase} className="mb-8">
            <h2 className="text-base font-semibold mt-0 mb-3">
              {sectionNum}. {phase} — {phaseLabels[phase] ?? phase}
            </h2>

            <h3 className="text-sm font-medium mt-0 mb-2">{sectionNum}.1 Summary: Standards and Obligations</h3>
            <table className="w-full text-sm border-collapse mb-4">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-600">
                  <th className="text-left py-2 pr-4 font-medium">Standard</th>
                  <th className="text-left py-2 pr-4 font-medium w-24">Clause</th>
                  <th className="text-left py-2 font-medium">Annotated Requirement</th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((r, i) => (
                  <tr key={i} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{r.standard}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{r.clause}</td>
                    <td className="py-2">{r.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-sm font-medium mt-0 mb-2">{sectionNum}.2 Detailed Requirements</h3>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-600">
                  <th className="text-left py-2 pr-4 font-medium w-8">#</th>
                  <th className="text-left py-2 pr-4 font-medium w-36">Domain</th>
                  <th className="text-left py-2 font-medium">Obligation / Verification / Acceptance Criteria</th>
                  <th className="text-left py-2 pl-4 font-medium w-40">Standard(s)</th>
                </tr>
              </thead>
              <tbody>
                {obligations.map((o, i) => (
                  <tr key={o.obligation_id} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 text-zinc-500 align-top">{i + 1}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400 align-top">{formatDomain(o.obligation_domain)}</td>
                    <td className="py-2 align-top">
                      <div className="space-y-1">
                        <p className="m-0">{o.obligation_text}</p>
                        {o.rationale && (
                          <p className="m-0 text-xs text-zinc-500 dark:text-zinc-400">
                            <span className="font-medium">Rationale:</span> {o.rationale}
                          </p>
                        )}
                        {o.acceptance_criteria && (
                          <p className="m-0 text-xs text-zinc-500 dark:text-zinc-400">
                            <span className="font-medium">Acceptance:</span> {o.acceptance_criteria}
                          </p>
                        )}
                        <p className="m-0 text-xs italic text-zinc-500 dark:text-zinc-400">
                          User-specific criteria: {PLACEHOLDER}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 pl-4 text-zinc-600 dark:text-zinc-400 text-xs align-top">
                      {(o.standards_references ?? [])
                        .map((s) => formatStandardClause(s.standard_id, s.clause_reference))
                        .join("; ") || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}

      <section className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
        <h2 className="text-base font-semibold mt-0 mb-2">Approval</h2>
        <p className="text-sm m-0 mb-1">Prepared by: _________________________  Date: ___________</p>
        <p className="text-sm m-0 mb-1">Reviewed by: _________________________  Date: ___________</p>
        <p className="text-sm m-0">Approved by: _________________________  Date: ___________</p>
      </section>
    </article>
  );
}

import type { Obligation } from "../../reference/obligations/obligation";
import type { QualificationPhase } from "../../reference/obligations/obligation";

export type EquipmentContext = {
  equipment_type: string;
  equipment_cohort: string;
  declared_capabilities?: string[];
  intended_use?: string;
};

export type DerivedDraftScope = {
  qualification_phases: QualificationPhase[];
  obligation_domains: string[];
};

/**
 * Derive qualification_phases and obligation_domains from the obligation catalog
 * based on equipment selection. Use case and capabilities may refine this in future;
 * for now we include all phases and domains that have applicable obligations.
 */
export function deriveDraftScope(
  equipmentContext: EquipmentContext,
  obligations: Obligation[],
  resolvedEquipmentType: string,
  resolvedEquipmentCohort: string
): DerivedDraftScope {
  const applicable = obligations.filter((o) => {
    const app = o.equipment_applicability;
    if (app.cohort !== resolvedEquipmentCohort) return false;
    if (!app.equipment_types.includes(resolvedEquipmentType)) return false;
    if (o.lifecycle?.status === "deprecated") return false;
    return true;
  });

  const phases = new Set<QualificationPhase>();
  const domains = new Set<string>();

  for (const o of applicable) {
    if (o.qualification_phase) phases.add(o.qualification_phase);
    if (o.domain) domains.add(o.domain);
  }

  const phaseOrder: QualificationPhase[] = ["IQ", "OQ", "PQ"];
  const sortedPhases = Array.from(phases).sort(
    (a, b) => phaseOrder.indexOf(a) - phaseOrder.indexOf(b)
  );

  return {
    qualification_phases: sortedPhases,
    obligation_domains: Array.from(domains).sort(),
  };
}

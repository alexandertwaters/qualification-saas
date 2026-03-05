import type { ObligationDomain } from "./obligationDomains";

export type QualificationPhase = "IQ" | "OQ" | "PQ";

export type ObligationLifecycleStatus = "active" | "deprecated";

export interface EquipmentApplicability {
  cohort: string;
  equipment_types: string[];
}

export interface StandardsAnchor {
  standard: string;
  clause?: string;
  context_note?: string;
}

export interface ObligationLifecycle {
  status: ObligationLifecycleStatus;
  introduced_in_version: string;
  deprecated_in_version?: string | null;
  replaced_by_obligation_ids: string[];
}

export interface Obligation {
  obligation_id: string;
  qualification_phase: QualificationPhase;
  domain: ObligationDomain;
  title: string;
  description: string;
  equipment_applicability: EquipmentApplicability;
  standards_anchors?: StandardsAnchor[];
  lifecycle: ObligationLifecycle;

  // Advisory fields for protocol drafting
  rationale?: string;
  verification_expectation?: string;
  acceptance_criteria?: string;

  /**
   * Optional. When present, obligation is included only if all listed
   * capabilities are in the user's declared_capabilities (e.g. HAS_ALARM,
   * HAS_DATA_LOGGER). Standards mandate obligations based on equipment
   * capabilities.
   */
  required_capabilities?: string[];
}

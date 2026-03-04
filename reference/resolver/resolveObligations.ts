/**
 * Reference implementation.
 * Mirrors Resolver Selection Logic Contract v1.0 exactly.
 * Not a deployed service. Not authoritative by itself.
 */

import { Obligation } from "../obligations/obligation"

export type ResolverContext = {
  equipmentCohort: string
  equipmentType: string
  selectedDomains: string[]
  includeDeprecated: boolean
  equipmentInstanceId?: string
}

export function resolveObligations(
  context: ResolverContext,
  obligations: Obligation[]
): Obligation[] {

  // Fail fast on missing required inputs
  if (!context.equipmentCohort) {
    throw new Error("equipmentCohort is required")
  }

  if (!context.equipmentType) {
    throw new Error("equipmentType is required")
  }

  if (!Array.isArray(context.selectedDomains) || context.selectedDomains.length === 0) {
    throw new Error("selectedDomains must be a non-empty array")
  }

  if (typeof context.includeDeprecated !== "boolean") {
    throw new Error("includeDeprecated must be explicitly true or false")
  }

  // Deterministic selection logic (Resolver Selection Logic Contract v1.0)
  return obligations.filter((obligation) => {
    // Domain filtering
    if (!context.selectedDomains.includes(obligation.domain)) {
      return false;
    }

    // Equipment applicability filtering
    const app = obligation.equipment_applicability;
    if (context.equipmentCohort !== app.cohort) {
      return false;
    }
    if (!app.equipment_types.includes(context.equipmentType)) {
      return false;
    }

    // Lifecycle filtering
    if (!context.includeDeprecated && obligation.lifecycle.status !== "active") {
      return false;
    }

    return true;
  });
}


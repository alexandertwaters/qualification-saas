/**
 * Reference implementation.
 * Mirrors Resolver Selection Logic Contract v1.0 exactly.
 * Not a deployed service. Not authoritative by itself.
 */

export type ResolverContext = {
  equipmentCohort: string
  equipmentType: string
  selectedDomains: string[]
  includeDeprecated: boolean
  equipmentInstanceId?: string
}

export type Obligation = {
  obligation_id: string
  domain: string
  equipment_applicability: {
    cohort: string
    equipment_types: string[]
  }
  lifecycle: {
    status: "active" | "deprecated"
  }
  // All additional fields are carried through verbatim
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

  // Deterministic selection logic
  return obligations.filter(obligation => {

    // Domain filtering
    if (!context.selectedDomains.includes(obligation.domain)) {
      return false
    }

    // Equipment cohort match
    if (obligation.equipment_applicability.cohort !== context.equipmentCohort) {
      return false
    }

    // Equipment type match
    if (!obligation.equipment_applicability.equipment_types.includes(context.equipmentType)) {
      return false
    }

    // Lifecycle filtering
    if (!context.includeDeprecated && obligation.lifecycle.status !== "active") {
      return false
    }

    return true
  })
}


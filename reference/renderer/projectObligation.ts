import { RenderedObligation } from "./types"

export type ObligationPayload = {
  obligation_id: string
  intent: string
  rationale: string
  verification_expectation: string
  acceptance_criteria: string
  standards_references?: string[]
  qualification_phase: "IQ" | "OQ" | "PQ"
}

export function projectObligation(obligation: ObligationPayload): RenderedObligation {
  return {
    obligation_id: obligation.obligation_id,
    intent: obligation.intent,
    rationale: obligation.rationale,
    verification_method: obligation.verification_expectation,
    acceptance_criteria: obligation.acceptance_criteria,
    references: obligation.standards_references,
  }
}

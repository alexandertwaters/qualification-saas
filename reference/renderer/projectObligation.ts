import { RenderedObligation } from "./types"
import type { Obligation } from "../obligations/obligation"

export type ObligationPayload = {
  obligation_id: string
  qualification_phase: "IQ" | "OQ" | "PQ"
  intent?: string
  rationale?: string
  verification_expectation?: string
  acceptance_criteria?: string
  standards_references?: string[]
  description?: string
  title?: string
  standards_anchors?: Array<{ standard: string; clause?: string }>
}

export function projectObligation(
  obligation: ObligationPayload | Obligation
): RenderedObligation {
  const intent =
    "intent" in obligation
      ? obligation.intent
      : obligation.description ?? obligation.title
  const rationale =
    "rationale" in obligation ? obligation.rationale : obligation.rationale
  const verification =
    "verification_expectation" in obligation
      ? obligation.verification_expectation
      : obligation.verification_expectation ?? obligation.description
  const acceptance =
    "acceptance_criteria" in obligation
      ? obligation.acceptance_criteria
      : obligation.acceptance_criteria
  const refs =
    "standards_references" in obligation && obligation.standards_references
      ? obligation.standards_references
      : "standards_anchors" in obligation && obligation.standards_anchors
        ? obligation.standards_anchors.map(
            (a) => [a.standard, a.clause].filter(Boolean).join(" ").trim()
          )
        : undefined

  return {
    obligation_id: obligation.obligation_id,
    intent: intent ?? "",
    rationale: rationale ?? "",
    verification_method: verification ?? "",
    acceptance_criteria: acceptance ?? "",
    references: refs,
  }
}

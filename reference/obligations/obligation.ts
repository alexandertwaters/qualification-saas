export type QualificationPhase = "IQ" | "OQ" | "PQ"

export type ObligationLifecycleStatus = "active" | "deprecated"

export interface Obligation {
  obligation_id: string
  qualification_phase: QualificationPhase
  domain: string

  intent: string
  rationale: string

  verification_expectation: string
  acceptance_criteria: string

  standards_references?: string[]

  lifecycle_status: ObligationLifecycleStatus
}

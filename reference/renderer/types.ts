export type QualificationPhase = "IQ" | "OQ" | "PQ"

export interface RenderedObligation {
  obligation_id: string
  intent: string
  rationale: string
  verification_method: string
  acceptance_criteria: string
  references?: string[]
}

export interface ProtocolSectionBase {
  phase: QualificationPhase
  title: string
  purpose: string
  scope: string
  obligations: RenderedObligation[]
}

export interface IQSection extends ProtocolSectionBase {
  phase: "IQ"
  installation_context: {
    location: string
    utilities: string[]
    environmental_conditions: string[]
  }
  configuration_verification: {
    parameter: string
    expected_value: string
  }[]
  documentation_verification: {
    document_name: string
    required: boolean
  }[]
}

export interface OQSection extends ProtocolSectionBase {
  phase: "OQ"
  operating_parameters: {
    parameter: string
    min: string
    max: string
  }[]
  functional_tests: {
    test_name: string
    description: string
    expected_result: string
  }[]
  alarm_and_interlock_tests: {
    condition: string
    expected_response: string
  }[]
}

export interface PQSection extends ProtocolSectionBase {
  phase: "PQ"
  process_description: string
  performance_metrics: {
    metric: string
    target: string
    tolerance: string
  }[]
  run_conditions: {
    condition: string
    description: string
  }[]
  reproducibility_criteria: string
}

export interface GeneratedProtocol {
  IQ?: IQSection
  OQ?: OQSection
  PQ?: PQSection
}


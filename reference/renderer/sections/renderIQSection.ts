import { IQSection } from "../types"
import { ObligationPayload, projectObligation } from "../projectObligation"

export function renderIQSection(obligations: ObligationPayload[]): IQSection {
  return {
    phase: "IQ",
    title: "Installation Qualification (IQ)",
    purpose: "Verify that the equipment is installed, configured, and documented in accordance with specifications.",
    scope: "Applies to installation, configuration, and documentation verification activities.",
    installation_context: {
      location: "",
      utilities: [],
      environmental_conditions: [],
    },
    configuration_verification: [],
    documentation_verification: [],
    obligations: obligations.map(projectObligation),
  }
}

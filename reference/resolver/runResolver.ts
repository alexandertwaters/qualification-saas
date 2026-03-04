import { generateResolverOutputEnvelope } from "./generateResolverOutputEnvelope";
import { QualificationPhase } from "../obligations/obligation";

export interface ResolverExecutionInput {
  equipment_instance_id: string;
  equipment_type: string;
  equipment_cohort: string;
  selected_domains: string[];
  include_deprecated: boolean;
  resolver_version: string;
}

export function runResolver(
  input: ResolverExecutionInput,
  obligationCatalog: any
) {
  const context = {
    equipmentInstanceId: input.equipment_instance_id,
    equipmentType: input.equipment_type,
    equipmentCohort: input.equipment_cohort,
    selectedDomains: input.selected_domains,
    includeDeprecated: input.include_deprecated
  };

  return generateResolverOutputEnvelope(
    context,
    obligationCatalog,
    input.resolver_version
  );
}

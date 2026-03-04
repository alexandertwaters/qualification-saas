/**
 * Reference implementation.
 * Mirrors Resolver Output Envelope Contract v1.0 exactly.
 * Not a deployed service. Not authoritative by itself.
 */

import { ResolverContext, resolveObligations } from "./resolveObligations";
import { Obligation } from "../obligations/obligation";

/**
 * Advisory extension applied at output time only.
 * Does not alter resolver selection semantics.
 */
export type ObligationWithAdvisories = Obligation & {
  deprecation_notice?: {
    message: string;
    superseded_by?: string; // obligation_id of replacement, when known
  };
};

export type ResolverRunEnvelope = {
  resolver_run: {
    run_id: string;
    resolver_version: string;
    contract_versions: {
      obligation_schema: string;
      resolver_output_envelope: string;
      resolver_selection_logic: string;
    };
    execution_context: {
      equipment_instance_id?: string;
      equipment_type: string;
      equipment_cohort: string;
      selected_domains: string[];
      include_deprecated: boolean;
    };
  };
  obligations: ObligationWithAdvisories[];
};

export function generateResolverOutputEnvelope(
  context: ResolverContext,
  obligationsCatalog: Obligation[],
  resolverVersion: string
): ResolverRunEnvelope {
  const resolvedObligations = resolveObligations(context, obligationsCatalog);

  const annotatedObligations: ObligationWithAdvisories[] =
    resolvedObligations.map((obligation) => {
      if (obligation.lifecycle.status === "deprecated") {
        const replacedBy =
          obligation.lifecycle.replaced_by_obligation_ids?.[0];
        return {
          ...obligation,
          deprecation_notice: {
            message:
              "This obligation is deprecated and retained for historical compatibility.",
            superseded_by: replacedBy
          }
        };
      }

      return obligation;
    });

  const runId = new Date().toISOString();

  return {
    resolver_run: {
      run_id: runId,
      resolver_version: resolverVersion,
      contract_versions: {
        obligation_schema: "v1.0",
        resolver_output_envelope: "v1.0",
        resolver_selection_logic: "v1.0"
      },
      execution_context: {
        equipment_instance_id: context.equipmentInstanceId,
        equipment_type: context.equipmentType,
        equipment_cohort: context.equipmentCohort,
        selected_domains: context.selectedDomains,
        include_deprecated: context.includeDeprecated
      }
    },
    obligations: annotatedObligations
  };
}


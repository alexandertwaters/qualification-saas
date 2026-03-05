import type { ResolverRunEnvelope } from "../../reference/resolver/generateResolverOutputEnvelope";
import type { Obligation } from "../../reference/obligations/obligation";

export interface DraftResponse {
  draft_metadata: {
    draft_type: "protocol_draft";
    generated_at: string;
  };
  version_anchors: {
    resolver_contract_version: string;
    catalog_version: string;
    obligation_schema_version: string;
  };
  resolved_obligations: Array<{
    obligation_id: string;
    qualification_phase: string;
    obligation_domain: string;
    lifecycle_state: string;
    obligation_text: string;
    standards_references?: Array<{
      standard_id: string;
      clause_reference: string;
    }>;
  }>;
}

/**
 * Transform ResolverRunEnvelope to draft.response.v1 schema shape.
 */
export function transformToDraftResponse(
  envelope: ResolverRunEnvelope,
  catalogVersion: string
): DraftResponse {
  const generatedAt = new Date().toISOString();

  return {
    draft_metadata: {
      draft_type: "protocol_draft",
      generated_at: generatedAt
    },
    version_anchors: {
      resolver_contract_version: envelope.resolver_run.resolver_version,
      catalog_version: catalogVersion,
      obligation_schema_version:
        envelope.resolver_run.contract_versions.obligation_schema
    },
    resolved_obligations: envelope.obligations.map((o) =>
      obligationToResolved(o)
    )
  };
}

function obligationToResolved(
  obligation: Obligation
): DraftResponse["resolved_obligations"][0] {
  const obligationText =
    obligation.verification_expectation ?? obligation.description;

  const standardsReferences = obligation.standards_anchors
    ?.map((a) => {
      const raw = a.standard?.trim();
      if (!raw) return null;
      return { standard_id: raw, clause_reference: a.clause ?? "" };
    })
    .filter(
      (r): r is { standard_id: string; clause_reference: string } =>
        r !== null && !!r.standard_id
    );

  const result: DraftResponse["resolved_obligations"][0] = {
    obligation_id: obligation.obligation_id,
    qualification_phase: obligation.qualification_phase,
    obligation_domain: obligation.domain,
    lifecycle_state: obligation.lifecycle.status,
    obligation_text: obligationText
  };

  if (standardsReferences && standardsReferences.length > 0) {
    result.standards_references = standardsReferences;
  }

  return result;
}


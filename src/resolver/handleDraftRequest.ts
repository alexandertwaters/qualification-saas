import { validateDraftRequest } from "./validateDraftRequest";
import { validateDraftResponse } from "./validateDraftResponse";
import { validateCatalogExistence } from "./validateCatalogExistence";
import { transformToDraftResponse } from "./transformToDraftResponse";
import { deriveDraftScope } from "./deriveDraftScope";
import { runResolver } from "../../reference/resolver/runResolver";
import { loadActiveCatalog } from "./loadActiveCatalog";

const activeCatalog = loadActiveCatalog();

export async function handleDraftRequest(rawInput: unknown) {
  const request = validateDraftRequest(rawInput) as any;

  const ontology = activeCatalog.equipmentOntology;
  const equipmentType =
    ontology?.catalogIdToEquipmentType.get(
      request.equipment_context.equipment_type
    ) ?? request.equipment_context.equipment_type;
  const equipmentCohort =
    ontology?.catalogIdToCohort.get(
      request.equipment_context.equipment_cohort
    ) ?? request.equipment_context.equipment_cohort;

  const derivedScope = deriveDraftScope(
    request.equipment_context,
    activeCatalog.obligations,
    equipmentType,
    equipmentCohort
  );

  validateCatalogExistence(
    { ...request, draft_scope: derivedScope },
    activeCatalog
  );

  const executionInput = {
    equipment_instance_id: "DRAFT_ONLY",
    equipment_type: equipmentType,
    equipment_cohort: equipmentCohort,
    selected_domains: derivedScope.obligation_domains,
    include_deprecated: request.visibility_controls?.include_deprecated ?? false,
    resolver_version: "v1.0"
  };

  const envelope = runResolver(executionInput, activeCatalog.obligations);
  const draftResponse = transformToDraftResponse(envelope, activeCatalog.version);

  return validateDraftResponse(draftResponse);
}

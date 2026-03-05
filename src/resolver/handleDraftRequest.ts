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

  let envelope = runResolver(executionInput, activeCatalog.obligations);

  const intendedUse = request.equipment_context?.intended_use;
  const declaredCapabilities =
    (request.equipment_context?.declared_capabilities as string[] | undefined) ??
    [];

  if (intendedUse && intendedUse !== "HUMAN_TISSUE_STORAGE") {
    envelope = {
      ...envelope,
      obligations: envelope.obligations.filter(
        (o) => !o.obligation_id.startsWith("OBL_TISSUE_")
      ),
    };
  }

  envelope = {
    ...envelope,
    obligations: envelope.obligations.filter((o) => {
      const req = o.required_capabilities;
      if (!req || req.length === 0) return true;
      return req.every((c) => declaredCapabilities.includes(c));
    }),
  };

  const draftResponse = transformToDraftResponse(envelope, activeCatalog.version);

  return validateDraftResponse(draftResponse);
}

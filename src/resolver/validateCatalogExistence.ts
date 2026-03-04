import {
  CatalogExistenceValidationError,
  type UnknownCatalogIdentifiers
} from "./errors/CatalogExistenceValidationError";
import type { ActiveCatalog } from "./catalog/ActiveCatalog";

export function validateCatalogExistence(
  request: { equipment_context?: any; draft_scope?: any },
  activeCatalog: ActiveCatalog
) {
  const unknowns: UnknownCatalogIdentifiers = {};

  const equipmentType = request.equipment_context?.equipment_type;
  if (equipmentType && !activeCatalog.exists.equipmentTypes.has(equipmentType)) {
    unknowns.equipment_type = equipmentType;
  }

  const equipmentCohort = request.equipment_context?.equipment_cohort;
  if (
    equipmentCohort &&
    !activeCatalog.exists.equipmentCohorts.has(equipmentCohort)
  ) {
    unknowns.equipment_cohort = equipmentCohort;
  }

  const domains: string[] = request.draft_scope?.obligation_domains ?? [];
  if (domains.length > 0) {
    const missingDomains = domains.filter(
      (d) => !activeCatalog.exists.obligationDomains.has(d)
    );
    if (missingDomains.length > 0) {
      unknowns.obligation_domains = missingDomains;
    }
  }

  if (Object.keys(unknowns).length > 0) {
    throw new CatalogExistenceValidationError(activeCatalog.version, unknowns);
  }
}


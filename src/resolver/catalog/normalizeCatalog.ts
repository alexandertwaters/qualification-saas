import type { ActiveCatalog } from "./ActiveCatalog";
import { CatalogIntegrityError } from "../errors/CatalogIntegrityError";
import type { Obligation } from "../../../reference/obligations/obligation";
import type { EquipmentOntology } from "./loadEquipmentOntology";

export interface CatalogConfig {
  version: string;
  displayId: string;
  productionReady: boolean;
}

export function normalizeCatalog(
  config: CatalogConfig,
  rawCatalog: Obligation[],
  equipmentOntology?: EquipmentOntology
): ActiveCatalog {
  const { version, displayId, productionReady } = config;
  const exists = {
    equipmentTypes: new Set<string>(),
    equipmentCohorts: new Set<string>(),
    capabilities: new Set<string>(),
    intendedUses: new Set<string>(),
    obligationDomains: new Set<string>()
  };

  const deprecated = {
    equipmentTypes: new Set<string>(),
    equipmentCohorts: new Set<string>(),
    capabilities: new Set<string>(),
    intendedUses: new Set<string>(),
    obligationDomains: new Set<string>()
  };

  // Populate equipment from ontology (authoritative foundation)
  if (equipmentOntology) {
    equipmentOntology.equipmentTypes.forEach((t) => exists.equipmentTypes.add(t));
    equipmentOntology.equipmentCohorts.forEach((c) =>
      exists.equipmentCohorts.add(c)
    );
  }

  // Populate obligation domains from catalog
  for (const obligation of rawCatalog) {
    if (obligation.domain) {
      exists.obligationDomains.add(obligation.domain);

      if (obligation.lifecycle.status === "deprecated") {
        deprecated.obligationDomains.add(obligation.domain);
      }
    }
  }

  // Build lookup maps for integrity validation
  const obligationIds = new Set<string>(
    rawCatalog.map((o) => o.obligation_id)
  );

  const obligationById = new Map<string, Obligation>(
    rawCatalog.map((o) => [o.obligation_id, o])
  );

  // Validate supersession integrity (lifecycle.replaced_by_obligation_ids)
  for (const obligation of rawCatalog) {
    const replacedBy = obligation.lifecycle.replaced_by_obligation_ids ?? [];
    for (const replacementId of replacedBy) {
      if (!obligationIds.has(replacementId)) {
        throw new CatalogIntegrityError(
          `Obligation ${obligation.obligation_id} is replaced by ` +
            `${replacementId}, which does not exist in catalog version ${version}`
        );
      }
      if (replacementId === obligation.obligation_id) {
        throw new CatalogIntegrityError(
          `Obligation ${obligation.obligation_id} cannot replace itself`
        );
      }
      const replacement = obligationById.get(replacementId)!;
      if (replacement.lifecycle.status === "deprecated") {
        throw new CatalogIntegrityError(
          `Obligation ${obligation.obligation_id} is replaced by ` +
            `${replacement.obligation_id}, which is also deprecated`
        );
      }
    }
  }

  // Informational governance signal: detect long supersession chains
  const MAX_RECOMMENDED_CHAIN_LENGTH = 3;

  for (const obligation of rawCatalog) {
    let current: Obligation | undefined = obligation;
    let depth = 0;

    while (current) {
      const replacedBy = current.lifecycle.replaced_by_obligation_ids ?? [];
      const nextId = replacedBy[0];
      if (!nextId) break;

      const next = obligationById.get(nextId);
      if (!next) break;

      depth += 1;
      current = next;

      if (depth > MAX_RECOMMENDED_CHAIN_LENGTH) {
        console.warn(
          `[Catalog Governance] Obligation ${obligation.obligation_id} has a supersession chain length > ${MAX_RECOMMENDED_CHAIN_LENGTH}. ` +
            `Consider reviewing whether consolidation or re-articulation is appropriate.`
        );
        break;
      }
    }
  }

  return {
    version,
    displayId,
    productionReady,
    exists,
    deprecated,
    obligations: rawCatalog,
    equipmentOntology
  };
}

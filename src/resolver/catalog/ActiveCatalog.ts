import type { EquipmentOntology } from "./loadEquipmentOntology";

export interface NormalizedCatalogLookups {
  equipmentTypes: Set<string>;
  equipmentCohorts: Set<string>;
  capabilities: Set<string>;
  intendedUses: Set<string>;
  obligationDomains: Set<string>;
}

export interface ActiveCatalog {
  version: string;
  /** User-facing identifier for draft metadata (e.g. "Production Obligation Catalog v1.0") */
  displayId: string;
  /** True if catalog is production-ready; draft generation allowed only when true */
  productionReady: boolean;
  exists: NormalizedCatalogLookups;
  deprecated: NormalizedCatalogLookups;
  obligations: any[];
  equipmentOntology?: EquipmentOntology;
}

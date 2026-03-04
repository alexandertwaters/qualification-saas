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
  exists: NormalizedCatalogLookups;
  deprecated: NormalizedCatalogLookups;
  obligations: any[];
  equipmentOntology?: EquipmentOntology;
}

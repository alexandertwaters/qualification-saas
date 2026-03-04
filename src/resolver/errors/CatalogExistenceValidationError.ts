export interface UnknownCatalogIdentifiers {
  equipment_type?: string;
  equipment_cohort?: string;
  declared_capabilities?: string[];
  intended_use?: string;
  obligation_domains?: string[];
}

export class CatalogExistenceValidationError extends Error {
  readonly type = "CATALOG_EXISTENCE_VALIDATION_ERROR";
  readonly catalog_version: string;
  readonly unknown_identifiers: UnknownCatalogIdentifiers;

  constructor(catalogVersion: string, unknownIdentifiers: UnknownCatalogIdentifiers) {
    super("Resolver draft request contains unknown catalog identifiers");
    this.catalog_version = catalogVersion;
    this.unknown_identifiers = unknownIdentifiers;
  }
}


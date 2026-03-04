export class CatalogIntegrityError extends Error {
  readonly type = "CATALOG_INTEGRITY_ERROR";

  constructor(message: string) {
    super(message);
  }
}


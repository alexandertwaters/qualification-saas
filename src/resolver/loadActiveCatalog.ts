import { obligationCatalog } from "../../reference/obligations/obligationCatalog";
import { stubObligationCatalog } from "../../reference/obligations/stubObligationCatalog";
import { normalizeCatalog } from "./catalog/normalizeCatalog";
import { loadEquipmentOntology } from "./catalog/loadEquipmentOntology";
import type { ActiveCatalog } from "./catalog/ActiveCatalog";

/** Catalog identifiers: "production" | "production-v1.0" | "fallback" */
export const CATALOG_IDENTIFIERS = {
  PRODUCTION: "production",
  PRODUCTION_V1: "production-v1.0",
  FALLBACK: "fallback",
} as const;

export function loadActiveCatalog(): ActiveCatalog {
  const version = process.env.CATALOG_VERSION ?? CATALOG_IDENTIFIERS.PRODUCTION;
  const equipmentOntology = loadEquipmentOntology();

  switch (version) {
    case "production":
    case "production-v1.0":
    case "stub":
      // "stub" legacy alias: previously loaded full catalog; treat as production
      return normalizeCatalog(
        {
          version,
          displayId: "Production Obligation Catalog v1.0",
          productionReady: true,
        },
        obligationCatalog,
        equipmentOntology
      );
    case "fallback":
      return normalizeCatalog(
        {
          version: "fallback",
          displayId: "Fallback Obligation Catalog",
          productionReady: false,
        },
        stubObligationCatalog,
        equipmentOntology
      );
    default:
      throw new Error(
        `Unknown CATALOG_VERSION: ${version}. Use "production" or "production-v1.0" for full catalog, "fallback" for minimal.`
      );
  }
}

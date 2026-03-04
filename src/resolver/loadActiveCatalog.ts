import { obligationCatalog } from "../../reference/obligations/obligationCatalog";
import { normalizeCatalog } from "./catalog/normalizeCatalog";
import { loadEquipmentOntology } from "./catalog/loadEquipmentOntology";
import type { ActiveCatalog } from "./catalog/ActiveCatalog";

export function loadActiveCatalog(): ActiveCatalog {
  const version = process.env.CATALOG_VERSION ?? "stub";

  const equipmentOntology = loadEquipmentOntology();

  switch (version) {
    case "stub":
      return normalizeCatalog("stub", obligationCatalog, equipmentOntology);

    default:
      throw new Error(`Unknown CATALOG_VERSION: ${version}`);
  }
}

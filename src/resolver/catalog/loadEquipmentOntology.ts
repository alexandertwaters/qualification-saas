import * as fs from "fs";
import * as path from "path";

export interface EquipmentOntology {
  equipmentTypes: Set<string>;
  equipmentCohorts: Set<string>;
  equipmentByType: Map<string, { cohort: string; name: string }>;
  /** Map catalog_id (e.g. FACILITIES_UTILITIES) back to ontology value */
  catalogIdToCohort: Map<string, string>;
  /** Map catalog_id (e.g. EMS) back to ontology value */
  catalogIdToEquipmentType: Map<string, string>;
}

/**
 * Produce catalog_id-style identifier.
 */
function toCatalogId(s: string): string {
  return s
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^A-Za-z0-9_]/g, "")
    .toUpperCase();
}

const COHORTS_DIR = path.join(
  process.cwd(),
  "ontology",
  "cohorts"
);

/**
 * Load equipment ontology from cohort CSV files.
 * Equipment catalog is the authoritative foundation.
 */
export function loadEquipmentOntology(): EquipmentOntology {
  const equipmentTypes = new Set<string>();
  const equipmentCohorts = new Set<string>();
  const equipmentByType = new Map<string, { cohort: string; name: string }>();
  const catalogIdToCohort = new Map<string, string>();
  const catalogIdToEquipmentType = new Map<string, string>();

  if (!fs.existsSync(COHORTS_DIR)) {
    return {
      equipmentTypes,
      equipmentCohorts,
      equipmentByType,
      catalogIdToCohort,
      catalogIdToEquipmentType
    };
  }

  const files = fs.readdirSync(COHORTS_DIR).filter((f) => f.endsWith(".csv"));

  for (const file of files) {
    const filePath = path.join(COHORTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split(/\r?\n/).filter((line) => line.trim());

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line.trim()) continue;

      const parts = line.split("|");
      if (parts.length < 4) continue;

      const equipmentName = parts[0]?.trim() ?? "";
      const cohort = parts[1]?.trim() ?? "";
      const equipmentTypeId = parts[2]?.trim() ?? "";

      if (!cohort || !equipmentTypeId) continue;

      equipmentCohorts.add(cohort);
      equipmentTypes.add(equipmentTypeId);
      equipmentByType.set(equipmentTypeId, { cohort, name: equipmentName });

      const cohortId = toCatalogId(cohort);
      const typeId = toCatalogId(equipmentTypeId);
      if (cohortId) {
        equipmentCohorts.add(cohortId);
        catalogIdToCohort.set(cohortId, cohort);
      }
      if (typeId) {
        equipmentTypes.add(typeId);
        catalogIdToEquipmentType.set(typeId, equipmentTypeId);
      }
    }
  }

  return {
    equipmentTypes,
    equipmentCohorts,
    equipmentByType,
    catalogIdToCohort,
    catalogIdToEquipmentType
  };
}

import { loadEquipmentOntology } from "../resolver/catalog/loadEquipmentOntology";

export type CohortForUI = {
  id: string;
  name: string;
  equipment: Array<{ id: string; name: string }>;
};

export function getEquipmentCatalogForUI(): CohortForUI[] {
  const ontology = loadEquipmentOntology();
  const byCohort = new Map<string, Array<{ id: string; name: string }>>();

  for (const [equipmentTypeId, { cohort, name }] of ontology.equipmentByType) {
    const cohortId = cohort
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^A-Za-z0-9_]/g, "")
      .toUpperCase();

    if (!byCohort.has(cohortId)) {
      byCohort.set(cohortId, []);
    }
    const typeId = equipmentTypeId
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^A-Za-z0-9_]/g, "")
      .toUpperCase();
    byCohort.get(cohortId)!.push({ id: typeId, name: name || equipmentTypeId });
  }

  return Array.from(byCohort.entries()).map(([id, equipment]) => ({
    id,
    name: ontology.catalogIdToCohort.get(id) ?? id.replace(/_/g, " "),
    equipment: equipment.sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

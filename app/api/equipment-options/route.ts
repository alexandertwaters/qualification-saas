import { NextRequest, NextResponse } from "next/server";
import { getEquipmentOptionsForUI } from "../../../src/api/getEquipmentOptionsForUI";
import { loadEquipmentOntology } from "../../../src/resolver/catalog/loadEquipmentOntology";

function toOntologyValue(catalogId: string, mapping: Map<string, string>): string {
  const resolved = mapping.get(catalogId);
  if (resolved) return resolved;
  return catalogId.replace(/_/g, " ");
}

export async function GET(request: NextRequest) {
  const cohortId = request.nextUrl.searchParams.get("cohort");
  const equipmentId = request.nextUrl.searchParams.get("equipment");
  if (!cohortId || !equipmentId) {
    return NextResponse.json(
      { error: "cohort and equipment query params required" },
      { status: 400 }
    );
  }
  const ontology = loadEquipmentOntology();
  const cohort = toOntologyValue(cohortId, ontology.catalogIdToCohort);
  const equipment = toOntologyValue(equipmentId, ontology.catalogIdToEquipmentType);
  const options = getEquipmentOptionsForUI(cohort, equipment);
  return NextResponse.json(options, { status: 200 });
}

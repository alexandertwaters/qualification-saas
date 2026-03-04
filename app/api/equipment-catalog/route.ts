import { NextResponse } from "next/server";
import { getEquipmentCatalogForUI } from "../../../src/api/getEquipmentCatalogForUI";

export async function GET() {
  try {
    const catalog = getEquipmentCatalogForUI();
    return NextResponse.json(catalog, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

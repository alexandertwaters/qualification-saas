import { NextRequest, NextResponse } from "next/server";
import { handleDraftRequest } from "../../../src/resolver/handleDraftRequest";
import { generateDraftDocx } from "../../../src/draft/generateDraftDocx";
import type { DraftResponse } from "../../../src/resolver/transformToDraftResponse";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const draft = (await handleDraftRequest(body)) as DraftResponse;

    const format = request.nextUrl.searchParams.get("format");
    const accept = request.headers.get("accept") ?? "";

    const wantsDocx =
      format === "docx" ||
      accept.includes("application/vnd.openxmlformats-officedocument.wordprocessingml");

    if (wantsDocx) {
      const equipmentType =
        body.equipment_context?.equipment_type ?? "EQUIPMENT";
      const equipmentCohort =
        body.equipment_context?.equipment_cohort ?? "COHORT";
      const buffer = await generateDraftDocx(draft, {
        equipmentType,
        equipmentCohort,
      });

      const filename = `protocol-draft-${equipmentType}-${Date.now()}.docx`;
      return new NextResponse(new Uint8Array(buffer), {
        status: 200,
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "Content-Disposition": `attachment; filename="${filename}"`,
        },
      });
    }

    return NextResponse.json(draft, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

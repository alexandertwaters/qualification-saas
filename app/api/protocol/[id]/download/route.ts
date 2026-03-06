import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getProtocolById } from "@/lib/supabase/db";
import { generateDraftDocx } from "../../../../../src/draft/generateDraftDocx";
import type { DraftResponse } from "../../../../../src/resolver/transformToDraftResponse";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const protocol = await getProtocolById(id, user.id);
  if (!protocol || !protocol.draftResponse) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const buffer = await generateDraftDocx(
      protocol.draftResponse as unknown as DraftResponse,
      {
        equipmentType: protocol.equipmentType,
        equipmentCohort: protocol.equipmentCohort,
      }
    );

    const filename = `protocol-draft-${protocol.equipmentType}-${id.slice(0, 8)}.docx`;
    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Download failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

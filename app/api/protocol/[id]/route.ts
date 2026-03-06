import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getProtocolById } from "@/lib/supabase/db";

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
  if (!protocol) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(protocol);
}

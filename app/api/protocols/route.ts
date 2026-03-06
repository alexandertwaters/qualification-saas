import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getProtocolsForUser } from "@/lib/supabase/db";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const protocols = await getProtocolsForUser(user.id);
    return NextResponse.json(protocols);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch protocols";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

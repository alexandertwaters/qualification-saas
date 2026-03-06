import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { PLANS } from "@/lib/stripe";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // No active subscription = no draft allowance
  let limit = 0;
  try {
    const { data: sub } = await supabase
      .from("subscriptions")
      .select("plan")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();
    if (sub?.plan && sub.plan in PLANS) {
      limit = PLANS[sub.plan as keyof typeof PLANS].draftsLimit;
    }
  } catch {
    // No subscription or table missing => limit stays 0
  }

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { data: projects } = await supabase
    .from("projects")
    .select("id")
    .eq("user_id", user.id);

  if (!projects?.length) {
    return NextResponse.json({ used: 0, limit });
  }

  const projectIds = projects.map((p) => p.id);

  const { count, error } = await supabase
    .from("protocols")
    .select("id", { count: "exact", head: true })
    .in("project_id", projectIds)
    .gte("created_at", startOfMonth);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ used: count ?? 0, limit });
}

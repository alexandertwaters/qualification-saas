import { createClient } from "./server";

export type ProjectInsert = {
  user_id: string;
  equipment_type_id: string;
  equipment_cohort: string;
  intended_use?: string;
  declared_capabilities?: string[];
};

export type ProtocolInsert = {
  project_id: string;
  draft_response: Record<string, unknown>;
  html_content?: string;
};

export async function createProjectAndProtocol(
  userId: string,
  equipmentContext: {
    equipment_type: string;
    equipment_cohort: string;
    intended_use?: string;
    declared_capabilities?: string[];
  },
  draftResponse: Record<string, unknown>
): Promise<{ projectId: string; protocolId: string }> {
  const supabase = await createClient();

  const { data: project, error: projectError } = await supabase
    .from("projects")
    .insert({
      user_id: userId,
      equipment_type_id: equipmentContext.equipment_type,
      equipment_cohort: equipmentContext.equipment_cohort,
      intended_use: equipmentContext.intended_use ?? null,
      declared_capabilities: equipmentContext.declared_capabilities ?? [],
    })
    .select("id")
    .single();

  if (projectError || !project) {
    throw new Error(projectError?.message ?? "Failed to create project");
  }

  const { data: protocol, error: protocolError } = await supabase
    .from("protocols")
    .insert({
      project_id: project.id,
      draft_response: draftResponse,
      status: "draft",
    })
    .select("id")
    .single();

  if (protocolError || !protocol) {
    await supabase.from("projects").delete().eq("id", project.id);
    throw new Error(protocolError?.message ?? "Failed to create protocol");
  }

  return { projectId: project.id, protocolId: protocol.id };
}

export async function getProtocolsForUser(userId: string) {
  const supabase = await createClient();

  const { data: projects, error: projError } = await supabase
    .from("projects")
    .select("id, equipment_type_id, equipment_cohort, intended_use")
    .eq("user_id", userId);

  if (projError) throw new Error(projError.message);
  if (!projects?.length) return [];

  const projectIds = projects.map((p) => p.id);

  const { data: protocols, error: protError } = await supabase
    .from("protocols")
    .select("id, project_id, status, created_at")
    .in("project_id", projectIds)
    .order("created_at", { ascending: false });

  if (protError) throw new Error(protError.message);

  const projectMap = new Map(projects.map((p) => [p.id, p]));

  return (protocols ?? []).map((p) => {
    const proj = projectMap.get(p.project_id);
    return {
      id: p.id,
      equipmentType: proj?.equipment_type_id ?? "",
      equipmentCohort: proj?.equipment_cohort ?? "",
      intendedUse: proj?.intended_use,
      status: p.status,
      createdAt: p.created_at,
    };
  });
}

export async function getProtocolById(protocolId: string, userId: string) {
  const supabase = await createClient();

  const { data: protocol, error } = await supabase
    .from("protocols")
    .select(
      `
      id,
      draft_response,
      status,
      created_at,
      projects!inner (
        id,
        user_id,
        equipment_type_id,
        equipment_cohort,
        intended_use
      )
    `
    )
    .eq("id", protocolId)
    .single();

  if (error || !protocol) return null;

  const proj = protocol.projects as unknown as { user_id: string; equipment_type_id: string; equipment_cohort: string };
  if (proj?.user_id !== userId) return null;

  return {
    id: protocol.id,
    draftResponse: protocol.draft_response as Record<string, unknown>,
    status: protocol.status,
    createdAt: protocol.created_at,
    equipmentType: proj.equipment_type_id,
    equipmentCohort: proj.equipment_cohort,
  };
}

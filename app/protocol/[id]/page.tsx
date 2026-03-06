import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { getProtocolById } from "@/lib/supabase/db";
import { DraftPreviewView } from "@/app/components/DraftPreviewView";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function ProtocolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=/protocol/${id}`);
  }

  const protocol = await getProtocolById(id, user.id);
  if (!protocol || !protocol.draftResponse) {
    notFound();
  }

  const draft = protocol.draftResponse as {
    draft_metadata: { generated_at: string };
    version_anchors: { catalog_version: string };
    resolved_obligations: Array<{
      obligation_id: string;
      qualification_phase: string;
      obligation_domain: string;
      obligation_text: string;
      standards_references?: Array<{ standard_id: string; clause_reference: string }>;
    }>;
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/dashboard"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← My drafts
          </Link>
          <a href={`/api/protocol/${id}/download`} className={buttonVariants({ size: "sm" })}>
            Download Word
          </a>
        </div>

        <DraftPreviewView
          draft={draft}
          equipmentName={protocol.equipmentType.replace(/_/g, " ")}
          cohortName={protocol.equipmentCohort.replace(/_/g, " ")}
        />
      </main>
    </div>
  );
}

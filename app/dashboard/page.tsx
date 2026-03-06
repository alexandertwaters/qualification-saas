import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { DraftList } from "./DraftList";
import { AllowanceDisplay } from "./AllowanceDisplay";
import { buttonVariants } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/dashboard");
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          My drafts
        </h1>
        <p className="text-muted-foreground mb-8">
          View and download your generated protocol drafts.
        </p>

        <AllowanceDisplay />

        <DraftList />

        <div className="mt-8">
          <Link href="/" className={buttonVariants()}>
            Generate a new draft
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Draft allowance is shown above. Stripe integration will enforce plan limits (Starter 10, Growth 25, Scale 60 per month).
        </p>
      </main>
    </div>
  );
}

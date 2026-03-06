import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { DraftList } from "./DraftList";
import { AllowanceDisplay } from "./AllowanceDisplay";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/dashboard");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          My drafts
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          View and download your generated protocol drafts.
        </p>

        <AllowanceDisplay />

        <DraftList />

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            Generate a new draft
          </Link>
        </div>

        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          Draft allowance is shown above. Stripe integration will enforce plan limits (Starter 10, Growth 25, Scale 60 per month).
        </p>
      </main>
    </div>
  );
}

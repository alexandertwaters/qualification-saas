import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SubscribeButtons } from "./SubscribeButtons";

export default async function BillingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/billing");
  }

  const { data: sub } = await supabase
    .from("subscriptions")
    .select("plan, status")
    .eq("user_id", user.id)
    .maybeSingle();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          Billing
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Subscribe to generate qualification protocol drafts. Annual billing saves 17%.
        </p>

        {sub?.status === "active" ? (
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 mb-8">
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              Current plan: {sub.plan}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Manage your subscription in the Stripe customer portal (coming soon).
            </p>
          </div>
        ) : (
          <SubscribeButtons />
        )}

        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="text-left p-4 font-medium">Plan</th>
                <th className="text-left p-4 font-medium">Monthly</th>
                <th className="text-left p-4 font-medium">Annual</th>
                <th className="text-left p-4 font-medium">Drafts/month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="p-4">Starter</td>
                <td className="p-4">$99</td>
                <td className="p-4">$990</td>
                <td className="p-4">10</td>
              </tr>
              <tr className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="p-4">Growth</td>
                <td className="p-4">$249</td>
                <td className="p-4">$2,490</td>
                <td className="p-4">25</td>
              </tr>
              <tr className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="p-4">Scale</td>
                <td className="p-4">$499</td>
                <td className="p-4">$4,990</td>
                <td className="p-4">60</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
          Add your Stripe Price IDs to environment variables to enable checkout. See{" "}
          <code className="rounded bg-zinc-200 dark:bg-zinc-800 px-1">.env.example</code>.
        </p>

        <p className="mt-4">
          <Link href="/dashboard" className="text-sm text-zinc-500 hover:underline">
            ← Back to dashboard
          </Link>
        </p>
      </main>
    </div>
  );
}

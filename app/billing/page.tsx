import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SubscribeButtons } from "./SubscribeButtons";
import { ManageSubscriptionButton } from "./ManageSubscriptionButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen bg-muted/30">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Billing
        </h1>
        <p className="text-muted-foreground mb-8">
          Subscribe to generate qualification protocol drafts. Annual billing saves 17%.
        </p>

        {sub?.status === "active" ? (
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <CardTitle className="capitalize">Current plan: {sub.plan}</CardTitle>
                  <CardDescription>
                    Update payment method, view invoices, or cancel.
                  </CardDescription>
                </div>
                <ManageSubscriptionButton />
              </div>
            </CardHeader>
          </Card>
        ) : (
          <SubscribeButtons />
        )}

        <Card className="overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium">Plan</th>
                <th className="text-left p-4 font-medium">Monthly</th>
                <th className="text-left p-4 font-medium">Annual</th>
                <th className="text-left p-4 font-medium">Drafts/month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-4">Starter</td>
                <td className="p-4">$99</td>
                <td className="p-4">$990</td>
                <td className="p-4">10</td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-4">Growth</td>
                <td className="p-4">$249</td>
                <td className="p-4">$2,490</td>
                <td className="p-4">25</td>
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-4">Scale</td>
                <td className="p-4">$499</td>
                <td className="p-4">$4,990</td>
                <td className="p-4">60</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <p className="mt-6 text-sm text-muted-foreground">
          Add your Stripe Price IDs to environment variables to enable checkout. See{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">.env.example</code>.
        </p>

        <p className="mt-4">
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
            ← Back to dashboard
          </Link>
        </p>
      </main>
    </div>
  );
}

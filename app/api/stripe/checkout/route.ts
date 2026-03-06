import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, annual = true, successUrl, cancelUrl } = body;

    if (!plan) {
      return NextResponse.json(
        { error: "plan required (starter, growth, scale)" },
        { status: 400 }
      );
    }

    const envKey = `STRIPE_PRICE_${plan.toUpperCase()}_${annual ? "ANNUAL" : "MONTHLY"}`;
    const priceId = process.env[envKey];

    if (!priceId) {
      return NextResponse.json(
        { error: `Price ID not configured. Add ${envKey} to environment.` },
        { status: 500 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl ?? `${request.nextUrl.origin}/dashboard?subscription=success`,
      cancel_url: cancelUrl ?? `${request.nextUrl.origin}/billing`,
      customer_email: user.email,
      metadata: {
        user_id: user.id,
        plan,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

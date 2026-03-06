import Stripe from "stripe";

export function getStripe(): Stripe {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    throw new Error("STRIPE_SECRET_KEY is required for Stripe");
  }
  return new Stripe(secret, { typescript: true });
}

export const PLANS = {
  starter: { draftsLimit: 10, monthlyPrice: 99, annualPrice: 990 },
  growth: { draftsLimit: 25, monthlyPrice: 249, annualPrice: 2490 },
  scale: { draftsLimit: 60, monthlyPrice: 499, annualPrice: 4990 },
} as const;

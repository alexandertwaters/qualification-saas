# Step 3: Configure Stripe Price IDs & Webhook

Stripe Checkout uses **Price IDs** (`price_...`), not Product IDs (`prod_...`). Each product has one or more prices attached.

## 1. Get Price IDs

**Option A — Run the helper script (requires `STRIPE_SECRET_KEY` in `.env.local`):**

```bash
node --env-file=.env.local scripts/getStripePrices.mjs
```

This outputs lines like:

```
STRIPE_PRICE_STARTER_ANNUAL=price_xxx  # Starter Annual ($990/year)
STRIPE_PRICE_STARTER_MONTHLY=price_yyy  # Starter Monthly ($99/month)
...
```

Copy each line into `.env.local`.

**Option B — From Stripe Dashboard:**

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Open each product (Starter Annual, Starter Monthly, Growth Annual, etc.)
3. In the **Pricing** section, copy the **Price ID** (starts with `price_`)

Product IDs you created:

| Product        | Product ID            |
|----------------|------------------------|
| Starter Annual | prod_U5xSnzUkR0lnFZ   |
| Starter Monthly| prod_U5xTW8iduono76   |
| Growth Annual  | prod_U5xVA7H3FM8Vsc   |
| Growth Monthly | prod_U5xUbdnYFrSobO   |
| Scale Annual   | prod_U5xX7llsZaf6po   |
| Scale Monthly  | prod_U5xWvL6Z9TZ2bH   |

## 2. Add env vars

Add these to `.env.local` (and to Vercel → Settings → Environment Variables):

| Variable                    | Value                    |
|----------------------------|--------------------------|
| `STRIPE_PRICE_STARTER_ANNUAL`  | `price_...` from Stripe  |
| `STRIPE_PRICE_STARTER_MONTHLY` | `price_...` from Stripe  |
| `STRIPE_PRICE_GROWTH_ANNUAL`   | `price_...` from Stripe  |
| `STRIPE_PRICE_GROWTH_MONTHLY`  | `price_...` from Stripe  |
| `STRIPE_PRICE_SCALE_ANNUAL`    | `price_...` from Stripe  |
| `STRIPE_PRICE_SCALE_MONTHLY`   | `price_...` from Stripe  |

## 3. Create webhook in Stripe Dashboard

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. **Add endpoint**
3. **Endpoint URL:** `https://your-app.vercel.app/api/stripe/webhook` (replace with your Vercel URL)
4. **Events to send:** select:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. **Add endpoint**
6. Copy the **Signing secret** (`whsec_...`) and add to `.env.local` as `STRIPE_WEBHOOK_SECRET`
7. Add `STRIPE_WEBHOOK_SECRET` to Vercel env vars as well

## 4. Ruby webhook (qualification_saas/stripe/)

The `qualification_saas/stripe/` folder has a sample Sinatra webhook for local testing with Stripe CLI. Your production app uses the Next.js route at `/api/stripe/webhook`. You do **not** need the Ruby server for production.

For local webhook testing:

```bash
# Terminal 1: run Ruby server
cd qualification_saas/stripe && ruby server.rb -o 0.0.0.0

# Terminal 2: forward Stripe events
stripe listen --forward-to localhost:4242/webhook
```

To test the **Next.js** webhook locally, use ngrok or similar to expose your dev server, then use that URL in Stripe CLI.

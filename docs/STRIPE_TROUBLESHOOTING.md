# Stripe Subscription Troubleshooting

## Symptom: Transaction in Stripe, but no subscription in app

If you completed checkout and see the transaction in Stripe Dashboard, but the app shows:
- No draft allowance (0 of 0)
- Cannot generate drafts (403 "Active subscription required")
- Billing page shows "Subscribe" instead of current plan

…then the webhook likely never wrote the subscription to Supabase.

### 1. Verify webhook is configured

1. [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Confirm an endpoint exists for `https://your-app.vercel.app/api/stripe/webhook`
3. Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Check **Recent deliveries** for failures or 4xx/5xx responses

### 2. Verify webhook secret

- `STRIPE_WEBHOOK_SECRET` in Vercel must match the signing secret for that endpoint
- Use the secret for the **production** endpoint (not the Stripe CLI `whsec_…` for local testing)

### 3. Verify Supabase

- Run migrations in production: `supabase/migrations/001_add_draft_response.sql`, `002_add_subscriptions.sql`
- Confirm `subscriptions` table exists
- `SUPABASE_SERVICE_ROLE_KEY` must be set in Vercel (webhook uses it to bypass RLS)

### 4. Manual fix for existing test subscription

If you already paid and the webhook failed, you can manually insert a row:

1. Supabase Dashboard → Table Editor → `subscriptions`
2. Insert row:
   - `user_id`: your user UUID from `auth.users`
   - `stripe_customer_id`: from Stripe Dashboard → Customers (customer ID, e.g. `cus_xxx`)
   - `stripe_subscription_id`: from Stripe Dashboard → Subscriptions (subscription ID, e.g. `sub_xxx`)
   - `plan`: `starter`, `growth`, or `scale`
   - `status`: `active`
   - `updated_at`: `now()`

## Customer Portal (manage/cancel subscription)

The "Manage subscription" button opens Stripe's Customer Portal. Ensure it's enabled:

1. [Stripe Dashboard → Settings → Billing → Customer portal](https://dashboard.stripe.com/settings/billing/portal)
2. Enable features you want: **Cancel subscriptions**, **Update payment method**, **View invoices**
3. Save

## Email confirmation

Stripe can send receipts automatically:

1. [Stripe Dashboard → Settings → Customer emails](https://dashboard.stripe.com/settings/emails)
2. Enable **Successful payments** and/or **Subscription receipts**

This sends emails from Stripe; no code changes needed. For custom transactional emails (e.g. “Welcome to Qualification Protocol Draft”), use Resend/Mailgun and integrate with the webhook.

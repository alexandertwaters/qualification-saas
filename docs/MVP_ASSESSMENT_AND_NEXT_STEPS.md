# MVP Assessment & Next Steps

## Scope exclusions (MVP)

The following are **excluded** from MVP scope:

- **URS/PVP** — Not included in generated draft protocol templates
- **Equipment calculator** — Loggers, dummy load, mapping rules excluded (can be construed as prescriptive rather than advisory)
- **Control plan** — Maintenance, revalidation, SPC section excluded from generated drafts

---

## 1. MVP 14‑Day Map — Status Assessment

### Week 1 — Core engine and data

| Day | Task | Status | Notes |
|-----|------|--------|------|
| **1** | Repo + infra | **Done** | Next.js + TypeScript ✓. GitHub repo, Supabase project, Vercel connected. |
| **2** | Auth + basic UI shell | **Done** | Supabase Auth, signup, login, session, dashboard, protected routes. |
| **3** | Standards metadata + equipment tables | **Partial (different approach)** | File-based ontology (`ontology/cohorts/*.csv`) and obligation CSVs instead of Postgres. No `standards`, `clauses`, `equipment_types`, `equipment_rules` in DB. |
| **4–5** | Protocol generator core | **Partial** | Obligation resolver + Word/HTML output ✓. No URS/PVP; IQ/OQ/PQ obligations only. Template engine differs from planned HTML merge. |
| **6–7** | Equipment calculator + control plan | **Excluded** | Excluded from MVP scope (advisory only; calculator can be construed as prescriptive). |

### Week 2 — Billing, export, polish, deploy

| Day | Task | Status | Notes |
|-----|------|--------|------|
| **8** | Stripe integration | **Done** | Stripe products (Starter/Growth/Scale, annual + monthly), checkout, webhook, price IDs. |
| **9** | Export and download | **Done (partial)** | Word (.docx) export ✓. In-site HTML preview ✓. No PDF export. |
| **10** | Compliance pages + cookie banner | **Done** | Privacy, T&C, cookie banner ✓. |
| **11** | Email notifications | **Not done** | No Resend/Mailgun or transactional emails. |
| **12** | Landing page + demo content | **Partial** | Functional protocol form page ✓. Not a marketing landing with CTA/demo. |
| **13** | QA and user flow testing | **Not done** | No automated E2E tests. |
| **14** | Deploy and soft launch | **Partial** | Vercel project connected; deploys from `main`. See section 9 for repo/Vercel details. |

### Success criteria

| Criterion | Status |
|-----------|--------|
| User can sign up, create validation job (equipment + use case + capabilities), get downloadable protocol draft | **Done** — Signup, draft storage, My drafts, protocol view/download ✓. |
| Billing active: Stripe subscription + invoice in dashboard | **Done** |
| Cookie banner, privacy, T&C | **Done** |
| Deployed to Vercel, connected to Supabase | **Done** — Vercel ✓; Supabase ✓. |
| Security hardening (headers, cookies, no secrets in frontend) | **Required before MVP complete** — See section 3. |

### Tech stack alignment

| Planned | Current |
|---------|---------|
| Next.js + TypeScript | ✓ |
| React, TailwindCSS | ✓ |
| shadcn/ui | Planned (adopt before MVP complete) |
| Supabase (Postgres, Auth, Storage) | Auth integrated (signup, login, session) |
| Vercel | ✓ Connected ([validation-saas](https://vercel.com/alexandertwaters-projects/validation-saas)) |
| Stripe Billing | Checkout + webhook integrated |
| Resend/Mailgun | Not integrated |
| Cookie/Policy | Basic cookie banner + Privacy/T&C pages |

### Database tables

**Planned MVP tables:** `users`, `projects`, `standards`, `clauses`, `equipment_types`, `equipment_rules`, `protocols`, `billing`.

**Current:** File-based ontology; Postgres for `projects`, `protocols` (with `draft_response`), `subscriptions`. Migrations: `001_add_draft_response.sql`, `002_add_subscriptions.sql`.

### API endpoints

| Planned | Current |
|---------|---------|
| `POST /api/generate` | `POST /api/draft` (generates protocol, stores when user logged in) |
| `GET /api/protocol/:id` | ✓ Implemented |
| `POST /api/stripe/webhook` | ✓ Implemented |
| `POST /api/email/send` | Not implemented |
| — | `GET /api/equipment-catalog` ✓ |
| — | `GET /api/equipment-options` ✓ |
| — | `POST /api/stripe/checkout` ✓ |
| — | `GET /api/allowance` ✓ |
| — | `GET /api/protocols` ✓ |

### UI pages

| Planned | Current |
|---------|---------|
| `/` landing | ✓ (protocol form, not marketing) |
| `/signup`, `/login` | ✓ Implemented |
| `/dashboard` | ✓ My drafts list, allowance display |
| `/projects/new` | Partial (form on `/`) |
| `/protocol/:id` | ✓ View + download persisted protocols |
| `/billing` | ✓ Implemented |

---

## 2. What’s completed

- **Obligation catalog and resolver** — Standards-based obligations, equipment applicability, domain/phase derivation, capability-based filtering
- **Equipment selection UI** — Cohort and equipment type, dynamic use case and capabilities (per cohort/equipment via ontology)
- **Standards display** — Applicable standards shown beside each obligation (no "—")
- **Protocol draft generation** — Obligations resolved from equipment, use case, and capabilities
- **In-site draft view** — Human-readable HTML preview in a view panel
- **Word (.docx) download** — Downloadable protocol draft
- **Equipment catalog API** — `/api/equipment-catalog`, `/api/equipment-options` (dynamic use case/capabilities per equipment)
- **Draft API** — `POST /api/draft` (JSON or Word, stores to Postgres when user logged in)
- **Advisory positioning** — Notice that users bear responsibility
- **Supabase Auth** — Signup, login, session, auth callback, middleware refresh
- **Draft storage and revisitation** — My drafts list in dashboard, protocol view + download
- **Stripe billing** — Checkout, webhook (checkout.session.completed, subscription updated/deleted), Starter/Growth/Scale (annual + monthly)
- **Subscription allowance** — "X of Y drafts used" display
- **Compliance** — Privacy, T&C, cookie banner

---

## 3. What still needs to be done (MVP scope)

### High priority

1. ~~**Draft protocol revisitation**~~ — **Done.** Dashboard with My drafts; view and download at `/protocol/[id]`.
2. ~~**Subscription allowance display**~~ — **Done.** "X of Y drafts used" on dashboard.
3. ~~**Supabase setup**~~ — **Done.** Project, DB, Auth configured.
4. ~~**Auth flow**~~ — **Done.** Signup, login, session, protected routes.
5. ~~**Stripe**~~ — **Done.** Products, checkout, webhook, price IDs; see section 9 and `docs/STRIPE_STEP3.md`.
6. ~~**Draft storage**~~ — **Done.** Protocols stored in Postgres; `001_add_draft_response.sql`, `002_add_subscriptions.sql`.

### Medium priority

7. **Demo video** — *Deferred.* For visitors (not yet subscribed): a demo video on the landing page showing the workflow (select equipment → use case → capabilities → generate draft → scroll draft → download .docx). No free trial; demo replaces it. **Create only after:** draft template protocol generation is enhanced and site UI/UX is finalized.
8. **Landing page** — Marketing layout, CTA; add demo video once draft generation and UI/UX are finalized (see item 7).
9. **shadcn/ui** — Adopt shadcn for consistent, accessible UI components.
10. ~~**Compliance**~~ — **Done.** Privacy, T&C, cookie banner.

### Lower priority

11. **Email** — Signup, renewal, invoice receipts
12. **PDF export** — Optional PDF in addition to Word
13. **QA** — E2E and regression tests

### Protocol generation (future improvement)

- **Natural workflow order** — IQ/OQ/PQ obligations rendered in natural human workflow order
- **Segmented sections** — Obligations woven into segmented, natural language IQ/OQ/PQ sections
- **Summarization tables** — Phase-level tables of obligations and standards reflecting natural workflow
- **Example Protocol Drafts alignment** — Document structure and language adapted from `docs/Example Protocol Drafts`

### Security hardening (MVP gate)

**All items below must be satisfied before MVP is considered complete.**

*Research context:* Rapidly-built ("vibe-coded") sites commonly ship with: zero CSP, no HSTS, no X-Frame-Options; cookies without Secure/HttpOnly/SameSite (especially session cookies); exposed server versions in headers; hardcoded API keys; Stripe secret keys or Supabase service role keys in frontend; secrets committed to git. Incidents (e.g. Moltbook, exposed Supabase keys in client-side JS) show how a single leaked key can expose data and incur large cloud bills. OWASP Session Management Cheat Sheet, MDN Secure cookie guides, and Next.js CSP docs inform these requirements.

#### Response headers

| Requirement | Notes |
|-------------|-------|
| Remove server/version from headers | `X-Powered-By` and other version-leaking headers must not expose Next.js or runtime versions. Use `poweredByHeader: false` in `next.config.js`; consider `next-secure-headers` or custom middleware. |
| Content-Security-Policy (CSP) | Mitigate XSS, clickjacking, and code injection. Use nonces for inline scripts where needed. Apply via middleware, exclude API routes/static assets as appropriate. |
| Strict-Transport-Security (HSTS) | Force HTTPS. Set `max-age`, `includeSubDomains`, `preload` where applicable. |
| X-Frame-Options | `SAMEORIGIN` or `DENY` to prevent clickjacking. |
| X-Content-Type-Options | `nosniff` to prevent MIME sniffing. |
| Referrer-Policy | Limit referrer leakage (`strict-origin-when-cross-origin` or tighter). |
| Permissions-Policy | Restrict browser features (camera, geolocation, etc.) not needed by the app. |

#### Cookie security

| Requirement | Notes |
|-------------|-------|
| Session cookies: HttpOnly | Prevents JavaScript access; protects against XSS-based session theft. |
| Session cookies: Secure | Transmit only over HTTPS. |
| Session cookies: SameSite | `Strict` or `Lax` to reduce CSRF risk. |
| Cookie prefix | Use `__Secure-` or `__Host-` where supported to prevent overwrite by insecure sources. |

Supabase Auth and Stripe handle many cookie details; verify their defaults and override where necessary.

#### API keys and secrets (never in frontend)

| Requirement | Notes |
|-------------|-------|
| No Stripe secret key in frontend | `STRIPE_SECRET_KEY` must exist only in server env; never in `NEXT_PUBLIC_*` or client bundles. |
| No Supabase service role key in frontend | `SUPABASE_SERVICE_ROLE_KEY` bypasses RLS; must stay server-side only. Use anon key in client with RLS. |
| No other secrets in client code | Audit for hardcoded keys, tokens, or URLs that expose sensitive services. |
| No secrets in git | `.gitignore` must exclude `.env*`; use pre-commit hooks or secret scanning (e.g. GitHub). |

#### Application-level security

| Requirement | Notes |
|-------------|-------|
| No bot signups | CAPTCHA, rate limits, or equivalent. |
| No false invoices | Only real Stripe orders generate invoices. |
| No draft without payment | Draft preview and generation gated behind subscription. |
| Real users only | Password reset, email on orders, invoice delivery. |
| Help pathway | Automated help request flow for payment or draft issues. |

---

### Product and discoverability

- **Product name and domain** — Determine optimal product name and custom domain
- **SEO / GEO / AEO** — Optimize for organic traffic, generative engine optimization, and answer engine optimization; improve SRP ranking for subject-matter experts searching for this type of tool

### Obligation catalog identifiers

- **Production Obligation Catalog v1.0** — Comprehensive catalog used for draft generation. Selected via `CATALOG_VERSION=production` or `production-v1.0`. Draft preview generates only when this catalog is active.
- **Fallback Obligation Catalog** — Minimal catalog for testing; draft generation is disabled when active (`CATALOG_VERSION=fallback`).

---

## 4. GitHub and Vercel (current setup)

- **Repository:** [alexandertwaters/qualification_saas](https://github.com/alexandertwaters/qualification_saas)
- **Active branch:** `main`
- **Vercel deployment:** [validation-saas](https://vercel.com/alexandertwaters-projects/validation-saas)
- **Vercel source:** `main` branch of GitHub repo
- **Git:** Initialized and remote configured

To push changes and trigger a Vercel deploy: **done**

```bash
cd c:\projects\qualification_saas
git add .
git status   # review
git commit -m "your message"
git push origin main   # or merge your branch into main first
```

**Ensure `.gitignore` excludes:** `node_modules/`, `.next/`, `.env`, `.env.local`, `.env*.local`, `.DS_Store`

---

## 5. Supabase deliverables

### 5.1 Create project **done**

1. [supabase.com](https://supabase.com) → New project
2. Name, region, database password
3. Wait for provisioning

### 5.2 Enable Auth **done**

1. Authentication → Providers → Email (enable)
2. Optional: Google, GitHub, etc.
3. Auth → URL configuration: set site URL (e.g. `https://validation-saas.vercel.app/`)
4. Add redirect URLs for local dev: `http://localhost:3000`, `http://localhost:3000/**`

### 5.3 Create tables (minimal) **done**

Run migrations in SQL editor. First, the base tables:

```sql
-- Projects (validation jobs) **done**
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  equipment_type_id TEXT NOT NULL,
  equipment_cohort TEXT NOT NULL,
  volume_l NUMERIC,
  risk_level TEXT,
  standards JSONB DEFAULT '[]',
  intended_use TEXT,
  declared_capabilities JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Protocols (generated drafts) **done**
CREATE TABLE protocols (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  html_content TEXT,
  docx_stored_path TEXT,
  status TEXT DEFAULT 'draft',
  revision_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Row-level security **done**
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE protocols ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own projects"
  ON projects FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage protocols for own projects"
  ON protocols FOR ALL
  USING (
    EXISTS (SELECT 1 FROM projects p WHERE p.id = protocols.project_id AND p.user_id = auth.uid())
  );
```

Then run `supabase/migrations/001_add_draft_response.sql` and `002_add_subscriptions.sql` to add `draft_response` on protocols and the `subscriptions` table for Stripe.

### 5.4 API keys

1. Settings → API
2. Copy `Project URL` and `anon` (public) key for Vercel env **done**
3. Optional: `service_role` key for server-only admin tasks (keep secret)

---

## 6. Vercel actions for deployment

### 6.1 Connect GitHub

GitHub is already connected. Source: `main` branch of [qualification_saas](https://github.com/alexandertwaters/qualification_saas).

### 6.2 Environment variables **done**

In Project → Settings → Environment Variables add:

| Name | Value | Notes |
|------|-------|-------|
| `CATALOG_VERSION` | `production` | Use `production` or `production-v1.0` for full catalog (required for draft generation). `fallback` = minimal catalog only (draft generation disabled). Default: `production`. |
| `NEXT_PUBLIC_SUPABASE_URL` | From Supabase | Project URL | **done** |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From Supabase | Anon key | **done** |
| `SUPABASE_SERVICE_ROLE_KEY` | From Supabase | Service role | For Stripe webhook |
| `STRIPE_SECRET_KEY` | From Stripe | Secret key | For checkout |
| `STRIPE_WEBHOOK_SECRET` | From Stripe | Webhook signing secret | For webhook verification |
| `STRIPE_PRICE_STARTER_ANNUAL` etc. | From Stripe | Price IDs | Configured; see `docs/STRIPE_STEP3.md` |

### 6.3 Build settings **done**

- Build command: `npm run build` (default) **done - default 'npm run build' or'next build'**
- Output directory: `.next` (default) **done- Next.js default**
- Install command: `npm install` (default) **done - 'yarn install', 'pnpm install', 'npm install', or 'bun install'**

### 6.4 Deploy

1. Save env vars
2. Redeploy (or push to `main` for automatic deploys)
3. Open the deployed URL and test protocol generation. **Resolved:** Standards now display beside each obligation; use case and capabilities are dynamic per cohort/equipment; obligations filtered by use case and capabilities. Stripe and Resend accounts created. **Still needed:** Natural workflow order, segmented IQ/OQ/PQ sections, summarization tables (see section 3).

### 6.5 Custom domain (optional)

Project → Settings → Domains → Add (e.g. `app.yourdomain.com`)

---

## 7. Immediate sequence

1. Merge to `main` and confirm Vercel deploys **done**
2. Create Supabase project and run SQL for `projects` and `protocols` **done**
3. Add Supabase env vars in Vercel **done**
4. Implement Supabase Auth (signup, login) and protected routes **done**
5. Implement draft storage and revisitation (My drafts / dashboard with list of generated drafts) **done**
6. Implement subscription allowance display (X of Y drafts used) **done**
7. Implement Stripe products for Starter/Growth/Scale and webhook **done**
8. Add demo video for visitors on landing page — *Deferred until* draft preview (template protocol generation) is enhanced and site UI/UX is finalized.
9. Add compliance (privacy, T&C, cookie banner) **done**
10. Adopt shadcn/ui for UI components
11. Complete security hardening (section 3) — response headers, cookie flags, API key hygiene, CSP, HSTS, X-Frame-Options, etc. **MVP gate**

---

## 8. Legal notice

> This tool provides guidance and templates; users must maintain legally obtained standards and bear responsibility for compliance. — Agrocado LLC

**Needs hardening:** Pure advisory/informational notice, no guarantees of compliance or accuracy. Value = startup time savings and scope refinement. Notice that standards are not stored and content is not taken from standards (copyright protected). Frame obligations as interpretations by a former med device validation engineer.

---

## 9. Pricing tiers (MVP)

**No free trial** — Demo video on the landing page replaces a free trial. *Create demo only after draft template generation is enhanced and UI/UX is finalized.*

**Annual billing preferred/default** — 17% discount vs monthly.

| Tier | Monthly | Annual | Users | Drafts/month | Features |
|------|---------|--------|-------|--------------|----------|
| **Starter** | $99/mo | $990/yr | Up to 2 | Up to 10 | Full equipment + standards catalog |
| **Growth** | $249/mo | $2,490/yr | Up to 10 | Up to 25 | Core functionality + priority support |
| **Scale** | $499/mo | $4,990/yr | Up to 50 | Up to 60 | Core functionality + priority support |

Users must be aware of their plan’s draft allowance (e.g. “8 of 10 drafts used”) and have a place to view generated drafts for revisitation.

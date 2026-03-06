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
| **1** | Repo + infra | **Partial** | Next.js + TypeScript ✓. GitHub repo exists. Supabase project and Vercel link need setup. |
| **2** | Auth + basic UI shell | **Not done** | No Supabase Auth, login, signup, dashboard. |
| **3** | Standards metadata + equipment tables | **Partial (different approach)** | File-based ontology (`ontology/cohorts/*.csv`) and obligation CSVs instead of Postgres. No `standards`, `clauses`, `equipment_types`, `equipment_rules` in DB. |
| **4–5** | Protocol generator core | **Partial** | Obligation resolver + Word/HTML output ✓. No URS/PVP; IQ/OQ/PQ obligations only. Template engine differs from planned HTML merge. |
| **6–7** | Equipment calculator + control plan | **Excluded** | Excluded from MVP scope (advisory only; calculator can be construed as prescriptive). |

### Week 2 — Billing, export, polish, deploy

| Day | Task | Status | Notes |
|-----|------|--------|------|
| **8** | Stripe integration | **Not done** | No Stripe product, subscription, webhook, or invoice flow. |
| **9** | Export and download | **Done (partial)** | Word (.docx) export ✓. In-site HTML preview ✓. No PDF export. |
| **10** | Compliance pages + cookie banner | **Not done** | No privacy, T&C, cookie banner. |
| **11** | Email notifications | **Not done** | No Resend/Mailgun or transactional emails. |
| **12** | Landing page + demo content | **Partial** | Functional protocol form page ✓. Not a marketing landing with CTA/demo. |
| **13** | QA and user flow testing | **Not done** | No automated E2E tests. |
| **14** | Deploy and soft launch | **Partial** | Vercel project connected; deploys from `main`. See section 9 for repo/Vercel details. |

### Success criteria

| Criterion | Status |
|-----------|--------|
| User can sign up, create validation job (equipment + use case + capabilities), get downloadable protocol draft | **Partial** — Equipment selection + draft protocol ✓. No signup, draft storage, or revisitation. |
| Billing active: Stripe subscription + invoice in dashboard | **Not done** |
| Cookie banner, privacy, T&C | **Not done** |
| Deployed to Vercel, connected to Supabase | **Partial** — Vercel ✓; Supabase not yet connected. |

### Tech stack alignment

| Planned | Current |
|---------|---------|
| Next.js + TypeScript | ✓ |
| React, TailwindCSS | ✓ |
| shadcn/ui | Not used |
| Supabase (Postgres, Auth, Storage) | Auth integrated (signup, login, session) |
| Vercel | ✓ Connected ([validation-saas](https://vercel.com/alexandertwaters-projects/validation-saas)) |
| Stripe Billing | Checkout + webhook integrated |
| Resend/Mailgun | Not integrated |
| Cookie/Policy | Basic cookie banner + Privacy/T&C pages |

### Database tables

**Planned MVP tables:** `users`, `projects`, `standards`, `clauses`, `equipment_types`, `equipment_rules`, `protocols`, `billing`.

**Current:** File-based. Ontology and obligations live in CSV/TS, no Supabase tables.

### API endpoints

| Planned | Current |
|---------|---------|
| `POST /api/generate` | `POST /api/draft` (generates protocol, no storage) |
| `GET /api/protocol/:id` | Not implemented |
| `POST /api/stripe/webhook` | Not implemented |
| `POST /api/email/send` | Not implemented |
| — | `GET /api/equipment-catalog` ✓ |
| — | `GET /api/equipment-options` ✓ |

### UI pages

| Planned | Current |
|---------|---------|
| `/` landing | ✓ (protocol form, not marketing) |
| `/signup`, `/login` | ✓ Implemented |
| `/dashboard` | ✓ Shell (My drafts placeholder) |
| `/projects/new` | Partial (form on `/`) |
| `/protocol/:id` | Partial (preview in-form, no persisted protocol) |
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
- **Draft API** — `POST /api/draft` (JSON or Word)
- **Advisory positioning** — Notice that users bear responsibility

---

## 3. What still needs to be done (MVP scope)

### High priority

1. **Draft protocol revisitation** — Users must be able to revisit generated draft protocol templates. A dedicated place (e.g. dashboard or “My drafts”) to view, re-open, and re-download drafts they have generated.
2. **Subscription allowance display** — Users should see their plan’s draft protocol allowance (e.g. “8 of 10 drafts used this month”) so they know how many drafts remain.
3. **Supabase setup** — Project, DB, Auth
4. **Auth flow** — Signup, login, session, protected routes
5. **Stripe** — Subscription, webhooks, invoices, pricing tiers (see section 9)
6. **Draft storage** — Persist generated draft protocol templates in Postgres for revisitation

### Medium priority

7. **Demo video** — For visitors (not yet subscribed): a demo video on the landing page showing the workflow (select equipment → use case → capabilities → generate draft → scroll draft → download .docx). No free trial; demo replaces it.
8. **Landing page** — Marketing layout, CTA, demo video
9. **Compliance** — Privacy, T&C, cookie banner

### Lower priority

10. **Email** — Signup, renewal, invoice receipts
11. **PDF export** — Optional PDF in addition to Word
12. **QA** — E2E and regression tests

### Protocol generation (future improvement)

- **Natural workflow order** — IQ/OQ/PQ obligations rendered in natural human workflow order
- **Segmented sections** — Obligations woven into segmented, natural language IQ/OQ/PQ sections
- **Summarization tables** — Phase-level tables of obligations and standards reflecting natural workflow
- **Example Protocol Drafts alignment** — Document structure and language adapted from `docs/Example Protocol Drafts`

### Security requirements

- **No bot signups** — Bot prevention (CAPTCHA, rate limits, etc.)
- **No false invoices** — Only real orders generate invoices
- **No draft without payment** — Draft preview and generation gated behind subscription
- **Real users only** — Password reset, email on orders, user receives invoice
- **Help pathway** — Automated help request submission for payment or draft issues

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
| `STRIPE_PRICE_STARTER_ANNUAL` etc. | From Stripe | Price IDs | Create products in Stripe Dashboard |

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
3. Add Supabase env vars in Vercel  
4. Implement Supabase Auth (signup, login) and protected routes **done**  
5. Implement draft storage and revisitation (My drafts / dashboard with list of generated drafts) **done**  
6. Implement subscription allowance display (X of Y drafts used) **done**  
7. Implement Stripe products for Starter/Growth/Scale and webhook **done**  
8. Add demo video for visitors on landing page (defer until site appearance finalized)  
9. Add compliance (privacy, T&C, cookie banner) **done**

---

## 8. Legal notice

> This tool provides guidance and templates; users must maintain legally obtained standards and bear responsibility for compliance. — Agrocado LLC

**Needs hardening:** Pure advisory/informational notice, no guarantees of compliance or accuracy. Value = startup time savings and scope refinement. Notice that standards are not stored and content is not taken from standards (copyright protected). Frame obligations as interpretations by a former med device validation engineer.

---

## 9. Pricing tiers (MVP)

**No free trial** — Demo video on the landing page replaces a free trial.

**Annual billing preferred/default** — 17% discount vs monthly.

| Tier | Monthly | Annual | Users | Drafts/month | Features |
|------|---------|--------|-------|--------------|----------|
| **Starter** | $99/mo | $990/yr | Up to 2 | Up to 10 | Full equipment + standards catalog |
| **Growth** | $249/mo | $2,490/yr | Up to 10 | Up to 25 | Core functionality + priority support |
| **Scale** | $499/mo | $4,990/yr | Up to 50 | Up to 60 | Core functionality + priority support |

Users must be aware of their plan’s draft allowance (e.g. “8 of 10 drafts used”) and have a place to view generated drafts for revisitation.

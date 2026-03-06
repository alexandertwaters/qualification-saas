# Validation SaaS

IQ, OQ, and PQ draft protocol template generation for medical device equipment qualification in the United States. Advisory, draft-oriented system based on equipment catalog, standards/obligations catalog, and protocol templates.

## Project structure (converged)

```
qualification_saas/
├── app/                    # Next.js App Router (pages, layout)
├── src/resolver/           # Resolver engine (catalog loading, validation, draft API)
├── reference/              # Obligations catalog, resolver, protocol renderer
├── contracts/              # JSON schemas (draft request/response), obligation schema
├── contract/               # Constitutional docs (resolver contract, executive summary)
├── ontology/cohorts/       # Equipment ontology (resolver source)
├── data/                   # Source data (consolidated)
│   ├── standards/          # Standards catalog (ISO, FDA, USP, etc.)
│   ├── obligations/        # Obligation CSV source files
│   ├── domains/            # Control domain definitions
│   ├── mappings/           # Equipment–standard mappings
│   ├── equipment/          # Canonical equipment catalogs (reference)
│   └── schema/             # JSON schemas for obligations, domains
├── examples/               # Example resolver outputs
└── package.json
```

## Getting started

```bash
npm install
cp .env.example .env.local   # Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

**Environment:** Copy `.env.example` to `.env.local` and set Supabase URL and anon key for auth. For production draft generation, `CATALOG_VERSION` defaults to `production`; use `fallback` for minimal catalog (no draft generation).

Open [http://localhost:3000](http://localhost:3000).

## Key concepts

- **Equipment catalog:** `ontology/cohorts/` — cohort-split CSVs consumed by the resolver
- **Obligations:** `reference/obligations/obligationCatalog.ts` — derived from `data/obligations/`
- **Standards:** `data/standards/` — standards catalog used for obligation traceability
- **Contracts:** `contracts/` and `contract/` — schemas and constitutional boundaries

## Build

```bash
npm run build
```

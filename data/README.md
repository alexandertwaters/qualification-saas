# Data Directory

Source data consolidated from Validation SaaS. Single source of truth for standards, obligations, domains, mappings, and equipment.

## Structure

| Folder | Purpose | Used By |
|--------|---------|---------|
| `standards/` | Standards catalog (ISO, FDA, USP, etc.) | Obligation extraction, reference |
| `obligations/` | Obligation CSV source files | Transformed to `reference/obligations/obligationCatalog.ts` |
| `domains/` | Control domain definitions (CD_*) | Domain mapping to obligation domains |
| `mappings/` | Equipment–standard mappings, attribute refs | Resolver, equipment applicability |
| `equipment/` | Canonical equipment catalogs (Validation SaaS format) | Reference; resolver uses `ontology/cohorts/` |
| `schema/` | JSON schemas for obligations, domains, context | Reference; `contracts/` holds resolver schemas |

## Equipment Alignment

- **Resolver source:** `ontology/cohorts/*.csv` — format: `Name|Cohort|Equipment Type ID|{attrs}|Risk|Standards`
- **Canonical reference:** `data/equipment/canonical_*_cohort.csv` — format: `canonical_name|category|subtype|key_attributes_schema|risk_level|process_standards|notes`

Cohort names are aligned (e.g. Packaging, Sterilization, Facilities & Utilities, Cold Chain & Storage, Metrology, Inspection & Test).

## Domain Mapping

Validation SaaS control domains (`CD_*`) map to obligation domains:

| CD_* | Obligation Domain |
|------|-------------------|
| CD_DATA_INTEGRITY | DATA_INTEGRITY_RECORDS |
| CD_CHANGE_CONTROL | CONFIGURATION_CHANGE_CONTROL |
| CD_MAINTENANCE_CALIBRATION | CONFIGURATION_CHANGE_CONTROL |
| CD_RISK_MANAGEMENT | REVIEW_REPORTING |
| CD_TRAINING_COMPETENCY | SYSTEM_ACCESS_SECURITY |
| CD_CHAIN_OF_CUSTODY | AUDIT_TRAILS_TRACEABILITY |

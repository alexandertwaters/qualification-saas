# Example: User Flow and Protocol Draft Output

This document illustrates how a paid user would interact with the qualification SaaS (deployed to Vercel, with Supabase) and the resulting draft protocol template, based on the **current deliverables**. Draft protocol templates are not yet finalized; this example reflects the existing resolver output schema.

---

## Scenario: Cold Chain Storage > Refrigerator (Controlled Temperature Storage)

A user selects **Cold Chain Storage** as the cohort and **Refrigerator (Controlled Temperature Storage)** as the equipment type. The site then offers selection parameters that influence which obligations are included in the draft.

---

## 1. Website User Flow (Conceptual)

### Step 1: Equipment selection
- **Cohort:** Cold Chain Storage  
- **Equipment type:** Refrigerator (Controlled Temperature Storage)

The ontology defines this equipment with attributes that drive use-case-specific behavior:

| Attribute | Purpose |
|-----------|---------|
| `storage_range_C` | Temperature range (e.g. 2–8°C) |
| `has_alarm` | Alarm system present → adds alarm-related obligations |
| `has_data_logger` | Data logging present → adds data integrity obligations |
| `access_control` | Access level (e.g. restricted) → adds custody/access obligations |
| `use_case` | e.g. `human_tissue_storage` → adds 21 CFR 1271 / tissue-specific obligations |
| `door_open_frequency` | Affects recovery/challenge test scope |
| `power_backup` | Backup power → affects continuity obligations |

### Step 2: Selection parameters (use case & capabilities)

The user configures:

- **Use case:** e.g. `human_tissue_storage`, `product_storage`, `reagent_storage`
- **Capabilities:** `has_alarm`, `has_data_logger`, `access_control=restricted`
- **Qualification phases:** IQ, OQ, PQ
- **Obligation domains:** e.g. DATA_INTEGRITY_RECORDS, INSTALLATION_ENVIRONMENT, CALIBRATION_MAINTENANCE, FUNCTIONAL_PERFORMANCE, CONFIGURATION_CHANGE_CONTROL, REVIEW_REPORTING, MONITORING_TRENDING

> **Note:** Today the resolver filters only by cohort, equipment type, and domains. Use case and declared capabilities are in the request schema but not yet used for obligation selection. Future work would map `use_case` and attributes to additional obligations (e.g. tissue-specific).

### Step 3: Generate draft

The user triggers **Generate Draft**. The backend runs the resolver with the selected context and returns a structured protocol draft.

---

## 2. Example API Request (draft.request.v1)

```json
{
  "equipment_context": {
    "equipment_type": "REFRIGERATOR",
    "equipment_cohort": "COLD_CHAIN_STORAGE",
    "declared_capabilities": ["HAS_ALARM", "HAS_DATA_LOGGER", "ACCESS_CONTROL_RESTRICTED"],
    "intended_use": "HUMAN_TISSUE_STORAGE"
  },
  "draft_scope": {
    "qualification_phases": ["IQ", "OQ", "PQ"],
    "obligation_domains": [
      "DATA_INTEGRITY_RECORDS",
      "INSTALLATION_ENVIRONMENT",
      "CALIBRATION_MAINTENANCE",
      "FUNCTIONAL_PERFORMANCE",
      "CONFIGURATION_CHANGE_CONTROL",
      "REVIEW_REPORTING",
      "MONITORING_TRENDING"
    ]
  },
  "visibility_controls": {
    "include_deprecated": false
  }
}
```

Catalog IDs are normalized by the ontology (e.g. `COLD_CHAIN_STORAGE` → `Cold Chain & Storage`, `REFRIGERATOR` → `Refrigerator`).

---

## 3. Example Draft Protocol Template Output (draft.response.v1)

Based on the current `transformToDraftResponse` output schema and obligations for **Cold Chain & Storage / Refrigerator**:

```json
{
  "draft_metadata": {
    "draft_type": "protocol_draft",
    "generated_at": "2025-03-02T14:30:00.000Z"
  },
  "version_anchors": {
    "resolver_contract_version": "v1.0",
    "catalog_version": "Production Obligation Catalog v1.0",
    "obligation_schema_version": "v1.0"
  },
  "resolved_obligations": [
    {
      "obligation_id": "OBL_QMSR_DOC_0007",
      "qualification_phase": "IQ",
      "obligation_domain": "DATA_INTEGRITY_RECORDS",
      "lifecycle_state": "active",
      "obligation_text": "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      "standards_references": [
        { "standard_id": "STD_QMSR", "clause_reference": "820.10;ISO 13485 4.2" }
      ]
    },
    {
      "obligation_id": "OBL_QMSR_INSTALL_0007",
      "qualification_phase": "IQ",
      "obligation_domain": "INSTALLATION_ENVIRONMENT",
      "lifecycle_state": "active",
      "obligation_text": "Verify installation location power and environmental suitability for temperature control.",
      "standards_references": [
        { "standard_id": "STD_ISO13485", "clause_reference": "7.1.4" }
      ]
    },
    {
      "obligation_id": "OBL_QMSR_CAL_0007",
      "qualification_phase": "IQ",
      "obligation_domain": "CALIBRATION_MAINTENANCE",
      "lifecycle_state": "active",
      "obligation_text": "Verify calibration status and traceability of temperature monitoring systems.",
      "standards_references": [
        { "standard_id": "STD_ISO13485", "clause_reference": "7.1.5;7.6" }
      ]
    },
    {
      "obligation_id": "OBL_QMSR_CFG_0007",
      "qualification_phase": "IQ",
      "obligation_domain": "CONFIGURATION_CHANGE_CONTROL",
      "lifecycle_state": "active",
      "obligation_text": "Verify that setpoints and configuration baselines are documented and controlled.",
      "standards_references": [
        { "standard_id": "STD_ISO13485", "clause_reference": "7.1.4" }
      ]
    },
    {
      "obligation_id": "OBL_QMSR_FUNC_0007",
      "qualification_phase": "OQ",
      "obligation_domain": "FUNCTIONAL_PERFORMANCE",
      "lifecycle_state": "active",
      "obligation_text": "Execute functional tests covering temperature control and monitoring across operating range.",
      "standards_references": [
        { "standard_id": "STD_ISO13485", "clause_reference": "7.1.5" }
      ]
    },
    {
      "obligation_id": "OBL_ISO14971_RISK_0007",
      "qualification_phase": "IQ",
      "obligation_domain": "REVIEW_REPORTING",
      "lifecycle_state": "active",
      "obligation_text": "Verify that risk assessment has been performed and drives validation scope and depth.",
      "standards_references": [
        { "standard_id": "STD_ISO14971", "clause_reference": "5;9" }
      ]
    },
    {
      "obligation_id": "OBL_TISSUE_FRIDGE_0001",
      "qualification_phase": "IQ",
      "obligation_domain": "REVIEW_REPORTING",
      "lifecycle_state": "active",
      "obligation_text": "Define intended use, tissue categories, storage limits, and custody expectations for human tissue.",
      "standards_references": [
        { "standard_id": "STD_HUMAN_TISSUE_STORAGE", "clause_reference": "" }
      ]
    },
    {
      "obligation_id": "OBL_TISSUE_FRIDGE_0002",
      "qualification_phase": "IQ",
      "obligation_domain": "INSTALLATION_ENVIRONMENT",
      "lifecycle_state": "active",
      "obligation_text": "Verify installation, airflow, ambient temperature, clearance, and environmental suitability.",
      "standards_references": [
        { "standard_id": "STD_HUMAN_TISSUE_STORAGE", "clause_reference": "" }
      ]
    },
    {
      "obligation_id": "OBL_TISSUE_FRIDGE_0010",
      "qualification_phase": "OQ",
      "obligation_domain": "FUNCTIONAL_PERFORMANCE",
      "lifecycle_state": "active",
      "obligation_text": "Perform temperature mapping to demonstrate compliance across the usable storage volume.",
      "standards_references": [
        { "standard_id": "STD_HUMAN_TISSUE_STORAGE", "clause_reference": "" }
      ]
    },
    {
      "obligation_id": "OBL_TISSUE_FRIDGE_0011",
      "qualification_phase": "OQ",
      "obligation_domain": "FUNCTIONAL_PERFORMANCE",
      "lifecycle_state": "active",
      "obligation_text": "Challenge door-open and recovery behavior to ensure tissue remains protected.",
      "standards_references": [
        { "standard_id": "STD_HUMAN_TISSUE_STORAGE", "clause_reference": "" }
      ]
    }
  ]
}
```

---

## 4. Human-Readable Protocol Template (Draft Format)

A downstream template engine would render `resolved_obligations` into a protocol document. Example structure:

---

**Protocol Draft: Refrigerator (Controlled Temperature Storage) – IQ/OQ/PQ**  
*Equipment: Refrigerator | Cohort: Cold Chain & Storage | Generated: 2025-03-02*

---

### IQ – Installation Qualification

| # | Domain | Obligation | Standard |
|---|--------|------------|----------|
| 1 | DATA_INTEGRITY_RECORDS | Verify the presence and controlled status of manufacturer instructions, installation instructions, calibration evidence, and applicable SOPs. | 21 CFR 820; ISO 13485 4.2 |
| 2 | INSTALLATION_ENVIRONMENT | Verify installation location, power, and environmental suitability for temperature control. | ISO 13485 7.1.4 |
| 3 | INSTALLATION_ENVIRONMENT | Verify installation, airflow, ambient temperature, clearance, and environmental suitability. | Human tissue storage |
| 4 | CALIBRATION_MAINTENANCE | Verify calibration status and traceability of temperature monitoring systems. | ISO 13485 7.1.5; 7.6 |
| 5 | CONFIGURATION_CHANGE_CONTROL | Verify that setpoints and configuration baselines are documented and controlled. | ISO 13485 7.1.4 |
| 6 | REVIEW_REPORTING | Risk assessment has been performed and drives validation scope and depth. | ISO 14971 |
| 7 | REVIEW_REPORTING | Define intended use, tissue categories, storage limits, and custody expectations for human tissue. | Human tissue storage |

---

### OQ – Operational Qualification

| # | Domain | Obligation | Standard |
|---|--------|------------|----------|
| 8 | FUNCTIONAL_PERFORMANCE | Execute functional tests covering temperature control and monitoring across operating range. | ISO 13485 7.1.5 |
| 9 | FUNCTIONAL_PERFORMANCE | Perform temperature mapping to demonstrate compliance across the usable storage volume. | Human tissue storage |
| 10 | FUNCTIONAL_PERFORMANCE | Challenge door-open and recovery behavior to ensure tissue remains protected. | Human tissue storage |

---

### PQ – Performance Qualification

*Additional PQ obligations (e.g. routine monitoring, excursion handling, custody verification) would appear when MONITORING_TRENDING and related domains are selected.*

---

## 5. Deployment Context (GitHub, Supabase, Vercel)

| Component | Role |
|-----------|------|
| **GitHub** | Source control; triggers Vercel deployments on push |
| **Vercel** | Hosts Next.js app; serverless API routes for draft generation |
| **Supabase** | User auth (paid users), usage tracking, stored drafts (future) |
| **Resolver** | Runs server-side; obligation catalog built from CSVs via `npm run build:obligations` |

The draft request would typically be sent from the frontend to a Vercel API route (e.g. `POST /api/draft`), which invokes `handleDraftRequest` and returns the draft response. Supabase would handle authentication and subscription checks before allowing the request.

---

## 6. Current Limitations and Future Work

1. **Use-case filtering** – `use_case` and `declared_capabilities` are in the request schema but not yet used to filter obligations. Tissue-specific obligations are currently included for all Refrigerators.
2. **Draft template format** – `resolved_obligations` is the machine-readable output; a final protocol document format (e.g. Word/PDF template) is not yet defined.
3. **API route** – `handleDraftRequest` exists but no `/api/draft` route is wired in the app.
4. **UI** – The app is still the default Next.js template; equipment selection and parameter UI are not implemented.

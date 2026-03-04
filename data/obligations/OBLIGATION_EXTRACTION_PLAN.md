# Obligation Extraction Plan and Methodology

## Purpose

This document defines the step-by-step plan and methodology for generating production-grade obligations derived from publicly available research. Obligations must not infringe on copyrighted material and must be traceable to standards applicable to the majority of US medical device manufacturers.

---

## Advisory Positioning (Non-Negotiable)

The SaaS is **purely advisory**. It lies upstream of any validated quality system. The SaaS:

- Does **not** prescribe specifics, declare compliance, pass/fail, or release criteria
- Does **not** supply audit evidence or act as a system of record
- Places **all** regulatory, review, and approval responsibility on the user
- Emits draft obligations for human review; the user’s organization determines applicability, execution, acceptance, and release

Obligation content (titles, descriptions, verification expectations, acceptance criteria) must be advisory in tone. Do not include fields (e.g. `deprecation_reason`) that could imply prescriptive or authoritative interpretation.

---

## 0. Lifecycle and Supersession Chains

### 0.1 Industry Context

Standards in medical device manufacturing typically follow a 24–36 month revision cycle. New versions are published; prior versions may be withdrawn or superseded. The SaaS must support historical traceability when obligations or standards evolve.

### 0.2 Obligation Lifecycle Attributes

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `status` | `active`, `deprecated` | `active` = included by default; `deprecated` = retained for historical traceability |
| `deprecated_in_version` | Version string (e.g. `v1.1`) | When the obligation was deprecated |
| `superseded_by` | Obligation ID(s) | Replacement obligation(s); enables supersession chain traversal |

**Excluded:** `deprecation_reason` — not used. Avoids prescriptive or authoritative interpretation; the SaaS remains purely advisory.

**Supersession chain:** When obligation A is replaced by obligation B, set A.`status` = `deprecated`, A.`superseded_by` = B.obligation_id. The schema uses `replaced_by_obligation_ids` (array) for full chain support; CSV may use `superseded_by` (single or semicolon-separated).

**Historical traceability:** Deprecated obligations remain in the catalog. Resolver outputs include only `active` obligations by default; an optional mode may include `deprecated` obligations with lifecycle metadata for historical or migration analysis.

### 0.3 Standards Version Tracking

- Maintain a standards version table (e.g. `data/standards/standards_versions.csv`) with: standard_id, current_version, publication_date, supersedes_version, notes
- When a standard is revised (e.g. ISO 13485:2016 → ISO 13485:2024), reassess affected obligations: create new obligations if normative intent changes; deprecate old ones with `superseded_by` linkage
- Re-verify standards currency at least annually or at the start of each extraction phase

---

## 1. Equipment Catalog (Primary Constraint)

### 1.1 Equipment Catalog Criteria

The equipment catalog is the **primary constraint**. Standards and obligations are derived from and must be **directly applicable** to the equipment catalog.

**Equipment catalog criteria:**

- **Robust:** Addresses the majority of off-the-shelf, commercially available equipment commonly used by US medical device manufacturers
- **Relevant:** Equipment types that support regulated medical device manufacturing processes
- **Applicable:** **Only** equipment that requires qualification actions (some level of IQ, OQ, PQ execution) for use in regulated medical device manufacturing in the United States

Equipment that does not require qualification (e.g. general office equipment, non–quality-affecting tools) is **excluded**.

### 1.2 Standards–Equipment Linkage

Standards in the inventory must be **relevant and directly applicable** to the equipment catalog. A standard is included only if it applies to one or more equipment types in the catalog. The standards inventory is derived from equipment applicability, not the reverse.

---

## 2. Standards Scope

### 2.1 Criteria for Inclusion

- **Relevant:** Directly addresses equipment qualification, validation, or quality system expectations for medical device manufacturing
- **Current:** In effect as of the extraction date (verify via FDA, ISO, ASTM, USP, NIST, CDC/CLIA, NSF websites)
- **Applicable to equipment catalog:** Applies to one or more equipment types in the ontology; no standalone standards that do not map to catalog equipment

### 2.2 Standards Inventory (from `data/standards/standards100.csv`)

| Tier | Standard ID | Code | Primary Use | Equipment/Process Scope |
|------|-------------|------|-------------|-------------------------|
| **Universal** | STD_QMSR | 21 CFR 820 | QMS, validation driver | All equipment |
| **Universal** | STD_ISO13485 | ISO 13485:2016 | QMS alignment | All equipment |
| **Universal** | STD_ISO14971 | ISO 14971:2019 | Risk-based validation | All equipment |
| **Data/Software** | STD_21CFR11 | 21 CFR Part 11 | Electronic records, audit trails | Computerized systems |
| **Data/Software** | STD_IEC62304 | IEC 62304 | Software lifecycle | Software-controlled equipment |
| **Data/Software** | STD_IEC62366 | IEC 62366-1 | Usability, use error | User-facing equipment |
| **Sterilization** | STD_ISO17665 | ISO 17665 | Steam sterilization | Steam sterilizers |
| **Sterilization** | STD_ISO11138 | ISO 11138 | Biological indicators | Sterilization |
| **Sterilization** | STD_ISO11135 | ISO 11135 | EtO sterilization | EtO sterilizers |
| **Sterilization** | STD_ISO11137 | ISO 11137 | Radiation sterilization | Gamma/E-beam |
| **Sterilization** | STD_ISO14937 | ISO 14937 | General sterilization | VHP, non-traditional |
| **Packaging** | STD_ISO11607_1 | ISO 11607-1 | Packaging materials | Packaging equipment |
| **Packaging** | STD_ISO11607_2 | ISO 11607-2 | Packaging process validation | Sealing, FFS |
| **Packaging** | STD_ASTMF88 | ASTM F88 | Seal strength | Seal testing |
| **Packaging** | STD_ASTMF1929 | ASTM F1929 | Dye penetration | Package integrity |
| **Packaging** | STD_ASTMF1140 | ASTM F1140 | Burst testing | Package strength |
| **Cleanroom** | STD_ISO14644_1 | ISO 14644-1 | Classification | HVAC, HEPA |
| **Cleanroom** | STD_ISO14644_3 | ISO 14644-3 | Test methods | HVAC, HEPA, particle counters |
| **Cleanroom** | STD_ISO14698 | ISO 14698 | Biocontamination | EMS, viable monitoring |
| **Cleanroom** | STD_NSF49 | NSF/ANSI 49 | Biosafety cabinets | BSC |
| **Utilities** | STD_ISO8573 | ISO 8573-1 | Compressed air | Compressed air systems |
| **Utilities** | STD_USP1231 | USP <1231> | Water systems | WFI, Purified water |
| **Utilities** | STD_USP643 | USP <643> | TOC | TOC analyzers |
| **Analytical** | STD_USP1058 | USP <1058> | Analytical instrument qualification | Balances, HPLC, etc. |
| **Analytical** | STD_USP791 | USP <791> | pH | pH systems |
| **Metrology** | STD_ISO17025 | ISO/IEC 17025 | Calibration | Calibrated equipment |
| **Metrology** | STD_ISO10360 | ISO 10360 | CMM | CMM |
| **Metrology** | STD_ASTME4 | ASTM E4 | Tensile/load | UTM |
| **Metrology** | STD_ISO25178 | ISO 25178 | Surface texture | Profilometers |
| **Metrology** | STD_NISTHB44 | NIST HB 44 | Weights/measures | Checkweighers |
| **Tissue** | STD_21CFR1271 | 21 CFR Part 1271 | HCT/P | Cryogenic, tissue storage |
| **Labeling** | STD_21CFR830 | 21 CFR Part 830 | UDI | Label printing, serialization |
| **Surface** | STD_ISO13779 | ISO 13779-2 | HA coatings | Plasma spray |
| **Surface** | STD_ASTMF1147 | ASTM F1147 | Coating adhesion | Plasma spray |
| **Surface** | STD_ASTMF2397 | ASTM F2397 | Lubricity | Catheters, coatings |
| **IVD** | STD_CLIA | CLIA | Clinical labs | IVD analyzers |

### 2.3 Expanded Standards Inventory (Equipment-Tied)

Additional standards for a robust catalog. **Include only** standards that apply to equipment types in the ontology. If equipment is missing, expand the equipment catalog first.

| Category | Standard ID | Code | Primary Use | Equipment/Process Scope |
|----------|-------------|------|-------------|-------------------------|
| **Sterilization** | STD_AAMI_ST79 | AAMI ST79 | Steam sterilization (healthcare) | Autoclaves |
| **Sterilization** | STD_AAMI_ST98 | AAMI ST98 | Washer-disinfector guidance | Washers, ultrasonic cleaners |
| **Decontamination** | STD_ISO15883 | ISO 15883 | Washer-disinfector requirements | Washers, parts washers |
| **Aseptic** | STD_ISO13408_1 | ISO 13408-1 | Aseptic processing, filling | Aseptic fillers, vial filling |
| **Cleanroom** | STD_ISO14644_2 | ISO 14644-2 | Monitoring and testing | HVAC, EMS, certification |
| **Cleanroom** | STD_ISO14644_7 | ISO 14644-7 | Particle sampling | Particle counters |
| **Cleanroom** | STD_ISO14644_8 | ISO 14644-8 | Biocontamination control | Microbial air samplers |
| **Cleanroom** | STD_ISO14698_2 | ISO 14698-2 | Biocontamination methods | Microbial monitoring |
| **Cleanroom** | STD_ISO20391 | ISO 20391 | Particle counter calibration | Particle counters |
| **Electrical** | STD_IEC60601 | IEC 60601 | Medical electrical equipment safety | Imaging, X-ray, electrical testers |
| **Lab** | STD_IEC61010 | IEC 61010 | Lab equipment safety | Incubators, HPLC, spectrophotometers |
| **Analytical** | STD_USP621 | USP <621> | HPLC system suitability | HPLC |
| **Analytical** | STD_USP467 | USP <467> | Residual solvents | GC, GC/MS |
| **Analytical** | STD_USP854 | USP <854> | FTIR, spectroscopy | FTIR |
| **Analytical** | STD_USP788 | USP <788> | Particulate matter | Cleanroom, WFI, lyophilizer |
| **Analytical** | STD_USP1251 | USP <1251> | Analytical method validation | Analytical methods, instruments |
| **Metrology** | STD_ASTME18 | ASTM E18 | Hardness testing | Hardness testers |
| **Metrology** | STD_ASTMF1717 | ASTM F1717 | Spinal implant test methods | UTM, implants |
| **Metrology** | STD_ASTMF543 | ASTM F543 | Orthopedic screw testing | Torque testers |
| **Packaging** | STD_ASTMF1920 | ASTM F1920 | Leak test methods | Packaging, seal testing |
| **Biocompatibility** | STD_ISO10993 | ISO 10993 | Biocompatibility testing | Implant processing, coating |
| **Biocompatibility** | STD_ISO10993_18 | ISO 10993-18 | Chemical characterization | GC/MS, extractables |
| **Delivery** | STD_ISO11608 | ISO 11608 | Needle-based delivery | Infusion pumps, syringe pumps |
| **Catheter** | STD_ISO10555 | ISO 10555 | Intravascular catheters | Balloon forming, burst testers |
| **Lab/IVD** | STD_ISO15189 | ISO 15189 | Medical laboratories | IVD, clinical analyzers |
| **Lab/IVD** | STD_ISO20916 | ISO 20916 | NGS sequencing | DNA sequencers |
| **Hematology** | STD_21CFR864 | 21 CFR Part 864 | Hematology device classification | Hematology analyzers |

### 2.4 Version and Currency Verification

Before extraction, verify current versions via:
- **FDA:** [FDA.gov](https://www.fda.gov) – CFR, guidance documents
- **ISO:** [iso.org](https://www.iso.org) – standard status, withdrawal/supersession
- **USP:** [usp.org](https://www.usp.org) – current monograph versions
- **ASTM:** [astm.org](https://www.astm.org) – standard status
- **IEC:** [iec.ch](https://www.iec.ch) – standard status

---

## 3. Obligation Domains

Obligations are categorized by regulatory concern (not equipment type). Each obligation belongs to exactly one domain.

**Domain expansion policy:** Domains may be expanded when new regulatory concerns emerge. Add new domain values to `reference/obligations/obligationDomains.ts` and to the obligation schema contract. Existing domains remain stable for backward compatibility.

### 3.1 Current Domains (Robust Set)

| Domain | Description |
|--------|-------------|
| DATA_INTEGRITY_RECORDS | Completeness, accuracy, attributable records (ALCOA+) |
| AUDIT_TRAILS_TRACEABILITY | Audit trails, chain of custody, traceability |
| ALARM_EVENT_MANAGEMENT | Alarms, notifications, event handling |
| CONFIGURATION_CHANGE_CONTROL | Configuration baselines, change control, requalification triggers |
| SYSTEM_ACCESS_SECURITY | Access control, training, authorization |
| INSTALLATION_ENVIRONMENT | Installation, utilities, environmental suitability |
| FUNCTIONAL_PERFORMANCE | Functional tests, operating range, performance |
| MONITORING_TRENDING | Routine monitoring, trending, review |
| REVIEW_REPORTING | Acceptance criteria, deviations, reporting (advisory; user defines specifics) |
| RETENTION_ARCHIVAL | Record retention, archival |
| SAFETY_ELECTRICAL | Electrical safety, lab equipment safety (IEC 60601, 61010) |
| USABILITY_HUMAN_FACTORS | Usability, use error mitigation (IEC 62366) |
| BIOLOGICAL_SAFETY | Containment, biosafety (NSF 49, biocontamination) |
| CALIBRATION_MAINTENANCE | Calibration, maintenance, requalification linkage |

---

## 4. Obligation Extraction Methodology

### 4.1 Source Material Rules

- **Use only publicly available material:** FDA guidance, FDA.gov summaries, ISO abstracts, USP general chapters summaries, industry white papers, regulatory overviews
- **Do not reproduce copyrighted text:** No verbatim copying from paid standards (ISO, IEC, ASTM full text). Paraphrase normative intent in original language
- **Reference by clause/section:** Standards anchors use `standard` (e.g. "21 CFR Part 11") and `clause` (e.g. "11.10(e)") for traceability without reproducing content

### 4.2 Extraction Process (Domain-by-Domain, per Standard)

1. **Select standard** from the inventory
2. **Fix domain lens** (e.g. DATA_INTEGRITY_RECORDS)
3. **Research publicly available material** for that standard + domain (FDA guidance, ISO scope/abstract, regulatory summaries)
4. **Distill each normative expectation** into one atomic, testable obligation
5. **Attach metadata:**
   - `standard` + `clause` (when publicly identifiable)
   - `domain`
   - `qualification_phase` (IQ / OQ / PQ)
   - `equipment_applicability` (cohort + equipment types from `ontology/cohorts/` or `data/equipment/`)

### 4.3 Obligation Attributes

| Attribute | Requirement |
|-----------|-------------|
| `obligation_id` | Format `OBL_<STANDARD_PREFIX>_<TOPIC>_NNNN`; unique |
| `qualification_phase` | IQ, OQ, or PQ |
| `domain` | One of the obligation domains (expandable) |
| `title` | Short label for protocol rendering |
| `description` | Plain-language intent; must not imply execution or compliance |
| `equipment_applicability` | `cohort` + `equipment_types` from ontology |
| `standards_anchors` | `standard`, optional `clause`, optional `context_note` |
| `verification_expectation` | What to verify (advisory) |
| `acceptance_criteria` | Measurable expectation (advisory) |
| `lifecycle.status` | `active` or `deprecated` |
| `lifecycle.introduced_in_version` | Version when introduced (e.g. `v1.0`) |
| `lifecycle.deprecated_in_version` | Version when deprecated (required if status=deprecated) |
| `lifecycle.superseded_by` | Obligation ID(s) of replacement; semicolon-separated for chains |

**Excluded:** `deprecation_reason` — not used; avoids prescriptive or authoritative interpretation.

### 4.4 Equipment Applicability

- Use `data/mappings/equipment_standards_map.csv` and `ontology/cohorts/` to determine which equipment types each standard applies to
- Obligations apply to equipment types, not all equipment universally (except QMSR/ISO 13485/ISO 14971 base expectations)
- When a standard applies broadly (e.g. 21 CFR Part 11 to computerized systems), use cohort + equipment types that have `software_controlled=true` or similar from the ontology

---

## 5. CSV Format for `data/obligations/`

### 5.1 File Naming

`<standard_id>_obligations.csv` (e.g. `STD_21CFR11_obligations.csv`, `STD_ISO17665_obligations.csv`)

### 5.2 CSV Schema (pipe-delimited)

```
obligation_id|standard_id|standard_code|qualification_phase|domain|title|description|cohort|equipment_types|clause|verification_expectation|acceptance_criteria|rationale|status|introduced_in_version|deprecated_in_version|superseded_by
```

- `equipment_types`: Semicolon-separated list (e.g. `Heat Sealer;Tray Sealer;Form-Fill-Seal Machine`)
- `status`: `active` or `deprecated` (obligation lifecycle); `draft` allowed during extraction for work-in-progress
- `deprecated_in_version`: Required when status=deprecated
- `superseded_by`: Obligation ID of replacement; semicolon-separated for chain (e.g. `OBL_NEW_001;OBL_NEW_002`). Maps to `lifecycle.replaced_by_obligation_ids` in the Obligation schema

**Excluded:** `deprecation_reason` — not used.

### 5.3 Example Rows

**Active obligation:**
```
OBL_21CFR11_AUDIT_TRAIL_0001|STD_21CFR11|21 CFR Part 11|OQ|AUDIT_TRAILS_TRACEABILITY|Electronic audit trail capability|Computerized systems that create electronic records implement secure, computer-generated audit trails.|Facilities & Utilities|EMS|11.10(e)|Verify that the system generates a secure audit trail for creation, modification, and deletion of electronic records.|Audit trail is generated and is secure, time-stamped, and attributable.|Supports 21 CFR 11.10(e) expectations for electronic records.|active|v1.0||
```

**Deprecated obligation with supersession:**
```
OBL_LEGACY_OLD_001|STD_ISO13485|ISO 13485:2016|IQ|DATA_INTEGRITY_RECORDS|Legacy documentation requirement|...|Metrology|Analytical Balance|7.5|...|...|Advisory reference.|deprecated|v1.0|v1.1|OBL_ISO13485_DOC_0001
```

---

## 6. Flow: CSV → obligationCatalog.ts

### 6.1 Build Pipeline (Proposed)

1. **CSV files** in `data/obligations/*.csv` are the source of truth
2. **Build script** (e.g. `scripts/buildObligationCatalog.ts`):
   - Reads all CSV files in `data/obligations/` (excluding `OBLIGATION_EXTRACTION_PLAN.md`)
   - Parses rows, validates against schema
   - Outputs `reference/obligations/obligationCatalog.ts` as generated code
3. **Resolver** imports `obligationCatalog` as before

### 6.2 Manual Alternative (Until Build Script Exists)

- Manually transpose CSV content into `obligationCatalog.ts` when CSV files are updated
- Use a consistent structure per obligation (see existing `ob()` helper pattern)

---

## 7. Step-by-Step Execution Plan

### Phase 0: Equipment Catalog (Primary Constraint)

| Step | Task | Output |
|------|------|--------|
| 0.1 | Audit equipment catalog for robustness, relevance, applicability | Gap analysis |
| 0.2 | Expand equipment catalog to cover majority of off-the-shelf, commercially available equipment used by US medical device manufacturers | Updated `ontology/cohorts/` |
| 0.3 | Retain only equipment requiring IQ/OQ/PQ for regulated use | Filtered catalog |
| 0.4 | Update equipment–standards mapping | `data/mappings/equipment_standards_map.csv` |

### Phase 1: Foundation (Standards + Universal Obligations)

| Step | Task | Output |
|------|------|--------|
| 1.1 | Verify current versions of all standards in inventory (equipment-tied) | `data/standards/standards_currency_check.md` |
| 1.2 | Extract universal obligations from 21 CFR 820 (QMSR) | `data/obligations/STD_QMSR_obligations.csv` |
| 1.3 | Extract universal obligations from ISO 13485, ISO 14971 | `data/obligations/STD_ISO13485_obligations.csv`, `STD_ISO14971_obligations.csv` |

### Phase 2: Data Integrity and Software

| Step | Task | Output |
|------|------|--------|
| 2.1 | Extract 21 CFR Part 11 obligations (domain-by-domain) | `data/obligations/STD_21CFR11_obligations.csv` |
| 2.2 | Extract IEC 62304 obligations | `data/obligations/STD_IEC62304_obligations.csv` |
| 2.3 | Extract IEC 62366 obligations (usability) | `data/obligations/STD_IEC62366_obligations.csv` |

### Phase 3: Sterilization

| Step | Task | Output |
|------|------|--------|
| 3.1 | Extract ISO 17665 obligations | `data/obligations/STD_ISO17665_obligations.csv` |
| 3.2 | Extract ISO 11138, 11135, 11137, 14937 obligations | Corresponding CSV files |

### Phase 4: Packaging

| Step | Task | Output |
|------|------|--------|
| 4.1 | Extract ISO 11607-1, 11607-2 obligations | `data/obligations/STD_ISO11607_1_obligations.csv`, `STD_ISO11607_2_obligations.csv` |
| 4.2 | Extract ASTM F88, F1929, F1140 obligations | Corresponding CSV files |

### Phase 5: Cleanroom and Environmental

| Step | Task | Output |
|------|------|--------|
| 5.1 | Extract ISO 14644-1, 14644-3 obligations | `data/obligations/STD_ISO14644_1_obligations.csv`, etc. |
| 5.2 | Extract ISO 14698, NSF 49 obligations | Corresponding CSV files |

### Phase 6: Utilities, Analytical, Metrology

| Step | Task | Output |
|------|------|--------|
| 6.1 | Extract USP <1058>, <791>, <643>, <1231> obligations | Corresponding CSV files |
| 6.2 | Extract ISO 17025, ISO 10360, ASTM E4, NIST HB 44, ISO 25178 obligations | Corresponding CSV files |
| 6.3 | Extract ISO 8573 obligations (compressed air) | `data/obligations/STD_ISO8573_obligations.csv` |

### Phase 7: Specialized (Tissue, Labeling, Surface, IVD)

| Step | Task | Output |
|------|------|--------|
| 7.1 | Extract 21 CFR 1271 obligations | `data/obligations/STD_21CFR1271_obligations.csv` |
| 7.2 | Extract 21 CFR 830 (UDI) obligations | `data/obligations/STD_21CFR830_obligations.csv` |
| 7.3 | Extract ISO 13779, ASTM F1147, F2397 obligations | Corresponding CSV files |
| 7.4 | Extract CLIA obligations | `data/obligations/STD_CLIA_obligations.csv` |

### Phase 7b: Expanded Standards (Sterilization, Cleanroom, Analytical, Metrology)

| Step | Task | Output |
|------|------|--------|
| 7b.1 | Extract AAMI ST79, ST98, ISO 15883 obligations | Corresponding CSV files |
| 7b.2 | Extract ISO 13408-1 (aseptic), ISO 14644-2, 7, 8, ISO 14698-2, ISO 20391 obligations | Corresponding CSV files |
| 7b.3 | Extract IEC 60601, IEC 61010 obligations | Corresponding CSV files |
| 7b.4 | Extract USP 621, 467, 854, 788, 1251 obligations | Corresponding CSV files |
| 7b.5 | Extract ASTM E18, F1717, F543, F1920 obligations | Corresponding CSV files |
| 7b.6 | Extract ISO 10993, 10993-18, ISO 11608, ISO 10555 obligations | Corresponding CSV files |
| 7b.7 | Extract ISO 15189, ISO 20916, 21 CFR 864 obligations | Corresponding CSV files |

### Phase 8: Integration

| Step | Task | Output |
|------|------|--------|
| 8.1 | Implement or run build script: CSV → obligationCatalog.ts | `reference/obligations/obligationCatalog.ts` |
| 8.2 | Archive example obligation files (ISO17665, ISO11607_2, HumanTissue) to `data/obligations/archive/` | Clean `data/obligations/` for production CSVs only |
| 8.3 | Validate resolver with new catalog | All equipment types resolve correctly |

---

## 8. Research Sources (Public, Non-Copyrighted)

- **FDA:** [fda.gov/medical-devices](https://www.fda.gov/medical-devices) – Guidance documents, Q&A, 21 CFR summaries
- **FDA CFR:** [ecfr.gov](https://www.ecfr.gov) – Full text of 21 CFR (US Government, public domain)
- **ISO:** Scope and abstract only (public); full text is copyrighted
- **USP:** General chapter summaries and scope (verify terms of use)
- **ASTM:** Standard scope/abstract (verify terms of use)
- **Industry guidance:** ISPE, PDA, AAMI guides (verify licensing)
- **Regulatory summaries:** FDA guidance, industry white papers that summarize requirements

---

## 9. Approval Before Execution

- [ ] Advisory positioning understood (no audit evidence, no prescriptive content, user bears responsibility)
- [ ] Equipment catalog criteria understood (robust, relevant, applicable; qualification-requiring only)
- [ ] Standards inventory equipment-tied (standards apply to catalog equipment)
- [ ] Obligation domains expanded (SAFETY_ELECTRICAL, USABILITY_HUMAN_FACTORS, BIOLOGICAL_SAFETY, CALIBRATION_MAINTENANCE)
- [ ] CSV schema confirmed: no deprecation_reason; lifecycle = status, deprecated_in_version, superseded_by
- [ ] Build script approach (manual vs automated) decided
- [ ] Research sources confirmed as permissible
- [ ] Standards version tracking approach (e.g. standards_versions.csv) defined
- [ ] Domain expansion policy understood (domains can expand; add to obligationDomains.ts when needed)
- [ ] Phase 1 ready to begin

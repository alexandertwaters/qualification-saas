# Draft Protocol Enhancement Specification

**Priority:** Core functionality — draft protocol generation quality and human-readability.

---

## 1. Study Inputs

### 1.1 Example Protocol Drafts I Wrote

Location: `docs/Example Protocol Drafts I Wrote/`

- **IQ Protocols** — structure, section headings, verification language, test procedure format, acceptance criteria presentation
- **OQ Protocols** — operational test flow, parameter tables, challenge test descriptions
- **PQ Protocols** — performance verification structure, routine monitoring expectations

Extract: form (document structure), content (section ordering and narrative), language (tone, phrasing, engineer-facing terminology).

### 1.2 Publicly Available IQ/OQ/PQ Templates

**Referenced sources:**

- **GHTF/IMDRF Process Validation Guidance** — basis for FDA and ISO 13485 expectations
- **Medical Device HQ** (IQ/OQ/PQ protocol templates) — title page, approval blocks, section layout, test tables
- **Process Street FDA Process Validation IQOQPQ** — workflow: intended use → equipment spec → IQ → OQ → PQ → summary report
- **Oriel STAT A MATRIX** — protocol content: process description, acceptance criteria, operator qualification, utilities, revalidation criteria

**Common protocol elements across sources:**

| Element | Purpose |
|---------|---------|
| Title page | Equipment ID, protocol number, revision, approvals |
| Objective and scope | What will be qualified and why |
| Equipment/process identification | Manufacturer, model, S/N, location |
| Acceptance criteria | Measurable pass/fail criteria |
| Test procedures | Step-by-step instructions with data recording |
| Deviations / corrective actions | How exceptions are handled |
| Review and approval | Sign-offs per phase |

**Form and language patterns:**

- Blue/italic instructional text (remove before approval)
- Bracketed placeholders `{project-specific}` for customization
- Objective, measurable acceptance criteria
- Natural workflow order: install → operate → perform (IQ → OQ → PQ)

---

## 2. Output Requirements

### 2.1 Human-Readable Documents

Generated drafts must read as real protocol documents that a validation engineer at a US medical device manufacturer can:

- Follow step-by-step
- Complete in the field
- Refine minimally before QMS submission

Not: bare obligation tables or machine-oriented lists.

### 2.2 Natural, Real-World Flow

- **Workflow order** — IQ → OQ → PQ with logical sequencing within each phase
- **Domain grouping** — obligations grouped by domain (e.g., DATA_INTEGRITY_RECORDS, INSTALLATION_ENVIRONMENT) in an order that matches execution
- **Narrative sections** — short introductions and transitions so the document reads as a cohesive protocol, not a raw obligation dump

### 2.3 Obligations Annotated for Simple Understanding

Each obligation should be presented with:

- **Verification expectation** — what to verify (e.g., “Verify calibration status and traceability of temperature monitoring systems.”)
- **Acceptance criteria** — when it passes (from obligation CSV when available)
- **Rationale** — why it matters (from obligation CSV when available)
- **Annotation** — plain-language note for the engineer (e.g., “Record calibration certificates and due dates.”)

### 2.4 Standards and Clauses in Standard-Aligned Format

- **Standard ID** — e.g., 21 CFR 820, ISO 13485
- **Clause reference** — in the format used by the standard (e.g., “820.10”, “7.1.4”, “Section 5”)
- **Grouping** — standards listed per obligation; optionally a consolidated “Standards Referenced” section per phase

### 2.5 Phase Summary Tables

For each qualification phase (IQ, OQ, PQ), include a summarized table:

| Column | Purpose |
|--------|---------|
| Standard | 21 CFR 820, ISO 13485, ISO 14971, etc. |
| Clause reference | Exact clause(s) per standard |
| Annotated obligation requirement | Short, engineer-friendly description of what must be done |

This table gives a quick overview of regulatory coverage before the detailed test procedures.

---

## 3. Template Library: “Vaguely Specific”

### 3.1 Concept

- **Vaguely** — enough variety so the content fits all equipment cohorts and types
- **Specific** — enough structure and domain/equipment context so obligations and standards can be naturally woven in

### 3.2 Template Dimensions

Templates vary by:

- **Equipment cohort** — Cold Chain & Storage, Sterilization, Packaging, Metrology, etc.
- **Equipment type** — Refrigerator, Heat Sealer, Analytical Balance, etc.
- **Use case** — human tissue storage, product storage, reagent storage, etc.
- **Capabilities** — has_alarm, has_data_logger, access_control, etc.

### 3.3 Content Sources

- **Equipment-specific text** — e.g., “temperature control and monitoring” for refrigerators vs. “seal integrity and dwell time” for heat sealers
- **Domain-specific sections** — e.g., INSTALLATION_ENVIRONMENT has different wording for cold chain vs. cleanroom
- **Obligation injection** — resolved obligations inserted into the appropriate sections with annotation
- **Standard formatting** — clause references rendered in the format expected by each standard

### 3.5 Placeholders for User-Specific Information

Placeholders indicate where the user must supply their own information. Include placeholders for:

| Category | Examples |
|----------|----------|
| **Protocol identification** | Protocol ID, revision number, document number, effective date |
| **Equipment identification** | Manufacturer, model, serial number, asset tag, firmware/software version |
| **Location-specific** | Building, room, area, cleanroom class, grid location, line/station |
| **Company/business-specific** | Company name, site, department, SOP references, quality system document numbers |
| **Acceptance criteria** | Company-defined limits (e.g., temperature range, pressure tolerances, cycle parameters), product-specific specifications, risk-based custom thresholds |

Where obligations reference general acceptance criteria (e.g., “meets documented requirements”), add placeholders so the user can insert their specific or unique criteria. Example: *“Temperature setpoint: _____°C; acceptable range: _____°C to _____°C (per [SOP-XXX] / product specification).”*

### 3.6 Template Structure (Proposed)

```
1. Cover / Title block
   - Protocol ID, revision, effective date placeholders
   - Equipment type, cohort (from selection)
2. Objective and Scope
   - Equipment-specific narrative (from template)
3. Equipment Identification
   - Placeholder table: Manufacturer, Model, S/N, Location, Asset ID, etc.
4. Site / Company context
   - Location placeholders (building, room, area)
   - Company/site/department placeholders
5. IQ – Installation Qualification
   5.1 Summary table: Standards | Clauses | Annotated requirements
   5.2 Section per domain (e.g., Documentation, Installation, Calibration)
       - Obligations woven in with rationale and acceptance criteria
       - Placeholders for company/equipment-specific acceptance criteria where applicable
6. OQ – Operational Qualification
   6.1 Summary table
   6.2 Section per domain
       - Placeholders for acceptance criteria
7. PQ – Performance Qualification
   7.1 Summary table
   7.2 Section per domain
       - Placeholders for acceptance criteria
8. Approval / Sign-off placeholders
9. Appendix: Standards reference list (optional)
```

---

## 4. Implementation Approach

### 4.1 Phases

| Phase | Deliverable |
|-------|-------------|
| **A. Study** | Extract structure and language from Example Protocol Drafts I Wrote (manual review of .docx); document patterns in a design doc |
| **B. Template schema** | Define template data model: sections, placeholder taxonomy (protocol, equipment, location, company, acceptance criteria), equipment/domain mappings |
| **C. Template content** | Write “vaguely specific” narrative text per cohort/type/domain |
| **D. Obligation integration** | Map resolved obligations into template sections; add annotation (rationale, acceptance criteria) |
| **E. Phase summary tables** | Generate Standards | Clauses | Annotated requirement tables per IQ/OQ/PQ |
| **F. Docx/HTML renderer** | Replace current table-only output with full protocol structure |
| **G. Standards formatting** | Render clause references in standard-specific format |

### 4.2 Data Model Extensions

- **Obligation** — already has `rationale`, `verification_expectation`, `acceptance_criteria`; use for annotation
- **Standards anchors** — `standard`, `clause`, `context_note`; format per standard (e.g., 21 CFR vs. ISO)
- **Template library** — new: section templates keyed by (cohort, equipment_type, domain, phase)

### 4.3 Current vs. Target Output

| Aspect | Current | Target |
|--------|---------|--------|
| Structure | Heading + obligation table per phase | Full protocol: objective, equipment ID, domain sections, summary tables |
| Obligations | Single table row: #, Domain, Obligation, Standard(s) | Annotated with rationale, acceptance criteria; woven into narrative |
| Standards | Raw “STD_X clause_ref” | Standard-aligned format (e.g., “21 CFR 820.10”, “ISO 13485 7.1.4”) |
| Phase overview | None | Summary table: Standard | Clause | Annotated requirement |
| Flow | Flat list | Natural workflow order, domain grouping, transitions |
| Placeholders | None | Protocol ID, equipment, location, company, acceptance criteria |

---

## 5. Dependencies and Ordering

1. **Study Example Protocol Drafts I Wrote** — manual; informs section structure and language
2. **Template schema** — defines how templates are stored and selected
3. **Resolver output unchanged** — `handleDraftRequest` and obligation resolution stay as-is; enhancement is in how we render the draft
4. **`generateDraftDocx` refactor** — main implementation; consume `DraftResponse` + template library → human-readable protocol

---

## 6. Success Criteria

- A validation engineer can open the generated .docx and follow it without extensive reformatting
- Obligations are clearly annotated (what to do, why, when it passes)
- Standards and clauses are presented in formats familiar to the relevant standards
- Each phase (IQ, OQ, PQ) has a summary table of standards, clauses, and annotated requirements
- Content varies appropriately by equipment cohort, type, use case, and capabilities
- Placeholders clearly indicate where the user must input protocol ID, equipment, location, company, and acceptance criteria

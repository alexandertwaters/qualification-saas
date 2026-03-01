# Resolver Selection Logic v1.0

## Purpose

The resolver selection logic defines how obligation records are selected based on explicitly declared context. Selection is deterministic, declarative, and non-evaluative.

The resolver MUST NOT infer intent, evaluate sufficiency, or interpret standards.

---

## Declared inputs

### Required inputs

- **equipment_cohort** — Must match an ontology cohort.
- **equipment_type** — Must match an ontology equipment type.
- **selected_domains** — One or more obligation domains.
- **include_deprecated** — Boolean flag controlling lifecycle inclusion.

### Optional inputs

- **equipment_instance_id** — Used for traceability only.
- **standards_selection** — Used only for contextual filtering of anchors, never for obligation meaning.

**Rule:** Inputs not explicitly provided MUST NOT be assumed.

---

## Selection guarantees

### Domain filtering

An obligation is eligible only if:

- `obligation.domain` is included in `selected_domains`.

No domain inference or expansion is permitted.

---

### Equipment applicability filtering

An obligation is eligible only if:

- `equipment_cohort` matches `obligation.equipment_applicability.cohort`, and
- `equipment_type` is included in `obligation.equipment_applicability.equipment_types`.

No implicit ontology hierarchy traversal is permitted.

---

### Lifecycle filtering

- If `include_deprecated = false`, only obligations with `lifecycle.status = active` are eligible.
- If `include_deprecated = true`, both active and deprecated obligations may be eligible.

No implicit inclusion of deprecated obligations is permitted.

---

### Standards anchoring behavior

Standards anchors:

- Do not affect obligation eligibility.
- Do not gate inclusion.
- Do not imply applicability or compliance.

Anchors are contextual metadata only.

---

## Determinism guarantee

Given the same:

- ontology version
- obligation schema version
- resolver selection logic version
- declared inputs

…the resolver MUST return the same obligation set.

---

## Explicit non-goals

The resolver selection logic MUST NOT:

- Infer obligations based on missing inputs
- Apply conditional logic or branching rules
- Merge, collapse, or prioritize obligations
- Generate new obligations
- Suppress obligations due to perceived redundancy
- Assert completeness, sufficiency, or compliance

# Obligation schema v1.0

## Purpose

An obligation is an atomic, immutable requirement statement. Resolver outputs emit obligations as advisory drafting inputs and do not assert compliance, execution, acceptance, or release decisions.

## Canonical record shape

```json
{
  "obligation_id": "OBL_PACK_CONFIG_DOCUMENTED",
  "title": "Packaging equipment configuration is documented",
  "description": "The configuration settings of packaging sealing equipment are documented prior to use to support traceability and reproducibility.",
  "domain": "packaging",
  "equipment_applicability": {
    "cohort": "Packaging",
    "equipment_types": ["Heat Sealer", "Tray Sealer"]
  },
  "standards_anchors": [
    {
      "standard": "ISO 11607",
      "clause": "7.5",
      "context_note": "Configuration documentation supports process control and traceability."
    }
  ],
  "lifecycle": {
    "status": "active",
    "introduced_in_version": "v1.0",
    "deprecated_in_version": null,
    "deprecation_reason": null,
    "replaced_by_obligation_ids": []
  }
}
Field contract
Identity and meaning
obligation_id (required, immutable): Human-readable, stable, namespaced identifier. Must be globally unique.

title (required, immutable): Short label suitable for UI/protocol rendering.

description (required, immutable): Plain-language intent statement. Must not imply execution, acceptance, or compliance determination.

domain (required, immutable): Semantic namespace from the controlled vocabulary.

Equipment applicability
equipment_applicability (required, immutable): Applicability binding using ontology terms.

cohort (required, immutable): Must match an ontology cohort name.

equipment_types (required, immutable): Non-empty array of ontology equipment type labels (or canonical IDs if introduced later).

Rule: If applicability changes materially, create a new obligation ID.

Standards anchors
standards_anchors (optional, immutable if present): Non-empty array of contextual references.

standard (required per anchor, immutable): Standard identifier string (e.g., ISO 11607).

clause (optional per anchor, immutable): Clause/section reference string.

context_note (optional per anchor, immutable): Non-prescriptive relevance note. Must not assert compliance.

Lifecycle
lifecycle (required):

status (required): active or deprecated. Transition allowed only active → deprecated.

introduced_in_version (required, immutable): Contract version string when introduced.

deprecated_in_version (optional): Required when status is deprecated.

deprecation_reason (optional): Required when status is deprecated.

replaced_by_obligation_ids (optional): Array of replacement obligation IDs (may be empty).

Controlled vocabularies
domain allowed values (v1.x)
packaging

sterilization

inspection_test

assembly_joining

metrology

facilities_utilities

cold_chain_storage

lifecycle.status allowed values
active

deprecated

Obligation ID rules
Canonical format
OBL_<DOMAIN>_<INTENT>

Constraints
Uppercase snake case.

Must not encode standards revisions, equipment models, IQ/OQ/PQ phases, acceptance criteria, execution logic, or version numbers.

IDs are never reused or repurposed.

If meaning changes, create a new obligation ID and deprecate the old one.

Resolver output behavior
Default: emit only obligations where lifecycle.status is active.

Optional: an explicit mode may include deprecated obligations; deprecated obligations must always include lifecycle metadata.
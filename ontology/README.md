# Canonical equipment ontology v1.x

This directory contains the authoritative Canonical Equipment Ontology for Resolver v1.x.

## Governance

- **Governing contract:** Resolver Contract v1.0
- **Semantic posture:** Capability/configuration descriptors only (no execution, outcomes, or compliance assertions)
- **Immutability:** Meanings are immutable within v1.x
- **Change policy:** Additive-only within v1.x (new rows/attributes allowed; existing meanings must not change)

## Authoritative files

The authoritative ontology is published as cohort-split artifacts in:

- `ontology/cohorts/`

Format: `Equipment Name|Cohort|Equipment Type ID|{attributes}|Risk|Standards` (no header row)

## Canonical reference

`data/equipment/canonical_*_cohort.csv` holds the canonical equipment catalog in Validation SaaS format (with header and notes). Ontology cohorts are aligned with this reference.

## Archive

Historical snapshots are retained in:

- `ontology/archive/`

Archived files are **not authoritative**.

Executive Summary
System Overview:
The Resolver is a standards‑aware, advisory system designed to support equipment qualification planning in regulated environments. It operates exclusively in a draft‑generation capacity, identifying qualification obligations associated with a specific equipment instance based on declared attributes, capabilities, and intended use.

The Resolver does not execute qualification activities, manage records, or assert qualification outcomes. All outputs are intended to support human review, approval, and execution within an organization’s established quality system.

Operational Boundaries:
The Resolver exists upstream of formal quality systems and operates independently of them. Its outputs may be used to support preliminary protocol drafting activities that occur prior to controlled document management, approval workflows, or execution within a quality system.

The Resolver is not a system of record. It does not store or manage executed protocols, approvals, evidence artifacts, or operational data. It does not evaluate acceptance criteria, produce pass/fail determinations, or make compliance assertions. All qualification decisions remain the responsibility of the regulated organization.

Standards Awareness:
The Resolver references standards to provide contextual traceability for qualification obligations. Standards references are included to support understanding of why an obligation exists and how it relates to commonly recognized industry expectations.

The Resolver does not interpret standards on behalf of regulators or organizations. It does not determine applicability, precedence, or sufficiency of standards, nor does it assert that adherence to a referenced standard constitutes compliance.

The Resolver does not store, access, distribute, or reproduce copyrighted standards content. Standards references are expressed using clause identifiers, titles, and original paraphrased summaries derived from publicly identifiable metadata. Authoritative standards publications must be consulted directly.

Governance and Stability:
Each qualification obligation produced by the Resolver is assigned a stable, human‑readable identifier that is permanently bound to a specific semantic meaning. Obligation meanings are immutable once published. When practices evolve, new obligations are introduced and prior obligations are deprecated rather than altered, preserving historical interpretability.

Resolver behavior and outputs are governed by a versioned contract. Minor updates may introduce new equipment types, attributes, obligations, or standards references while preserving all existing guarantees and meanings. Major version updates are required for any change to scope, purpose, or interpretive authority and do not retroactively reinterpret prior outputs.
# Resolver Output Envelope v1.0

## Purpose

The resolver output envelope provides contextual metadata for a resolver run while preserving obligation records as immutable semantic units.

The envelope MUST NOT alter obligation meaning.

---

## Canonical envelope shape

```json
{
  "resolver_run": {
    "run_id": "2026-02-28T22:30:00Z",
    "resolver_version": "v1.0",
    "contract_versions": {
      "obligation_schema": "v1.0",
      "resolver_output_envelope": "v1.0"
    },
    "execution_context": {
      "equipment_instance_id": "PKG-SEALER-001",
      "equipment_type": "Heat Sealer",
      "equipment_cohort": "Packaging",
      "selected_domains": ["packaging"],
      "include_deprecated": false
    }
  },
  "obligations": [
    { "... obligation record per obligation schema v1.0 ..." }
  ]
}
Envelope field contract
resolver_run (required)
Metadata describing the resolver execution context.

resolver_run fields
run_id (required): Unique identifier for the resolver run (timestamp or UUID).

resolver_version (required): Resolver engine version string.

contract_versions (required): Declares which semantic contracts govern this output.

obligation_schema (required)

resolver_output_envelope (required)

execution_context (required)
Contextual inputs used to generate the resolver output.

equipment_instance_id (optional): Identifier for the specific equipment instance.

equipment_type (required): Equipment type label from ontology.

equipment_cohort (required): Equipment cohort name.

selected_domains (required): Domains included in this resolver run.

include_deprecated (required): Boolean flag indicating whether deprecated obligations were requested.

Rule: Execution context provides filtering and traceability only. It MUST NOT modify obligation meaning.

obligations (required)
Array of obligation records conforming exactly to the Obligation Schema Contract v1.0.

Obligations MUST be emitted verbatim.

Obligations MUST NOT be reshaped, merged, or annotated.

Default behavior: include only obligations where lifecycle.status = active.

Deprecated obligations may appear only when include_deprecated = true.

Guarantees
By emitting a resolver output envelope, the system guarantees:

Obligation records are immutable semantic units.

Envelope metadata is contextual and non-authoritative.

No compliance, execution, or acceptance determination is asserted.

Explicit non-goals
The resolver output envelope MUST NOT:

Evaluate obligation satisfaction

Assign IQ/OQ/PQ phases

Define verification methods

Assert compliance or release decisions
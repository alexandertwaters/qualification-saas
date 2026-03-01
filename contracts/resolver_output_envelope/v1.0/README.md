# Resolver Output Envelope Contract v1.0

This directory contains the authoritative Resolver Output Envelope Contract v1.0.

## Authority and immutability

- This contract is frozen for v1.x.
- Envelope fields and field meanings MUST NOT be removed, renamed, or redefined within v1.x.
- Additive fields MAY be introduced only in a new contract version directory.
- The envelope MUST NOT redefine or reinterpret obligation records.

## Scope

This contract defines the canonical wrapper structure emitted by a resolver run.

## Non-goals

This contract does not define obligation identity, execution logic, compliance determination, acceptance criteria, or validation outcomes.

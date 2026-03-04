/**
 * Canonical obligation domains by regulatory concern.
 * Domain = semantic namespace for obligations; equipment applicability is separate.
 * Single source of truth for domain vocabulary.
 */

export const OBLIGATION_DOMAINS = [
  "DATA_INTEGRITY_RECORDS",
  "AUDIT_TRAILS_TRACEABILITY",
  "ALARM_EVENT_MANAGEMENT",
  "CONFIGURATION_CHANGE_CONTROL",
  "SYSTEM_ACCESS_SECURITY",
  "INSTALLATION_ENVIRONMENT",
  "FUNCTIONAL_PERFORMANCE",
  "MONITORING_TRENDING",
  "REVIEW_REPORTING",
  "RETENTION_ARCHIVAL",
  "SAFETY_ELECTRICAL",
  "USABILITY_HUMAN_FACTORS",
  "BIOLOGICAL_SAFETY",
  "CALIBRATION_MAINTENANCE",
] as const;

export type ObligationDomain = (typeof OBLIGATION_DOMAINS)[number];

export function isObligationDomain(value: string): value is ObligationDomain {
  return OBLIGATION_DOMAINS.includes(value as ObligationDomain);
}

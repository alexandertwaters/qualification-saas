/**
 * User-selectable use cases and capabilities.
 * These affect obligation inclusion when the resolver supports attribute-based filtering.
 */

export type UseCaseOption = {
  id: string;
  label: string;
  description?: string;
};

export type CapabilityOption = {
  id: string;
  label: string;
  description?: string;
};

export const USE_CASE_OPTIONS: UseCaseOption[] = [
  { id: "HUMAN_TISSUE_STORAGE", label: "Human tissue / HCT/P storage" },
  { id: "PRODUCT_STORAGE", label: "Product storage (drug/device)" },
  { id: "REAGENT_STORAGE", label: "Reagent / raw material storage" },
  { id: "GENERAL_LAB", label: "General laboratory" },
];

export const CAPABILITY_OPTIONS: CapabilityOption[] = [
  { id: "HAS_ALARM", label: "Alarm system" },
  { id: "HAS_DATA_LOGGER", label: "Data logger / continuous monitoring" },
  { id: "ACCESS_CONTROL_RESTRICTED", label: "Restricted access control" },
  { id: "POWER_BACKUP", label: "Power backup" },
];

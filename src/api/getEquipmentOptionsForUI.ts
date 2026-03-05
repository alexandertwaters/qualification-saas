import * as fs from "fs";
import * as path from "path";

export type UseCaseOption = { id: string; label: string };
export type CapabilityOption = { id: string; label: string };

/**
 * Map ontology attribute keys to capability options.
 * Only attributes that imply user-selectable capabilities are included.
 */
const ATTRIBUTE_TO_CAPABILITY: Record<string, CapabilityOption> = {
  has_alarm: { id: "HAS_ALARM", label: "Alarm system" },
  alarm_management_present: { id: "HAS_ALARM", label: "Alarm system" },
  alarm_present: { id: "HAS_ALARM", label: "Alarm system" },
  has_data_logger: { id: "HAS_DATA_LOGGER", label: "Data logger / continuous monitoring" },
  access_control: { id: "ACCESS_CONTROL_RESTRICTED", label: "Restricted access control" },
  power_backup: { id: "POWER_BACKUP", label: "Power backup" },
  software_controlled: { id: "SOFTWARE_CONTROLLED", label: "Software controlled" },
  has_audit_trail: { id: "HAS_AUDIT_TRAIL", label: "Audit trail / electronic records" },
  level_monitoring: { id: "LEVEL_MONITORING", label: "Level monitoring" },
  redundant_supply: { id: "REDUNDANT_SUPPLY", label: "Redundant supply" },
};

/**
 * Use case options by cohort. Equipment-specific overrides can be added later.
 */
const USE_CASES_BY_COHORT: Record<string, UseCaseOption[]> = {
  "Cold Chain & Storage": [
    { id: "HUMAN_TISSUE_STORAGE", label: "Human tissue / HCT/P storage" },
    { id: "PRODUCT_STORAGE", label: "Product storage (drug/device)" },
    { id: "REAGENT_STORAGE", label: "Reagent / raw material storage" },
  ],
  Analytical: [
    { id: "PRODUCT_TESTING", label: "Product release testing" },
    { id: "ROUTINE_QC", label: "Routine quality control" },
    { id: "RAW_MATERIAL", label: "Raw material / in-process testing" },
  ],
  Metrology: [
    { id: "PRODUCT_RELEASE", label: "Product release measurements" },
    { id: "IN_PROCESS", label: "In-process control" },
    { id: "CALIBRATION_SUPPORT", label: "Calibration support" },
  ],
  Sterilization: [
    { id: "TERMINAL_STERILIZATION", label: "Terminal sterilization" },
    { id: "COMPONENT_STERILIZATION", label: "Component sterilization" },
  ],
  Packaging: [
    { id: "PRIMARY_PACKAGING", label: "Primary sterile barrier" },
    { id: "SECONDARY_PACKAGING", label: "Secondary packaging" },
  ],
  "Facilities & Utilities": [
    { id: "CLEANROOM", label: "Cleanroom environmental control" },
    { id: "UTILITY_SUPPORT", label: "Utility support" },
  ],
  Decontamination: [
    { id: "SURGICAL_INSTRUMENTS", label: "Surgical instrument reprocessing" },
    { id: "DEVICE_CLEANING", label: "Device cleaning" },
  ],
  "Inspection & Test": [
    { id: "100_PERCENT_INSPECTION", label: "100% inspection" },
    { id: "SAMPLE_INSPECTION", label: "Sample inspection" },
  ],
  IVD: [
    { id: "CLINICAL_USE", label: "Clinical use" },
    { id: "MANUFACTURING_QC", label: "Manufacturing QC" },
  ],
  Manufacturing: [
    { id: "PRODUCTION", label: "Production" },
    { id: "PROTOTYPE", label: "Prototype" },
  ],
};

const DEFAULT_USE_CASES: UseCaseOption[] = [
  { id: "GENERAL", label: "General" },
];

function parseAttributes(attrJson: string): Record<string, unknown> {
  if (!attrJson?.trim()) return {};
  try {
    const parsed = JSON.parse(attrJson);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function getEquipmentAttributes(cohort: string, equipmentType: string): Record<string, unknown> {
  const cohortsDir = path.join(process.cwd(), "ontology", "cohorts");
  if (!fs.existsSync(cohortsDir)) return {};
  const files = fs.readdirSync(cohortsDir).filter((f) => f.endsWith(".csv"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(cohortsDir, file), "utf-8");
    const lines = content.split(/\r?\n/).filter((l) => l.trim());
    for (let i = 0; i < lines.length; i++) {
      const parts = lines[i].split("|");
      if (parts.length < 4) continue;
      const lineCohort = (parts[1] ?? "").trim();
      const lineType = (parts[2] ?? "").trim();
      if (lineCohort === cohort && lineType === equipmentType) {
        return parseAttributes(parts[3] ?? "{}");
      }
    }
  }
  return {};
}

export function getEquipmentOptionsForUI(
  cohort: string,
  equipmentType: string
): { use_case_options: UseCaseOption[]; capability_options: CapabilityOption[] } {
  const attrs = getEquipmentAttributes(cohort, equipmentType);
  const capabilityOptions: CapabilityOption[] = [];
  const seen = new Set<string>();
  for (const key of Object.keys(attrs)) {
    const cap = ATTRIBUTE_TO_CAPABILITY[key];
    if (cap && !seen.has(cap.id)) {
      seen.add(cap.id);
      capabilityOptions.push(cap);
    }
  }
  if (capabilityOptions.length === 0) {
    capabilityOptions.push(
      { id: "HAS_ALARM", label: "Alarm system" },
      { id: "HAS_DATA_LOGGER", label: "Data logger" },
      { id: "SOFTWARE_CONTROLLED", label: "Software controlled" }
    );
  }
  const useCaseOptions = USE_CASES_BY_COHORT[cohort] ?? DEFAULT_USE_CASES;
  return { use_case_options: useCaseOptions, capability_options: capabilityOptions };
}

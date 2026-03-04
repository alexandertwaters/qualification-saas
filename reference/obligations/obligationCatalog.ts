/**
 * Obligation catalog derived from data/ standards and obligations.
 * Source: data/obligations/*.csv
 * Standards: data/standards/standards100.csv
 * Transformed to qualification_saas Obligation schema with equipment_applicability
 * aligned to ontology cohorts (ontology/cohorts/).
 */

import type { Obligation } from "./obligation";
import { generatedObligations } from "./generatedObligations";

function ob(
  id: string,
  phase: Obligation["qualification_phase"],
  domain: Obligation["domain"],
  title: string,
  description: string,
  equipment: { cohort: string; equipment_types: string[] },
  standard: string,
  clause?: string,
  extra?: Partial<Obligation>
): Obligation {
  return {
    obligation_id: id,
    qualification_phase: phase,
    domain,
    title,
    description,
    equipment_applicability: equipment,
    standards_anchors: [{ standard, clause }].filter((a) => a.standard),
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: [],
    },
    rationale: extra?.rationale,
    verification_expectation: extra?.verification_expectation,
    acceptance_criteria: extra?.acceptance_criteria,
    ...extra,
  };
}

// --- ISO 17665 Steam Sterilizer (from ISO17665_SteamSterilizer_obligations.csv) ---
const steamSterilizer = {
  cohort: "Sterilization",
  equipment_types: ["Steam Sterilizer (Pre-Vacuum)", "Steam Sterilizer (Gravity)"],
};

const steamObligations: Obligation[] = [
  ob(
    "OBL_ISO17665_STEAM_0001",
    "IQ",
    "REVIEW_REPORTING",
    "Sterilization process intended use defined",
    "The sterilization process is defined for intended products, packaging, and load types before qualification begins.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0002",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "Roles and approval authorities defined",
    "Responsibilities and approval authorities are defined for sterilization validation and release decisions.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0003",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation and utilities verified",
    "Sterilizer installation, utilities, drainage, steam supply, and safety systems are suitable for intended cycles.",
    steamSterilizer,
    "ISO 17665",
    undefined,
    {
      verification_expectation:
        "Verify installation, utilities, drainage, steam supply, and safety systems are suitable for intended sterilization cycles.",
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0004",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Critical sensors calibrated and traceable",
    "Temperature, pressure, and timing measurement systems are calibrated and traceable.",
    steamSterilizer,
    "ISO 17665",
    undefined,
    {
      verification_expectation:
        "Ensure temperature, pressure, and timing measurement systems are calibrated and traceable.",
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0005",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Control system configuration defined and controlled",
    "Cycle recipes, setpoints, alarms, interlocks, and configuration baselines are documented and controlled.",
    steamSterilizer,
    "ISO 17665",
    undefined,
    {
      verification_expectation:
        "Document and control cycle recipes, setpoints, alarms, interlocks, and configuration baselines.",
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0006",
    "OQ",
    "REVIEW_REPORTING",
    "Load families and worst-case rationale defined",
    "Load families and worst-case selections are defined and justified based on mass, density, packaging, and steam penetration difficulty.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0007",
    "OQ",
    "REVIEW_REPORTING",
    "Cycle development strategy defined",
    "Cycle development approach is defined, including target conditions, exposure phase intent, and how parameters will be established.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0008",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Air removal and steam penetration demonstrated",
    "Effective air removal and steam penetration are demonstrated for representative and worst-case load configurations.",
    steamSterilizer,
    "ISO 17665",
    undefined,
    {
      verification_expectation:
        "Demonstrate effective air removal and steam penetration for representative and worst-case load configurations.",
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0009",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Operating ranges and control limits challenged",
    "Critical setpoints and limits are challenged to demonstrate the sterilizer maintains required conditions across defined ranges.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0010",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Chamber temperature distribution characterized",
    "Chamber temperature distribution is characterized using a defined sensor layout with demonstrated uniformity.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0011",
    "PQ",
    "REVIEW_REPORTING",
    "Validated load configurations defined",
    "Validated load configurations are defined and controlled, including orientation, spacing, packaging arrangement, and limits.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0012",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "PQ demonstrates consistent performance",
    "PQ runs demonstrate consistent performance using routine operators, materials, and defined load configurations.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0013",
    "PQ",
    "REVIEW_REPORTING",
    "Worst-case monitoring locations identified",
    "Worst-case locations are identified and monitoring devices are placed accordingly.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0014",
    "OQ",
    "REVIEW_REPORTING",
    "Acceptance criteria defined",
    "Measurable acceptance criteria are defined for cycle parameters, monitoring results, and deviations.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0015",
    "PQ",
    "MONITORING_TRENDING",
    "Routine monitoring strategy defined",
    "Routine monitoring methods, frequencies, and review requirements are defined.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0016",
    "PQ",
    "DATA_INTEGRITY_RECORDS",
    "Parametric release controls defined",
    "Conditions and evidence required for parametric release are defined when applicable.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0017",
    "PQ",
    "REVIEW_REPORTING",
    "Deviation handling defined",
    "Deviations, alarms, and excursions trigger documented evaluation and disposition.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0018",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Maintenance and requalification linkage defined",
    "Maintenance and calibration requirements and triggers for requalification are defined.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0019",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Change control and revalidation triggers defined",
    "Change categories and criteria for requalification or revalidation are defined.",
    steamSterilizer,
    "ISO 17665"
  ),
  ob(
    "OBL_ISO17665_STEAM_0020",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Periodic requalification program defined",
    "Periodic requalification frequency, scope, and acceptance criteria are defined.",
    steamSterilizer,
    "ISO 17665"
  ),
];

// --- ISO 11607-2 Form-Fill-Seal (from ISO11607_2_FFS_obligations.csv) ---
const ffsEquipment = {
  cohort: "Packaging",
  equipment_types: ["Form-Fill-Seal Machine", "Heat Sealer", "Tray Sealer", "Blister Sealer"],
};

const ffsObligations: Obligation[] = [
  ob(
    "OBL_ISO11607_2_FFS_0001",
    "IQ",
    "REVIEW_REPORTING",
    "Forming, sealing, and filling process defined",
    "The forming, sealing, and filling process and packaging system boundaries are defined.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0002",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation and utilities verified",
    "Utilities, air supply, forming/sealing stations, and safety systems are verified.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0003",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Forming and sealing sensors calibrated",
    "Temperature, pressure, and timing sensors are calibrated and traceable.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0004",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Control system configuration defined",
    "Cycle recipes, alarms, interlocks, and configuration baselines are defined and controlled.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0005",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Forming process parameters validated",
    "Forming temperature, dwell, and vacuum parameters are challenged and validated.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0006",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Sealing process parameters validated",
    "Sealing temperature, pressure, and dwell time are challenged and validated.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0007",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Operating window established",
    "Acceptable ranges for forming and sealing parameters are established.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0008",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Seal integrity demonstrated",
    "Seal strength and integrity are demonstrated under routine conditions.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0009",
    "PQ",
    "MONITORING_TRENDING",
    "Routine monitoring strategy defined",
    "Routine checks for sealing and forming parameters are defined.",
    ffsEquipment,
    "ISO 11607-2"
  ),
  ob(
    "OBL_ISO11607_2_FFS_0010",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Change control triggers defined",
    "Changes requiring requalification are defined.",
    ffsEquipment,
    "ISO 11607-2"
  ),
];

// --- Human Tissue Refrigerator (from HumanTissue_Refrigerator_obligations.csv) ---
const tissueRefrigerator = {
  cohort: "Cold Chain & Storage",
  equipment_types: ["Refrigerator"],
};

const tissueObligations: Obligation[] = [
  ob(
    "OBL_TISSUE_FRIDGE_0001",
    "IQ",
    "REVIEW_REPORTING",
    "Intended use and tissue storage limits defined",
    "Intended use, tissue categories, storage limits, and custody expectations for human tissue are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0002",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation location and environment verified",
    "Installation, airflow, ambient temperature, clearance, and environmental suitability are verified.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0003",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Temperature probes and loggers calibrated",
    "Temperature probes and data loggers are calibrated and traceable.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0004",
    "IQ",
    "ALARM_EVENT_MANAGEMENT",
    "Alarm thresholds and notification defined",
    "Alarm thresholds, delays, escalation paths, and notification routing are defined and verified.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0005",
    "IQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Access control and custody procedures defined",
    "Access control, authorized handlers, and chain-of-custody procedures are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0006",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "Loading, segregation, and cleaning SOPs defined",
    "SOPs for loading, segregation, cleaning, and alarm response are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0007",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "Personnel trained and authorized",
    "Personnel are trained and authorized for tissue handling.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0010",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Temperature mapping performed",
    "Temperature mapping demonstrates compliance across the usable storage volume.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0011",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Door-open and recovery behavior challenged",
    "Door-open and recovery behavior are challenged to ensure tissue remains protected.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0012",
    "OQ",
    "ALARM_EVENT_MANAGEMENT",
    "Alarm verification under challenge",
    "Alarm thresholds, delays, and escalation paths are verified under challenge conditions.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0013",
    "OQ",
    "DATA_INTEGRITY_RECORDS",
    "Data logging and review controls defined",
    "Data logging intervals, retention, review frequency, and audit trail expectations are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0014",
    "OQ",
    "REVIEW_REPORTING",
    "Acceptance criteria for excursions defined",
    "Measurable acceptance criteria for excursions, recovery times, and allowable deviations are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0020",
    "PQ",
    "MONITORING_TRENDING",
    "Routine monitoring plan defined",
    "Routine monitoring frequency, review expectations, and trending requirements are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0021",
    "PQ",
    "REVIEW_REPORTING",
    "Excursion handling defined",
    "Excursion investigation, assessment, and disposition procedures are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0022",
    "PQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Chain-of-custody verified during routine use",
    "Custody events, authorized handlers, and access logs are verified during routine use.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0023",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Maintenance and calibration support ongoing performance",
    "Maintenance and calibration schedules and their linkage to requalification are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0024",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Change control triggers requalification",
    "Change categories and criteria for requalification are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
  ob(
    "OBL_TISSUE_FRIDGE_0025",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Periodic requalification defined",
    "Periodic requalification frequency, scope, and acceptance criteria are defined.",
    tissueRefrigerator,
    "21 CFR 1271"
  ),
];

// --- EMS (Environmental Monitoring System) - from standards100 + ISO 14698 ---
const emsEquipment = {
  cohort: "Facilities & Utilities",
  equipment_types: ["EMS"],
};

const emsObligations: Obligation[] = [
  ob(
    "OBL_EMS_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "EMS installed in suitable location",
    "Environmental monitoring system is installed in a location suitable for representative sampling and reliable operation.",
    emsEquipment,
    "ISO 14698"
  ),
  ob(
    "OBL_EMS_0002",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "EMS sensors calibrated and traceable",
    "Monitoring sensors and data loggers are calibrated and traceable to national standards.",
    emsEquipment,
    "ISO 14644-3"
  ),
  ob(
    "OBL_EMS_0003",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "EMS configuration defined and controlled",
    "System configuration, alarm thresholds, and data collection parameters are documented and controlled.",
    emsEquipment,
    "21 CFR Part 11"
  ),
  ob(
    "OBL_EMS_0004",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Monitoring functions verified",
    "Monitoring functions are verified across the defined operating range and parameter set.",
    emsEquipment,
    "ISO 14698"
  ),
  ob(
    "OBL_EMS_0005",
    "OQ",
    "ALARM_EVENT_MANAGEMENT",
    "Alarm response verified",
    "Alarm and alert behavior is verified under defined out-of-limits conditions.",
    emsEquipment,
    "ISO 14698"
  ),
  ob(
    "OBL_EMS_0006",
    "OQ",
    "DATA_INTEGRITY_RECORDS",
    "Data integrity and audit trail verified",
    "Data logging integrity, audit trail capability, and review controls are verified.",
    emsEquipment,
    "21 CFR Part 11"
  ),
  ob(
    "OBL_EMS_0007",
    "PQ",
    "MONITORING_TRENDING",
    "Routine monitoring and trending defined",
    "Routine monitoring strategy, trending requirements, and alert response procedures are defined.",
    emsEquipment,
    "ISO 14698"
  ),
];

// --- Analytical Balance / Microbalance (USP 1058, ISO 17025) ---
const balanceEquipment = {
  cohort: "Metrology",
  equipment_types: ["Analytical Balance", "Microbalance"],
};

const balanceObligations: Obligation[] = [
  ob(
    "OBL_BALANCE_0001",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation present and controlled",
    "Required instrument documentation is present, controlled, and accessible for qualification and routine use.",
    balanceEquipment,
    "USP <1058>"
  ),
  ob(
    "OBL_BALANCE_0002",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment suitable",
    "The instrument is installed in an environment suitable for accurate and reliable operation.",
    balanceEquipment,
    "ISO/IEC 17025"
  ),
  ob(
    "OBL_BALANCE_0003",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Calibration status verified",
    "Instrument calibration status is verified and traceable to national standards.",
    balanceEquipment,
    "USP <1058>"
  ),
  ob(
    "OBL_BALANCE_0004",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions verified across operating range",
    "The instrument performs its intended functions across the defined operating range.",
    balanceEquipment,
    "USP <1058>"
  ),
  ob(
    "OBL_BALANCE_0005",
    "OQ",
    "ALARM_EVENT_MANAGEMENT",
    "Alarm and status indications verified",
    "The instrument provides appropriate alarm, warning, or status indications under abnormal conditions.",
    balanceEquipment,
    "IEC 61010"
  ),
  ob(
    "OBL_BALANCE_0006",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Performance accuracy under routine conditions",
    "The instrument achieves acceptable performance accuracy under routine operating conditions.",
    balanceEquipment,
    "USP <1058>"
  ),
  ob(
    "OBL_BALANCE_0007",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Reproducibility demonstrated",
    "The instrument produces reproducible results across repeated routine runs.",
    balanceEquipment,
    "ISO 5725"
  ),
];

/** Combined obligation catalog for resolver */
export const obligationCatalog: Obligation[] = [
  ...generatedObligations,
  ...steamObligations,
  ...ffsObligations,
  ...tissueObligations,
  ...emsObligations,
  ...balanceObligations,
];

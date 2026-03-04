import type { Obligation } from "./obligation";

export const stubObligationCatalog: Obligation[] = [
  {
    obligation_id: "OBL_DATA_INTEGRITY_DOC_CONTROLLED",
    qualification_phase: "IQ",
    domain: "DATA_INTEGRITY_RECORDS",
    title: "Required documentation is present and controlled",
    description:
      "Required instrument documentation is present, controlled, and accessible for qualification and routine use.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance", "Microbalance"]
    },
    standards_anchors: [
      {
        standard: "ISO 9001",
        clause: "documented information",
        context_note: "GxP documentation expectations"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    rationale:
      "Qualification and ongoing compliant use depend on controlled access to manufacturer instructions, calibration evidence, and internal SOPs.",
    verification_expectation:
      "Verify the presence and controlled status of the instrument user manual, installation instructions (if applicable), calibration certificate (or traceable calibration evidence), and applicable internal SOPs/work instructions.",
    acceptance_criteria:
      "All required documents are present, current/approved where applicable, and uniquely identifiable with controlled access for intended users."
  },
  {
    obligation_id: "OBL_INSTALL_ENV_SUITABLE",
    qualification_phase: "IQ",
    domain: "INSTALLATION_ENVIRONMENT",
    title: "Installation environment is suitable",
    description:
      "The instrument is installed in an environment suitable for accurate and reliable operation.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance", "Microbalance"]
    },
    standards_anchors: [
      {
        standard: "ISO/IEC 17025",
        clause: "environmental conditions",
        context_note: "General principle for environmental suitability"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    rationale:
      "Environmental conditions can materially affect measurement integrity and repeatability.",
    verification_expectation:
      "Verify installation location suitability: stable bench/surface, appropriate clearance, absence of excessive vibration/airflow.",
    acceptance_criteria:
      "Installation environment meets documented requirements for the instrument's intended use."
  },
  {
    obligation_id: "OBL_FUNC_OPERATING_RANGE",
    qualification_phase: "OQ",
    domain: "FUNCTIONAL_PERFORMANCE",
    title: "Functions perform across operating range",
    description:
      "The instrument performs its intended functions across the defined operating range.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance", "Microbalance"]
    },
    standards_anchors: [
      {
        standard: "GxP",
        context_note: "Operational qualification principles"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    rationale:
      "Operational qualification demonstrates that the instrument functions correctly under expected operating conditions.",
    verification_expectation:
      "Execute functional tests covering the instrument's primary operating modes and defined operating range.",
    acceptance_criteria:
      "All functional tests complete successfully with results meeting documented expectations."
  },
  {
    obligation_id: "OBL_ALARM_INDICATIONS_LEGACY",
    qualification_phase: "OQ",
    domain: "ALARM_EVENT_MANAGEMENT",
    title: "Alarm or error indications under fault conditions (legacy)",
    description:
      "The instrument provides appropriate alarm or error indications under defined fault or out-of-range conditions.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance"]
    },
    standards_anchors: [
      {
        standard: "IEC 61010",
        context_note: "General safety principles - reference only"
      }
    ],
    lifecycle: {
      status: "deprecated",
      introduced_in_version: "v1.0",
      deprecated_in_version: "v1.0",
      replaced_by_obligation_ids: ["OBL_ALARM_INDICATIONS"]
    },
    rationale: "Alarm and error indication behavior supports safe operation.",
    verification_expectation:
      "Induce representative fault or out-of-range conditions and observe instrument alarm or error responses.",
    acceptance_criteria:
      "Alarm or error indications are triggered as expected and are clearly observable."
  },
  {
    obligation_id: "OBL_ALARM_INDICATIONS",
    qualification_phase: "OQ",
    domain: "ALARM_EVENT_MANAGEMENT",
    title: "Alarm, warning, or status indications under abnormal conditions",
    description:
      "The instrument provides appropriate alarm, warning, or status indications under defined fault, out-of-range, or abnormal operating conditions.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance", "Microbalance"]
    },
    standards_anchors: [
      {
        standard: "IEC 61010",
        context_note: "General safety principles - reference only"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    rationale:
      "Updated alarm and status indication requirements reflect modern instrument designs.",
    verification_expectation:
      "Induce representative fault, out-of-range, or abnormal operating conditions and verify clear and appropriate indications.",
    acceptance_criteria:
      "Alarm, warning, or status indications are triggered as expected and are clearly observable or accessible."
  },
  {
    obligation_id: "OBL_PERF_ACCURACY",
    qualification_phase: "PQ",
    domain: "FUNCTIONAL_PERFORMANCE",
    title: "Performance accuracy under routine conditions",
    description:
      "The instrument achieves acceptable performance accuracy under routine operating conditions.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance", "Microbalance"]
    },
    standards_anchors: [
      {
        standard: "GxP",
        context_note: "Performance qualification principles"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    rationale:
      "Performance qualification provides evidence that the instrument consistently meets accuracy expectations during normal use.",
    verification_expectation:
      "Execute performance tests using representative samples or reference materials under routine operating conditions.",
    acceptance_criteria:
      "Measured results meet predefined accuracy criteria with no unresolved deviations."
  },
  {
    obligation_id: "OBL_PERF_REPRODUCIBILITY",
    qualification_phase: "PQ",
    domain: "FUNCTIONAL_PERFORMANCE",
    title: "Reproducible results across routine runs",
    description:
      "The instrument produces reproducible results across repeated routine runs.",
    equipment_applicability: {
      cohort: "Metrology",
      equipment_types: ["Analytical Balance", "Microbalance"]
    },
    standards_anchors: [
      {
        standard: "ISO 5725",
        context_note: "Precision and reproducibility - general principle"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    rationale:
      "Reproducibility demonstrates that the instrument performs consistently over time.",
    verification_expectation:
      "Perform repeated measurements or runs under routine conditions and evaluate result variability against predefined limits.",
    acceptance_criteria:
      "Result variability remains within documented reproducibility limits."
  },
  // Packaging obligations (equipment catalog alignment)
  {
    obligation_id: "OBL_CONFIG_DOCUMENTED",
    qualification_phase: "IQ",
    domain: "CONFIGURATION_CHANGE_CONTROL",
    title: "Equipment configuration is documented",
    description:
      "Configuration settings of packaging sealing equipment are documented prior to use to support traceability and reproducibility.",
    equipment_applicability: {
      cohort: "Packaging",
      equipment_types: ["Heat Sealer", "Tray Sealer", "Blister Sealer", "Form-Fill-Seal Machine"]
    },
    standards_anchors: [
      {
        standard: "ISO 11607",
        clause: "7.5",
        context_note: "Configuration documentation supports process control and traceability"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    verification_expectation:
      "Verify configuration parameters are documented and traceable to approved settings."
  },
  // EMS obligations (Facilities & Utilities - v1 proving ground)
  {
    obligation_id: "OBL_EMS_ENV_INSTALLED",
    qualification_phase: "IQ",
    domain: "INSTALLATION_ENVIRONMENT",
    title: "EMS installed in suitable location",
    description:
      "Environmental monitoring system is installed in a location suitable for representative sampling and reliable operation.",
    equipment_applicability: {
      cohort: "Facilities & Utilities",
      equipment_types: ["EMS"]
    },
    standards_anchors: [
      {
        standard: "ISO 14644",
        context_note: "Environmental monitoring system installation"
      }
    ],
    lifecycle: {
      status: "active",
      introduced_in_version: "v1.0",
      deprecated_in_version: null,
      replaced_by_obligation_ids: []
    },
    verification_expectation:
      "Verify EMS sensor placement, connectivity, and environmental suitability."
  }
];

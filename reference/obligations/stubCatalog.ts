import { Obligation } from "./obligation"

export const stubObligationCatalog: Obligation[] = [
  {
    obligation_id: "IQ-DOC-001",
    qualification_phase: "IQ",
    domain: "documentation",
    intent:
      "Confirm required instrument documentation is present, controlled, and accessible for qualification and routine use.",
    rationale:
      "Qualification and ongoing compliant use depend on controlled access to manufacturer instructions, calibration evidence, and internal SOPs.",
    verification_expectation:
      "Verify the presence and controlled status of the instrument user manual, installation instructions (if applicable), calibration certificate (or traceable calibration evidence), and applicable internal SOPs/work instructions.",
    acceptance_criteria:
      "All required documents are present, current/approved where applicable, and uniquely identifiable (e.g., document ID/version or certificate number) with controlled access for intended users.",
    standards_references: ["ISO 9001 (documented information)", "GxP documentation expectations"],
    lifecycle_status: "active"
  },
  {
    obligation_id: "IQ-ENV-002",
    qualification_phase: "IQ",
    domain: "installation_environment",
    intent:
      "Confirm the instrument is installed in an environment suitable for accurate and reliable operation.",
    rationale:
      "Environmental conditions (bench stability, vibration, airflow, power quality, ambient conditions) can materially affect measurement integrity and repeatability.",
    verification_expectation:
      "Verify installation location suitability: stable bench/surface, appropriate clearance, absence of excessive vibration/airflow, and availability of appropriate power. Record relevant ambient conditions if required by the instrument’s intended use.",
    acceptance_criteria:
      "Installation environment meets documented requirements for the instrument’s intended use, and any required environmental checks are recorded with no unresolved deviations.",
    standards_references: ["ISO/IEC 17025 (environmental conditions - general principle)"],
    lifecycle_status: "active"
  }

  ,
  {
    obligation_id: "OQ-FUNC-001",
    qualification_phase: "OQ",
    domain: "functional_operation",
    intent:
      "Confirm the instrument performs its intended functions across the defined operating range.",
    rationale:
      "Operational qualification demonstrates that the instrument functions correctly under expected operating conditions prior to routine use.",
    verification_expectation:
      "Execute functional tests covering the instrument’s primary operating modes and defined operating range, using manufacturer-recommended or internally approved procedures.",
    acceptance_criteria:
      "All functional tests complete successfully with results meeting documented expectations and no unresolved functional deviations.",
    standards_references: ["GxP operational qualification principles"],
    lifecycle_status: "active"
  },
  {
    obligation_id: "OQ-ALARM-002",
    qualification_phase: "OQ",
    domain: "safety_and_alarms",
    intent:
      "Confirm the instrument provides appropriate alarm or error indications under defined fault or out-of-range conditions.",
    rationale:
      "Alarm and error indication behavior supports safe operation and timely detection of abnormal conditions.",
    verification_expectation:
      "Induce representative fault or out-of-range conditions and observe instrument alarm or error responses in accordance with documented expectations.",
    acceptance_criteria:
      "Alarm or error indications are triggered as expected and are clearly observable; any deviations are documented and assessed.",
    standards_references: ["IEC 61010 (general safety principles - reference only)"],
    lifecycle_status: "deprecated"
  }

  ,
  {
    obligation_id: "PQ-PERF-001",
    qualification_phase: "PQ",
    domain: "performance_accuracy",
    intent:
      "Confirm the instrument achieves acceptable performance accuracy under routine operating conditions.",
    rationale:
      "Performance qualification provides evidence that the instrument consistently meets accuracy expectations during normal use, supporting data integrity and fitness for purpose.",
    verification_expectation:
      "Execute performance tests using representative samples or reference materials under routine operating conditions, following approved procedures.",
    acceptance_criteria:
      "Measured results meet predefined accuracy criteria with no unresolved deviations impacting intended use.",
    standards_references: ["GxP performance qualification principles"],
    lifecycle_status: "active"
  },
  {
    obligation_id: "PQ-REPRO-002",
    qualification_phase: "PQ",
    domain: "performance_reproducibility",
    intent:
      "Confirm the instrument produces reproducible results across repeated routine runs.",
    rationale:
      "Reproducibility demonstrates that the instrument performs consistently over time, supporting confidence in ongoing operational results.",
    verification_expectation:
      "Perform repeated measurements or runs under routine conditions and evaluate result variability against predefined limits.",
    acceptance_criteria:
      "Result variability remains within documented reproducibility limits with no unexplained trends or failures.",
    standards_references: ["ISO 5725 (precision and reproducibility - general principle)"],
    lifecycle_status: "active"
  }
]
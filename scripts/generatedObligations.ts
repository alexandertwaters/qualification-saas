/**
 * Generated from data/obligations/STD_QMSR_obligations.csv, STD_ISO13485_obligations.csv, STD_ISO14971_obligations.csv
 * Do not edit manually. Run: node scripts/buildObligationCatalog.mjs
 */

import type { Obligation } from "../reference/obligations/obligation";

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

export const generatedObligations: Obligation[] = [
  ob(
    "OBL_ISO13485_PROC_0001",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Process validation for special processes",
    "Where resulting output cannot be verified by subsequent monitoring or measurement processes must be validated.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "ISO 13485:2016",
    "7.5.6",
    {
      verification_expectation: "Where the process produces output that cannot be fully verified verify that validation demonstrates the process achieves planned results.",
      acceptance_criteria: "Validation evidence demonstrates the process achieves planned results under defined conditions.",
      rationale: "ISO 13485 requires validation of processes where output cannot be verified by subsequent inspection."
    }
  ),
  ob(
    "OBL_ISO13485_PROC_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Process validation for special processes",
    "Where resulting output cannot be verified by subsequent monitoring or measurement processes must be validated.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "ISO 13485:2016",
    "7.5.6",
    {
      verification_expectation: "Where the process produces output that cannot be fully verified verify that validation demonstrates the process achieves planned results.",
      acceptance_criteria: "Validation evidence demonstrates the process achieves planned results under defined conditions.",
      rationale: "ISO 13485 requires validation of sterilization and other special processes."
    }
  ),
  ob(
    "OBL_ISO13485_PROC_0003",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Process validation for special processes",
    "Where resulting output cannot be verified by subsequent monitoring or measurement processes must be validated.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 13485:2016",
    "7.5.6",
    {
      verification_expectation: "Where the sealing or forming process produces output that cannot be fully verified verify that validation demonstrates the process achieves planned results.",
      acceptance_criteria: "Validation evidence demonstrates the process achieves planned results under defined conditions.",
      rationale: "ISO 13485 requires validation of sealing and packaging processes."
    }
  ),
  ob(
    "OBL_ISO13485_PROC_0004",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Process validation for special processes",
    "Where resulting output cannot be verified by subsequent monitoring or measurement processes must be validated.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "ISO 13485:2016",
    "7.5.6",
    {
      verification_expectation: "Where the assembly process produces output that cannot be fully verified verify that validation demonstrates the process achieves planned results.",
      acceptance_criteria: "Validation evidence demonstrates the process achieves planned results under defined conditions.",
      rationale: "ISO 13485 requires validation of assembly processes where output cannot be fully verified."
    }
  ),
  ob(
    "OBL_ISO13485_REC_0001",
    "IQ",
    "RETENTION_ARCHIVAL",
    "Records are retained and retrievable",
    "Qualification and operational records are retained and retrievable per documented retention requirements.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "Handheld Dimensional Tool",
      "CMM",
      "Optical Measurement System",
      "Environmental Probe",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "ISO 13485:2016",
    "4.2.5",
    {
      verification_expectation: "Verify that procedures define record retention and that records are retained per requirements.",
      acceptance_criteria: "Records are retained and retrievable per documented retention requirements.",
      rationale: "ISO 13485 requires controlled retention of quality records."
    }
  ),
  ob(
    "OBL_ISO13485_REC_0002",
    "IQ",
    "RETENTION_ARCHIVAL",
    "Records are retained and retrievable",
    "Qualification and operational records are retained and retrievable per documented retention requirements.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "ISO 13485:2016",
    "4.2.5",
    {
      verification_expectation: "Verify that procedures define record retention and that records are retained per requirements.",
      acceptance_criteria: "Records are retained and retrievable per documented retention requirements.",
      rationale: "ISO 13485 requires controlled retention of quality records."
    }
  ),
  ob(
    "OBL_ISO13485_REC_0003",
    "IQ",
    "RETENTION_ARCHIVAL",
    "Records are retained and retrievable",
    "Qualification and operational records are retained and retrievable per documented retention requirements.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "ISO 13485:2016",
    "4.2.5",
    {
      verification_expectation: "Verify that procedures define record retention and that records are retained per requirements.",
      acceptance_criteria: "Records are retained and retrievable per documented retention requirements.",
      rationale: "ISO 13485 requires controlled retention of quality records."
    }
  ),
  ob(
    "OBL_ISO13485_REC_0004",
    "IQ",
    "RETENTION_ARCHIVAL",
    "Records are retained and retrievable",
    "Qualification and operational records are retained and retrievable per documented retention requirements.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "ISO 13485:2016",
    "4.2.5",
    {
      verification_expectation: "Verify that procedures define record retention and that records are retained per requirements.",
      acceptance_criteria: "Records are retained and retrievable per documented retention requirements.",
      rationale: "ISO 13485 requires controlled retention of quality records."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0001",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "Handheld Dimensional Tool",
      "CMM",
      "Optical Measurement System",
      "Environmental Probe",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to validation scope and depth."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0002",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to sterilization validation scope."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0003",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to packaging validation scope."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0004",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to facility and utility validation scope."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0005",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Metal Detector",
      "Checkweigher",
      "Leak Tester",
      "Burst Tester",
      "Seal Strength Tester",
      "Dye Penetration Tester",
      "Barcode Verifier",
      "Label Applicator"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to inspection and test validation scope."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0006",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to assembly validation scope."
    }
  ),
  ob(
    "OBL_ISO14971_RISK_0007",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Refrigerator",
      "Freezer",
      "Ultra-Low Freezer",
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to cold chain validation scope."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0001",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required instrument documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "Handheld Dimensional Tool",
      "CMM",
      "Optical Measurement System",
      "Environmental Probe",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0002",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0003",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0004",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0005",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Metal Detector",
      "Checkweigher",
      "Leak Tester",
      "Burst Tester",
      "Seal Strength Tester",
      "Dye Penetration Tester",
      "Barcode Verifier",
      "Label Applicator"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0006",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0007",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Refrigerator",
      "Freezer",
      "Ultra-Low Freezer",
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions installation instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for accurate and reliable operation.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "Handheld Dimensional Tool",
      "CMM",
      "Optical Measurement System",
      "Environmental Probe",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation location suitability: stable bench/surface appropriate clearance absence of excessive vibration and airflow.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect measurement integrity and repeatability."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0002",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation utilities drainage and space suitability for intended sterilization cycles.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental and utility conditions affect sterilization performance."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0003",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation space utilities and environmental conditions suitability.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect sealing and packaging consistency."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0004",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation space utilities and environmental suitability for the system type.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Utilities and environment affect facility and utility system performance."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0005",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Metal Detector",
      "Checkweigher",
      "Leak Tester",
      "Burst Tester",
      "Seal Strength Tester",
      "Dye Penetration Tester",
      "Barcode Verifier",
      "Label Applicator"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation location and environmental conditions suitability for test accuracy.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect inspection and test results."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0006",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation space utilities and environmental suitability for assembly processes.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect assembly quality."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0007",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Refrigerator",
      "Freezer",
      "Ultra-Low Freezer",
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation location power and environmental suitability for temperature control.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Installation affects cold chain equipment performance."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0001",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable to national standards where applicable.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "Handheld Dimensional Tool",
      "CMM",
      "Optical Measurement System",
      "Environmental Probe",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of critical sensors and measuring systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible qualification and routine measurements."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0002",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable to national standards where applicable.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of temperature pressure and timing systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible qualification and routine monitoring."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0003",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of temperature pressure and measurement systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible sealing and packaging control."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0004",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of pressure temperature and monitoring sensors.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible facility and utility monitoring."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0005",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Metal Detector",
      "Checkweigher",
      "Leak Tester",
      "Burst Tester",
      "Seal Strength Tester",
      "Dye Penetration Tester",
      "Barcode Verifier",
      "Label Applicator"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of load cells sensors and measurement systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible inspection and test results."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0006",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of force torque and measurement systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible assembly process control."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0007",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Refrigerator",
      "Freezer",
      "Ultra-Low Freezer",
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of temperature monitoring systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible temperature control and monitoring."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "Handheld Dimensional Tool",
      "CMM",
      "Optical Measurement System",
      "Environmental Probe",
      "Particle Counter",
      "Surface Profilometer",
      "Universal Testing Machine"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering primary operating modes and defined operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering cycle phases alarms and control systems across operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the sterilization equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0003",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering sealing forming or packaging operations across operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the packaging equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0004",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering primary operating parameters and control systems.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the facility or utility system functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0005",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Metal Detector",
      "Checkweigher",
      "Leak Tester",
      "Burst Tester",
      "Seal Strength Tester",
      "Dye Penetration Tester",
      "Barcode Verifier",
      "Label Applicator"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering inspection or test capability across defined range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the inspection or test equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0006",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering assembly or joining operations across operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the assembly equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0007",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Refrigerator",
      "Freezer",
      "Ultra-Low Freezer",
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering temperature control and monitoring across operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the cold chain equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0001",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "Force/Torque Tester",
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that configuration settings and baselines are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducibility and change impact assessment."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0002",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)",
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System",
      "VHP Decontamination System",
      "Dry Heat Oven"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that cycle recipes setpoints alarms and configuration baselines are documented and controlled.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible sterilization cycles."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0003",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine",
      "Cartoner",
      "Case Packer",
      "Shrink Wrapper"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that sealing or packaging parameters are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible packaging processes."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0004",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "EMS",
      "DP Monitor",
      "Compressed Air System",
      "Nitrogen Generator",
      "Vacuum System",
      "Process Chiller",
      "Purified Water System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that setpoints limits and configuration baselines are documented and controlled.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible facility and utility performance."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0005",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Metal Detector",
      "Checkweigher",
      "Leak Tester",
      "Burst Tester",
      "Seal Strength Tester",
      "Barcode Verifier"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that inspection or test parameters are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible inspection and test results."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0006",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell",
      "Press-Fit Station",
      "Crimping Machine",
      "Heat Staking Machine",
      "Adhesive Dispenser",
      "Torque Fastening System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that assembly parameters are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible assembly processes."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0007",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Refrigerator",
      "Freezer",
      "Ultra-Low Freezer",
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that setpoints and configuration baselines are documented and controlled.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible temperature control."
    }
  )
];

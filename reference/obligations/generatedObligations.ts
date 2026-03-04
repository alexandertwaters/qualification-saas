/**
 * Generated from data/obligations/STD_*_obligations.csv
 * Do not edit manually. Run: node scripts/buildObligationCatalog.mjs
 */

import type { Obligation } from "./obligation";

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
    "OBL_21CFR11_AUDIT_0001",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "EMS"
    ]
  },
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_AUDIT_0002",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine",
      "Force/Torque Tester"
    ]
  },
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_AUDIT_0003",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
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
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_AUDIT_0004",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Microplate Reader"
    ]
  },
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_AUDIT_0005",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_AUDIT_0006",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System"
    ]
  },
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_AUDIT_0007",
    "OQ",
    "AUDIT_TRAILS_TRACEABILITY",
    "Electronic audit trail capability",
    "Computerized systems that create electronic records implement secure computer-generated audit trails for creation modification and deletion of records.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Barcode Verifier"
    ]
  },
    "21 CFR Part 11",
    "11.10(e)",
    {
      verification_expectation: "Verify that the system generates a secure time-stamped audit trail for creation modification and deletion of electronic records.",
      acceptance_criteria: "Audit trail is generated and is secure time-stamped and attributable; record changes do not obscure previously recorded information.",
      rationale: "21 CFR 11.10(e) requires secure audit trails for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_ACCESS_0001",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "System access limited to authorized individuals",
    "Access to the computerized system is limited to authorized individuals.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "EMS"
    ]
  },
    "21 CFR Part 11",
    "11.10(d)",
    {
      verification_expectation: "Verify that system access is limited to authorized individuals and that authority checks are in place.",
      acceptance_criteria: "Access control is implemented and only authorized individuals can use the system.",
      rationale: "21 CFR 11.10(d) requires limiting system access to authorized individuals."
    }
  ),
  ob(
    "OBL_21CFR11_ACCESS_0002",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "System access limited to authorized individuals",
    "Access to the computerized system is limited to authorized individuals.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine",
      "Force/Torque Tester"
    ]
  },
    "21 CFR Part 11",
    "11.10(d)",
    {
      verification_expectation: "Verify that system access is limited to authorized individuals and that authority checks are in place.",
      acceptance_criteria: "Access control is implemented and only authorized individuals can use the system.",
      rationale: "21 CFR 11.10(d) requires limiting system access to authorized individuals."
    }
  ),
  ob(
    "OBL_21CFR11_ACCESS_0003",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "System access limited to authorized individuals",
    "Access to the computerized system is limited to authorized individuals.",
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
    "21 CFR Part 11",
    "11.10(d)",
    {
      verification_expectation: "Verify that system access is limited to authorized individuals and that authority checks are in place.",
      acceptance_criteria: "Access control is implemented and only authorized individuals can use the system.",
      rationale: "21 CFR 11.10(d) requires limiting system access to authorized individuals."
    }
  ),
  ob(
    "OBL_21CFR11_ACCESS_0004",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "System access limited to authorized individuals",
    "Access to the computerized system is limited to authorized individuals.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "TOC Analyzer",
      "Microplate Reader"
    ]
  },
    "21 CFR Part 11",
    "11.10(d)",
    {
      verification_expectation: "Verify that system access is limited to authorized individuals and that authority checks are in place.",
      acceptance_criteria: "Access control is implemented and only authorized individuals can use the system.",
      rationale: "21 CFR 11.10(d) requires limiting system access to authorized individuals."
    }
  ),
  ob(
    "OBL_21CFR11_ACCESS_0005",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "System access limited to authorized individuals",
    "Access to the computerized system is limited to authorized individuals.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR Part 11",
    "11.10(d)",
    {
      verification_expectation: "Verify that system access is limited to authorized individuals and that authority checks are in place.",
      acceptance_criteria: "Access control is implemented and only authorized individuals can use the system.",
      rationale: "21 CFR 11.10(d) requires limiting system access to authorized individuals."
    }
  ),
  ob(
    "OBL_21CFR11_ACCESS_0006",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "System access limited to authorized individuals",
    "Access to the computerized system is limited to authorized individuals.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System"
    ]
  },
    "21 CFR Part 11",
    "11.10(d)",
    {
      verification_expectation: "Verify that system access is limited to authorized individuals and that authority checks are in place.",
      acceptance_criteria: "Access control is implemented and only authorized individuals can use the system.",
      rationale: "21 CFR 11.10(d) requires limiting system access to authorized individuals."
    }
  ),
  ob(
    "OBL_21CFR11_VAL_0001",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Computerized system validation",
    "Computerized systems used to create modify maintain or transmit electronic records are validated to ensure accuracy reliability and consistent intended performance.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "EMS"
    ]
  },
    "21 CFR Part 11",
    "11.10(a)",
    {
      verification_expectation: "Verify that the computerized system has been validated per documented procedures.",
      acceptance_criteria: "Validation evidence demonstrates accuracy reliability and consistent intended performance.",
      rationale: "21 CFR 11.10(a) requires validation of systems used for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_VAL_0002",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Computerized system validation",
    "Computerized systems used to create modify maintain or transmit electronic records are validated to ensure accuracy reliability and consistent intended performance.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine"
    ]
  },
    "21 CFR Part 11",
    "11.10(a)",
    {
      verification_expectation: "Verify that the computerized system has been validated per documented procedures.",
      acceptance_criteria: "Validation evidence demonstrates accuracy reliability and consistent intended performance.",
      rationale: "21 CFR 11.10(a) requires validation of systems used for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_VAL_0003",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Computerized system validation",
    "Computerized systems used to create modify maintain or transmit electronic records are validated to ensure accuracy reliability and consistent intended performance.",
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
    "21 CFR Part 11",
    "11.10(a)",
    {
      verification_expectation: "Verify that the computerized system has been validated per documented procedures.",
      acceptance_criteria: "Validation evidence demonstrates accuracy reliability and consistent intended performance.",
      rationale: "21 CFR 11.10(a) requires validation of systems used for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_VAL_0004",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Computerized system validation",
    "Computerized systems used to create modify maintain or transmit electronic records are validated to ensure accuracy reliability and consistent intended performance.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "TOC Analyzer",
      "Microplate Reader"
    ]
  },
    "21 CFR Part 11",
    "11.10(a)",
    {
      verification_expectation: "Verify that the computerized system has been validated per documented procedures.",
      acceptance_criteria: "Validation evidence demonstrates accuracy reliability and consistent intended performance.",
      rationale: "21 CFR 11.10(a) requires validation of systems used for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_VAL_0005",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Computerized system validation",
    "Computerized systems used to create modify maintain or transmit electronic records are validated to ensure accuracy reliability and consistent intended performance.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR Part 11",
    "11.10(a)",
    {
      verification_expectation: "Verify that the computerized system has been validated per documented procedures.",
      acceptance_criteria: "Validation evidence demonstrates accuracy reliability and consistent intended performance.",
      rationale: "21 CFR 11.10(a) requires validation of systems used for electronic records."
    }
  ),
  ob(
    "OBL_21CFR11_VAL_0006",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Computerized system validation",
    "Computerized systems used to create modify maintain or transmit electronic records are validated to ensure accuracy reliability and consistent intended performance.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System"
    ]
  },
    "21 CFR Part 11",
    "11.10(a)",
    {
      verification_expectation: "Verify that the computerized system has been validated per documented procedures.",
      acceptance_criteria: "Validation evidence demonstrates accuracy reliability and consistent intended performance.",
      rationale: "21 CFR 11.10(a) requires validation of systems used for electronic records."
    }
  ),
  ob(
    "OBL_21CFR1271_HCT_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "HCT/P storage equipment environmental control",
    "Equipment used for HCT/P storage provides environmental control suitable for intended use per 21 CFR 1271.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR Part 1271",
    "1271.190;1271.195",
    {
      verification_expectation: "Verify that storage equipment environmental control is documented and suitable.",
      acceptance_criteria: "Environmental control and monitoring are documented.",
      rationale: "21 CFR 1271 addresses HCT/P environmental controls."
    }
  ),
  ob(
    "OBL_21CFR1271_HCT_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "HCT/P storage equipment performance verified",
    "Storage equipment maintains required conditions for HCT/P handling per 21 CFR 1271.",
      {
    "cohort": "Cold Chain & Storage",
    "equipment_types": [
      "Cryogenic Storage",
      "Controlled-Rate Freezer"
    ]
  },
    "21 CFR Part 1271",
    "1271.195",
    {
      verification_expectation: "Verify that storage performance (temperature level monitoring) is documented.",
      acceptance_criteria: "OQ records document storage performance verification.",
      rationale: "Supports HCT/P equipment qualification."
    }
  ),
  ob(
    "OBL_21CFR830_UDI_0001",
    "OQ",
    "DATA_INTEGRITY_RECORDS",
    "UDI barcode quality and verification",
    "Label printing or barcode verification equipment supports UDI compliance per 21 CFR Part 830 where applicable.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Barcode Verifier"
    ]
  },
    "21 CFR Part 830",
    "830.20;830.40",
    {
      verification_expectation: "Verify that barcode verification equipment supports UDI requirements where applicable.",
      acceptance_criteria: "Equipment qualification addresses UDI barcode quality where applicable.",
      rationale: "21 CFR 830 addresses UDI requirements for device identification."
    }
  ),
  ob(
    "OBL_AAMI_ST79_STM_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Steam sterilizer installation per AAMI ST79",
    "Steam sterilizer installation and utilities comply with AAMI ST79 where adopted for healthcare steam sterilization.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "AAMI ST79",
    "3",
    {
      verification_expectation: "Verify that installation and utilities meet AAMI ST79 requirements where applicable.",
      acceptance_criteria: "Installation verification is documented.",
      rationale: "AAMI ST79 provides comprehensive steam sterilization guidance."
    }
  ),
  ob(
    "OBL_AAMI_ST79_STM_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Steam sterilizer performance per AAMI ST79",
    "Steam sterilizer performance and cycle development align with AAMI ST79 where applicable.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "AAMI ST79",
    "4;5",
    {
      verification_expectation: "Verify that performance and cycle verification align with AAMI ST79 where adopted.",
      acceptance_criteria: "OQ records document performance per AAMI ST79 where applicable.",
      rationale: "AAMI ST79 supplements ISO 17665 for healthcare steam sterilization."
    }
  ),
  ob(
    "OBL_AAMI_ST98_WD_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Washer-disinfector installation per AAMI ST98",
    "Washer-disinfector installation and water supply meet AAMI ST98 requirements where applicable.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector"
    ]
  },
    "AAMI ST98",
    "3",
    {
      verification_expectation: "Verify that installation and water supply are documented per AAMI ST98 where applicable.",
      acceptance_criteria: "Installation verification is documented.",
      rationale: "AAMI ST98 provides washer-disinfector guidance."
    }
  ),
  ob(
    "OBL_AAMI_ST98_WD_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Washer-disinfector cleaning performance verified",
    "Cleaning and disinfection performance of washer-disinfector is verified per AAMI ST98 where applicable.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector"
    ]
  },
    "AAMI ST98",
    "4",
    {
      verification_expectation: "Verify that cleaning performance verification is documented.",
      acceptance_criteria: "OQ records document cleaning and disinfection performance.",
      rationale: "Supports washer-disinfector qualification."
    }
  ),
  ob(
    "OBL_AAMI_ST98_UC_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Ultrasonic cleaner performance verified",
    "Ultrasonic cleaner performance (cleaning effectiveness) is verified per AAMI ST98 where applicable.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Ultrasonic Cleaner"
    ]
  },
    "AAMI ST98",
    "4",
    {
      verification_expectation: "Verify that ultrasonic cleaning performance is documented where applicable.",
      acceptance_criteria: "Performance verification is documented.",
      rationale: "AAMI ST98 addresses ultrasonic cleaning equipment."
    }
  ),
  ob(
    "OBL_ASTME18_HRD_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Hardness tester verification per ASTM E18",
    "Hardness testing machine is verified per ASTM E18 for scale accuracy and repeatability.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Hardness Tester"
    ]
  },
    "ASTM E18",
    "6;7",
    {
      verification_expectation: "Verify that hardness scale verification per ASTM E18 is documented.",
      acceptance_criteria: "Verification records document scale accuracy per ASTM E18.",
      rationale: "ASTM E18 provides hardness testing machine verification."
    }
  ),
  ob(
    "OBL_ASTME4_LOAD_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Testing machine force verification",
    "Force measurement system (load cell) is verified per ASTM E4 for accuracy.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Universal Testing Machine"
    ]
  },
    "ASTM E4",
    "6;7",
    {
      verification_expectation: "Verify that force verification per ASTM E4 is documented.",
      acceptance_criteria: "Verification records document load accuracy compliance.",
      rationale: "ASTM E4 provides force verification for testing machines."
    }
  ),
  ob(
    "OBL_ASTMF1140_BURST_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Burst test equipment and method qualified",
    "Burst testing equipment and method are qualified per ASTM F1140 for intended packaging.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Burst Tester"
    ]
  },
    "ASTM F1140",
    "1-12",
    {
      verification_expectation: "Verify that burst test method and equipment are qualified per ASTM F1140.",
      acceptance_criteria: "Test method qualification and equipment verification are documented.",
      rationale: "ASTM F1140 provides burst testing for package strength."
    }
  ),
  ob(
    "OBL_ASTMF1140_BURST_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Burst test acceptance criteria defined",
    "Burst test acceptance criteria are defined and applied per packaging validation requirements.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Burst Tester"
    ]
  },
    "ASTM F1140",
    "1-12",
    {
      verification_expectation: "Verify that acceptance criteria for burst testing are defined.",
      acceptance_criteria: "Acceptance criteria are documented and traceable to validation.",
      rationale: "Supports packaging PQ and routine testing."
    }
  ),
  ob(
    "OBL_ASTMF1147_ADH_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Coating adhesion test method qualified",
    "Coating adhesion testing (tension or pull-off) is performed per ASTM F1147 for implant coatings.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Plasma Spray System"
    ]
  },
    "ASTM F1147",
    "1-12",
    {
      verification_expectation: "Verify that adhesion test method and equipment are qualified per ASTM F1147.",
      acceptance_criteria: "Test method qualification and adhesion results are documented.",
      rationale: "ASTM F1147 provides coating adhesion test methods for implants."
    }
  ),
  ob(
    "OBL_ASTMF1147_ADH_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Coating adhesion acceptance criteria defined",
    "Coating adhesion acceptance criteria are defined and applied per implant coating validation.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Plasma Spray System"
    ]
  },
    "ASTM F1147",
    "1-12",
    {
      verification_expectation: "Verify that adhesion acceptance criteria are defined and documented.",
      acceptance_criteria: "Acceptance criteria are documented and traceable to validation.",
      rationale: "Supports coating PQ and release decisions."
    }
  ),
  ob(
    "OBL_ASTMF1920_LEAK_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Leak test method qualified per ASTM F1920",
    "Leak testing method and equipment are qualified per ASTM F1920 where applicable for package integrity.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Leak Tester"
    ]
  },
    "ASTM F1920",
    "1-12",
    {
      verification_expectation: "Verify that leak test method qualification is documented where applicable.",
      acceptance_criteria: "Method qualification records are documented.",
      rationale: "ASTM F1920 provides leak test methods for flexible packaging."
    }
  ),
  ob(
    "OBL_ASTMF1929_DYE_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Dye penetration test method qualification",
    "Dye penetration testing method and equipment are qualified per ASTM F1929 for intended packaging.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Dye Penetration Tester"
    ]
  },
    "ASTM F1929",
    "1-12",
    {
      verification_expectation: "Verify that dye penetration test method is qualified per ASTM F1929.",
      acceptance_criteria: "Test method qualification is documented.",
      rationale: "ASTM F1929 provides dye penetration test for package integrity."
    }
  ),
  ob(
    "OBL_ASTMF1929_DYE_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Dye penetration acceptance criteria defined",
    "Dye penetration acceptance criteria are defined and applied per packaging validation requirements.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Dye Penetration Tester"
    ]
  },
    "ASTM F1929",
    "1-12",
    {
      verification_expectation: "Verify that acceptance criteria for dye penetration are defined.",
      acceptance_criteria: "Acceptance criteria are documented and traceable to validation.",
      rationale: "Supports package integrity PQ and routine testing."
    }
  ),
  ob(
    "OBL_ASTMF2397_LUB_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Lubricity test method qualified",
    "Lubricity (friction) testing for coated devices is performed per ASTM F2397 where applicable.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Adhesive Dispenser"
    ]
  },
    "ASTM F2397",
    "1-12",
    {
      verification_expectation: "Verify that lubricity test method is qualified per ASTM F2397 where coating or lubricity testing applies.",
      acceptance_criteria: "Test method qualification is documented.",
      rationale: "ASTM F2397 addresses lubricity testing for coated devices."
    }
  ),
  ob(
    "OBL_ASTMF2397_LUB_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Lubricity acceptance criteria defined",
    "Lubricity acceptance criteria are defined and applied per coated device validation where applicable.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Adhesive Dispenser"
    ]
  },
    "ASTM F2397",
    "1-12",
    {
      verification_expectation: "Verify that lubricity acceptance criteria are defined where applicable.",
      acceptance_criteria: "Acceptance criteria are documented and traceable to validation.",
      rationale: "Supports lubricity validation for coated devices."
    }
  ),
  ob(
    "OBL_ASTMF88_SEAL_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Seal strength test method qualification",
    "Seal strength testing equipment and method are qualified per ASTM F88 for intended packaging.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Seal Strength Tester"
    ]
  },
    "ASTM F88",
    "1-12",
    {
      verification_expectation: "Verify that seal strength test method and equipment are qualified per ASTM F88.",
      acceptance_criteria: "Test method qualification and equipment verification are documented.",
      rationale: "ASTM F88 provides seal strength test method for packaging."
    }
  ),
  ob(
    "OBL_ASTMF88_SEAL_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Seal strength acceptance criteria defined",
    "Seal strength acceptance criteria are defined and applied per packaging validation requirements.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Seal Strength Tester"
    ]
  },
    "ASTM F88",
    "1-12",
    {
      verification_expectation: "Verify that acceptance criteria for seal strength are defined and documented.",
      acceptance_criteria: "Acceptance criteria are documented and traceable to validation.",
      rationale: "Supports packaging PQ and routine testing."
    }
  ),
  ob(
    "OBL_CLIA_IVD_0001",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "IVD analyzer installation and documentation",
    "IVD analyzer installation and documentation support CLIA compliance where applicable for clinical use.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "CLIA",
    "493.1200;493.1253",
    {
      verification_expectation: "Verify that installation and documentation are suitable for CLIA environment where applicable.",
      acceptance_criteria: "Installation and documentation support intended use.",
      rationale: "CLIA addresses clinical laboratory requirements for IVD equipment."
    }
  ),
  ob(
    "OBL_CLIA_IVD_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "IVD analyzer performance and QC verified",
    "IVD analyzer performance qualification and quality control verification support CLIA requirements where applicable.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "CLIA",
    "493.1256;493.1265",
    {
      verification_expectation: "Verify that performance and QC verification are documented where applicable.",
      acceptance_criteria: "OQ and QC verification records are documented.",
      rationale: "Supports CLIA compliance for IVD equipment in clinical labs."
    }
  ),
  ob(
    "OBL_IEC61010_SAF_0001",
    "IQ",
    "SAFETY_ELECTRICAL",
    "Laboratory equipment electrical safety",
    "Laboratory equipment meets electrical safety requirements per IEC 61010 where applicable.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "Laboratory Incubator",
      "CO2 Incubator",
      "Benchtop Centrifuge",
      "Refrigerated Centrifuge"
    ]
  },
    "IEC 61010",
    "1;6",
    {
      verification_expectation: "Verify that electrical safety verification or certification is documented where applicable.",
      acceptance_criteria: "Electrical safety evidence is documented.",
      rationale: "IEC 61010 addresses safety requirements for laboratory equipment."
    }
  ),
  ob(
    "OBL_IEC61010_SAF_0002",
    "IQ",
    "SAFETY_ELECTRICAL",
    "Laboratory equipment safety documentation",
    "Laboratory equipment has required safety documentation per IEC 61010 where applicable.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "Laboratory Incubator",
      "CO2 Incubator",
      "Benchtop Centrifuge",
      "Refrigerated Centrifuge"
    ]
  },
    "IEC 61010",
    "1",
    {
      verification_expectation: "Verify that manufacturer safety documentation is available where applicable.",
      acceptance_criteria: "Safety documentation is available and appropriate for equipment use.",
      rationale: "IEC 61010 requires safety documentation for laboratory equipment."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0001",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Software configuration and version documented",
    "Software configuration and version information for equipment controlling quality-affecting functions are documented and controlled.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine"
    ]
  },
    "IEC 62304",
    "5;6",
    {
      verification_expectation: "Verify that software configuration version and SOUP (where applicable) are documented and subject to change control.",
      acceptance_criteria: "Software configuration is documented and controlled per software lifecycle procedures.",
      rationale: "IEC 62304 requires configuration management for medical device software."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0002",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Software configuration and version documented",
    "Software configuration and version information for equipment controlling quality-affecting functions are documented and controlled.",
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
    "IEC 62304",
    "5;6",
    {
      verification_expectation: "Verify that software configuration version and SOUP (where applicable) are documented and subject to change control.",
      acceptance_criteria: "Software configuration is documented and controlled per software lifecycle procedures.",
      rationale: "IEC 62304 requires configuration management for medical device software."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0003",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Software configuration and version documented",
    "Software configuration and version information for equipment controlling quality-affecting functions are documented and controlled.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "TOC Analyzer",
      "Microplate Reader"
    ]
  },
    "IEC 62304",
    "5;6",
    {
      verification_expectation: "Verify that software configuration version and SOUP (where applicable) are documented and subject to change control.",
      acceptance_criteria: "Software configuration is documented and controlled per software lifecycle procedures.",
      rationale: "IEC 62304 requires configuration management for medical device software."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0004",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Software configuration and version documented",
    "Software configuration and version information for equipment controlling quality-affecting functions are documented and controlled.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "IEC 62304",
    "5;6",
    {
      verification_expectation: "Verify that software configuration version and SOUP (where applicable) are documented and subject to change control.",
      acceptance_criteria: "Software configuration is documented and controlled per software lifecycle procedures.",
      rationale: "IEC 62304 requires configuration management for medical device software."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0005",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Software configuration and version documented",
    "Software configuration and version information for equipment controlling quality-affecting functions are documented and controlled.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System"
    ]
  },
    "IEC 62304",
    "5;6",
    {
      verification_expectation: "Verify that software configuration version and SOUP (where applicable) are documented and subject to change control.",
      acceptance_criteria: "Software configuration is documented and controlled per software lifecycle procedures.",
      rationale: "IEC 62304 requires configuration management for medical device software."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0006",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Software verification and validation performed",
    "Software that controls quality-affecting equipment functions has been verified and validated per software lifecycle procedures.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine"
    ]
  },
    "IEC 62304",
    "7;8",
    {
      verification_expectation: "Verify that software verification and validation evidence exists and is traceable to requirements.",
      acceptance_criteria: "Software V&V has been performed per documented procedures with traceability to requirements.",
      rationale: "IEC 62304 requires software verification and validation."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0007",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Software verification and validation performed",
    "Software that controls quality-affecting equipment functions has been verified and validated per software lifecycle procedures.",
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
    "IEC 62304",
    "7;8",
    {
      verification_expectation: "Verify that software verification and validation evidence exists and is traceable to requirements.",
      acceptance_criteria: "Software V&V has been performed per documented procedures with traceability to requirements.",
      rationale: "IEC 62304 requires software verification and validation."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0008",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Software verification and validation performed",
    "Software that controls quality-affecting equipment functions has been verified and validated per software lifecycle procedures.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "TOC Analyzer",
      "Microplate Reader"
    ]
  },
    "IEC 62304",
    "7;8",
    {
      verification_expectation: "Verify that software verification and validation evidence exists and is traceable to requirements.",
      acceptance_criteria: "Software V&V has been performed per documented procedures with traceability to requirements.",
      rationale: "IEC 62304 requires software verification and validation."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0009",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Software verification and validation performed",
    "Software that controls quality-affecting equipment functions has been verified and validated per software lifecycle procedures.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "IEC 62304",
    "7;8",
    {
      verification_expectation: "Verify that software verification and validation evidence exists and is traceable to requirements.",
      acceptance_criteria: "Software V&V has been performed per documented procedures with traceability to requirements.",
      rationale: "IEC 62304 requires software verification and validation."
    }
  ),
  ob(
    "OBL_IEC62304_SW_0010",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Software verification and validation performed",
    "Software that controls quality-affecting equipment functions has been verified and validated per software lifecycle procedures.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System"
    ]
  },
    "IEC 62304",
    "7;8",
    {
      verification_expectation: "Verify that software verification and validation evidence exists and is traceable to requirements.",
      acceptance_criteria: "Software V&V has been performed per documented procedures with traceability to requirements.",
      rationale: "IEC 62304 requires software verification and validation."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0001",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM",
      "Optical Measurement System",
      "Particle Counter",
      "Universal Testing Machine"
    ]
  },
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0002",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
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
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0003",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "TOC Analyzer",
      "Microplate Reader"
    ]
  },
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0004",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0005",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System"
    ]
  },
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0006",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Vision Inspection",
      "X-Ray Inspection",
      "Barcode Verifier"
    ]
  },
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_IEC62366_USE_0007",
    "OQ",
    "USABILITY_HUMAN_FACTORS",
    "Usability risks addressed for user interface",
    "User interface and information-for-use for equipment with operator-facing controls are designed and evaluated to address usability-related risks.",
      {
    "cohort": "Assembly & Joining",
    "equipment_types": [
      "Automated Assembly Cell"
    ]
  },
    "IEC 62366-1",
    "5;6",
    {
      verification_expectation: "Verify that usability engineering has been applied to identify and mitigate use-error risks for the equipment user interface.",
      acceptance_criteria: "Usability-related risks have been analyzed and mitigated per usability engineering procedures.",
      rationale: "IEC 62366-1 addresses usability engineering for medical device user interfaces."
    }
  ),
  ob(
    "OBL_ISO10360_CMM_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "CMM performance verification",
    "CMM performance verification (MPE length measurement probing) is performed per ISO 10360.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "CMM"
    ]
  },
    "ISO 10360",
    "2;3",
    {
      verification_expectation: "Verify that CMM performance verification per ISO 10360 is documented.",
      acceptance_criteria: "Performance verification records document MPE compliance.",
      rationale: "ISO 10360 provides CMM acceptance and reverification tests."
    }
  ),
  ob(
    "OBL_ISO11135_ETO_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "EtO sterilizer installation and utilities verified",
    "EtO sterilizer installation utilities gas supply humidity control and safety systems are suitable for intended cycles.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Ethylene Oxide Sterilizer"
    ]
  },
    "ISO 11135",
    "5",
    {
      verification_expectation: "Verify installation utilities gas supply and humidity control per requirements.",
      acceptance_criteria: "IQ records document suitable installation and utilities.",
      rationale: "Foundational for EtO sterilization qualification."
    }
  ),
  ob(
    "OBL_ISO11135_ETO_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "EtO cycle development and operating range verified",
    "EtO cycle parameters and operating ranges are developed and verified for intended load types.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Ethylene Oxide Sterilizer"
    ]
  },
    "ISO 11135",
    "6",
    {
      verification_expectation: "Verify that cycle development and operating range verification are documented.",
      acceptance_criteria: "OQ records document cycle development and range verification.",
      rationale: "Core OQ for EtO sterilization."
    }
  ),
  ob(
    "OBL_ISO11135_ETO_0003",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "EtO PQ under routine conditions",
    "PQ demonstrates consistent EtO sterilization performance under routine conditions.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Ethylene Oxide Sterilizer"
    ]
  },
    "ISO 11135",
    "7",
    {
      verification_expectation: "Verify that PQ runs use routine operators materials and load configurations.",
      acceptance_criteria: "PQ records document performance under routine conditions.",
      rationale: "Proves EtO process under production conditions."
    }
  ),
  ob(
    "OBL_ISO11135_ETO_0004",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "EtO residual removal and aeration addressed",
    "Where applicable residual removal and aeration requirements are defined and verified.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Ethylene Oxide Sterilizer",
      "EtO Aeration System"
    ]
  },
    "ISO 11135",
    "5;6",
    {
      verification_expectation: "Verify that residual removal and aeration are addressed per requirements.",
      acceptance_criteria: "Residual and aeration verification are documented.",
      rationale: "EtO-specific requirement for product safety."
    }
  ),
  ob(
    "OBL_ISO11137_RAD_0001",
    "IQ",
    "REVIEW_REPORTING",
    "Radiation sterilization process defined",
    "Radiation sterilization process dose range and product handling are defined for intended use.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)"
    ]
  },
    "ISO 11137",
    "5",
    {
      verification_expectation: "Verify that process definition dose range and product handling are documented.",
      acceptance_criteria: "Process definition is documented and approved.",
      rationale: "Sets scope for radiation sterilization validation."
    }
  ),
  ob(
    "OBL_ISO11137_RAD_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Dose mapping and verification performed",
    "Dose mapping and dose distribution verification are performed per ISO 11137 requirements.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)"
    ]
  },
    "ISO 11137",
    "6",
    {
      verification_expectation: "Verify that dose mapping and verification are documented.",
      acceptance_criteria: "Dose mapping and verification records are documented.",
      rationale: "Core requirement for radiation sterilization validation."
    }
  ),
  ob(
    "OBL_ISO11137_RAD_0003",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Radiation sterilization PQ under routine conditions",
    "PQ demonstrates consistent radiation sterilization performance under routine conditions.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Radiation Sterilization (Gamma)",
      "Radiation Sterilization (E-Beam)"
    ]
  },
    "ISO 11137",
    "7",
    {
      verification_expectation: "Verify that PQ uses routine product handling and dose delivery.",
      acceptance_criteria: "PQ records document performance under routine conditions.",
      rationale: "Proves radiation process under production conditions."
    }
  ),
  ob(
    "OBL_ISO11138_BI_0001",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Biological indicator selection and qualification",
    "Biological indicators used for sterilization qualification and monitoring are selected and qualified per intended use.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 11138",
    "5;6",
    {
      verification_expectation: "Verify that BI selection rationale and qualification evidence are documented.",
      acceptance_criteria: "BI selection and qualification evidence are documented.",
      rationale: "ISO 11138 addresses BI requirements for sterilization validation."
    }
  ),
  ob(
    "OBL_ISO11138_BI_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Biological indicator D-value and population verified",
    "Biological indicator D-value and population are verified per manufacturer specifications and intended sterilization process.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 11138",
    "6",
    {
      verification_expectation: "Verify that BI D-value and population verification are documented.",
      acceptance_criteria: "BI verification records are documented.",
      rationale: "Supports credible PQ and routine monitoring."
    }
  ),
  ob(
    "OBL_ISO11607_1_PKG_0001",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Packaging materials and system compatibility documented",
    "Packaging materials and sterile barrier system compatibility with the sealing process are documented.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 11607-1",
    "5;6",
    {
      verification_expectation: "Verify that packaging material specifications and system compatibility are documented.",
      acceptance_criteria: "Material specifications and compatibility evidence are documented.",
      rationale: "ISO 11607-1 addresses packaging materials for sterile barrier systems."
    }
  ),
  ob(
    "OBL_ISO11607_1_PKG_0002",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Packaging design and seal configuration documented",
    "Packaging design seal configuration and material requirements are documented and controlled.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 11607-1",
    "6",
    {
      verification_expectation: "Verify that packaging design and seal configuration are documented.",
      acceptance_criteria: "Design and configuration documentation are controlled.",
      rationale: "Foundational for packaging process validation."
    }
  ),
  ob(
    "OBL_ISO11607_2_PKG_0001",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Sealing process parameters documented",
    "Sealing process parameters (temperature dwell pressure) are defined and documented for the equipment and packaging combination.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 11607-2",
    "5",
    {
      verification_expectation: "Verify that sealing process parameters and their limits are documented.",
      acceptance_criteria: "Process parameters and limits are documented and controlled.",
      rationale: "ISO 11607-2 requires defined sealing process parameters."
    }
  ),
  ob(
    "OBL_ISO11607_2_PKG_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Sealing process operating range verified",
    "Sealing process operates consistently across the defined operating range for the packaging combination.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 11607-2",
    "6",
    {
      verification_expectation: "Execute OQ to verify sealing across operating range.",
      acceptance_criteria: "OQ records document consistent sealing across range.",
      rationale: "Core OQ for packaging process validation."
    }
  ),
  ob(
    "OBL_ISO11607_2_PKG_0003",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Sealing process PQ under routine conditions",
    "PQ demonstrates consistent seal integrity under routine production conditions.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 11607-2",
    "7",
    {
      verification_expectation: "Execute PQ using routine materials operators and conditions.",
      acceptance_criteria: "PQ records document performance under routine conditions.",
      rationale: "Proves packaging process under production conditions."
    }
  ),
  ob(
    "OBL_ISO11607_2_PKG_0004",
    "PQ",
    "DATA_INTEGRITY_RECORDS",
    "Packaging process records available",
    "Records of packaging sealing process execution are available to support traceability and investigation when required.",
      {
    "cohort": "Packaging",
    "equipment_types": [
      "Heat Sealer",
      "Tray Sealer",
      "Blister Sealer",
      "Form-Fill-Seal Machine"
    ]
  },
    "ISO 11607-2",
    "7",
    {
      verification_expectation: "Verify that process records and traceability are maintained.",
      acceptance_criteria: "Process records support traceability per requirements.",
      rationale: "Supports traceability and investigation."
    }
  ),
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
      "Universal Testing Machine",
      "Hardness Tester"
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
    "OBL_ISO13485_PROC_0005",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Process validation for special processes",
    "Where resulting output cannot be verified by subsequent monitoring or measurement processes must be validated.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Injection Molding Machine",
      "Medical Extrusion Line",
      "Plasma Spray System"
    ]
  },
    "ISO 13485:2016",
    "7.5.6",
    {
      verification_expectation: "Where the manufacturing process produces output that cannot be fully verified verify that validation demonstrates the process achieves planned results.",
      acceptance_criteria: "Validation evidence demonstrates the process achieves planned results under defined conditions.",
      rationale: "ISO 13485 requires validation of special manufacturing processes."
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
    "OBL_ISO13779_HA_0001",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "HA coating process parameters documented",
    "Hydroxyapatite coating process parameters and crystallinity requirements are documented per ISO 13779-2.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Plasma Spray System"
    ]
  },
    "ISO 13779-2",
    "4;5",
    {
      verification_expectation: "Verify that coating process parameters and crystallinity requirements are documented.",
      acceptance_criteria: "Process parameters and requirements are documented and controlled.",
      rationale: "ISO 13779-2 addresses HA coating requirements for implants."
    }
  ),
  ob(
    "OBL_ISO13779_HA_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "HA coating crystallinity and adhesion verified",
    "HA coating crystallinity and adhesion are verified per ISO 13779-2 for implant applications.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Plasma Spray System"
    ]
  },
    "ISO 13779-2",
    "6;7",
    {
      verification_expectation: "Verify that crystallinity and adhesion verification are documented.",
      acceptance_criteria: "PQ records document coating quality verification.",
      rationale: "Core requirement for HA-coated implants."
    }
  ),
  ob(
    "OBL_ISO14644_1_CR_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Cleanroom classification defined and verified",
    "Cleanroom classification and particle count limits are defined and verified per ISO 14644-1.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "DP Monitor"
    ]
  },
    "ISO 14644-1",
    "5;6",
    {
      verification_expectation: "Verify that classification limits and verification are documented.",
      acceptance_criteria: "Classification verification records are documented.",
      rationale: "ISO 14644-1 defines cleanroom classification requirements."
    }
  ),
  ob(
    "OBL_ISO14644_1_CR_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Cleanroom at-rest and operational states verified",
    "Cleanroom performance at rest and in operational state meets defined classification.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter",
      "DP Monitor"
    ]
  },
    "ISO 14644-1",
    "5;6",
    {
      verification_expectation: "Verify that at-rest and operational classification verification are documented.",
      acceptance_criteria: "Verification records document compliance with classification.",
      rationale: "Supports cleanroom qualification and ongoing monitoring."
    }
  ),
  ob(
    "OBL_ISO14644_3_CR_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "HEPA integrity and airflow verified per test methods",
    "HEPA filter integrity and airflow are verified using ISO 14644-3 test methods.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC",
      "HEPA Filter"
    ]
  },
    "ISO 14644-3",
    "B.4;B.5",
    {
      verification_expectation: "Verify that HEPA integrity (PAO) and airflow testing are documented per ISO 14644-3.",
      acceptance_criteria: "Test records document integrity and airflow verification.",
      rationale: "ISO 14644-3 provides cleanroom test methods."
    }
  ),
  ob(
    "OBL_ISO14644_3_CR_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Cleanroom recovery and uniformity tested",
    "Where applicable recovery time and airflow uniformity are tested per ISO 14644-3.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Cleanroom HVAC"
    ]
  },
    "ISO 14644-3",
    "B.6;B.7",
    {
      verification_expectation: "Verify that recovery and uniformity tests are documented where applicable.",
      acceptance_criteria: "Test records document recovery and uniformity where required.",
      rationale: "Supports cleanroom performance verification."
    }
  ),
  ob(
    "OBL_ISO14698_VC_0001",
    "IQ",
    "BIOLOGICAL_SAFETY",
    "Viable monitoring strategy defined",
    "Viable (microbial) monitoring strategy sampling locations and acceptance criteria are defined for the cleanroom environment.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "EMS"
    ]
  },
    "ISO 14698",
    "5;6",
    {
      verification_expectation: "Verify that viable monitoring strategy and sampling plan are documented.",
      acceptance_criteria: "Monitoring strategy and sampling plan are documented.",
      rationale: "ISO 14698 addresses biocontamination control in cleanrooms."
    }
  ),
  ob(
    "OBL_ISO14698_VC_0002",
    "OQ",
    "BIOLOGICAL_SAFETY",
    "Viable monitoring system qualified",
    "Environmental monitoring system for viable particles is qualified for intended use.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "EMS"
    ]
  },
    "ISO 14698",
    "6",
    {
      verification_expectation: "Verify that viable monitoring system qualification is documented.",
      acceptance_criteria: "Qualification records document system suitability.",
      rationale: "Supports biocontamination control and trending."
    }
  ),
  ob(
    "OBL_ISO14937_VHP_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "VHP system installation and utilities verified",
    "VHP decontamination system installation distribution and utilities are suitable for intended use.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "VHP Decontamination System"
    ]
  },
    "ISO 14937",
    "5",
    {
      verification_expectation: "Verify installation distribution method and utilities per requirements.",
      acceptance_criteria: "IQ records document suitable installation.",
      rationale: "Foundational for VHP qualification."
    }
  ),
  ob(
    "OBL_ISO14937_VHP_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "VHP cycle development and verification",
    "VHP cycle development and operating range verification are performed for intended application space.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "VHP Decontamination System"
    ]
  },
    "ISO 14937",
    "6",
    {
      verification_expectation: "Verify that cycle development and range verification are documented.",
      acceptance_criteria: "OQ records document cycle development and verification.",
      rationale: "Core OQ for general sterilization methods."
    }
  ),
  ob(
    "OBL_ISO14937_VHP_0003",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "VHP PQ under routine conditions",
    "PQ demonstrates consistent VHP decontamination performance under routine conditions.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "VHP Decontamination System"
    ]
  },
    "ISO 14937",
    "7",
    {
      verification_expectation: "Verify that PQ uses routine conditions and load configurations.",
      acceptance_criteria: "PQ records document performance under routine conditions.",
      rationale: "Proves VHP process under production conditions."
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
      "Universal Testing Machine",
      "Hardness Tester"
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
    "OBL_ISO14971_RISK_0008",
    "IQ",
    "REVIEW_REPORTING",
    "Risk assessment drives validation scope",
    "Validation scope and depth are informed by risk assessment of the equipment and its impact on product quality and patient safety.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Injection Molding Machine",
      "Medical Extrusion Line",
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System",
      "Plasma Spray System"
    ]
  },
    "ISO 14971:2019",
    "5;9",
    {
      verification_expectation: "Verify that risk assessment has been performed and drives validation scope and depth.",
      acceptance_criteria: "Risk assessment is documented and validation scope is justified by risk.",
      rationale: "ISO 14971 supports risk-based approach to manufacturing validation scope."
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
    "OBL_ISO15883_WD_0001",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Washer-disinfector process parameters documented",
    "Washer-disinfector process parameters (temperature detergent dwell) are defined and controlled per ISO 15883.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector"
    ]
  },
    "ISO 15883",
    "5",
    {
      verification_expectation: "Verify that process parameters and cycle configuration are documented.",
      acceptance_criteria: "Process parameters are documented and controlled.",
      rationale: "ISO 15883 defines washer-disinfector requirements."
    }
  ),
  ob(
    "OBL_ISO15883_WD_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Washer-disinfector cleaning efficacy verified",
    "Cleaning efficacy of washer-disinfector is verified per ISO 15883 test methods.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector"
    ]
  },
    "ISO 15883",
    "6",
    {
      verification_expectation: "Verify that cleaning efficacy verification is documented.",
      acceptance_criteria: "Cleaning efficacy test records are documented.",
      rationale: "Core requirement for washer-disinfector qualification."
    }
  ),
  ob(
    "OBL_ISO17025_CAL_0001",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Calibration traceability and competence",
    "Measurement equipment calibration is traceable to national or international standards where applicable.",
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
      "Surface Profilometer",
      "Universal Testing Machine",
      "Hardness Tester"
    ]
  },
    "ISO/IEC 17025",
    "6.5;7.2",
    {
      verification_expectation: "Verify that calibration traceability and competence are documented.",
      acceptance_criteria: "Calibration evidence demonstrates traceability per requirements.",
      rationale: "ISO 17025 addresses calibration competence and traceability."
    }
  ),
  ob(
    "OBL_ISO17025_CAL_0002",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Measurement uncertainty considered",
    "Where applicable measurement uncertainty is considered for equipment used in qualification or release decisions.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance",
      "CMM",
      "Optical Measurement System",
      "Universal Testing Machine"
    ]
  },
    "ISO/IEC 17025",
    "7.6",
    {
      verification_expectation: "Verify that measurement uncertainty is addressed where applicable.",
      acceptance_criteria: "Uncertainty is documented or justified where applicable.",
      rationale: "ISO 17025 requires consideration of measurement uncertainty."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0001",
    "IQ",
    "REVIEW_REPORTING",
    "Sterilization process intended use defined",
    "The sterilization process is defined for intended products packaging and load types before qualification begins.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "5.1",
    {
      verification_expectation: "Verify that intended use load families packaging configurations and sterilization objectives are documented.",
      acceptance_criteria: "Process definition and load family table are documented and approved.",
      rationale: "Sets the scope boundary for steam sterilization qualification."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0002",
    "IQ",
    "SYSTEM_ACCESS_SECURITY",
    "Roles and approval authorities defined",
    "Responsibilities and approval authorities for validation execution review and release are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "5.2",
    {
      verification_expectation: "Verify that roles responsibilities and approval authorities are documented.",
      acceptance_criteria: "Governance and approval workflow are documented.",
      rationale: "Supports audit readiness and prevents ambiguous release authority."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0003",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation and utilities verified",
    "Sterilizer installation utilities drainage steam supply and safety systems are suitable for intended cycles.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "5.3",
    {
      verification_expectation: "Verify installation utilities drainage steam supply and safety systems per requirements.",
      acceptance_criteria: "IQ install checklist and utility verification records are complete.",
      rationale: "Foundational IQ requirement for steam sterilizers."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0004",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical sensors calibrated and traceable",
    "Temperature pressure and timing measurement systems are calibrated and traceable.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "5.4",
    {
      verification_expectation: "Verify that temperature pressure and timing systems are calibrated and traceable.",
      acceptance_criteria: "Instrumentation table and calibration evidence are documented.",
      rationale: "Foundational for credible OQ/PQ evidence."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0005",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Control system configuration defined and controlled",
    "Cycle recipes setpoints alarms and configuration baselines are documented and controlled.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "5.5",
    {
      verification_expectation: "Verify that cycle recipes setpoints alarms and interlocks are documented and controlled.",
      acceptance_criteria: "Configuration baseline and alarm interlock matrix are documented.",
      rationale: "Prevents unplanned changes to cycle parameters."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0006",
    "OQ",
    "REVIEW_REPORTING",
    "Load families and worst-case rationale defined",
    "Load families and worst-case selections are defined and justified based on mass density packaging and steam penetration difficulty.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "6.1",
    {
      verification_expectation: "Verify that load families and worst-case rationale are documented.",
      acceptance_criteria: "Load family matrix and worst-case rationale are documented.",
      rationale: "Drives efficient validation without under-covering risk."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0007",
    "OQ",
    "REVIEW_REPORTING",
    "Cycle development strategy defined",
    "Cycle development approach target conditions and exposure phase intent are defined and justified.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "6.2",
    {
      verification_expectation: "Verify that cycle development strategy is documented.",
      acceptance_criteria: "Cycle development plan is documented.",
      rationale: "Keeps cycle development traceable and justified."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0008",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Air removal and steam penetration demonstrated",
    "Effective air removal and steam penetration are demonstrated for representative and worst-case load configurations where applicable.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "6.3",
    {
      verification_expectation: "Verify air removal and steam penetration for porous or mixed loads where applicable.",
      acceptance_criteria: "Air removal and penetration test records are documented.",
      rationale: "Critical for porous and mixed loads."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0009",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Operating ranges and control limits challenged",
    "Critical setpoints and limits are challenged to demonstrate the sterilizer maintains required conditions across defined ranges.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "6.4",
    {
      verification_expectation: "Execute operating range and control limit challenges.",
      acceptance_criteria: "Challenge matrix and control limit summary are documented.",
      rationale: "Core OQ deliverable for steam sterilization."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0010",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Chamber temperature distribution characterized",
    "Chamber temperature distribution is characterized using a defined sensor layout to demonstrate uniformity.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "6.5",
    {
      verification_expectation: "Characterize temperature distribution per sensor layout.",
      acceptance_criteria: "Temperature mapping report and worst-case zone identification are documented.",
      rationale: "Supports worst-case monitoring placement."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0011",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Validated load configurations defined and controlled",
    "Validated load configurations including orientation spacing and packaging arrangement are defined and controlled.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.1",
    {
      verification_expectation: "Verify that validated load configurations and build instructions are documented.",
      acceptance_criteria: "Validated load configuration set and load build instructions are documented.",
      rationale: "Prevents unvalidated load configurations."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0012",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "PQ performance runs under routine conditions",
    "PQ demonstrates consistent performance using routine operators materials and defined load configurations.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.2",
    {
      verification_expectation: "Execute PQ runs per routine conditions.",
      acceptance_criteria: "PQ run plan and summaries are documented.",
      rationale: "Proves performance under real production conditions."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0013",
    "PQ",
    "MONITORING_TRENDING",
    "Worst-case monitoring locations identified",
    "Worst-case monitoring locations are identified and monitoring devices are placed accordingly.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.3",
    {
      verification_expectation: "Verify that worst-case monitoring placement is documented.",
      acceptance_criteria: "Monitoring placement plan and coverage summary are documented.",
      rationale: "Makes worst-case monitoring explicit."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0014",
    "OQ",
    "REVIEW_REPORTING",
    "Acceptance criteria defined for qualification and routine",
    "Measurable acceptance criteria for cycle parameters monitoring results and deviations are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "6.6",
    {
      verification_expectation: "Verify that acceptance criteria and deviation rules are documented.",
      acceptance_criteria: "Acceptance criteria table and deviation decision tree are documented.",
      rationale: "Backbone of release and deviation decisions."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0015",
    "PQ",
    "MONITORING_TRENDING",
    "Routine monitoring strategy defined",
    "Routine monitoring methods frequencies and review requirements are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.4",
    {
      verification_expectation: "Verify that routine monitoring plan is documented.",
      acceptance_criteria: "Routine monitoring plan and review checklist are documented.",
      rationale: "Connects validation to daily control."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0016",
    "PQ",
    "DATA_INTEGRITY_RECORDS",
    "Parametric release controls defined",
    "Where parametric release is used conditions and evidence required are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.5",
    {
      verification_expectation: "Verify that parametric release criteria and review steps are documented where applicable.",
      acceptance_criteria: "Parametric release record template and exception workflow are documented.",
      rationale: "Supports parametric release where used."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0017",
    "PQ",
    "REVIEW_REPORTING",
    "Deviation handling defined",
    "Deviations alarms and excursions trigger documented evaluation and disposition.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.6",
    {
      verification_expectation: "Verify that deviation handling and impact assessment procedures are documented.",
      acceptance_criteria: "Deviation log template and impact assessment form are documented.",
      rationale: "Major lifecycle and audit focus."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0018",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Maintenance and requalification linkage defined",
    "Maintenance and calibration requirements and requalification triggers are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "5.6",
    {
      verification_expectation: "Verify that maintenance program and requalification triggers are documented.",
      acceptance_criteria: "Maintenance program and requalification trigger matrix are documented.",
      rationale: "Prevents gaps after servicing."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0019",
    "PQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Change control and revalidation triggers defined",
    "Change categories and criteria for requalification or revalidation are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.7",
    {
      verification_expectation: "Verify that change control and revalidation decision criteria are documented.",
      acceptance_criteria: "Change control matrix and revalidation decision tree are documented.",
      rationale: "Major lifecycle control."
    }
  ),
  ob(
    "OBL_ISO17665_STEAM_0020",
    "PQ",
    "CALIBRATION_MAINTENANCE",
    "Periodic requalification program defined",
    "Periodic requalification frequency scope and acceptance criteria are defined.",
      {
    "cohort": "Sterilization",
    "equipment_types": [
      "Steam Sterilizer (Pre-Vacuum)",
      "Steam Sterilizer (Gravity)"
    ]
  },
    "ISO 17665",
    "7.8",
    {
      verification_expectation: "Verify that requalification plan and frequency are documented.",
      acceptance_criteria: "Requalification plan and report template are documented.",
      rationale: "Supports long-term control."
    }
  ),
  ob(
    "OBL_ISO20391_PC_0001",
    "OQ",
    "CALIBRATION_MAINTENANCE",
    "Particle counter calibration and verification",
    "Particle counter calibration and size verification are performed per ISO 20391 where applicable.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Particle Counter"
    ]
  },
    "ISO 20391",
    "2;3",
    {
      verification_expectation: "Verify that particle counter calibration and size verification are documented where applicable.",
      acceptance_criteria: "Calibration and verification records are documented.",
      rationale: "ISO 20391 addresses particle counter calibration and size classification."
    }
  ),
  ob(
    "OBL_ISO25178_SURF_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Surface texture measurement verification",
    "Surface texture measurement system (profilometer) is verified per ISO 25178 for areal and profile parameters where applicable.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Surface Profilometer"
    ]
  },
    "ISO 25178",
    "4;5",
    {
      verification_expectation: "Verify that surface texture measurement verification is documented.",
      acceptance_criteria: "Verification records document system performance.",
      rationale: "ISO 25178 defines surface texture parameters and measurement."
    }
  ),
  ob(
    "OBL_ISO8573_AIR_0001",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Compressed air quality class defined",
    "Compressed air quality class (particles water oil) is defined per ISO 8573-1 for intended use.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Compressed Air System"
    ]
  },
    "ISO 8573-1",
    "2;3",
    {
      verification_expectation: "Verify that quality class and acceptance limits are documented.",
      acceptance_criteria: "Quality class and limits are documented and controlled.",
      rationale: "ISO 8573-1 defines compressed air purity classes."
    }
  ),
  ob(
    "OBL_ISO8573_AIR_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Compressed air quality verified",
    "Compressed air system delivers air meeting the defined quality class per ISO 8573-1.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Compressed Air System"
    ]
  },
    "ISO 8573-1",
    "4;5",
    {
      verification_expectation: "Verify that air quality verification (particles water oil) is documented.",
      acceptance_criteria: "OQ records document air quality per class.",
      rationale: "Core OQ for compressed air systems."
    }
  ),
  ob(
    "OBL_NISTHB44_WGT_0001",
    "OQ",
    "CALIBRATION_MAINTENANCE",
    "Checkweigher accuracy and legal metrology",
    "Checkweigher or commercial weighing system meets accuracy and legal-for-trade requirements per NIST HB 44 where applicable.",
      {
    "cohort": "Inspection & Test",
    "equipment_types": [
      "Checkweigher"
    ]
  },
    "NIST HB 44",
    "4;5",
    {
      verification_expectation: "Verify that weighing accuracy and traceability are documented.",
      acceptance_criteria: "Accuracy verification and traceability records are documented.",
      rationale: "NIST HB 44 addresses weights and measures for commercial weighing."
    }
  ),
  ob(
    "OBL_NSF49_BSC_0001",
    "IQ",
    "BIOLOGICAL_SAFETY",
    "Biosafety cabinet installation and certification",
    "Biosafety cabinet is installed and certified per NSF/ANSI 49 for intended use class and type.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Biosafety Cabinet"
    ]
  },
    "NSF/ANSI 49",
    "6;7",
    {
      verification_expectation: "Verify that BSC installation and certification are documented.",
      acceptance_criteria: "Installation and certification records are documented.",
      rationale: "NSF 49 addresses biosafety cabinet requirements."
    }
  ),
  ob(
    "OBL_NSF49_BSC_0002",
    "OQ",
    "BIOLOGICAL_SAFETY",
    "BSC airflow and HEPA integrity verified",
    "BSC airflow inward velocity downflow and HEPA filter integrity are verified per NSF/ANSI 49.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Biosafety Cabinet"
    ]
  },
    "NSF/ANSI 49",
    "6;7",
    {
      verification_expectation: "Verify that airflow and HEPA integrity test records are documented.",
      acceptance_criteria: "Test records document airflow and integrity verification.",
      rationale: "Core OQ for biosafety cabinet operator protection."
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
      "Universal Testing Machine",
      "Hardness Tester"
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
      "Purified Water System",
      "Biosafety Cabinet"
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
      "Purified Water System",
      "Biosafety Cabinet"
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
      "Purified Water System",
      "Biosafety Cabinet"
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
      "Purified Water System",
      "Biosafety Cabinet"
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
      "Purified Water System",
      "Biosafety Cabinet"
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
  ),
  ob(
    "OBL_QMSR_DOC_0008",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Laboratory Incubator",
      "CO2 Incubator",
      "Benchtop Centrifuge",
      "Refrigerated Centrifuge",
      "Microplate Reader"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0009",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector",
      "Ultrasonic Cleaner"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0010",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Injection Molding Machine",
      "Medical Extrusion Line",
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System",
      "Plasma Spray System"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_DOC_0011",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "Required documentation is present and controlled",
    "Required equipment documentation is present and controlled to support qualification and routine use.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR 820",
    "820.10;ISO 13485 4.2",
    {
      verification_expectation: "Verify the presence and controlled status of manufacturer instructions calibration evidence and applicable SOPs.",
      acceptance_criteria: "All required documents are present and uniquely identifiable with controlled access for intended users.",
      rationale: "QMS requires controlled documentation for equipment affecting product quality."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0008",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Laboratory Incubator",
      "CO2 Incubator",
      "Benchtop Centrifuge",
      "Refrigerated Centrifuge",
      "Microplate Reader"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation location and environmental conditions suitability for analytical accuracy.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect analytical instrument performance."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0009",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector",
      "Ultrasonic Cleaner"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation utilities and space suitability for cleaning and disinfection processes.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental and utility conditions affect decontamination performance."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0010",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Injection Molding Machine",
      "Medical Extrusion Line",
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System",
      "Plasma Spray System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation space utilities and environmental suitability for manufacturing processes.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect manufacturing quality."
    }
  ),
  ob(
    "OBL_QMSR_INSTALL_0011",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Installation environment is suitable",
    "The equipment is installed in an environment suitable for intended operation.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify installation location and environmental suitability for analyzer performance.",
      acceptance_criteria: "Installation environment meets documented requirements for the equipment intended use.",
      rationale: "Environmental conditions can affect IVD analyzer performance."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0008",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Microplate Reader"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of detectors sensors and measurement systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible analytical results."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0009",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of temperature and flow sensors where applicable.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible decontamination monitoring."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0010",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System",
      "Plasma Spray System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of measurement and positioning systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible manufacturing control."
    }
  ),
  ob(
    "OBL_QMSR_CAL_0011",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Critical instruments are calibrated and traceable",
    "Critical measurement and control instruments are calibrated and traceable where applicable.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5;7.6",
    {
      verification_expectation: "Verify calibration status and traceability of analytical and quality control systems.",
      acceptance_criteria: "Calibration is current and traceable per documented requirements.",
      rationale: "Calibration traceability supports credible IVD results."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0008",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Laboratory Incubator",
      "CO2 Incubator",
      "Benchtop Centrifuge",
      "Refrigerated Centrifuge",
      "Microplate Reader"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering primary operating modes and defined operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the analytical equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0009",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector",
      "Ultrasonic Cleaner"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering cleaning or disinfection operations across operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the decontamination equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0010",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Injection Molding Machine",
      "Medical Extrusion Line",
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System",
      "Plasma Spray System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering molding extrusion machining or cutting operations across operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the manufacturing equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_FUNC_0011",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Functions perform across operating range",
    "The equipment performs its intended functions across the defined operating range.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.5",
    {
      verification_expectation: "Execute functional tests covering analytical capability across defined operating range.",
      acceptance_criteria: "All functional tests complete successfully with results meeting documented expectations.",
      rationale: "OQ demonstrates the IVD equipment functions correctly under expected conditions."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0008",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "TOC Analyzer",
      "Microplate Reader"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that method and configuration parameters are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible analytical methods."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0009",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Decontamination",
    "equipment_types": [
      "Washer-Disinfector"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that cycle parameters are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible decontamination cycles."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0010",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "Manufacturing",
    "equipment_types": [
      "Injection Molding Machine",
      "Medical Extrusion Line",
      "CNC Machining Center",
      "CNC Turning Center",
      "Laser Cutting System",
      "Plasma Spray System"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that process parameters and programs are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible manufacturing processes."
    }
  ),
  ob(
    "OBL_QMSR_CFG_0011",
    "IQ",
    "CONFIGURATION_CHANGE_CONTROL",
    "Configuration is documented and controlled",
    "Equipment configuration settings and baselines are documented and controlled to support traceability and change control.",
      {
    "cohort": "IVD",
    "equipment_types": [
      "Clinical Chemistry Analyzer",
      "Hematology Analyzer",
      "Blood Gas Analyzer"
    ]
  },
    "21 CFR 820",
    "ISO 13485 7.1.4",
    {
      verification_expectation: "Verify that method and configuration parameters are documented and subject to change control.",
      acceptance_criteria: "Configuration is documented and controlled per procedures.",
      rationale: "Configuration control supports reproducible IVD methods."
    }
  ),
  ob(
    "OBL_USP1058_AIQ_0001",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "AIQ documentation and classification",
    "Analytical instruments are classified (A B or C) and documentation supports the AIQ approach per USP <1058>.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance"
    ]
  },
    "USP <1058>",
    "2;3",
    {
      verification_expectation: "Verify that instrument classification and AIQ documentation are documented.",
      acceptance_criteria: "Classification and AIQ approach are documented.",
      rationale: "USP <1058> provides AIQ framework for analytical instruments."
    }
  ),
  ob(
    "OBL_USP1058_AIQ_0002",
    "IQ",
    "CALIBRATION_MAINTENANCE",
    "Calibration and verification defined",
    "Calibration verification and maintenance requirements are defined per instrument classification.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance"
    ]
  },
    "USP <1058>",
    "3",
    {
      verification_expectation: "Verify that calibration verification and maintenance requirements are documented.",
      acceptance_criteria: "Calibration and maintenance requirements are documented.",
      rationale: "USP <1058> addresses calibration for AIQ."
    }
  ),
  ob(
    "OBL_USP1058_AIQ_0003",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Analytical instrument performance verified",
    "Instrument performance (accuracy precision linearity) is verified per AIQ requirements for the instrument class.",
      {
    "cohort": "Metrology",
    "equipment_types": [
      "Analytical Balance",
      "Microbalance"
    ]
  },
    "USP <1058>",
    "4",
    {
      verification_expectation: "Execute OQ to verify performance parameters per classification.",
      acceptance_criteria: "OQ records document performance verification.",
      rationale: "Core OQ per USP <1058> AIQ framework."
    }
  ),
  ob(
    "OBL_USP1058_AIQ_0004",
    "IQ",
    "DATA_INTEGRITY_RECORDS",
    "AIQ documentation and classification",
    "Analytical instruments are classified (A B or C) and documentation supports the AIQ approach per USP <1058>.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Microplate Reader"
    ]
  },
    "USP <1058>",
    "2;3",
    {
      verification_expectation: "Verify that instrument classification and AIQ documentation are documented.",
      acceptance_criteria: "Classification and AIQ approach are documented.",
      rationale: "USP <1058> provides AIQ framework for analytical instruments."
    }
  ),
  ob(
    "OBL_USP1058_AIQ_0005",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Analytical instrument performance verified",
    "Instrument performance is verified per AIQ requirements for the instrument class.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System",
      "GC/MS System",
      "FTIR Spectrometer",
      "UV-Vis Spectrophotometer",
      "TOC Analyzer",
      "pH Measurement System",
      "Conductivity Measurement System",
      "Microplate Reader"
    ]
  },
    "USP <1058>",
    "4",
    {
      verification_expectation: "Execute OQ to verify performance parameters per classification.",
      acceptance_criteria: "OQ records document performance verification.",
      rationale: "Core OQ per USP <1058> AIQ framework."
    }
  ),
  ob(
    "OBL_USP1231_WAT_0001",
    "IQ",
    "INSTALLATION_ENVIRONMENT",
    "Water system installation and design verified",
    "Water system installation design and distribution are verified per USP <1231> phases.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Purified Water System"
    ]
  },
    "USP <1231>",
    "2;3",
    {
      verification_expectation: "Verify that installation and system design are documented.",
      acceptance_criteria: "IQ records document installation and design verification.",
      rationale: "USP <1231> provides water system validation framework."
    }
  ),
  ob(
    "OBL_USP1231_WAT_0002",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Water system operational qualification",
    "Water system operational qualification demonstrates performance per USP <1231> Phase II.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Purified Water System"
    ]
  },
    "USP <1231>",
    "3",
    {
      verification_expectation: "Verify that OQ demonstrates system performance and sampling.",
      acceptance_criteria: "OQ records document performance per Phase II.",
      rationale: "Phase II OQ per USP <1231>."
    }
  ),
  ob(
    "OBL_USP1231_WAT_0003",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "Water system performance qualification",
    "Water system PQ demonstrates consistent water quality under routine use per USP <1231> Phase III.",
      {
    "cohort": "Facilities & Utilities",
    "equipment_types": [
      "Purified Water System"
    ]
  },
    "USP <1231>",
    "3",
    {
      verification_expectation: "Verify that PQ demonstrates routine performance over defined period.",
      acceptance_criteria: "PQ records document Phase III performance.",
      rationale: "Phase III PQ per USP <1231>."
    }
  ),
  ob(
    "OBL_USP467_GC_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "Residual solvents GC method qualified",
    "GC or GC/MS system and method for residual solvents are qualified per USP <467> where applicable.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "GC/MS System"
    ]
  },
    "USP <467>",
    "2;3",
    {
      verification_expectation: "Verify that residual solvents method qualification is documented where applicable.",
      acceptance_criteria: "Method qualification and system performance records are documented.",
      rationale: "USP <467> addresses residual solvents testing."
    }
  ),
  ob(
    "OBL_USP621_HPLC_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "HPLC system suitability verified",
    "HPLC system suitability parameters (resolution tailing factor precision) are verified per USP <621>.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "HPLC System"
    ]
  },
    "USP <621>",
    "2",
    {
      verification_expectation: "Verify that system suitability verification is documented per USP <621>.",
      acceptance_criteria: "System suitability records are documented.",
      rationale: "USP <621> defines chromatography system suitability requirements."
    }
  ),
  ob(
    "OBL_USP643_TOC_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "TOC analyzer system suitability",
    "TOC analyzer system suitability and performance are verified per USP <643>.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "TOC Analyzer"
    ]
  },
    "USP <643>",
    "2;3",
    {
      verification_expectation: "Verify that system suitability and performance verification are documented.",
      acceptance_criteria: "System suitability and performance records are documented.",
      rationale: "USP <643> addresses TOC for water quality."
    }
  ),
  ob(
    "OBL_USP643_TOC_0002",
    "PQ",
    "FUNCTIONAL_PERFORMANCE",
    "TOC acceptance criteria for water systems",
    "TOC acceptance criteria and verification for water system monitoring are defined per USP <643>.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "TOC Analyzer"
    ]
  },
    "USP <643>",
    "2;3",
    {
      verification_expectation: "Verify that TOC acceptance criteria are defined and applied.",
      acceptance_criteria: "Acceptance criteria are documented and traceable.",
      rationale: "Supports water system validation and routine monitoring."
    }
  ),
  ob(
    "OBL_USP791_PH_0001",
    "OQ",
    "CALIBRATION_MAINTENANCE",
    "pH system calibration and buffer verification",
    "pH measurement system is calibrated and buffer verification is performed per USP <791>.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "pH Measurement System"
    ]
  },
    "USP <791>",
    "2;3",
    {
      verification_expectation: "Verify that calibration and buffer verification procedures are documented and executed.",
      acceptance_criteria: "Calibration and buffer verification records are documented.",
      rationale: "USP <791> addresses pH measurement and calibration."
    }
  ),
  ob(
    "OBL_USP854_FTIR_0001",
    "OQ",
    "FUNCTIONAL_PERFORMANCE",
    "FTIR system performance verified",
    "FTIR spectrometer performance (resolution wavenumber accuracy) is verified per USP <854> where applicable.",
      {
    "cohort": "Analytical",
    "equipment_types": [
      "FTIR Spectrometer"
    ]
  },
    "USP <854>",
    "2",
    {
      verification_expectation: "Verify that FTIR performance verification is documented where applicable.",
      acceptance_criteria: "Performance verification records are documented.",
      rationale: "USP <854> addresses mid-infrared spectroscopy."
    }
  )
];

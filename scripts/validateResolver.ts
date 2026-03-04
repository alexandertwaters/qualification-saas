#!/usr/bin/env npx tsx
/**
 * Phase 8.3: Validate resolver with new catalog.
 * Ensures equipment types resolve correctly for a sample of cohort/type/domain combinations.
 */

import { obligationCatalog } from "../reference/obligations/obligationCatalog";
import { resolveObligations } from "../reference/resolver/resolveObligations";
import { OBLIGATION_DOMAINS } from "../reference/obligations/obligationDomains";

type TestCase = {
  cohort: string;
  equipmentType: string;
  domains: string[];
  expectMinCount?: number;
};

const TEST_CASES: TestCase[] = [
  {
    cohort: "Metrology",
    equipmentType: "Hardness Tester",
    domains: ["CALIBRATION_MAINTENANCE", "DATA_INTEGRITY_RECORDS", "INSTALLATION_ENVIRONMENT"],
    expectMinCount: 1,
  },
  {
    cohort: "Metrology",
    equipmentType: "Universal Testing Machine",
    domains: ["CALIBRATION_MAINTENANCE", "FUNCTIONAL_PERFORMANCE"],
    expectMinCount: 1,
  },
  {
    cohort: "Analytical",
    equipmentType: "HPLC System",
    domains: ["DATA_INTEGRITY_RECORDS", "CALIBRATION_MAINTENANCE", "AUDIT_TRAILS_TRACEABILITY"],
    expectMinCount: 1,
  },
  {
    cohort: "Decontamination",
    equipmentType: "Washer-Disinfector",
    domains: ["FUNCTIONAL_PERFORMANCE", "INSTALLATION_ENVIRONMENT"],
    expectMinCount: 1,
  },
  {
    cohort: "Sterilization",
    equipmentType: "Steam Sterilizer (Pre-Vacuum)",
    domains: ["FUNCTIONAL_PERFORMANCE", "INSTALLATION_ENVIRONMENT", "REVIEW_REPORTING"],
    expectMinCount: 1,
  },
  {
    cohort: "Packaging",
    equipmentType: "Heat Sealer",
    domains: ["FUNCTIONAL_PERFORMANCE", "CONFIGURATION_CHANGE_CONTROL"],
    expectMinCount: 1,
  },
  {
    cohort: "Facilities & Utilities",
    equipmentType: "Biosafety Cabinet",
    domains: ["BIOLOGICAL_SAFETY", "FUNCTIONAL_PERFORMANCE"],
    expectMinCount: 1,
  },
];

function run() {
  console.log("Phase 8.3: Resolver validation\n");
  console.log(`Catalog size: ${obligationCatalog.length} obligations\n`);

  let passed = 0;
  let failed = 0;

  for (const tc of TEST_CASES) {
    const resolved = resolveObligations(
      {
        equipmentCohort: tc.cohort,
        equipmentType: tc.equipmentType,
        selectedDomains: tc.domains,
        includeDeprecated: false,
      },
      obligationCatalog
    );

    const minCount = tc.expectMinCount ?? 1;
    const ok = resolved.length >= minCount;
    if (ok) {
      passed++;
      console.log(`✓ ${tc.cohort} / ${tc.equipmentType}: ${resolved.length} obligations`);
    } else {
      failed++;
      console.error(`✗ ${tc.cohort} / ${tc.equipmentType}: expected ≥${minCount}, got ${resolved.length}`);
    }
  }

  console.log(`\nResult: ${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

run();

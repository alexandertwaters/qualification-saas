#!/usr/bin/env node
/**
 * Build script: CSV → TypeScript
 * Reads data/obligations/*_obligations.csv (pipe-delimited, plan schema)
 * and generates ob() calls for reference/obligations/obligationCatalog.ts
 *
 * Usage: node scripts/buildObligationCatalog.mjs
 * Output: scripts/generatedObligations.ts (to be imported or merged)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "data", "obligations");
const OUTPUT_FILE = path.join(__dirname, "..", "reference", "obligations", "generatedObligations.ts");

function parseCSV(content) {
  const lines = content.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];
  const headers = lines[0].split("|");
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split("|");
    const row = {};
    headers.forEach((h, j) => {
      row[h.trim()] = values[j] !== undefined ? values[j].trim() : "";
    });
    rows.push(row);
  }
  return rows;
}

function escape(str) {
  if (!str) return '""';
  return JSON.stringify(str);
}

function generateObCall(row) {
  const cohort = row.cohort || "";
  const equipmentTypes = (row.equipment_types || "")
    .split(";")
    .map((t) => t.trim())
    .filter(Boolean);
  const equipment = {
    cohort,
    equipment_types: equipmentTypes,
  };
  const equipmentStr = JSON.stringify(equipment, null, 2)
    .split("\n")
    .map((l) => "  " + l)
    .join("\n");
  const phase = row.qualification_phase || "IQ";
  const domain = row.domain || "DATA_INTEGRITY_RECORDS";
  const standard = row.standard_code || row.standard_id || "";
  const clause = row.clause ? `"${row.clause.replace(/"/g, '\\"')}"` : "undefined";
  const extra = [];
  if (row.verification_expectation)
    extra.push(`verification_expectation: ${escape(row.verification_expectation)}`);
  if (row.acceptance_criteria)
    extra.push(`acceptance_criteria: ${escape(row.acceptance_criteria)}`);
  if (row.rationale) extra.push(`rationale: ${escape(row.rationale)}`);
  const extraStr =
    extra.length > 0
      ? `,\n    {\n      ${extra.join(",\n      ")}\n    }`
      : "";

  return `  ob(\n    ${escape(row.obligation_id)},\n    "${phase}",\n    "${domain}",\n    ${escape(row.title)},\n    ${escape(row.description)},\n    ${equipmentStr},\n    ${escape(standard)},\n    ${clause}${extraStr}\n  )`;
}

function main() {
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith("_obligations.csv"));
  const planFiles = files.filter((f) => f.endsWith("_obligations.csv") && f.startsWith("STD_"));

  const allCalls = [];
  for (const file of planFiles) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    const rows = parseCSV(content);
    const active = rows.filter((r) => (r.status || "active") === "active");
    for (const row of active) {
      allCalls.push(generateObCall(row));
    }
  }

  const output = `/**
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

export const generatedObligations: Obligation[] = [\n${allCalls.join(",\n")}\n];
`;

  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Generated ${allCalls.length} obligations -> ${OUTPUT_FILE}`);
}

main();

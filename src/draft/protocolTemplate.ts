/**
 * Template schema and placeholder taxonomy for protocol drafts.
 * Placeholders indicate where the user must supply their own information.
 */

export type PlaceholderCategory =
  | "protocol"
  | "equipment"
  | "location"
  | "company"
  | "acceptance_criteria";

export const PLACEHOLDER_EXAMPLES: Record<PlaceholderCategory, string[]> = {
  protocol: ["Protocol ID", "Revision", "Document number", "Effective date"],
  equipment: ["Manufacturer", "Model", "Serial number", "Asset tag", "Firmware/software version"],
  location: ["Building", "Room", "Area", "Cleanroom class", "Grid location", "Line/station"],
  company: ["Company name", "Site", "Department", "SOP reference", "Quality system document number"],
  acceptance_criteria: ["Company-defined limits", "Product-specific specification", "Risk-based threshold"],
};

/** Format standard ID and clause for human-readable display (e.g. "21 CFR 820.10", "ISO 13485 7.1.4") */
export function formatStandardClause(standardId: string, clauseRef: string): string {
  const std = standardId.trim();
  const clause = (clauseRef ?? "").trim();
  if (!std) return clause || "—";

  // Map common standard IDs to display names
  const displayNames: Record<string, string> = {
    STD_QMSR: "21 CFR 820",
    STD_21CFR11: "21 CFR 11",
    STD_21CFR830: "21 CFR 830",
    STD_21CFR1271: "21 CFR 1271",
    STD_ISO13485: "ISO 13485",
    STD_ISO14971: "ISO 14971",
    STD_ISO17665: "ISO 17665",
    STD_ISO17025: "ISO 17025",
    STD_ISO15883: "ISO 15883",
    STD_ISO11135: "ISO 11135",
    STD_ISO11607_1: "ISO 11607-1",
    STD_ISO11607_2: "ISO 11607-2",
    STD_ISO14644_1: "ISO 14644-1",
    STD_ISO14644_3: "ISO 14644-3",
    STD_ISO14698: "ISO 14698",
    STD_ISO14937: "ISO 14937",
    STD_ISO11137: "ISO 11137",
    STD_ISO11138: "ISO 11138",
    STD_ISO8573: "ISO 8573",
    STD_HUMAN_TISSUE_STORAGE: "Human tissue storage",
    STD_AAMI_ST79: "AAMI ST79",
    STD_AAMI_ST98: "AAMI ST98",
    STD_ASTME4: "ASTM E4",
    STD_ASTME18: "ASTM E18",
    STD_ASTMF88: "ASTM F88",
    STD_ASTMF1140: "ASTM F1140",
    STD_ASTMF1147: "ASTM F1147",
    STD_ASTMF1920: "ASTM F1920",
    STD_ASTMF1929: "ASTM F1929",
    STD_ASTMF2397: "ASTM F2397",
    STD_IEC61010: "IEC 61010",
    STD_IEC62304: "IEC 62304",
    STD_IEC62366: "IEC 62366-1",
    STD_CLIA: "CLIA",
    STD_NSF49: "NSF/ANSI 49",
    STD_NISTHB44: "NIST HB 44",
  };

  const name = displayNames[std] ?? std.replace(/^STD_/, "").replace(/_/g, " ");
  return clause ? `${name} ${clause}`.trim() : name;
}

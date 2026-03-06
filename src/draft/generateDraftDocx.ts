import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  TextRun,
  AlignmentType,
  WidthType,
} from "docx";
import type { DraftResponse } from "../resolver/transformToDraftResponse";
import { formatStandardClause } from "./protocolTemplate";

export type DocxOptions = {
  equipmentType: string;
  equipmentCohort: string;
  equipmentDisplayName?: string;
};

type ResolvedObligation = DraftResponse["resolved_obligations"][0];

/**
 * Generate a Word (.docx) protocol draft from a draft response.
 * Human-readable structure with placeholders, phase summary tables,
 * annotated obligations, and standards in standard-aligned format.
 */
export async function generateDraftDocx(
  draft: DraftResponse,
  options: DocxOptions
): Promise<Buffer> {
  const { equipmentType, equipmentCohort, equipmentDisplayName } = options;
  const displayName = equipmentDisplayName ?? equipmentType;

  const phaseOrder = ["IQ", "OQ", "PQ"] as const;
  const byPhase = new Map<string, ResolvedObligation[]>();
  for (const phase of phaseOrder) {
    byPhase.set(
      phase,
      draft.resolved_obligations.filter((o) => o.qualification_phase === phase)
    );
  }

  const children: (Paragraph | Table)[] = [];

  // 1. Cover / Title block
  children.push(
    new Paragraph({
      text: "Qualification Protocol Draft",
      heading: "Heading1",
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${displayName} | ${equipmentCohort}`, bold: true }),
      ],
      spacing: { after: 100 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "Protocol ID: [Enter protocol ID]  |  Revision: [Rev]  |  Effective date: [Date]",
          size: 20,
        }),
      ],
      spacing: { after: 100 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Generated: ${draft.draft_metadata.generated_at}  |  Catalog: ${draft.version_anchors.catalog_version}`,
          size: 20,
        }),
      ],
      spacing: { after: 200 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "This draft is advisory. Replace all [placeholders] with your specific information. Refine and edit before QMS submission. User bears responsibility for compliance.",
          italics: true,
        }),
      ],
      spacing: { after: 400 },
    })
  );

  // 2. Objective and Scope
  children.push(
    new Paragraph({
      text: "1. Objective and Scope",
      heading: "Heading2",
      spacing: { before: 200, after: 100 },
    })
  );
  children.push(
    new Paragraph({
      text: "This protocol defines the qualification activities for the equipment listed below. Complete all sections applicable to your installation and intended use.",
      spacing: { after: 200 },
    })
  );

  // 3. Equipment Identification (placeholder table)
  children.push(
    new Paragraph({
      text: "2. Equipment Identification",
      heading: "Heading2",
      spacing: { before: 200, after: 100 },
    })
  );
  children.push(
    equipmentIdentificationTable()
  );

  // 4. Site / Company context (placeholders)
  children.push(
    new Paragraph({
      text: "3. Site / Company Context",
      heading: "Heading2",
      spacing: { before: 200, after: 100 },
    })
  );
  children.push(
    new Paragraph({
      text: "Company/Site: [Enter company name and site]",
      spacing: { after: 50 },
    })
  );
  children.push(
    new Paragraph({
      text: "Department: [Enter department]",
      spacing: { after: 50 },
    })
  );
  children.push(
    new Paragraph({
      text: "Location: Building [_____], Room/Area [_____]",
      spacing: { after: 200 },
    })
  );

  // 5–7. IQ, OQ, PQ
  let sectionNum = 4;
  for (const phase of phaseOrder) {
    const obligations = byPhase.get(phase) ?? [];
    if (obligations.length === 0) continue;

    children.push(
      new Paragraph({
        text: `${sectionNum}. ${phase} – ${phaseLabel(phase)}`,
        heading: "Heading1",
        spacing: { before: 300, after: 150 },
      })
    );

    // Phase summary table: Standard | Clause | Annotated requirement
    const summaryRows = buildPhaseSummaryRows(obligations);
    if (summaryRows.length > 0) {
      children.push(
        new Paragraph({
          text: `${sectionNum}.1 Summary: Standards and Obligations`,
          heading: "Heading2",
          spacing: { before: 150, after: 100 },
        })
      );
      children.push(
        new Table({
          rows: summaryRows,
          width: { size: 100, type: WidthType.PERCENTAGE },
          columnWidths: [1800, 900, 2800],
        })
      );
    }

    // Detailed obligation table with annotation
    children.push(
      new Paragraph({
        text: `${sectionNum}.2 Detailed Requirements`,
        heading: "Heading2",
        spacing: { before: 200, after: 100 },
      })
    );

    const detailRows = buildObligationDetailRows(obligations);
    children.push(
      new Table({
        rows: detailRows,
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [288, 864, 2200, 1080],
      })
    );

    sectionNum++;
  }

  // 8. Approval / Sign-off placeholders
  children.push(
    new Paragraph({
      text: "Approval",
      heading: "Heading2",
      spacing: { before: 400, after: 150 },
    })
  );
  children.push(
    new Paragraph({
      text: "Prepared by: _________________________  Date: ___________",
      spacing: { after: 50 },
    })
  );
  children.push(
    new Paragraph({
      text: "Reviewed by: _________________________  Date: ___________",
      spacing: { after: 50 },
    })
  );
  children.push(
    new Paragraph({
      text: "Approved by: _________________________  Date: ___________",
      spacing: { after: 200 },
    })
  );

  const doc = new Document({
    sections: [{ properties: {}, children }],
  });

  return Packer.toBuffer(doc);
}

const PLACEHOLDER = "_____";

function equipmentIdentificationTable(): Table {
  const rows: TableRow[] = [
    new TableRow({
      children: [
        headerCell("Attribute"),
        headerCell("Value (replace with your information)"),
      ],
      tableHeader: true,
    }),
    new TableRow({ children: [cell("Manufacturer"), cell(PLACEHOLDER)] }),
    new TableRow({ children: [cell("Model"), cell(PLACEHOLDER)] }),
    new TableRow({ children: [cell("Serial number"), cell(PLACEHOLDER)] }),
    new TableRow({ children: [cell("Asset tag"), cell(PLACEHOLDER)] }),
    new TableRow({ children: [cell("Location (room/area)"), cell(PLACEHOLDER)] }),
  ];
  return new Table({
    rows,
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [2400, 2400],
  });
}

function buildPhaseSummaryRows(obligations: ResolvedObligation[]): TableRow[] {
  const seen = new Set<string>();
  const rows: Array<{ standard: string; clause: string; requirement: string }> = [];

  for (const o of obligations) {
    const refs = o.standards_references ?? [];
    const reqText = o.obligation_text;
    if (refs.length === 0) {
      const key = `—|${reqText}`;
      if (!seen.has(key)) {
        seen.add(key);
        rows.push({ standard: "—", clause: "—", requirement: reqText });
      }
    } else {
      for (const r of refs) {
        const std = formatStandardClause(r.standard_id, r.clause_reference);
        const key = `${std}|${reqText}`;
        if (!seen.has(key)) {
          seen.add(key);
          const clausePart = r.clause_reference ? r.clause_reference : "—";
          const stdDisplay = r.standard_id.replace(/^STD_/, "").replace(/_/g, " ");
          rows.push({
            standard: stdDisplay,
            clause: clausePart,
            requirement: reqText,
          });
        }
      }
    }
  }

  return [
    new TableRow({
      children: [
        headerCell("Standard"),
        headerCell("Clause"),
        headerCell("Annotated Requirement"),
      ],
      tableHeader: true,
    }),
    ...rows.map((r) =>
      new TableRow({
        children: [cell(r.standard), cell(r.clause), cell(r.requirement)],
      })
    ),
  ];
}

function buildObligationDetailRows(obligations: ResolvedObligation[]): TableRow[] {
  return [
    new TableRow({
      children: [
        headerCell("#"),
        headerCell("Domain"),
        headerCell("Obligation / Verification / Acceptance Criteria"),
        headerCell("Standard(s)"),
      ],
      tableHeader: true,
    }),
    ...obligations.map((o, i) => {
      const lines: string[] = [o.obligation_text];
      if (o.rationale) lines.push(`Rationale: ${o.rationale}`);
      if (o.acceptance_criteria) lines.push(`Acceptance: ${o.acceptance_criteria}`);
      lines.push("User-specific criteria: " + PLACEHOLDER);
      const obligationCell = lines.join("\n");
      const standardsCell =
        (o.standards_references ?? [])
          .map((s) => formatStandardClause(s.standard_id, s.clause_reference))
          .join("; ") || "—";
      return new TableRow({
        children: [
          cell(String(i + 1)),
          cell(formatDomain(o.obligation_domain)),
          cell(obligationCell),
          cell(standardsCell),
        ],
      });
    }),
  ];
}

function phaseLabel(phase: string): string {
  const labels: Record<string, string> = {
    IQ: "Installation Qualification",
    OQ: "Operational Qualification",
    PQ: "Performance Qualification",
  };
  return labels[phase] ?? phase;
}

function formatDomain(domain: string): string {
  return domain.replace(/_/g, " ");
}

function headerCell(text: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: true })],
      }),
    ],
  });
}

function cell(text: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text })],
      }),
    ],
  });
}

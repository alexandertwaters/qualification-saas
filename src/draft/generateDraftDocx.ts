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
  convertInchesToTwip,
} from "docx";
import type { DraftResponse } from "../resolver/transformToDraftResponse";

export type DocxOptions = {
  equipmentType: string;
  equipmentCohort: string;
  equipmentDisplayName?: string;
};

/**
 * Generate a Word (.docx) document from a draft response.
 * Intended for download and further refinement before QMS introduction.
 */
export async function generateDraftDocx(
  draft: DraftResponse,
  options: DocxOptions
): Promise<Buffer> {
  const { equipmentType, equipmentCohort, equipmentDisplayName } = options;
  const displayName = equipmentDisplayName ?? equipmentType;

  const phaseOrder = ["IQ", "OQ", "PQ"];
  const byPhase = new Map<string, typeof draft.resolved_obligations>();
  for (const phase of phaseOrder) {
    byPhase.set(
      phase,
      draft.resolved_obligations.filter((o) => o.qualification_phase === phase)
    );
  }

  const children: (Paragraph | Table)[] = [];

  children.push(
    new Paragraph({
      text: "Protocol Draft",
      heading: "Heading1",
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${displayName} | ${equipmentCohort}`,
          bold: true,
        }),
      ],
      spacing: { after: 100 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Generated: ${draft.draft_metadata.generated_at} | Catalog: ${draft.version_anchors.catalog_version}`,
          size: 20,
        }),
      ],
      spacing: { after: 400 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "This draft is advisory. Refine and edit before QMS submission. User bears responsibility for compliance.",
          italics: true,
        }),
      ],
      spacing: { after: 300 },
    })
  );

  for (const phase of phaseOrder) {
    const obligations = byPhase.get(phase) ?? [];
    if (obligations.length === 0) continue;

    children.push(
      new Paragraph({
        text: `${phase} – ${phaseLabel(phase)}`,
        heading: "Heading1",
        spacing: { before: 300, after: 150 },
      })
    );

    const rows: TableRow[] = [
      new TableRow({
        children: [
          headerCell("#"),
          headerCell("Domain"),
          headerCell("Obligation"),
          headerCell("Standard(s)"),
        ],
        tableHeader: true,
      }),
      ...obligations.map((o, i) =>
        new TableRow({
          children: [
            cell(String(i + 1)),
            cell(o.obligation_domain),
            cell(o.obligation_text),
            cell(
              (o.standards_references ?? [])
                .map((s) => `${s.standard_id}${s.clause_reference ? ` ${s.clause_reference}` : ""}`)
                .join("; ") || "—"
            ),
          ],
        })
      ),
    ];

    children.push(
      new Table({
        rows,
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [288, 864, 2520, 1080],
      })
    );
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });

  return Packer.toBuffer(doc);
}

function phaseLabel(phase: string): string {
  const labels: Record<string, string> = {
    IQ: "Installation Qualification",
    OQ: "Operational Qualification",
    PQ: "Performance Qualification",
  };
  return labels[phase] ?? phase;
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
    children: [new Paragraph({ children: [new TextRun({ text })] })],
  });
}

import { GeneratedProtocol } from "./types"
import { ObligationPayload } from "./projectObligation"
import { renderIQSection } from "./sections/renderIQSection"
import { renderOQSection } from "./sections/renderOQSection"
import { renderPQSection } from "./sections/renderPQSection"

export type ResolverOutputEnvelope = {
  resolved_obligations: ObligationPayload[]
}

function groupByPhase(obligations: ObligationPayload[]) {
  return obligations.reduce(
    (acc, obligation) => {
      acc[obligation.qualification_phase].push(obligation)
      return acc
    },
    { IQ: [] as ObligationPayload[], OQ: [] as ObligationPayload[], PQ: [] as ObligationPayload[] }
  )
}

export function renderProtocol(resolverEnvelope: ResolverOutputEnvelope): GeneratedProtocol {
  const grouped = groupByPhase(resolverEnvelope.resolved_obligations)

  const protocol: GeneratedProtocol = {}

  if (grouped.IQ.length > 0) protocol.IQ = renderIQSection(grouped.IQ)
  if (grouped.OQ.length > 0) protocol.OQ = renderOQSection(grouped.OQ)
  if (grouped.PQ.length > 0) protocol.PQ = renderPQSection(grouped.PQ)

  return protocol
}

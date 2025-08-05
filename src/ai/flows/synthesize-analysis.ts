'use server';

/**
 * @fileOverview This file defines the Genkit flow for synthesizing research findings into a comprehensive analysis.
 *
 * The flow takes research notes and sources as input and generates a synthesized analysis with
 * streamed text and a list of sources. The agent streams the final, synthesized analysis with
 * streamed text and sources list.
 *
 * @requires genkit
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {generate} from 'genkit';

const SynthesizeAnalysisInputSchema = z.object({
  researchNotes: z.string().describe('The notes collected during the research process.'),
  sources: z.array(z.string()).describe('The URLs of the sources used during the research.'),
});
export type SynthesizeAnalysisInput = z.infer<typeof SynthesizeAnalysisInputSchema>;


export async function synthesizeAnalysisStream(input: SynthesizeAnalysisInput): Promise<AsyncGenerator<string>> {
  const {stream} = await ai.generate({
    model: 'googleai/gemini-2.0-flash',
    prompt: `You are an expert researcher tasked with synthesizing research notes into a comprehensive analysis.
    Your analysis should be clear, concise, and supported by the provided sources.
    Output the analysis in markdown format.

    Research Notes:
    ${input.researchNotes}

    Sources:
    ${input.sources.map(s => `- ${s}`).join('\n')}

    Synthesized Analysis:`,
    stream: true,
  });

  async function* contentStream(): AsyncGenerator<string> {
    for await (const chunk of stream) {
      if (chunk.content) {
        yield chunk.content[0].text ?? '';
      }
    }
  }

  return contentStream();
}

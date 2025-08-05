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

const SynthesizeAnalysisInputSchema = z.object({
  researchNotes: z.string().describe('The notes collected during the research process.'),
  sources: z.array(z.string()).describe('The URLs of the sources used during the research.'),
});
export type SynthesizeAnalysisInput = z.infer<typeof SynthesizeAnalysisInputSchema>;

const SynthesizeAnalysisOutputSchema = z.object({
  analysis: z.string().describe('The synthesized analysis of the research findings.'),
  sources: z.array(z.string()).describe('The URLs of the sources used in the analysis.'),
});
export type SynthesizeAnalysisOutput = z.infer<typeof SynthesizeAnalysisOutputSchema>;

export async function synthesizeAnalysis(input: SynthesizeAnalysisInput): Promise<SynthesizeAnalysisOutput> {
  return synthesizeAnalysisFlow(input);
}

const synthesizeAnalysisPrompt = ai.definePrompt({
  name: 'synthesizeAnalysisPrompt',
  input: {schema: SynthesizeAnalysisInputSchema},
  output: {schema: SynthesizeAnalysisOutputSchema},
  prompt: `You are an expert researcher tasked with synthesizing research notes into a comprehensive analysis.
  Your analysis should be clear, concise, and supported by the provided sources. List the sources that were actually useful at the end.
  Output the analysis in markdown format.

  Research Notes:
  {{researchNotes}}

  Sources:
  {{#each sources}}
  - {{this}}
  {{/each}}

  Synthesized Analysis:`,
});

const synthesizeAnalysisFlow = ai.defineFlow(
  {
    name: 'synthesizeAnalysisFlow',
    inputSchema: SynthesizeAnalysisInputSchema,
    outputSchema: SynthesizeAnalysisOutputSchema,
  },
  async input => {
    const {output} = await synthesizeAnalysisPrompt(input);
    return output!;
  }
);

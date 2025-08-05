'use server';

/**
 * @fileOverview This file defines the Genkit flow for synthesizing research findings into a comprehensive analysis.
 *
 * The flow takes research notes and sources as input and generates a synthesized analysis.
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
    analysis: z.string().describe('The synthesized analysis in markdown format.'),
});
export type SynthesizeAnalysisOutput = z.infer<typeof SynthesizeAnalysisOutputSchema>;


export async function synthesizeAnalysis(input: SynthesizeAnalysisInput): Promise<SynthesizeAnalysisOutput> {
    return synthesizeAnalysisFlow(input);
}


const synthesizeAnalysisFlow = ai.defineFlow(
    {
        name: 'synthesizeAnalysisFlow',
        inputSchema: SynthesizeAnalysisInputSchema,
        outputSchema: SynthesizeAnalysisOutputSchema,
    },
    async (input) => {
        const {output} = await ai.generate({
            model: 'googleai/gemini-2.0-flash',
            prompt: `You are an expert researcher tasked with synthesizing research notes into a comprehensive analysis.
    Your analysis should be clear, concise, and supported by the provided sources.
    Output the analysis in markdown format.

    Research Notes:
    ${input.researchNotes}

    Sources:
    ${input.sources.map(s => `- ${s}`).join('\n')}

    Synthesized Analysis:`,
            output: {
                schema: SynthesizeAnalysisOutputSchema,
            },
        });
        return output!;
    }
);

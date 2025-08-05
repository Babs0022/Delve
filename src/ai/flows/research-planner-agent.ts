'use server';

/**
 * @fileOverview Research Planner Agent flow. Generates a step-by-step research plan from a user query.
 *
 * - generateResearchPlan - A function that generates a research plan.
 * - GenerateResearchPlanInput - The input type for the generateResearchPlan function.
 * - GenerateResearchPlanOutput - The return type for the generateResearchPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResearchPlanInputSchema = z.object({
  query: z.string().describe('The user query to generate a research plan for.'),
});
export type GenerateResearchPlanInput = z.infer<typeof GenerateResearchPlanInputSchema>;

const ResearchStepSchema = z.object({
  step_number: z.number().describe('The step number in the research plan.'),
  step_title: z.string().describe('The title of the research step.'),
  step_description: z.string().describe('A detailed description of the research step.'),
  expected_output: z.string().describe('The expected output or deliverable for this step.'),
});

const GenerateResearchPlanOutputSchema = z.object({
  title: z.string().describe('The title of the overall research plan.'),
  steps: z.array(ResearchStepSchema).describe('The detailed, step-by-step research plan.'),
});
export type GenerateResearchPlanOutput = z.infer<typeof GenerateResearchPlanOutputSchema>;

export async function generateResearchPlan(input: GenerateResearchPlanInput): Promise<GenerateResearchPlanOutput> {
  return generateResearchPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateResearchPlanPrompt',
  input: {schema: GenerateResearchPlanInputSchema},
  output: {schema: GenerateResearchPlanOutputSchema},
  prompt: `You are an AI research assistant. Your job is to create a detailed, step-by-step research plan based on the user's query. The plan should be broken down into clear steps, each with a title, description, and expected output.

User Query: {{{query}}}

Research Plan:`,
});

const generateResearchPlanFlow = ai.defineFlow(
  {
    name: 'generateResearchPlanFlow',
    inputSchema: GenerateResearchPlanInputSchema,
    outputSchema: GenerateResearchPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

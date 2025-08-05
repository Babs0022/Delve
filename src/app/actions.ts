'use server';

import { GenerateResearchPlanOutput, generateResearchPlan } from '@/ai/flows/research-planner-agent';
import { researchExecutorAgent } from '@/ai/flows/research-executor-agent';
import { synthesizeAnalysis } from '@/ai/flows/synthesize-analysis';

export async function startResearch(query: string): Promise<{ plan: GenerateResearchPlanOutput } | { error: string }> {
  try {
    const plan = await generateResearchPlan({ query });
    
    if (!plan.steps || plan.steps.length === 0) {
      return { error: 'The generated plan has no steps. Please try a different query.' };
    }
    
    return { plan };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate a research plan. Please try again.' };
  }
}

export async function executeResearch(
  plan: GenerateResearchPlanOutput
): Promise<{ logs: string[]; analysis: string; sources: string[] } | { error:string }> {
  try {
    const planStepsAsStrings = plan.steps.map(step => `${step.step_title}: ${step.step_description}`);
    
    const executionResult = await researchExecutorAgent({ researchPlan: planStepsAsStrings });

    const synthesisResult = await synthesizeAnalysis({
      researchNotes: executionResult.analysis,
      sources: executionResult.sources,
    });
    
    return {
      logs: executionResult.logs,
      analysis: synthesisResult.analysis,
      sources: executionResult.sources,
    };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to execute the research and synthesize results. Please try again.' };
  }
}

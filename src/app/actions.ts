'use server';

import { generateResearchPlan } from '@/ai/flows/research-planner-agent';
import { researchExecutorAgent } from '@/ai/flows/research-executor-agent';
import { synthesizeAnalysis } from '@/ai/flows/synthesize-analysis';

export async function startResearch(query: string): Promise<{ plan: string[] } | { error: string }> {
  try {
    const { plan } = await generateResearchPlan({ query });
    // The model often returns a numbered list as a single string. We need to parse it.
    const planSteps = plan
      .split('\n')
      .map(line => line.trim())
      .filter(line => /^\d+\./.test(line))
      .map(line => line.replace(/^\d+\.\s*/, ''));

    if (planSteps.length === 0) {
      // Fallback if parsing fails
      return { plan: [plan] };
    }
    
    return { plan: planSteps };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate a research plan. Please try again.' };
  }
}

export async function executeResearch(
  plan: string[]
): Promise<{ logs: string[]; analysis: string; sources: string[] } | { error:string }> {
  try {
    // This is a simplified execution. A real agent would use tools here.
    const researchNotes = `Based on the plan: ${plan.join(', ')}, I have gathered the following information...`;
    const sources = plan.map((_, i) => `https://example.com/source${i + 1}`);

    const executionResult = await researchExecutorAgent({ researchPlan: plan });

    const synthesisResult = await synthesizeAnalysis({
      researchNotes: executionResult.analysis,
      sources: executionResult.sources,
    });
    
    return {
      logs: executionResult.logs,
      analysis: synthesisResult.analysis,
      sources: synthesisResult.sources,
    };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to execute the research and synthesize results. Please try again.' };
  }
}

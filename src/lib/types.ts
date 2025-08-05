export interface ResearchStep {
  step_number: number;
  step_title: string;
  step_description: string;
  expected_output: string;
}

export interface ResearchPlan {
  title: string;
  steps: ResearchStep[];
}

export type Message = {
  id: string;
  role: 'user' | 'agent';
  type: 'text' | 'plan' | 'logs' | 'result' | 'error' | 'loading';
  content: React.ReactNode;
  data?: any;
};

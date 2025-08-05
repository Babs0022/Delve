export type Message = {
  id: string;
  role: 'user' | 'agent';
  type: 'text' | 'plan' | 'logs' | 'result' | 'error' | 'loading';
  content: React.ReactNode;
  data?: any;
};

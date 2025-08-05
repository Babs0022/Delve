'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DelveLogo } from '@/components/icons';
import { ArrowUp, Loader2 } from 'lucide-react';
import type { Message } from '@/lib/types';
import ChatMessage from './chat-message';
import PlanApproval from './plan-approval';
import ExecutionLog from './execution-log';
import ResultsDisplay from './results-display';
import { startResearch, executeResearch } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

let messageIdCounter = 0;

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'agent',
      type: 'text',
      content: "Hello! I'm Delve, your AI research assistant. What topic would you like to explore today?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const addMessage = (message: Omit<Message, 'id'>) => {
    const newMessage = { ...message, id: `${Date.now()}-${messageIdCounter++}` };
    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  };

  const updateMessage = (id: string, newContent: Partial<Message>) => {
    setMessages(prev =>
      prev.map(msg => (msg.id === id ? { ...msg, ...newContent } : msg))
    );
  };

  const handlePlanDecision = async (decision: 'approve' | 'deny', plan: string[]) => {
    if (decision === 'deny') {
      addMessage({
        role: 'agent',
        type: 'text',
        content: 'Research plan denied. Please provide a new query or refine your previous one.',
      });
      setIsLoading(false);
      return;
    }

    addMessage({
        role: 'agent',
        type: 'text',
        content: 'Plan approved! Starting research execution...',
    });

    const logMessageId = addMessage({
      role: 'agent',
      type: 'loading',
      content: null,
      data: { logs: [] }
    });

    const result = await executeResearch(plan);

    if ('error' in result) {
        updateMessage(logMessageId, { type: 'error', content: result.error });
        toast({ title: "Execution Error", description: result.error, variant: 'destructive' });
    } else {
        updateMessage(logMessageId, { 
            type: 'logs',
            content: <ExecutionLog logs={result.logs} />,
            data: { logs: result.logs }
        });
        
        addMessage({
            role: 'agent',
            type: 'result',
            content: <ResultsDisplay analysis={result.analysis} sources={result.sources} onRegenerate={() => handleSubmit(undefined, inputValue)} />,
            data: { analysis: result.analysis, sources: result.sources }
        });
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>, presetQuery?: string) => {
    if (e) e.preventDefault();
    const query = presetQuery || inputValue;
    if (!query.trim() || isLoading) return;

    if (!presetQuery) {
        addMessage({ role: 'user', type: 'text', content: query });
    }
    setInputValue('');
    setIsLoading(true);

    const loadingId = addMessage({ role: 'agent', type: 'loading', content: null });

    const result = await startResearch(query);

    if ('error' in result) {
      updateMessage(loadingId, { type: 'error', content: result.error });
      toast({ title: "Planning Error", description: result.error, variant: 'destructive' });
      setIsLoading(false);
      return;
    }

    updateMessage(loadingId, {
      type: 'plan',
      content: (
        <PlanApproval
          plan={result.plan}
          onDecision={(decision) => handlePlanDecision(decision, result.plan)}
        />
      ),
      data: { plan: result.plan },
    });
    // Don't set isLoading to false here, as the flow continues in handlePlanDecision
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center gap-3 p-4 border-b bg-card shadow-sm">
        <DelveLogo />
        <h1 className="text-xl font-headline font-semibold text-foreground">Delve</h1>
      </header>
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="max-w-3xl mx-auto w-full space-y-6">
          {messages.map((msg, index) => (
            <ChatMessage key={msg.id || index} message={msg} />
          ))}
          {isLoading && messages[messages.length-1]?.type !== 'plan' && <ChatMessage message={{ id: 'temp-loading', role: 'agent', type: 'loading', content: null }} />}
        </div>
      </ScrollArea>
      <footer className="p-4 bg-card border-t">
        <div className="max-w-3xl mx-auto w-full">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Ask a research question..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 text-base"
            />
            <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowUp className="h-5 w-5" />
              )}
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
}

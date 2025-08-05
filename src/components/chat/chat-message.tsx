'use client';
import { Bot, User, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Message } from '@/lib/types';
import PlanApproval from './plan-approval';
import ExecutionLog from './execution-log';
import ResultsDisplay from './results-display';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const { role, content, type, data } = message;
  const isAgent = role === 'agent';

  const renderContent = () => {
    switch (type) {
      case 'loading':
        return (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{content || 'Thinking...'}</span>
          </div>
        );
      case 'error':
        return <p className="text-destructive-foreground">{content}</p>;
      case 'plan':
        return <PlanApproval plan={data.plan} onDecision={data.onDecision} decisionMade={data.decisionMade} />;
      case 'logs':
        return <ExecutionLog logs={data.logs} />;
      case 'result':
        return <ResultsDisplay analysis={data.analysis} sources={data.sources} onRegenerate={data.onRegenerate} />;
      case 'text':
      default:
        if (typeof content === 'string') {
          return <ReactMarkdown className="prose prose-sm max-w-none dark:prose-invert prose-p:whitespace-pre-wrap">{content}</ReactMarkdown>;
        }
        return content;
    }
  };

  return (
    <div className={cn('flex items-start gap-3', isAgent ? 'justify-start' : 'justify-end')}>
      {isAgent && (
        <Avatar className="w-8 h-8 border">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Bot className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      )}
      <div className={cn('max-w-[80%]')}>
        <Card
          className={cn(
            'rounded-2xl',
            isAgent ? 'bg-card rounded-tl-none' : 'bg-primary text-primary-foreground rounded-tr-none',
            type === 'error' && 'bg-destructive'
          )}
        >
          <CardContent className="p-3 text-base">{renderContent()}</CardContent>
        </Card>
      </div>
      {!isAgent && (
        <Avatar className="w-8 h-8 border">
          <AvatarFallback>
            <User className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

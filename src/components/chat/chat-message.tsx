'use client';
import { Bot, User, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Message } from '@/lib/types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const { role, content, type } = message;
  const isAgent = role === 'agent';

  const renderContent = () => {
    if (type === 'loading') {
      return (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Thinking...</span>
        </div>
      );
    }
    if(type === 'error'){
        return <p className="text-destructive-foreground">{content}</p>
    }
    if (typeof content === 'string') {
      return <p className="whitespace-pre-wrap">{content}</p>;
    }
    return content;
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

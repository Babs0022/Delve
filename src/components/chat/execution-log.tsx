'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

interface ExecutionLogProps {
  logs: string[];
}

export default function ExecutionLog({ logs }: ExecutionLogProps) {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  
  useEffect(() => {
    if (logs && logs.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedLogs(prev => [...prev, logs[i]]);
        i++;
        if (i >= logs.length) {
          clearInterval(interval);
        }
      }, 500); // simulate streaming
      return () => clearInterval(interval);
    }
  }, [logs]);

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg font-headline">Execution Log:</h3>
      <ul className="space-y-2 text-sm">
        {displayedLogs.map((log, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-muted-foreground">{log}</span>
          </li>
        ))}
        {displayedLogs.length < logs.length && (
            <li className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-muted-foreground">Processing...</span>
            </li>
        )}
      </ul>
    </div>
  );
}

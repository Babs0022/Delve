'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useTypewriter } from '@/hooks/use-typewriter';
import { Copy, RefreshCw, ThumbsDown, ThumbsUp, ExternalLink } from 'lucide-react';
import { Separator } from '../ui/separator';

interface ResultsDisplayProps {
  analysis: string;
  sources: string[];
  onRegenerate: () => void;
}

export default function ResultsDisplay({ analysis, sources, onRegenerate }: ResultsDisplayProps) {
  const { toast } = useToast();
  const displayedAnalysis = useTypewriter(analysis, 10);

  const handleCopy = () => {
    navigator.clipboard.writeText(analysis);
    toast({ title: 'Copied to clipboard!' });
  };

  const handleFeedback = (feedback: 'good' | 'bad') => {
    toast({ title: `Feedback submitted. Thank you!` });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg font-headline">Synthesized Analysis:</h3>
      <p className="whitespace-pre-wrap leading-relaxed">{displayedAnalysis}</p>
      
      {sources.length > 0 && (
        <>
        <Separator className="my-4"/>
        <div className="space-y-2">
          <h4 className="font-semibold font-headline">Sources:</h4>
          <ul className="space-y-1 list-disc list-inside">
            {sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {source} <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        </>
      )}

      <div className="flex items-center gap-2 pt-4">
        <Button variant="outline" size="icon" onClick={() => handleFeedback('good')}>
          <ThumbsUp className="h-4 w-4" />
          <span className="sr-only">Good response</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => handleFeedback('bad')}>
          <ThumbsDown className="h-4 w-4" />
          <span className="sr-only">Bad response</span>
        </Button>
        <div className="flex-grow" />
        <Button variant="outline" size="icon" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy</span>
        </Button>
        <Button variant="outline" size="icon" onClick={onRegenerate}>
          <RefreshCw className="h-4 w-4" />
          <span className="sr-only">Regenerate</span>
        </Button>
      </div>
    </div>
  );
}

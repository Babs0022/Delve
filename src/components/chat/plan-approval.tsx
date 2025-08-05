'use client';

import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PlanApprovalProps {
  plan: string[];
  onDecision: (decision: 'approve' | 'deny') => void;
}

export default function PlanApproval({ plan, onDecision }: PlanApprovalProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg font-headline">Generated Research Plan:</h3>
      <ol className="list-decimal list-inside space-y-2">
        {plan.map((step, index) => (
          <li key={index} className="p-2 bg-background/50 rounded-md">
            {step}
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-end gap-2 pt-2">
        <Button variant="outline" size="sm" onClick={() => onDecision('deny')}>
          <X className="mr-2 h-4 w-4" /> Deny
        </Button>
        <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => onDecision('approve')}>
          <Check className="mr-2 h-4 w-4" /> Approve
        </Button>
      </div>
    </div>
  );
}

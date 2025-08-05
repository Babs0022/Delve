'use client';

import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import type { ResearchPlan } from '@/lib/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface PlanApprovalProps {
  plan: ResearchPlan;
  onDecision: (decision: 'approve' | 'deny') => void;
  decisionMade?: boolean;
}

export default function PlanApproval({ plan, onDecision, decisionMade = false }: PlanApprovalProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg font-headline">{plan.title}</h3>
      <p className="text-sm text-muted-foreground">Please review the generated research plan below. Approve to continue, or deny to start over.</p>
      
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {plan.steps.map((step, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base font-semibold hover:no-underline">
              Step {step.step_number}: {step.step_title}
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pl-2">
              <p className="text-muted-foreground">{step.step_description}</p>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Expected Output</p>
                <p className="text-sm">{step.expected_output}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {!decisionMade && (
        <div className="flex items-center justify-end gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={() => onDecision('deny')}>
            <X className="mr-2 h-4 w-4" /> Deny
          </Button>
          <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => onDecision('approve')}>
            <Check className="mr-2 h-4 w-4" /> Approve
          </Button>
        </div>
      )}
    </div>
  );
}

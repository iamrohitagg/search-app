import { Card } from './ui/card';
import { MessageSquare } from 'lucide-react';

interface ResponseCardProps {
  response: string;
}

export function ResponseCard({ response }: ResponseCardProps) {
  if (!response) return null;

  return (
    <Card className="p-6 shadow-lg border-primary/10 bg-gradient-to-b from-card to-card/50">
      <div className="flex items-center gap-2 mb-4 text-primary">
        <MessageSquare className="h-5 w-5" />
        <h3 className="font-semibold">AI Response</h3>
      </div>
      <div className="prose prose-sm max-w-none">
        <p className="text-base leading-relaxed whitespace-pre-wrap">{response}</p>
      </div>
    </Card>
  );
}
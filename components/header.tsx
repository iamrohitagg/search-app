import { BrainCircuit } from 'lucide-react';

export function Header() {
  return (
    <header className="py-12 text-center">
      <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
        <BrainCircuit className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Tech AI Assistant
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Get expert technical guidance on programming, architecture, and development best practices
      </p>
    </header>
  );
}
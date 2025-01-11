'use client';

import { Search, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface SearchFormProps {
  query: string;
  isLoading: boolean;
  onQueryChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SearchForm({ query, isLoading, onQueryChange, onSubmit }: SearchFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Ask anything..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pr-4 h-12 text-base"
        />
      </div>
      <Button type="submit" disabled={isLoading} size="lg" className="px-6">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
        ) : (
          <Search className="h-4 w-4 mr-2" />
        )}
        Search
      </Button>
    </form>
  );
}
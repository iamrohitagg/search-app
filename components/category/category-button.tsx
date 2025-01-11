'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

interface CategoryButtonProps {
  value: string;
}

export function CategoryButton({ value }: CategoryButtonProps) {
  return (
    <Button
      variant="outline"
      role="combobox"
      className="w-full justify-between h-12 text-base"
    >
      {value || "Select category (optional)"}
      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );
}
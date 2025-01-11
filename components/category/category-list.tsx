'use client';

import { Check } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../ui/command';
import { TECH_CATEGORIES, type TechCategory } from '../../lib/constants';

interface CategoryListProps {
  value: string;
  onValueChange: (value: TechCategory | '') => void;
}

export function CategoryList({ value, onValueChange }: CategoryListProps) {
  return (
    <Command>
      <CommandInput placeholder="Search categories..." />
      <CommandEmpty>No category found.</CommandEmpty>
      <CommandGroup heading="Categories">
        <CommandItem
          value="all"
          onSelect={() => onValueChange('')}
          className="justify-between cursor-pointer"
        >
          All Categories
          {value === '' && <Check className="h-4 w-4" />}
        </CommandItem>
        {TECH_CATEGORIES.map((category) => (
          <CommandItem
            key={category}
            value={category.toLowerCase()}
            onSelect={() => onValueChange(category)}
            className="justify-between cursor-pointer"
          >
            {category}
            {value === category && <Check className="h-4 w-4" />}
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  );
}
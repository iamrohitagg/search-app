'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { CategoryButton } from './category/category-button';
import { CategoryList } from './category/category-list';
import type { TechCategory } from '../lib/constants';

interface CategorySelectProps {
  value: string;
  onValueChange: (value: TechCategory | '') => void;
}

export function CategorySelect({ value, onValueChange }: CategorySelectProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <CategoryButton value={value} />
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <CategoryList value={value} onValueChange={onValueChange} />
      </PopoverContent>
    </Popover>
  );
}
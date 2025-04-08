'use client';

import * as React from 'react';
import { Computer, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { themes } from '@/lib/themes';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-muted">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(theme => (
          <DropdownMenuItem
            onClick={() => setTheme(theme)}
            className="cursor-pointer flex gap-2 items-center"
            key={theme}
          >
            {theme.includes('light') ? <Sun /> : <Moon />}
            {theme}
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          onClick={() => setTheme(() => 'system')}
          className="cursor-pointer flex gap-2 items-center"
        >
          <Computer />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

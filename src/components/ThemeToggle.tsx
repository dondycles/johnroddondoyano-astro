import { Check } from 'lucide-react';
import * as React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaRegMoon, FaRegSun } from 'react-icons/fa6';
import { Button } from './ui/button';

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<'theme-light' | 'dark' | 'system'>('system');

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'theme-light');
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant={'ghost'}>
          <FaRegSun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <FaRegMoon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={12}>
        <DropdownMenuItem onClick={() => setThemeState('theme-light')}>
          <span className="flex-1">Light</span>
          {theme === 'theme-light' ? <Check /> : null}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('dark')}>
          <span className="flex-1">Dark</span>
          {theme === 'dark' ? <Check /> : null}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('system')}>
          <span className="flex-1">System</span>
          {theme === 'system' ? <Check /> : null}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

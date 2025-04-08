'use client';

import * as React from 'react';
import { DoorOpen, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logOutAction } from '@/actions/auth';
import { toasts } from '@/lib/toasts';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export function UserMenu() {
  const handleLogout = async () => {
    const { errorMessage } = await logOutAction();

    if (errorMessage) {
      console.log(errorMessage);
      toasts.logoutError();
      return;
    }

    redirect('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-muted">
          <User className="h-[1.2rem] w-[1.2rem] scale-100" />
          <span className="sr-only">User Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/profile" className="flex gap-2 items-center">
            <User />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <DoorOpen />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  extraClasses?: string;
};

function Container({ children, extraClasses }: Props) {
  return (
    <div className={cn('max-w-6xl mx-auto', extraClasses)}>{children}</div>
  );
}

export default Container;

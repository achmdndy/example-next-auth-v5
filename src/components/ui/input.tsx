import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'aurora-flex aurora-h-10 aurora-w-full aurora-rounded-md aurora-border aurora-border-input aurora-bg-background aurora-px-3 aurora-py-2 aurora-text-sm aurora-ring-offset-background file:aurora-border-0 file:aurora-bg-transparent file:aurora-text-sm file:aurora-font-medium placeholder:aurora-text-muted-foreground focus-visible:aurora-outline-none focus-visible:aurora-ring-2 focus-visible:aurora-ring-ring focus-visible:aurora-ring-offset-2 disabled:aurora-cursor-not-allowed disabled:aurora-opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };

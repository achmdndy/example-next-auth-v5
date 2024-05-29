import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'aurora-inline-flex aurora-items-center aurora-rounded-full aurora-border aurora-px-2.5 aurora-py-0.5 aurora-text-xs aurora-font-semibold aurora-transition-colors focus:aurora-outline-none focus:aurora-ring-2 focus:aurora-ring-ring focus:aurora-ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'aurora-border-transparent aurora-bg-primary aurora-text-primary-foreground hover:aurora-bg-primary/80',
        secondary:
          'aurora-border-transparent aurora-bg-secondary aurora-text-secondary-foreground hover:aurora-bg-secondary/80',
        destructive:
          'aurora-border-transparent aurora-bg-destructive aurora-text-destructive-foreground hover:aurora-bg-destructive/80',
        outline: 'aurora-text-foreground',
        success:
          'aurora-border-transparent aurora-bg-emerald-500 aurora-text-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

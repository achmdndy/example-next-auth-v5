import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'aurora-inline-flex aurora-items-center aurora-justify-center aurora-whitespace-nowrap aurora-rounded-md aurora-text-sm aurora-font-medium aurora-ring-offset-background aurora-transition-colors focus-visible:aurora-outline-none focus-visible:aurora-ring-2 focus-visible:aurora-ring-ring focus-visible:aurora-ring-offset-2 disabled:aurora-pointer-events-none disabled:aurora-opacity-50',
  {
    variants: {
      variant: {
        default:
          'aurora-bg-primary aurora-text-primary-foreground hover:aurora-bg-primary/90',
        destructive:
          'aurora-bg-destructive aurora-text-destructive-foreground hover:aurora-bg-destructive/90',
        outline:
          'aurora-border aurora-border-input aurora-bg-background hover:aurora-bg-accent hover:aurora-text-accent-foreground',
        secondary:
          'aurora-bg-secondary aurora-text-secondary-foreground hover:aurora-bg-secondary/80',
        ghost: 'hover:aurora-bg-accent hover:aurora-text-accent-foreground',
        link: 'aurora-text-primary aurora-underline-offset-4 hover:aurora-underline',
      },
      size: {
        default: 'aurora-h-10 aurora-px-4 aurora-py-2',
        sm: 'aurora-h-9 aurora-rounded-md aurora-px-3',
        lg: 'aurora-h-11 aurora-rounded-md aurora-px-8',
        icon: 'aurora-h-10 aurora-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

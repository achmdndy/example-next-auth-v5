'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'aurora-flex aurora-cursor-default aurora-select-none aurora-items-center aurora-rounded-sm aurora-px-2 aurora-py-1.5 aurora-text-sm aurora-outline-none focus:aurora-bg-accent data-[state=open]:aurora-bg-accent',
      inset && 'aurora-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="aurora-ml-auto aurora-h-4 aurora-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'aurora-z-50 aurora-min-w-[8rem] aurora-overflow-hidden aurora-rounded-md aurora-border aurora-bg-popover aurora-p-1 aurora-text-popover-foreground aurora-shadow-lg data-[state=open]:aurora-animate-in data-[state=closed]:aurora-animate-out data-[state=closed]:aurora-fade-out-0 data-[state=open]:aurora-fade-in-0 data-[state=closed]:aurora-zoom-out-95 data-[state=open]:aurora-zoom-in-95 data-[side=bottom]:aurora-slide-in-from-top-2 data-[side=left]:aurora-slide-in-from-right-2 data-[side=right]:aurora-slide-in-from-left-2 data-[side=top]:aurora-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'aurora-z-50 aurora-min-w-[8rem] aurora-overflow-hidden aurora-rounded-md aurora-border aurora-bg-popover aurora-p-1 aurora-text-popover-foreground aurora-shadow-md data-[state=open]:aurora-animate-in data-[state=closed]:aurora-animate-out data-[state=closed]:aurora-fade-out-0 data-[state=open]:aurora-fade-in-0 data-[state=closed]:aurora-zoom-out-95 data-[state=open]:aurora-zoom-in-95 data-[side=bottom]:aurora-slide-in-from-top-2 data-[side=left]:aurora-slide-in-from-right-2 data-[side=right]:aurora-slide-in-from-left-2 data-[side=top]:aurora-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'aurora-relative aurora-flex aurora-cursor-default aurora-select-none aurora-items-center aurora-rounded-sm aurora-px-2 aurora-py-1.5 aurora-text-sm aurora-outline-none aurora-transition-colors focus:aurora-bg-accent focus:aurora-text-accent-foreground data-[disabled]:aurora-pointer-events-none data-[disabled]:aurora-opacity-50',
      inset && 'aurora-pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'aurora-relative aurora-flex aurora-cursor-default aurora-select-none aurora-items-center aurora-rounded-sm aurora-py-1.5 aurora-pl-8 aurora-pr-2 aurora-text-sm aurora-outline-none aurora-transition-colors focus:aurora-bg-accent focus:aurora-text-accent-foreground data-[disabled]:aurora-pointer-events-none data-[disabled]:aurora-opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="aurora-absolute aurora-left-2 aurora-flex aurora-h-3.5 aurora-w-3.5 aurora-items-center aurora-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="aurora-h-4 aurora-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'aurora-relative aurora-flex aurora-cursor-default aurora-select-none aurora-items-center aurora-rounded-sm aurora-py-1.5 aurora-pl-8 aurora-pr-2 aurora-text-sm aurora-outline-none aurora-transition-colors focus:aurora-bg-accent focus:aurora-text-accent-foreground data-[disabled]:aurora-pointer-events-none data-[disabled]:aurora-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="aurora-absolute aurora-left-2 aurora-flex aurora-h-3.5 aurora-w-3.5 aurora-items-center aurora-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="aurora-h-2 aurora-w-2 aurora-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'aurora-px-2 aurora-py-1.5 aurora-text-sm aurora-font-semibold',
      inset && 'aurora-pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      'aurora--mx-1 aurora-my-1 aurora-h-px aurora-bg-muted',
      className,
    )}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'aurora-ml-auto aurora-text-xs aurora-tracking-widest aurora-opacity-60',
        className,
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

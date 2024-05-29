'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ComponentProps } from 'react';

type BackButtonProps = ComponentProps<typeof Button> & {
  href: string;
  label: string;
};

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      size="sm"
      className="aurora-font-normal aurora-w-full"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

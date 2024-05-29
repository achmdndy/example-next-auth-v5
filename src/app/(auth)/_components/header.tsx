import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { ComponentProps } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

type HeaderProps = ComponentProps<'div'> & {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="aurora-w-full aurora-flex aurora-flex-col aurora-gap-y-4 aurora-items-center aurora-justify-center">
      <h1 className={cn('aurora-text-3xl aurora-font-bold', poppins.className)}>
        Auth
      </h1>
      <p className="aurora-text-muted-foreground aurora-text-sm">{label}</p>
    </div>
  );
};

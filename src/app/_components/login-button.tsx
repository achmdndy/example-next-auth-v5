'use client';

import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

type LoginButtonProps = ComponentProps<'span'> & {
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
};

export const LoginButton = ({
  mode = 'redirect',
  // asChild,
  children,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/login');
  };

  if (mode === 'modal') {
    return <span>Modal</span>;
  }

  return (
    <span onClick={onClick} className="aurora-cursor-pointer">
      {children}
    </span>
  );
};

'use client';

import { logout } from '@/actions/logout';
import { ComponentProps } from 'react';

type LogoutButtonProps = ComponentProps<'span'>;

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="aurora-cursor-pointer">
      {children}
    </span>
  );
};

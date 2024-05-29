'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from './user-button';

const menus = [
  { label: 'Server', href: '/server' },
  { label: 'Client', href: '/client' },
  { label: 'Admin', href: '/admin' },
  { label: 'Setttings', href: '/settings' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="aurora-flex aurora-items-center aurora-justify-between aurora-p-4 aurora-rounded-xl aurora-w-[600px] aurora-border">
      <div className="aurora-flex aurora-gap-x-2">
        {menus.map(({ label, href }) => (
          <Button
            key={href}
            variant={pathname === href ? 'default' : 'outline'}
            asChild
          >
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </div>
      <UserButton />
    </nav>
  );
};

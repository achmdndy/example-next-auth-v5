'use client';

import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSocial } from '../_hooks/use-social';

export const Social = () => {
  const { onClick } = useSocial();

  return (
    <div className="aurora-flex aurora-items-center aurora-w-full aurora-gap-x-2">
      <Button
        size="lg"
        variant="outline"
        className="aurora-w-full"
        onClick={() => onClick('google')}
      >
        <FcGoogle className="aurora-w-5 aurora-h-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="aurora-w-full"
        onClick={() => onClick('github')}
      >
        <FaGithub className="aurora-w-5 aurora-h-5" />
      </Button>
    </div>
  );
};

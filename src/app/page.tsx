import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { LoginButton } from './_components/login-button';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

export default function Home() {
  return (
    <main className="aurora-flex aurora-h-full aurora-flex-col aurora-items-center aurora-justify-center aurora-bg-sky-500">
      <div className="aurora-space-y-6 aurora-text-center">
        <h1
          className={cn(
            'aurora-text-6xl aurora-font-bold aurora-text-white aurora-drop-shadow-md',
            poppins.className,
          )}
        >
          Auth
        </h1>
        <p className="aurora-text-white aurora-text-lg">
          A simple authentication service
        </p>

        <div className="">
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

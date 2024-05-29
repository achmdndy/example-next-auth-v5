'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ComponentProps } from 'react';
import { BackButton } from './back-button';
import { Header } from './header';
import { Social } from './social';

type CardWrapperProps = ComponentProps<typeof Card> & {
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="aurora-w-[400px] aurora-shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

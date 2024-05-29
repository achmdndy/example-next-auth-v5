import { ComponentProps } from 'react';
import { ExtendedUser } from '../../next-auth';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';

type UserInfoProps = ComponentProps<typeof Card> & {
  user?: ExtendedUser;
  label: string;
};

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="aurora-w-[600px]">
      <CardHeader>
        <p className="aurora-text-2xl aurora-font-semibold aurora-text-center">
          {label}
        </p>
      </CardHeader>

      <CardContent className="aurora-space-y-4">
        <div className="aurora-flex aurora-flex-row aurora-items-center aurora-justify-between aurora-rounded-lg aurora-border aurora-p-3">
          <p className="aurora-text-sm aurora-font-medium">ID</p>
          <p className="aurora-truncate aurora-text-xs aurora-max-w-[180px] aurora-font-mono aurora-p-1 aurora-bg-slate-100 aurora-rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="aurora-flex aurora-flex-row aurora-items-center aurora-justify-between aurora-rounded-lg aurora-border aurora-p-3">
          <p className="aurora-text-sm aurora-font-medium">Name</p>
          <p className="aurora-truncate aurora-text-xs aurora-max-w-[180px] aurora-font-mono aurora-p-1 aurora-bg-slate-100 aurora-rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="aurora-flex aurora-flex-row aurora-items-center aurora-justify-between aurora-rounded-lg aurora-border aurora-p-3">
          <p className="aurora-text-sm aurora-font-medium">Email</p>
          <p className="aurora-truncate aurora-text-xs aurora-max-w-[180px] aurora-font-mono aurora-p-1 aurora-bg-slate-100 aurora-rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="aurora-flex aurora-flex-row aurora-items-center aurora-justify-between aurora-rounded-lg aurora-border aurora-p-3">
          <p className="aurora-text-sm aurora-font-medium">Role</p>
          <p className="aurora-truncate aurora-text-xs aurora-max-w-[180px] aurora-font-mono aurora-p-1 aurora-bg-slate-100 aurora-rounded-md">
            {user?.role}
          </p>
        </div>
        <div className="aurora-flex aurora-flex-row aurora-items-center aurora-justify-between aurora-rounded-lg aurora-border aurora-p-3">
          <p className="aurora-text-sm aurora-font-medium">
            Two Factor Authentication
          </p>
          <Badge variant={user?.isTwoFactorEnabled ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

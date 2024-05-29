import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

type FormAlertProps = ComponentProps<'div'> & {
  type: 'success' | 'error';
  message?: string;
};

const alertType = {
  success: {
    className: 'aurora-bg-emerald-500/15 aurora-text-emerald-500',
    icon: <FaCheckCircle className="aurora-w-5 aurora-h-5" />,
  },
  error: {
    className: 'aurora-bg-destructive/15 aurora-text-destructive',
    icon: <FaExclamationTriangle className="aurora-w-5 aurora-h-5" />,
  },
};

export const FormAlert = ({ type, message }: FormAlertProps) => {
  if (!message) return null;

  return (
    <div
      className={cn(
        'aurora-p-3 aurora-rounded-md aurora-flex aurora-items-center aurora-gap-x-2 aurora-text-sm',
        alertType[type].className,
      )}
    >
      {alertType[type].icon}
      <p>{message}</p>
    </div>
  );
};

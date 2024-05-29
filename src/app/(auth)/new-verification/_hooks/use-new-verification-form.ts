import { newVerification } from '@/actions/new-verification';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const useNewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const onSubmit = useCallback(() => {
    if (success) return;

    if (!token) {
      setError('Missing token!');
      return;
    }

    newVerification(token)
      .then(data => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Something went wrong!');
      });
  }, [success, token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return { error, success };
};

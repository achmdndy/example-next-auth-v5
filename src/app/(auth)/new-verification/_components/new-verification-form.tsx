'use client';

import { FormAlert } from '@/components/form-alert';
import { BeatLoader } from 'react-spinners';
import { useNewVerificationForm } from '../_hooks/use-new-verification-form';

export const NewVerificationForm = () => {
  const { error, success } = useNewVerificationForm();

  return (
    <div className="aurora-flex aurora-items-center aurora-w-full aurora-justify-center">
      {!error && !error && <BeatLoader />}
      {(error || success) && (
        <FormAlert
          type={error ? 'error' : 'success'}
          message={error ? error : success}
        />
      )}
    </div>
  );
};

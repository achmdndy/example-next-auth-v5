import { CardWrapper } from '../_components/card-wrapper';
import { ResetPasswordForm } from './_components/reset-password-form';

export default function ResetPassword() {
  return (
    <CardWrapper
      headerLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <ResetPasswordForm />
    </CardWrapper>
  );
}

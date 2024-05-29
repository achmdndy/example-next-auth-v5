import { CardWrapper } from '../_components/card-wrapper';
import { ForgotPasswordForm } from './_components/forgot-password-form';

export default function ForgotPassword() {
  return (
    <CardWrapper
      headerLabel="Forgot your password!"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <ForgotPasswordForm />
    </CardWrapper>
  );
}

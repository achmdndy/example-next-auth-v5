import { CardWrapper } from '../_components/card-wrapper';
import { NewVerificationForm } from './_components/new-verification-form';

export default function NewVerification() {
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <NewVerificationForm />
    </CardWrapper>
  );
}

import { CardWrapper } from '../_components/card-wrapper';
import { RegisterForm } from './_components/register-form';

export default function Register() {
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocial
    >
      <RegisterForm />
    </CardWrapper>
  );
}

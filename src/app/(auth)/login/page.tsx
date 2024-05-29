import { CardWrapper } from '../_components/card-wrapper';
import { LoginForm } from './_components/login-form';

export default function Login() {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
}

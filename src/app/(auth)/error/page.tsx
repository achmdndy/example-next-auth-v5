import { FormAlert } from '@/components/form-alert';
import { CardWrapper } from '../_components/card-wrapper';

export default function Error() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <FormAlert type="error" message="Please try again" />
    </CardWrapper>
  );
}

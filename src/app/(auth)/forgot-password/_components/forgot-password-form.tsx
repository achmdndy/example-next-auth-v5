'use client';

import { FormAlert } from '@/components/form-alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForgotPasswordForm } from '../_hooks/use-forgot-password-form';

export const ForgotPasswordForm = () => {
  const { form, onSubmit, isPending, error, success } = useForgotPasswordForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="aurora-space-y-6">
        <div className="aurora-space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="jhon.doe@example.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {(error || success) && (
          <FormAlert
            type={error ? 'error' : 'success'}
            message={error ? error : success}
          />
        )}
        <Button disabled={isPending} type="submit" className="aurora-w-full">
          Send reset email
        </Button>
      </form>
    </Form>
  );
};

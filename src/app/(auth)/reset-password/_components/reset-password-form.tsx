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
import { useResetPasswordForm } from '../_hooks/use-reset-password-form';

export const ResetPasswordForm = () => {
  const { form, onSubmit, isPending, error, success } = useResetPasswordForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="aurora-space-y-6">
        <div className="aurora-space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="********"
                    type="password"
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
          Reset Password
        </Button>
      </form>
    </Form>
  );
};

'use server';

import { getPasswordResetTokenByToken } from '@/data/password-reset-token';
import { getUserByEmail } from '@/data/user';
import prismaDB from '@/lib/prismadb';
import { ResetPasswordSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>,
  token?: string | null,
) => {
  if (!token) return { error: 'Missing token!' };

  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields!' };

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) return { error: 'Invalid token!' };

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) return { error: 'Token has expired!' };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) return { error: 'Email does not exist!' };

  const hashPassword = await bcrypt.hash(password, 10);

  await prismaDB.user.update({
    where: { id: existingUser.id },
    data: { password: hashPassword },
  });

  await prismaDB.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Password updated!' };
};

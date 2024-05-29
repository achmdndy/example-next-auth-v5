import prismaDB from '@/lib/prismadb';

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prismaDB.passwordResetToken.findUnique({
      where: { token },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await prismaDB.passwordResetToken.findFirst({
      where: { email },
    });

    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

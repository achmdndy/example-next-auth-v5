import prismaDB from '@/lib/prismadb';

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation =
      await prismaDB.twoFactorConfirmation.findUnique({
        where: { userId },
      });

    return twoFactorConfirmation;
  } catch (error) {
    return null;
  }
};

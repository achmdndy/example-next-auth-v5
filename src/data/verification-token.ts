import prismaDB from '@/lib/prismadb';

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prismaDB.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prismaDB.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};
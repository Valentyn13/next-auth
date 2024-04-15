import { db } from "@/lib/db";

const getVerificationTokenByEmail = async (email: string) => {
  try {
    const user = await db.verificationToken.findFirst({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

const getVerificationTokenByToken = async (token: string) => {
  try {
    const user = await db.verificationToken.findUnique({ where: { token } });
    return user;
  } catch (error) {
    return null;
  }
};

export { getVerificationTokenByEmail, getVerificationTokenByToken };

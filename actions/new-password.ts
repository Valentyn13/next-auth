"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { NewPasswordShema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";

const newPassword = async (
  values: z.infer<typeof NewPasswordShema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing token" };
  }

  const validatedData = NewPasswordShema.safeParse(values);
  if (!validatedData.success) {
    return { error: "Invalid data" };
  }

  const { password } = validatedData.data;

  const existingToken = await getPasswordResetTokenByToken(token);
  console.log(existingToken);
  if (!existingToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "User not found with this email" };
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password reset successfully" };
};

export { newPassword };

"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

const reset = async (data: z.infer<typeof ResetSchema>) => {
  const validatedData = ResetSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Email is not valid" };
  }
  const { email } = validatedData.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "User not found with this email" };
  }
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent" };
};

export { reset };

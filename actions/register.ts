"use server"

import * as z from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegisterShema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import  {generateVerificationToken} from '@/lib/tokens'
import { sendVerificationEmail } from "@/lib/mail";
export const register =  async (values: z.infer<typeof RegisterShema>) => {

    const validatedFields = RegisterShema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid register fields'}
    }

    const {email, name, password} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: 'Email is already in use!'}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
    const verificationToken = await generateVerificationToken(email)
    // TODO: Send email confirmation token
    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: "Confirmation token sent" }

}
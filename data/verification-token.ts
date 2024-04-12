import { db } from "@/lib/db";


export const getVerificationTokenByEmail = async (email: string) => {
    try {
    const user = await db.verificationToken.findFirst({ where: { email } });
    return user;   
    } catch (error) {
        return null
    }
}


export const getVerificationTokenByToken = async (token: string) => {
    try {
    const user = await db.verificationToken.findUnique({ where: { token } });
    return user;   
    } catch (error) {
        return null
    }
}
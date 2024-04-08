"use server"

import * as z from "zod";
import { RegisterShema } from "@/schemas";

export const register =  async (values: z.infer<typeof RegisterShema>) => {
    console.log(values)
    const validatedFields = RegisterShema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid register fields'}
    }

    return { success: "Success registered" }

}
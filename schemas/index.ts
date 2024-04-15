import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password must be at least 1 characters long",
  }),
  code: z.optional(z.string()),
});

const ResetSchema = z.object({
  email: z.string().email({
    message: "Valid email is required",
  }),
});

const NewPasswordShema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

const RegisterShema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, {
      message: "Name must be at least 1 characters long",
    }),
});

export { LoginSchema, RegisterShema, ResetSchema, NewPasswordShema };

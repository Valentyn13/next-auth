import { Resend } from "resend";

import { AppRoutes } from "@/constants/app-routes";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000${AppRoutes.VERIFICATION}?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
            <h1>Confirm your email</h1>
            <p>Click the link below to confirm your email</p>
            <a href="${confirmLink}">Verify email</a>
        `,
  });
};

const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000${AppRoutes.NEW_PASSWORD}?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Rest your password",
    html: `
            <h1>Confirm your email</h1>
            <p>Click on the link below to reset your password</p>
            <a href="${resetLink}">Verify email</a>
        `,
  });
};

const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA code",
    html: `
            <h1>2FA code</h1>
            <p>Your code: ${token}</p>
        `,
  });
};

export { sendPasswordResetEmail, sendTwoFactorEmail, sendVerificationEmail };

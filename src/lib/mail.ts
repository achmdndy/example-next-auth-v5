import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-verification?token=${token}`;

  await resend.emails.send({
    from: `${process.env.RESEND_NAME_FROM} <${process.env.RESEND_EMAIL_FROM}>`,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</P>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  await resend.emails.send({
    from: `${process.env.RESEND_NAME_FROM} <${process.env.RESEND_EMAIL_FROM}>`,
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to confirm email.</P>`,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: `${process.env.RESEND_NAME_FROM} <${process.env.RESEND_EMAIL_FROM}>`,
    to: email,
    subject: '2FA Code',
    html: `<p>Your 2FA code: ${token}</P>`,
  });
};

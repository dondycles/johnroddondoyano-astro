import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const talkFormSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
  recaptchaToken: z.string().nonempty(),
});
const resend = new Resend(import.meta.env.RESEND_API_KEY);
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = import.meta.env.PUBLIC_RECAPTCHA_SECRET_KEY;

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = await res.json();
  return data.success && data.score >= 0.5;
}
export const server = {
  sendTalk: defineAction({
    accept: 'json',
    input: talkFormSchema,
    handler: async (values) => {
      const isHuman = await verifyRecaptcha(values.recaptchaToken);
      if (!isHuman)
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'reCAPTCHA verification failed. Please try again.',
        });

      const { data, error } = await resend.emails.send({
        from: 'Talk To John Rod Dondoyano <talk@johnroddondoyano.com>',
        to: 'johnroddondoyano8@gmail.com',
        subject: values.subject,
        html: `<p style="white-space: pre-wrap;">${values.message}</p>`,
        replyTo: values.email,
        text: values.message,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }
      return data;
    },
  }),
};

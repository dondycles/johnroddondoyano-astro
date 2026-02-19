import './chunks/virtual_CPOVl8DE.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_DBqYz54Q.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_0eGwKvAZ.mjs';

const talkFormSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
  recaptchaToken: z.string().nonempty()
});
const resend = new Resend("re_3s55jXPt_39An8dozwMjLfznHXGNJ57LS");
async function verifyRecaptcha(token) {
  const secret = "6Ldgi4srAAAAANCl_Z-LxRIo1psam0jne6fMtHlh";
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token
    })
  });
  const data = await res.json();
  return data.success && data.score >= 0.5;
}
const server = {
  sendTalk: defineAction({
    accept: "json",
    input: talkFormSchema,
    handler: async (values) => {
      const isHuman = await verifyRecaptcha(values.recaptchaToken);
      if (!isHuman)
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "reCAPTCHA verification failed. Please try again."
        });
      const { data, error } = await resend.emails.send({
        from: "Talk To John Rod Dondoyano <talk@johnroddondoyano.com>",
        to: "johnroddondoyano8@gmail.com",
        subject: values.subject,
        html: `<p style="white-space: pre-wrap;">${values.message}</p>`,
        replyTo: values.email,
        text: values.message
      });
      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message
        });
      }
      return data;
    }
  })
};

export { server };

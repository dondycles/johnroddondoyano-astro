import { zodResolver } from '@hookform/resolvers/zod';
import { actions } from 'astro:actions';
import { Loader2, Send } from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
export const talkFormSchema = z.object({
  email: z.email('Please input a valid email').nonempty('Email cannot be empty'),
  name: z.string().nonempty('Name cannot be empty'),
  subject: z.string().nonempty('Subject cannot be empty'),
  message: z.string().nonempty('Message cannot be empty'),
});

export default function TalkForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof talkFormSchema>>({
    resolver: zodResolver(talkFormSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
      subject: '',
    },
  });
  const handleVerify = async () => {
    if (!executeRecaptcha) return null;
    const token = await executeRecaptcha('submit_form');
    return token;
  };
  async function handleSubmitForm(values: z.infer<typeof talkFormSchema>) {
    toast.loading('Submitting...', { id: 'talk-form' });

    const token = await handleVerify();
    if (!token) {
      toast.dismiss('talk-form');
      toast.error('reCAPTCHA failed. Please try again.');
      return;
    }

    const res = await actions.sendTalk({ ...values, recaptchaToken: token });
    toast.dismiss('talk-form');
    if (res.error) return toast.error(res.error.message);
    form.reset();
    toast.success('Submitted!');
  }
  return (
    <div className="bg-input/10 space-y-8 rounded-md p-4">
      <h2>Talk To Me</h2>
      <p>Any inquiries? Send it to me by filling up the form below.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{' '}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g. 'Cannot Buy Piano Sheet', 'Website Quotation'"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{' '}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Message" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Sending...' : 'Send'}
            {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          </Button>
        </form>
      </Form>
    </div>
  );
}

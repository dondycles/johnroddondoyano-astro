import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import TalkForm from './TalkForm';

export default function FormWithRecaptcha() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_SECRET_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <TalkForm />
    </GoogleReCaptchaProvider>
  );
}

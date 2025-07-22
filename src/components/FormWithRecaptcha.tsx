import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import TalkForm from './TalkForm';

export default function FormWithRecaptcha() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RECAPTCHA_SECRET_KEY as string}
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

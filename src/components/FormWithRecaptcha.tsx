import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import TalkForm from './TalkForm';

export default function FormWithRecaptcha() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfXDYorAAAAAJYQ9xyz1hXFS-Ijvl39oqI-GScP"
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

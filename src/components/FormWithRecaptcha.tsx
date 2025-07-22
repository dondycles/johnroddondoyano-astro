import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import TalkForm from './TalkForm';

export default function FormWithRecaptcha() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeeQosrAAAAADJ1PO5R5sFM0bKiA2kcEdYonK4z"
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

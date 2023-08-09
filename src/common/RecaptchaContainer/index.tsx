import { RECAPTCHA_SITE_KEY } from '@/functions/environmentVariables';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaContainer = ({
  onChange,
  error,
  showError = false,
  containerClass,
}: {
  onChange: (token: string | null) => void;
  error?: string;
  showError?: boolean;
  containerClass?: string;
}) => {
  return (
    <div className={containerClass}>
      <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY!} onChange={onChange} />
      {showError && (
        <div
          style={{
            color: '#EE1D52',
            marginTop: 5,
            fontSize: ' 0.75rem',
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default RecaptchaContainer;

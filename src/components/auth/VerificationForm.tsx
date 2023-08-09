'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import { getCatchMessage } from '@/functions/stringManipulations';
import React, { useState } from 'react';

const VerificationForm = ({ email }: { email: string }) => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(false);

  const resendVerification = async () => {
    try {
      setLoading(true);
      await appAxios.post('/auth/resend-email-link', {
        email: decodeURIComponent(email),
      });

      setMessageType('success');
      setMessage('Email verification link resent');
    } catch (error) {
      setMessageType('error');
      setMessage(getCatchMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className='!max-w-full !w-[400px]'
        onClick={resendVerification}
        loading={loading}
      >
        Resend verification email
      </Button>
      {message && (
        <p
          className='mt-3 text-lg'
          style={{
            color: messageType === 'success' ? '#03781D' : '#EB4335',
          }}
        >
          {message}
        </p>
      )}
    </>
  );
};

export default VerificationForm;

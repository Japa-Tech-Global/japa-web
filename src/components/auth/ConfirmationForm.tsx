'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import LoadingIndicator from '@/common/LoadingIndicator';
import { getCatchMessage } from '@/functions/stringManipulations';
import { openFeedback } from '@/store/features/feedback';
import { useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ConfirmationForm = ({ token }: { token: string }) => {
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [verifiedToken, setVerifiedToken] = useState('');

  const verifyEmail = async () => {
    try {
      setLoading(true);
      const response = await appAxios.post('/auth/ConfirmEmailByLink', {
        code: decodeURIComponent(token),
      });

      // Token is sent after verification
      setVerifiedToken(response.data?.tempToken);

      setMessageType('success');
      dispatch(
        openFeedback({
          type: 'success',
          actionText: 'Continue',
          message: 'Congratulations email verified',
        })
      );
    } catch (error) {
      setMessageType('error');
      dispatch(
        openFeedback({
          type: 'error',
          actionText: 'Try Again',
          message: getCatchMessage(error),
        })
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <LoadingIndicator text='Verifying your email. Please wait...' />
      ) : (
        <>
          <Button
            className='!max-w-full !w-[400px]'
            onClick={
              messageType === 'success'
                ? () => router.push('/security-questions/' + verifiedToken)
                : () => verifyEmail()
            }
            loading={loading}
          >
            {messageType === 'success' ? 'Proceed' : 'Retry Verification'}
          </Button>
        </>
      )}
    </>
  );
};

export default ConfirmationForm;

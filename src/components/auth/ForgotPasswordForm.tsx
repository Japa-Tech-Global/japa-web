'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/common/Button/Button';
import LabelInput from '@/common/LabelInput';
import { useRouter } from 'next/navigation';
import { appAxios } from '@/api/axios';
import { useAppDispatch } from '@/store/hooks';
import { openFeedback } from '@/store/features/feedback';

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      email: yup.string().required('Required'),
    }),
  });

  const submitValues = async () => {
    try {
      setLoading(true);
      await appAxios.post('/auth/ResetPasswordRequest', {
        email: formik.values.email,
      });

      formik.resetForm();

      dispatch(
        openFeedback({
          type: 'success',
          actionText: 'Continue',
          message: 'Reset link has been sent to your email',
        })
      );
    } catch (error: any) {
      setError(error?.response?.data?.message || 'Request unsuccessful');
      dispatch(
        openFeedback({
          type: 'error',
          actionText: 'Try Again',
          message: error?.response?.data?.message || 'Request unsuccessful',
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className='flex flex-col w-full md:max-w-[70%] mx-auto'
      onSubmit={formik.handleSubmit}
    >
      {error && <p className='my-5 text-center text-error'>{error}</p>}
      <LabelInput
        formik={formik}
        name='email'
        placeholder='Enter Email'
        required
        type='email'
      />

      <Button
        type='submit'
        loading={loading}
        disabled={Object.keys(formik.errors).length > 0}
        className='mt-[29px]'
      >
        Continue
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;

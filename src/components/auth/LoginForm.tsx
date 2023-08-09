'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import Button from '@/common/Button/Button';
import LabelInput from '@/common/LabelInput';
import RecaptchaContainer from '@/common/RecaptchaContainer';
import axios from 'axios';
import { appAxios } from '@/api/axios';
import { useAppDispatch } from '@/store/hooks';
import { openFeedback } from '@/store/features/feedback';
import { updateUser } from '@/store/features/user';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      recaptcha: '',
      verifiedRecaptcha: false,
      email: '',
      password: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      recaptcha: yup.string().required('Recaptcha is required'),
      email: yup.string().required('Required'),
      password: yup.string().required('Required'),
    }),
    enableReinitialize: true,
  });

  const submitValues = async () => {
    formik.setFieldTouched('recaptcha', true);
    try {
      setLoading(true);
      if (!formik.values.verifiedRecaptcha) {
        // Check if verification isn't done so duplicate check is avoided
        await axios.post('/api/recaptcha', {
          code: formik.values.recaptcha,
        });
        formik.setFieldValue('verifiedRecaptcha', true);
      }

      const response = await appAxios.post('/auth/login', {
        email: formik.values.email,
        password: formik.values.password,
      });
      dispatch(updateUser({ user: response.data }));

      router.push('/dashboard');
      formik.resetForm();
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
      {error && <p className='mb-5 text-center text-error'>{error}</p>}
      <LabelInput
        formik={formik}
        name='email'
        placeholder='Email Address'
        required
        type='email'
        className='mb-[43px]'
      />
      <LabelInput
        formik={formik}
        name='password'
        required
        type='password'
        placeholder='*********'
      />

      <Link href='/forgot-password' className='text-primary self-end text-xs mt-1'>
        Forgot Password?
      </Link>
      <RecaptchaContainer
        onChange={(value) => {
          formik.setFieldValue('recaptcha', value);
          if (!value) {
            formik.setFieldValue('verifiedRecaptcha', false);
          }
        }}
        showError={formik.touched.recaptcha && formik.errors.recaptcha ? true : false}
        error={formik.errors.recaptcha}
        containerClass='mb-[22px] w-full max-w-full overflow-auto flex items-center mt-[29px] flex-col'
      />
      <Button
        type='submit'
        loading={loading}
        disabled={Object.keys(formik.errors).length > 0}
        className='mt-[52px]'
      >
        Login
      </Button>
      <p className='mt-3'>
        Don’t have an AfriPie account yet?{' '}
        <Link href='/register' className='text-primary'>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;

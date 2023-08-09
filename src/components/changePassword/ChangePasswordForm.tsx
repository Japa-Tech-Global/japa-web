'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LabelInput from '@/common/LabelInput';
import Dropdown from '@/common/Dropdown/Dropdown';
import Button from '@/common/Button/Button';
import PasswordRules from '@/common/PasswordRules';
import { useAppDispatch } from '@/store/hooks';
import { appAxios } from '@/api/axios';
import { openFeedback } from '@/store/features/feedback';
import { getCatchMessage } from '@/functions/stringManipulations';

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      currentPassword: yup.string().required('Required'),
      newPassword: yup.string().required('Required'),
      confirmPassword: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('newPassword'), ''], 'Password does not match'),
    }),
  });

  const submitValues = async () => {
    try {
      setLoading(true);
      await appAxios.post('/auth/ChangePassword', {
        currentPassword: formik.values.currentPassword,
        newPassword: formik.values.newPassword,
        confirmNewPassword: formik.values.confirmPassword,
      });

      dispatch(
        openFeedback({
          type: 'success',
          actionText: 'Continue',
          message: 'Password Changed',
        })
      );

      formik.resetForm();
    } catch (error: any) {
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
  return (
    <div>
      <h1 className='font-bold text-2xl mb-10'>Change Password</h1>
      <form className='flex flex-col w-full mt-10' onSubmit={formik.handleSubmit}>
        <LabelInput
          formik={formik}
          name='currentPassword'
          label='Existing Password'
          required
          className='mb-6'
          type='password'
          placeholder='Enter Existing Password'
        />
        <LabelInput
          formik={formik}
          name='newPassword'
          label='New Password'
          required
          type='password'
          className='mb-3'
          placeholder='New Password'
        />
        <PasswordRules password={formik.values.newPassword} className='mb-6' />

        <LabelInput
          formik={formik}
          name='confirmPassword'
          label='Confirm Password'
          required
          type='password'
          className='mb-6'
          placeholder='Confirm Password'
        />
        <div className='mt-14 w-full flex justify-center '>
          <Button
            type='submit'
            className='!w-[474px] !max-w-full'
            loading={loading}
            disabled={Object.keys(formik.errors).length > 0}
          >
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;

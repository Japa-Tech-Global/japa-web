'use client';

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/common/Button/Button';
import LabelInput from '@/common/LabelInput';
import { useRouter } from 'next/navigation';
import PasswordRules from '@/common/PasswordRules';
import { openFeedback } from '@/store/features/feedback';
import { useAppDispatch } from '@/store/hooks';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { getCatchMessage } from '@/functions/stringManipulations';
import { SecurityQuestionType } from '@/types/data';
import YupPassword from 'yup-password';
YupPassword(yup); // extend yup

const ResetPasswordForm = ({ resetToken }: { resetToken: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [questions, setQuestions] = useState<SecurityQuestionType[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestions = async () => {
    try {
      setQuestionsLoading(true);
      const response = await appAxios.get('/auth/user-security-questions', {
        headers: {
          Authorization: 'Bearer ' + decodeURIComponent(resetToken),
        },
      });
      setQuestions(response.data);
    } catch (error: any) {
      if (
        error?.response?.data?.message &&
        error?.response?.data?.message === 'No security question found'
      ) {
        // In case user was registering and didn't add security questions
        router.push(`/security-questions/${resetToken}`);
        return dispatch(
          openFeedback({
            type: 'error',
            actionText: 'Continue',
            message: `${error?.response?.data?.message}. Add new security questions`,
          })
        );
      }
      dispatch(
        openFeedback({
          type: 'error',
          actionText: 'Try Again',
          message: getCatchMessage(error),
        })
      );
    } finally {
      setQuestionsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      question1ID: questions && questions.length ? questions[0].id : undefined,
      question1: questions && questions.length ? questions[0].item : '',
      answer1: '',
      question2ID: questions && questions.length ? questions[1].id : undefined,
      question2: questions && questions.length ? questions[1].item : '',
      answer2: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      question1: yup.string().required('Required'),
      answer1: yup.string().required('Required'),
      question2: yup.string().required('Required'),
      answer2: yup.string().required('Required'),
      password: yup.string().required('Required').min(8).minUppercase(1).minSymbols(1),
      confirmPassword: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('password'), ''], 'The password you entered does not match'),
    }),
    enableReinitialize: true,
  });

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitValues = async () => {
    try {
      setLoading(true);
      await appAxios.post(
        '/auth/ResetPassword',
        {
          password: formik.values.password,
          confirmPassword: formik.values.confirmPassword,
          securityAnswer: [
            {
              questionId: formik.values.question1ID,
              questionAnswer: formik.values.answer1,
            },
            {
              questionId: formik.values.question2ID,
              questionAnswer: formik.values.answer2,
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + decodeURIComponent(resetToken),
          },
        }
      );

      router.push('/login');
      formik.resetForm();

      dispatch(
        openFeedback({
          type: 'success',
          actionText: 'Continue to Login',
          message: 'Password reset successful',
        })
      );
    } catch (error: any) {
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
      className='flex flex-col w-full'
      onSubmit={formik.handleSubmit}
      autoComplete='off'
    >
      <LabelInput
        formik={formik}
        name='password'
        label='Enter new Password'
        required
        type='password'
        className='mb-4'
        placeholder='*********'
      />
      <PasswordRules password={formik.values.password} className='mb-4' />

      <LabelInput
        formik={formik}
        name='confirmPassword'
        label='Confirm new password'
        required
        type='password'
        className='mb-4'
        placeholder='*********'
      />
      {questionsLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <LabelInput
            formik={formik}
            name='question1'
            label='Question 1'
            className='mb-4'
            disabled
          />
          <LabelInput
            formik={formik}
            name='answer1'
            label='Answer'
            required
            className='mb-4'
          />
          <LabelInput
            formik={formik}
            name='question2'
            label='Question 2'
            className='mb-4'
            disabled
          />
          <LabelInput formik={formik} name='answer2' label='Answer' required />
        </>
      )}
      <Button
        type='submit'
        className='mt-[33px]'
        loading={loading}
        disabled={Object.keys(formik.errors).length > 0}
      >
        Reset Password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;

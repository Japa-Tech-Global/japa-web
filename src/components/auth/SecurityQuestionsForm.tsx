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
import { SecurityQuestionType } from '@/types/data';
import Dropdown from '@/common/Dropdown/Dropdown';

const SecurityQuestionsForm = ({ token }: { token: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [questions, setQuestions] = useState<SecurityQuestionType[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const getQuestions = async () => {
    try {
      setQuestionsLoading(true);
      const response = await appAxios.get('/auth/all-security-questions', {
        headers: {
          Authorization: 'Bearer ' + decodeURIComponent(token),
        },
      });
      setQuestions(response.data);
    } catch (error: any) {
      dispatch(
        openFeedback({
          type: 'error',
          actionText: 'Try Again',
          message: error?.response?.data?.message || 'Request unsuccessful',
        })
      );
    } finally {
      setQuestionsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      question1: undefined,
      answer1: '',
      question2: undefined,
      answer2: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      question1: yup.string().required('Required'),
      answer1: yup.string().required('Required'),
      question2: yup.string().required('Required'),
      answer2: yup.string().required('Required'),
    }),
  });

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitValues = async () => {
    try {
      setLoading(true);
      const response = await appAxios.post(
        '/auth/add-security-answer',
        {
          securityAnswer: [
            {
              questionId: formik.values.question1,
              questionAnswer: formik.values.answer1,
            },
            {
              questionId: formik.values.question2,
              questionAnswer: formik.values.answer2,
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );

      router.push('/login');
      formik.resetForm();

      dispatch(
        openFeedback({
          type: 'success',
          actionText: 'Continue to Login',
          message: 'Your security answers have been saved',
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
    <form className='flex flex-col w-full' onSubmit={formik.handleSubmit}>
      {questionsLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Dropdown
            values={
              questions.length > 0
                ? questions
                    .filter((question) => question.id !== formik.values.question2)
                    .map((question) => ({
                      label: question.item,
                      value: question.id,
                    }))
                : [{ label: '', value: '' }]
            }
            label='Question 1'
            name='question1'
            formik={formik}
            className='mb-5'
            placeholder='Select'
          />

          <LabelInput
            formik={formik}
            name='answer1'
            label='Answer'
            required
            className='mb-4'
            autoComplete='off'
          />
          <Dropdown
            values={
              questions.length > 0
                ? questions
                    .filter((question) => question.id !== formik.values.question1)
                    .map((question) => ({
                      label: question.item,
                      value: question.id,
                    }))
                : [{ label: '', value: '' }]
            }
            label='Question 2'
            name='question2'
            formik={formik}
            className='mb-5'
            placeholder='Select'
          />
          <LabelInput
            formik={formik}
            name='answer2'
            label='Answer'
            required
            autoComplete='off'
          />
        </>
      )}
      <Button
        type='submit'
        className='mt-[33px] !max-w-full !w-[400px] self-center'
        loading={loading}
        disabled={Object.keys(formik.errors).length > 0}
      >
        Continue
      </Button>
    </form>
  );
};

export default SecurityQuestionsForm;

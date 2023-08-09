'use client';

import LabelInput from '@/common/LabelInput';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/common/Button/Button';
import TextArea from '@/common/TextArea/TextArea';
import Link from 'next/link';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Enter a valid email').required('Email is required'),
      subject: yup.string().required('Subject is required'),
      message: yup.string().required('Message is required'),
    }),
  });

  const submitValues = async () => {
    alert('Request logged');
    console.log(formik.values);
    formik.resetForm();
  };

  return (
    <div className='flex items-start gap-10 justify-center flex-wrap p-primary pt-[100px] pb-[100px] combined-eclipse-bg'>
      <div className='flex-1 md:flex-[40%]'>
        <h2 className='font-medium text-3xl mb-2'>Contact information</h2>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur. Lacinia scelerisque aliquet habitant sed
          mauris dictumst morbi tempor ac.
        </p>
      </div>
      <form className='flex flex-col flex-[50%]' onSubmit={formik.handleSubmit}>
        <LabelInput formik={formik} name='name' label='Name' required className='mb-10' />
        <LabelInput
          formik={formik}
          name='email'
          label='Email'
          type='email'
          required
          className='mb-10'
        />
        <LabelInput
          formik={formik}
          name='subject'
          label='Subject'
          required
          className='mb-10'
        />
        <TextArea formik={formik} name='message' label='Message' required rows={5} />
        <p className='mt-[17px] mb-[31px]'>
          By submitting this message, you agree that you have read our{' '}
          <Link href='/privacy-policy' className='text-primary'>
            Privacy Policy
          </Link>
        </p>
        <Button type='submit' className='!w-[279px] !max-w-full'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;

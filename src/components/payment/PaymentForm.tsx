'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LabelInput from '@/common/LabelInput';
import Dropdown from '@/common/Dropdown/Dropdown';
import Button from '@/common/Button/Button';
import Checkbox from '@/common/Checkbox';
import InitiatePaymentModal from './InitiatePaymentModal';

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [initiateModal, setInitiateModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      accountName: '',
      routingNumber: '',
      accountType: '',
      confirmAccountNumber: '',
      accountNumber: '',
      bankName: '',
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      accountName: yup.string().required('Required'),
      routingNumber: yup.string().required('Required'),
      accountType: yup.string().required('Required'),
      confirmAccountNumber: yup.string().required('Required'),
      accountNumber: yup.string().required('Required'),
      bankName: yup.string().required('Required'),
    }),
  });

  const submitValues = async () => {
    try {
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className='text-2xl mb-12'>Make a Payment</h1>
      <div className='flex items-center gap-6 mb-[52px]'>
        <Button>Pay Existing</Button>
        <Button>Create New</Button>
      </div>
      <form className='flex flex-col w-full mt-10' onSubmit={formik.handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <LabelInput
            formik={formik}
            name='accountName'
            label='Name this Account'
            required
            className='mb-4'
            placeholder='Kofi'
          />
          <Dropdown
            values={[
              {
                label: 'Personal Checking',
                value: 'Personal Checking',
              },
              {
                label: 'Money Market',
                value: 'Money Market',
              },
            ]}
            label='Account Type'
            name='accountType'
            formik={formik}
            className='mb-4'
            required
            placeholder='Select'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <LabelInput
            formik={formik}
            name='routingNumber'
            label='Bank Routing or ABA Number'
            required
            className='mb-4'
          />
          <LabelInput
            formik={formik}
            name='bankName'
            label='Bank Name'
            required
            className='mb-4'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <LabelInput
            formik={formik}
            name='accountNumber'
            label='Mobile Number'
            required
            className='mb-4'
          />
          <LabelInput
            formik={formik}
            name='confirmAccountNumber'
            label='Account Number'
            required
            className='mb-4'
          />
        </div>

        <div className='mt-14 w-full flex justify-center items-center flex-wrap gap-10'>
          <Button
            // type='submit'
            className='!w-[253px] !max-w-full'
            loading={loading}
            // disabled={Object.keys(formik.errors).length > 0}
            onClick={() => setInitiateModal(true)}
          >
            Continue
          </Button>
        </div>
      </form>
      <InitiatePaymentModal
        open={initiateModal}
        onClose={() => setInitiateModal(false)}
      />
    </div>
  );
};

export default PaymentForm;

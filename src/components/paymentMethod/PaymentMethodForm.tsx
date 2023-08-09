'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LabelInput from '@/common/LabelInput';
import Dropdown from '@/common/Dropdown/Dropdown';
import Button from '@/common/Button/Button';
import Checkbox from '@/common/Checkbox';
import { useAppDispatch } from '@/store/hooks';
import { appAxios } from '@/api/axios';
import { useRouter } from 'next/navigation';
import { openFeedback } from '@/store/features/feedback';
import { getCatchMessage } from '@/functions/stringManipulations';

const PaymentMethodForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

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
      await appAxios.post('/app/add-payment-method', {
        accountName: formik.values.accountName,
        bankRoutingABANumber: formik.values.routingNumber,
        accountNumber: formik.values.accountNumber,
        confirmAccountNumber: formik.values.confirmAccountNumber,
        bankName: formik.values.bankName,
        accountType: formik.values.accountType,
      });
      dispatch(
        openFeedback({
          type: 'success',
          message: 'Payment method added',
        })
      );
      router.push('/payment-method');
      formik.resetForm();
    } catch (error) {
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
      <h1 className='font-bold text-2xl mb-10'>My Payment Method</h1>
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
        <div className='flex flex-col gap-3'>
          <p className='text-[#8000D7] text-[13px]'>* Required information</p>
          <Checkbox
            id='authorization'
            styledLabel={
              <div className='ml-[5px]'>
                I have signed authorization from my customer or will read the
                authorization <span className='text-primary'>script</span>.
              </div>
            }
          />
        </div>

        <div className='mt-14 w-full flex justify-center items-center flex-wrap gap-10'>
          <Button
            type='submit'
            className='!w-[253px] !max-w-full'
            loading={loading}
            disabled={Object.keys(formik.errors).length > 0}
          >
            Save
          </Button>
          <Button
            className='!w-[253px] !max-w-full !bg-[#B7B7B7] hover:!bg-[#666666]'
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethodForm;

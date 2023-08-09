'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LabelInput from '@/common/LabelInput';
import Dropdown from '@/common/Dropdown/Dropdown';
import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import { useAppDispatch } from '@/store/hooks';
import { appAxios } from '@/api/axios';
import { openFeedback } from '@/store/features/feedback';
import { getCatchMessage } from '@/functions/stringManipulations';
import { PaymentMethodType } from '@/types/data';

const EditPaymentForm = ({
  open,
  onClose,
  refetch,
  selected,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
  selected: PaymentMethodType | undefined;
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      accountName: selected?.accountName,
      routingNumber: selected?.bankRoutingABANumber,
      accountType: selected?.accountType,
      confirmAccountNumber: selected?.confirmAccountNumber,
      accountNumber: selected?.accountNumber,
      bankName: selected?.bankName,
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
    enableReinitialize: true,
  });

  const submitValues = async () => {
    try {
      setLoading(true);
      await appAxios.post('/app/edit-payment-method', {
        id: selected?.paymentMethodId,
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
          message: 'Payee added',
        })
      );
      refetch();
      onClose();
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
    <CustomModal modalState={open} closeModal={onClose} title='Add Payee'>
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
        <div className='mt-14 w-full flex justify-center'>
          <Button
            type='submit'
            className='!w-[474px] !max-w-full'
            loading={loading}
            disabled={Object.keys(formik.errors).length > 0}
          >
            Save
          </Button>
        </div>
      </form>
    </CustomModal>
  );
};

export default EditPaymentForm;

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
import { PayeeType } from '@/types/data';

const EditPayeeForm = ({
  open,
  onClose,
  refetch,
  selected,
}: {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
  selected: PayeeType | undefined;
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: selected?.firstName,
      lastName: selected?.lastName,
      nickName: selected?.nickName,
      email: selected?.email,
      phone: selected?.phone,
      dateOfBirth: selected?.dateOfBirth
        ? new Date(selected.dateOfBirth).toISOString().substring(0, 10)
        : '',
      address: selected?.address,
      address2: selected?.address2,
      city: selected?.city,
      zipCode: selected?.zipCode,
      state: selected?.state,
      country: selected?.country,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      nickName: yup.string().required('Required'),
      email: yup.string().required('Required'),
      phone: yup.string().required('Required'),
      dateOfBirth: yup.string().required('Required'),
      address: yup.string().required('Required'),
      city: yup.string().required('Required'),
      zipCode: yup.string().required('Required'),
      state: yup.string().required('Required'),
      country: yup.string().required('Required'),
    }),
    enableReinitialize: true,
  });

  const submitValues = async () => {
    try {
      setLoading(true);
      await appAxios.post('/app/edit-payee', {
        id: selected?.payeeId,
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        nickName: formik.values.nickName,
        email: formik.values.email,
        phone: formik.values.phone,
        dateOfBirth: formik.values.dateOfBirth,
        address: formik.values.address,
        address2: formik.values.address2,
        city: formik.values.city,
        zipCode: formik.values.zipCode,
        state: formik.values.state,
        country: formik.values.country,
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
            name='firstName'
            label='First name'
            required
            className='mb-4'
          />
          <LabelInput
            formik={formik}
            name='lastName'
            label='Last Name'
            required
            className='mb-4'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <LabelInput
            formik={formik}
            name='email'
            placeholder='youremail@mail.com'
            label='Email'
            required
            type='email'
            className='mb-4'
          />
          <LabelInput
            formik={formik}
            name='phone'
            label='Mobile Number'
            required
            type='tel'
            className='mb-4'
            placeholder='(555) 555 -1212'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <LabelInput
            formik={formik}
            name='nickName'
            label='Nickname'
            required
            className='mb-4'
          />
          <LabelInput
            formik={formik}
            name='dateOfBirth'
            label='Date of Birth'
            required
            type='date'
            className='mb-4'
          />
        </div>

        <LabelInput
          formik={formik}
          name='address'
          label='Address'
          required
          className='mb-4'
          placeholder='Your Home Address'
        />
        <LabelInput
          formik={formik}
          name='address2'
          label='Address 2'
          className='mb-4'
          placeholder='Optional'
        />
        <LabelInput
          formik={formik}
          name='city'
          label='City'
          required
          className='mb-4'
          placeholder='Your City'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10 mb-4'>
          <Dropdown
            values={[
              {
                label: 'Lagos',
                value: 'Lagos',
              },
            ]}
            label='State'
            name='state'
            formik={formik}
            required
            placeholder='Please Select'
            value={{
              label: formik.values.state,
              value: formik.values.state,
            }}
          />
          <LabelInput
            formik={formik}
            name='zipCode'
            label='Zip'
            required
            placeholder='000000'
          />
        </div>
        <Dropdown
          values={[
            {
              label: 'Nigeria',
              value: 'Nigeria',
            },
          ]}
          label='Country'
          name='country'
          formik={formik}
          required
          placeholder='Please Select'
          value={{
            label: formik.values.country,
            value: formik.values.country,
          }}
        />
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

export default EditPayeeForm;

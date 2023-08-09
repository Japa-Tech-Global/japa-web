'use client';
import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LabelInput from '@/common/LabelInput';
import Dropdown from '@/common/Dropdown/Dropdown';
import Button from '@/common/Button/Button';
import { ProfileType } from '@/types/user';
import { openFeedback } from '@/store/features/feedback';
import { useAppDispatch } from '@/store/hooks';
import { getCatchMessage } from '@/functions/stringManipulations';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [profileDetails, setProfileDetails] = useState<ProfileType | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setFetchLoading(true);
        const response = await appAxios.get('/app/profile');
        setProfileDetails(response.data);
      } catch (error) {
        dispatch(
          openFeedback({
            type: 'error',
            message: getCatchMessage(error),
          })
        );
      } finally {
        setFetchLoading(false);
      }
    };
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      // firstName: profileDetails?.firstName || '',
      // lastName: profileDetails?.lastName || '',
      name: profileDetails?.name || '',
      // dob: profileDetails?.dob || '',
      identification: profileDetails?.idMeans || '',
      identificationNumber: profileDetails?.idNumber || '',
      passportCountry: profileDetails?.idIssuerCountry || '',
      passportDate: profileDetails?.idExpiryDate || '',
      address: profileDetails?.address || '',
      // address2: profileDetails?.add || '',
      city: profileDetails?.city || '',
      state: profileDetails?.state || '',
      // zip: profileDetails?.zip || '',
      mobile: profileDetails?.phone || '',
      email: profileDetails?.email || '',
      // question1: profileDetails?.firstName || '',
      // answer1: profileDetails?.firstName || '',
      // question2: profileDetails?.firstName || '',
      // answer2: profileDetails?.firstName || '',
    },
    enableReinitialize: true,
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      // fistName: yup.string().required('Required'),
      // lastName: yup.string().required('Required'),
      name: yup.string().required('Required'),
      // dob: yup.string().required('Required'),
      identification: yup.string().required('Required'),
      identificationNumber: yup.string().required('Required'),
      address: yup.string().required('Required'),
      city: yup.string().required('Required'),
      state: yup.string().required('Required'),
      // zip: yup.number().required('Required'),
      mobile: yup.string().required('Required'),
      email: yup.string().required('Required'),
      // question1: yup.string().required('Required'),
      // answer1: yup.string().required('Required'),
      // question2: yup.string().required('Required'),
      // answer2: yup.string().required('Required'),
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
      <h1 className='font-bold text-2xl mb-10'>Personal Information</h1>
      <Avatar />
      {fetchLoading ? (
        <LoadingIndicator text='Fetching Data' />
      ) : (
        <form className='flex flex-col w-full mt-10' onSubmit={formik.handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <LabelInput
              formik={formik}
              name='name'
              label='Name'
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
              name='mobile'
              label='Mobile Number'
              required
              type='tel'
              className='mb-4'
              placeholder='(555) 555 -1212'
            />
          </div>
          {/* <LabelInput
          formik={formik}
          name='dob'
          label='Date of Birth'
          required
          type='date'
          className='mb-4'
        /> */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <Dropdown
              values={[
                {
                  label: 'Social Security',
                  value: 'Social Security',
                },
                {
                  label: 'ITIN',
                  value: 'ITIN',
                },
                {
                  label: 'Non-US Passport',
                  value: 'Non-US Passport',
                },
              ]}
              label='Identification'
              name='identification'
              formik={formik}
              className='mb-4'
              required
              placeholder='Please Select'
              value={{
                label: formik.values.identification,
                value: formik.values.identification,
              }}
            />
            <LabelInput
              formik={formik}
              name='identificationNumber'
              label={`${formik.values.identification || 'Identification'} number`}
              required
              className='mb-4'
              placeholder='123-45* - ****'
            />
          </div>
          {formik.values.identification === 'Non-US Passport' && (
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10 mb-4'>
              <Dropdown
                values={[
                  {
                    label: 'Nigeria',
                    value: 'Nigeria',
                  },
                ]}
                label='Passport Country of Issue'
                name='passportCountry'
                formik={formik}
                required
                placeholder='Passport Country of Issue'
              />
              <LabelInput
                formik={formik}
                name='passportDate'
                label='Passport Expiration Date'
                required
                type='date'
              />
            </div>
          )}
          <LabelInput
            formik={formik}
            name='address'
            label='Address'
            required
            className='mb-4'
            placeholder='Your Home Address'
          />
          {/* <LabelInput
          formik={formik}
          name='address2'
          label='Address 2'
          className='mb-4'
          placeholder='Optional'
        /> */}
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
            {/* <LabelInput
            formik={formik}
            name='zip'
            label='Zip'
            required
            placeholder='000000'
          /> */}
          </div>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
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
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <LabelInput
            formik={formik}
            name='question2'
            label='Question 2'
            className='mb-4'
            disabled
          />
          <LabelInput formik={formik} name='answer2' label='Answer' required />
        </div> */}
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
      )}
    </div>
  );
};

export default ProfileForm;

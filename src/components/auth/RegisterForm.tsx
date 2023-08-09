'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/common/Button/Button';
import Dropdown from '@/common/Dropdown/Dropdown';
import LabelInput from '@/common/LabelInput';
import RecaptchaContainer from '@/common/RecaptchaContainer';
import axios from 'axios';
import YupPassword from 'yup-password';
import Checkbox from '@/common/Checkbox';
import PasswordRules from '../../common/PasswordRules';
import PrivacyModal from './PrivacyModal';
import TermsModal from './TermsModal';
import { useAppDispatch } from '@/store/hooks';
import { openFeedback } from '@/store/features/feedback';
import { appAxios } from '@/api/axios';
import { getCatchMessage } from '@/functions/stringManipulations';
import { useRouter } from 'next/navigation';
YupPassword(yup); // extend yup

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      recaptcha: '',
      verifiedRecaptcha: false,
      firstName: '',
      lastName: '',
      dob: '',
      identification: 1,
      identificationNumber: '',
      confirmIdentificationNumber: '',
      passportCountry: '',
      passportDate: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      mobile: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      acceptedPrivacy: false,
      acceptedTerms: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object({
      recaptcha: yup.string().required('Recaptcha is required'),
      firstName: yup.string().required('Required'),
      lastName: yup.string().required('Required'),
      dob: yup.string().required('Required'),
      identification: yup.string().required('Required'),
      identificationNumber: yup.string().required('Required'),
      confirmIdentificationNumber: yup
        .string()
        .required('Required')
        .oneOf(
          [yup.ref('identificationNumber'), ''],
          `The identification number you entered does not match`
        ),
      address: yup.string().required('Required'),
      city: yup.string().required('Required'),
      state: yup.string().required('Required'),
      zip: yup.number().required('Required'),
      mobile: yup.string().required('Required'),
      email: yup.string().required('Required'),
      confirmEmail: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('email'), ''], 'The email you entered does not match'),
      password: yup.string().required('Required').min(8).minUppercase(1).minSymbols(1),
      confirmPassword: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('password'), ''], 'The password you entered does not match'),
      acceptedPrivacy: yup
        .bool()
        .oneOf([true], 'Please accept the Privacy Policy to continue'),
      acceptedTerms: yup
        .bool()
        .oneOf([true], 'Please accept the Terms and Conditions to continue'),
    }),
  });

  const submitValues = async () => {
    formik.setFieldTouched('recaptcha', true);
    try {
      const userEmail = formik.values.email;
      setLoading(true);
      if (!formik.values.verifiedRecaptcha) {
        // Check if verification isn't done so duplicate check is avoided
        await axios.post('/api/recaptcha', {
          code: formik.values.recaptcha,
        });
        formik.setFieldValue('verifiedRecaptcha', true);
      }

      await appAxios.post('/auth/register', {
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        phone: formik.values.mobile,
        email: formik.values.email,
        confirmEmail: formik.values.confirmEmail,
        password: formik.values.password,
        passwordConfirmation: formik.values.confirmPassword,
        dateOfBirth: formik.values.dob,
        idMeans: formik.values.identification,
        idNumber: formik.values.identificationNumber,
        ...(formik.values.identification === 3 && {
          // If passport is selected
          idIssuerCountry: formik.values.passportCountry,
          idExpiryDate: formik.values.passportDate,
        }),
        address: formik.values.address,
        address2: formik.values.address2,
        state: formik.values.state,
        city: formik.values.city,
        zipCode: formik.values.zip,
        // country: formik.values.country,
      });

      // Send verification email and redirect to email verification page
      router.push('/email-verification/' + userEmail);
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

  const getIDLabel = useCallback(() => {
    let label = '';

    switch (formik.values.identification) {
      case 1:
        label = 'Social Security';
        break;
      case 2:
        label = 'ITIN';
        break;
      case 3:
        label = 'Non-US Passport';
        break;

      default:
        label = 'Social Security';
        break;
    }
    return label;
  }, [formik.values.identification]);

  const todayDate = useMemo(() => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    // const year = dateObj.getUTCFullYear() - 18;
    return `${year}-${month <= 9 ? `0${month}` : month}-${day <= 9 ? `0${day}` : day}`;
  }, []);

  return (
    <>
      <form className='flex flex-col w-full' onSubmit={formik.handleSubmit}>
        <LabelInput
          formik={formik}
          name='firstName'
          label='First Name'
          required
          className='mb-4'
          placeholder='Kofi'
        />
        <LabelInput
          formik={formik}
          name='lastName'
          label='Last Name'
          required
          className='mb-4'
          placeholder='Anan'
        />
        <LabelInput
          formik={formik}
          name='dob'
          label='Date of Birth'
          required
          type='date'
          className='mb-4'
          max={todayDate}
        />
        <Dropdown
          values={[
            {
              label: 'Social Security',
              value: 1,
            },
            {
              label: 'ITIN',
              value: 2,
            },
            {
              label: 'Non-US Passport',
              value: 3,
            },
          ]}
          label='Identification'
          name='identification'
          formik={formik}
          className='mb-4'
          required
          placeholder='Please Select'
        />
        <LabelInput
          formik={formik}
          name='identificationNumber'
          label={`${getIDLabel() || 'Identification'} number`}
          required
          autoComplete='off'
          className='mb-4'
          placeholder='123-45* - ****'
        />
        <LabelInput
          formik={formik}
          name='confirmIdentificationNumber'
          label={`Confirm ${getIDLabel() || 'Identification'} number`}
          required
          autoComplete='off'
          className='mb-4'
          placeholder='123-45* - ****'
        />
        {formik.values.identification === 3 && (
          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3 mb-4'>
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
              autoComplete='off'
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
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3 mb-4'>
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
          />
          <LabelInput
            formik={formik}
            name='zip'
            label='Zip'
            required
            placeholder='000000'
          />
        </div>
        <LabelInput
          formik={formik}
          name='mobile'
          label='Mobile Number'
          required
          type='tel'
          className='mb-4'
          placeholder='(555) 555 -1212'
        />
        <LabelInput
          formik={formik}
          name='email'
          placeholder='youremail@mail.com'
          label='Email address (this is also your AfriPie user Id)'
          required
          type='email'
          className='mb-4'
        />
        <LabelInput
          formik={formik}
          name='confirmEmail'
          placeholder='youremail@mail.com'
          label='Confirm Email address'
          required
          type='email'
          className='mb-4'
        />
        <LabelInput
          formik={formik}
          name='password'
          label='Password'
          required
          type='password'
          className='mb-3'
          placeholder='xxxxxxxx'
        />
        <PasswordRules password={formik.values.password} className='mb-4' />
        <LabelInput
          formik={formik}
          name='confirmPassword'
          label='Confirm Password'
          required
          type='password'
          className='mb-[50px]'
          placeholder='xxxxxxxx'
        />
        <div className='flex flex-col items-center'>
          <RecaptchaContainer
            onChange={(value) => {
              formik.setFieldValue('recaptcha', value);
              if (!value) {
                formik.setFieldValue('verifiedRecaptcha', false);
              }
            }}
            showError={formik.touched.recaptcha && formik.errors.recaptcha ? true : false}
            error={formik.errors.recaptcha}
            containerClass='mb-[22px] flex-col items-center flex'
          />
          <Checkbox
            id='privacy-policy'
            checked={formik.values.acceptedPrivacy}
            styledLabel={
              <span className='text-[#5D5D5D]'>
                Accept <span className='text-primary cursor-pointer'>Privacy Policy</span>
              </span>
            }
            onChange={() => {
              setPrivacyModal(true);
              formik.setFieldTouched('acceptedPrivacy', true);
            }}
            style={{
              marginRight: 4,
            }}
            className='mb-[10px]'
          />
          <Checkbox
            id='terms'
            checked={formik.values.acceptedTerms}
            onChange={() => {
              setTermsModal(true);
              formik.setFieldTouched('acceptedTerms', true);
            }}
            styledLabel={
              <span className='text-[#5D5D5D]'>
                Accept the{' '}
                <span className='text-primary cursor-pointer'>Terms and Conditions</span>
              </span>
            }
            style={{
              marginRight: 4,
            }}
          />
          {((formik.touched.acceptedPrivacy && formik.errors.acceptedPrivacy) ||
            (formik.touched.acceptedTerms && formik.errors.acceptedTerms)) && (
            <div className='error mt-2'>
              {formik.errors.acceptedPrivacy || formik.errors.acceptedTerms}
            </div>
          )}

          <Button
            type='submit'
            className='!w-[474px] !max-w-full mt-[21px]'
            loading={loading}
            disabled={Object.keys(formik.errors).length > 0}
          >
            Create Your AfriPie Account
          </Button>
        </div>
      </form>
      <PrivacyModal
        open={privacyModal}
        onClose={() => setPrivacyModal(false)}
        markComplete={() => formik.setFieldValue('acceptedPrivacy', true)}
        completed={formik.values.acceptedPrivacy}
      />
      <TermsModal
        open={termsModal}
        onClose={() => setTermsModal(false)}
        markComplete={() => formik.setFieldValue('acceptedTerms', true)}
        completed={formik.values.acceptedTerms}
      />
    </>
  );
};

export default RegisterForm;

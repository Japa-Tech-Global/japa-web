import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import AppLayout from '@/components/layout/AppLayout';
import { hidePageFromRobots } from '@/functions/robotConfig';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - Password Reset',
  robots: hidePageFromRobots,
};

const ForgotPassword = () => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='left-eclipse-bg'>
        <div className='py-[50px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full bg-white px-primary py-[50px] rounded-[20px]'>
            <p className='text-[#00000099] text-xl mb-3 text-center'>Forgot Password</p>
            <h1 className='text-center font-semibold mb-[15px] text-[32px]'>
              Enter email for your AfriPie User account
            </h1>
            <p className='text-xl mb-3 text-center'>
              If you have an AfriPie user account with us, you will receive a link to
              reset your password
            </p>

            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ForgotPassword;

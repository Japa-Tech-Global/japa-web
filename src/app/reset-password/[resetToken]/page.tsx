import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import AppLayout from '@/components/layout/AppLayout';
import { hidePageFromRobots } from '@/functions/robotConfig';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - Password Reset',
  robots: hidePageFromRobots,
};

const ResetPassword = ({ params }: { params: { resetToken: string } }) => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='left-eclipse-bg'>
        <div className='py-[50px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full bg-white px-primary py-[50px] rounded-[20px]'>
            <p className='text-[#00000099] text-xl mb-10 text-center'>Reset Password</p>
            <ResetPasswordForm resetToken={params.resetToken} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ResetPassword;

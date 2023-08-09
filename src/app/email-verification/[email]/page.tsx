import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import MailIcon from '@/assets/icons/mail.svg';
import Image from 'next/image';
import VerificationForm from '@/components/auth/VerificationForm';
import { hidePageFromRobots } from '../../../functions/robotConfig';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afripie - Email Verification',
  robots: hidePageFromRobots,
};

const EmailVerificationPage = ({ params }: { params: { email: string } }) => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='left-eclipse-bg'>
        <div className='py-[50px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full bg-white px-primary py-[50px] rounded-[20px] flex flex-col items-center text-center'>
            <Image src={MailIcon} alt='Email' className='max-w-full' />
            <p className='text-xl my-[27px]'>
              We’ve sent you a message to verify your email address. Please log into your
              email, click the link to verify your email
            </p>
            <VerificationForm email={params.email} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EmailVerificationPage;

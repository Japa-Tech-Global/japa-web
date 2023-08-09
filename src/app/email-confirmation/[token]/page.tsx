import { Metadata } from 'next';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import MailIcon from '@/assets/icons/mail.svg';
import Image from 'next/image';
import ConfirmationForm from '@/components/auth/ConfirmationForm';
import { hidePageFromRobots } from '@/functions/robotConfig';

export const metadata: Metadata = {
  title: 'Afripie - Email Confirmation',
  robots: hidePageFromRobots,
};

const EmailConfirmationPage = ({ params }: { params: { token: string } }) => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='left-eclipse-bg'>
        <div className='py-[50px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full bg-white px-primary py-[50px] rounded-[20px] flex flex-col items-center text-center'>
            <Image src={MailIcon} alt='Email' className='max-w-full mb-[27px]' />
            <ConfirmationForm token={params.token} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EmailConfirmationPage;

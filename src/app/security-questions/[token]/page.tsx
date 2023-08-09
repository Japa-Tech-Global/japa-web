import SecurityQuestionsForm from '@/components/auth/SecurityQuestionsForm';
import AppLayout from '@/components/layout/AppLayout';
import { hidePageFromRobots } from '@/functions/robotConfig';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - Security Questions',
  robots: hidePageFromRobots,
};

const SecurityQuestionsPage = ({ params }: { params: { token: string } }) => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='left-eclipse-bg'>
        <div className='py-[50px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full bg-white px-primary py-[50px] rounded-[20px] flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-2'>Security questions</h1>
            <p className='text-[#000E24] mb-[57px]'>
              Please Add Security Questions to strengthen your AfriPie account
            </p>
            <SecurityQuestionsForm token={params.token} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SecurityQuestionsPage;

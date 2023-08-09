import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import QuestionIcon from '@/assets/icons/question.svg';
import Image from 'next/image';
import RegisterForm from '@/components/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afripie - Register',
};

const Register = () => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='combined-eclipse-bg'>
        <div className='py-[100px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full flex items-center justify-between flex-wrap gap-2 mb-[35px]'>
            <h1 className='font-bold text-xl text-[#000C20]'>New AfriPie User Account</h1>
            <div className='flex items-center gap-2'>
              <span className='text-[#2B2B2B5E]'>
                Why do I need an AfriPie User Account
              </span>
              <Image src={QuestionIcon} alt='Question' />
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>
    </AppLayout>
  );
};

export default Register;

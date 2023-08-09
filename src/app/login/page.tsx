import LoginForm from '@/components/auth/LoginForm';
import AppLayout from '@/components/layout/AppLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - Login',
};

const Login = () => {
  return (
    <AppLayout navStyle='transparent'>
      <div className='left-eclipse-bg'>
        <div className='py-[50px] px-primary max-w-screen-lg w-full mx-auto'>
          <div className='w-full bg-white px-primary py-[50px] rounded-[20px]'>
            <p className='text-[#00000099] text-xl mb-3 text-center'>Welcome Back!</p>
            <h1 className='text-center font-semibold mb-[52px] text-[32px]'>
              Login to your AfriPie User account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;

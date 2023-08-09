'use client';

import { openFeedback } from '@/store/features/feedback';
import { signOut } from '@/store/features/user';
import { useAppDispatch } from '@/store/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserBanner = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logOut = () => {
    dispatch(signOut());
    router.push('/login');
    dispatch(
      openFeedback({
        type: 'success',
        message: 'Logout Successful',
        actionText: 'Continue',
      })
    );
  };
  return (
    <nav className='h-[70px] w-full bg-primary px-primary flex items-center justify-between text-white sticky top-0 z-10'>
      <span className='text-2xl font-semibold '>Hi, Kofi</span>
      <div className='flex items-center gap-[50px]'>
        <Link href='/contact'>Contact Us</Link>
        <button onClick={logOut}>Logout</button>
      </div>
    </nav>
  );
};

export default UserBanner;

import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import ErrorImage from '@/assets/images/404.svg';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className='px-primary py-[100px] flex items-center justify-center relative'>
        <div className='absolute top-[60px] left-0 right-0'>
          <h1 className='text-center text-[#4A4949] font-medium text-[30px] md:text-[39px] lg:text-[45px]'>
            Coming Soon
          </h1>
        </div>
        <Image src={ErrorImage} alt='Not found' />
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;

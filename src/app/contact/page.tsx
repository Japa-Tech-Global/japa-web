import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import messageIcon from '@/assets/icons/contact/message.svg';
import phoneIcon from '@/assets/icons/contact/phone.svg';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <AppLayout>
      <div className='px-primary py-[125px] contact-bg'>
        <h1 className='text-[#4A4949] font-medium text-35px lg:text-[45px] text-center'>
          Contact our Team
        </h1>
        <p className='text-[#3D3D3D] text-lg lg:text-[22px] text-center'>
          Let us know how we can help
        </p>
        <div className='mt-[70px] flex items-center gap-[50px] flex-wrap justify-center'>
          <div className='w-[437px] max-w-full border-[0.3px] border-[#5F5E5E] bg-white rounded-[20px] pt-[33px] px-[31px] py-[29px] flex flex-col'>
            <div className='w-20 h-[69px] flex items-center justify-center border-[0.5px] rounded-[10px] border-[#5F5E5E]'>
              <Image src={messageIcon} alt='Message Icon' />
            </div>
            <div className='flex flex-col gap-[2px] mb-[30px] mt-[68px]'>
              <span className='text-lg lg:text-[25px] font-medium'>Email us</span>
              <span className='lg:text-[22px] text-[#4A4949]'>We’re here to help</span>
            </div>
            <a
              href='mailto:thejapaglobal@gmail.com'
              target='_blank'
              className='text-lg lg:text-[25px] font-medium underline'
            >
              thejapaglobal@gmail.com
            </a>
          </div>
          <div className='w-[437px] max-w-full border-[0.3px] border-[#5F5E5E] bg-white rounded-[20px] pt-[33px] px-[31px] py-[29px] flex flex-col'>
            <div className='w-20 h-[69px] flex items-center justify-center border-[0.5px] rounded-[10px] border-[#5F5E5E]'>
              <Image src={phoneIcon} alt='Phone Icon' />
            </div>
            <div className='flex flex-col gap-[2px] mb-[30px] mt-[68px]'>
              <span className='text-lg lg:text-[25px] font-medium'>Chat with us</span>
              <span className='lg:text-[22px] text-[#4A4949]'>Available 24/7</span>
            </div>
            <a
              href='tel:+2348097060915'
              target='_blank'
              className='text-lg lg:text-[25px] font-medium underline'
            >
              +234 8097060915
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ContactPage;

import React from 'react';
import Navbar from '../layout/Navbar';
import HomeImage from '@/assets/images/auth/login.webp';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/common/Button/Button';

const Hero = () => {
  return (
    <div className='flex justify-between flex-wrap md:flex-nowrap'>
      <div className='h-screen w-full hero-bg md:flex-[50%] flex flex-col'>
        <Navbar />
        <div className='flex flex-col justify-center text-center md:text-left flex-1 px-primary'>
          <h1 className='text-[32px] lg:text-[55px] font-bold mb-[29px]'>
            Unlock Your Potential For Global Success With JAPA
          </h1>
          <p className='text-lg lg:text-[22px] mb-[85px]'>
            The Easiest Way to Boost Your Employability and Secure Global Opportunities
          </p>
          <Link href='/auth/register'>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
      <div className='py-[50px] px-12 bg-primary h-screen md:flex-[50%] w-full'>
        <Image
          src={HomeImage}
          alt='JAPA'
          className='rounded-[10px] h-full w-full object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;

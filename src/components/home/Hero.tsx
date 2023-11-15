import React from 'react';
import HomeImage from '@/assets/images/auth/login.webp';
import Image from 'next/image';
import Link from 'next/link';
import HeartIcon from '@/assets/icons/home/heart.svg';
import CommunityImage from '@/assets/images/home/community-collage.webp';
import GetStartedButton from '@/common/GetStartedButton';

const Hero = () => {
  return (
    <div className='flex justify-between flex-wrap md:flex-nowrap'>
      <div className='h-screen w-full hero-bg md:flex-[50%] flex flex-col'>
        <div className='flex flex-col justify-center text-center md:text-left flex-1 px-primary'>
          <h1 className='text-[32px] lg:text-[55px] font-bold mb-[29px]'>
            Unlock Your Potential For Global Success With JAPA
          </h1>
          <p className='text-lg lg:text-[22px] mb-[85px]'>
            The Easiest Way to Boost Your Employability and Secure Global Opportunities
          </p>
          <GetStartedButton />
        </div>
      </div>
      <div className='py-[50px] px-12 bg-primary md:flex-[50%] w-full h-[calc(100vh-114px)] flex flex-col'>
        <Image
          src={HomeImage}
          alt='JAPA'
          className='rounded-[10px] w-full h-[85%] object-cover'
        />
        <Link href='/#testimonial'>
          <div className='flex items-center gap-[22px] relative px-[15px] py-[10px] rounded-[10px] bg-white mt-[27px] flex-wrap lg:flex-nowrap'>
            <Image src={CommunityImage} alt='People smiling' />
            <span className='text-[#000000CC] md:text-[21px]'>
              See what our community members think
            </span>
            <Image
              src={HeartIcon}
              alt=''
              className='absolute right-[25px] -top-[30px] '
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

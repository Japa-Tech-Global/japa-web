import Button from '@/common/Button/Button';
import Image from 'next/image';
import React from 'react';
import ArrowIcon from '../../assets/icons/arrow-right.svg';

const HeroSection = () => {
  return (
    <header className='hero-bg min-h-screen flex justify-center flex-col p-[40px] md:p-[73px] text-center md:text-left items-center md:items-start text-white'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl max-w-[635px] font-semibold'>
        Say Hello To Your One Stop Utility Solutions
      </h1>
      <p className='mt-3 mb-10 max-w-[531px] md:text-xl'>
        Lorem ipsum dolor sit amet consectetur. Adipiscing ac eget eget commodo convallis
        sit sed.
      </p>
      <Button>
        Get Started
        <Image src={ArrowIcon} alt='Arrow' />
      </Button>
    </header>
  );
};

export default HeroSection;

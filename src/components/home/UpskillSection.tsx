import React from 'react';
import shapeIcon from '@/assets/shapes/upskill.svg';
import Image from 'next/image';
import Upskillimage from '@/assets/images/home/upskill.webp';
import Link from 'next/link';
import Button from '@/common/Button/Button';
import WatchVideoButton from '@/common/WatchVideoButton';

const UpskillSection = () => {
  return (
    <section id='upskill' className='mt-[100px] px-primary'>
      <div className='flex items-center gap-7'>
        <Image src={shapeIcon} alt='' />
        <h2 className='md:text-2xl max-w-[982px]'>
          Upskill for Thriving Careers: Upskill your potential with our comprehensive
          training programs.
        </h2>
      </div>
      <div className='flex mt-11 flex-wrap md:flex-nowrap gap-5 md:gap-0'>
        <div className='md:flex-[50%]'>
          <Image src={Upskillimage} alt='' className=' w-full h-full object-cover' />
        </div>
        <div className='flex flex-col gap-[37px] md:px-10 md:flex-[50%] w-full'>
          <p className='md:text-2xl'>
            Engage with Industry Leaders and Professionals for personalized guidance
          </p>
          <p className='md:text-2xl'>
            Join a vibrant community that fosters collaboration and growth, uniquely
            tailored to the Nigerian job market
          </p>
          <p className='md:text-2xl mb-5'>
            Conquer the journey from novice to skilled professional
          </p>
          <WatchVideoButton />
        </div>
      </div>
    </section>
  );
};

export default UpskillSection;

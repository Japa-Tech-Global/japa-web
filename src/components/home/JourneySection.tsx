import React from 'react';
import Image1 from '@/assets/images/home/journey1.webp';
import Image2 from '@/assets/images/home/journey2.webp';
import Image3 from '@/assets/images/home/journey3.webp';
import Image from 'next/image';
import WatchVideoButton from '@/common/WatchVideoButton';

const JourneySection = () => {
  return (
    <section id='journey' className='px-primary mt-[100px]'>
      <h2 className='text-[30px] lg:text-[40px] text-center lg:text-left'>
        Start Your Journey to Global Success with JAPA
      </h2>
      <div className='flex mt-[99px] flex-wrap md:flex-nowrap gap-5 md:gap-0'>
        <div className='md:flex-[50%]'>
          <Image src={Image1} alt='' className=' w-full h-full object-cover' />
        </div>
        <div className='flex flex-col gap-[37px] md:px-10 md:flex-[50%] w-full justify-center'>
          <p className='md:text-2xl'>
            Join Japa and represent Africa with pride on the global stage
          </p>
          <p className='md:text-2xl'>
            Access training, professional CV templates, exclusive global remote job
            opportunities, and a supportive African community
          </p>
          <p className='md:text-2xl mb-5'>
            Thrive anywhere and showcase the excellence of Africa!
          </p>
          <WatchVideoButton />
        </div>
      </div>
      <div className='flex mt-[99px] flex-wrap md:flex-nowrap gap-5 md:gap-0'>
        <div className='flex flex-col gap-[37px] md:px-10 md:flex-[50%] w-full justify-center'>
          <p className='md:text-2xl'>
            Discover our comprehensive training offerings for global impact
          </p>
          <p className='md:text-2xl'>
            Enhance your skills and knowledge to compete globally and showcase African
            excellence
          </p>
          <p className='md:text-2xl mb-5'>
            Unleash your potential and success on the world stage
          </p>
          <WatchVideoButton />
        </div>
        <div className='md:flex-[50%]'>
          <Image src={Image2} alt='' className=' w-full h-full object-cover' />
        </div>
      </div>
      <div className='flex mt-[99px] flex-wrap md:flex-nowrap gap-5 md:gap-0'>
        <div className='flex flex-col gap-[37px] md:px-10 md:flex-[50%] w-full justify-center'>
          <p className='md:text-2xl'>
            Connect with top global employers actively seeking talented individuals from
            Africa like you
          </p>
          <p className='md:text-2xl'>
            Explore exclusive remote job opportunities with global companies representing
            Africa
          </p>
          <p className='md:text-2xl mb-5'>
            Receive comprehensive training and support to secure your desired role and
            represent Africa with pride
          </p>
          <WatchVideoButton />
        </div>
        <div className='md:flex-[50%]'>
          <Image src={Image3} alt='' className=' w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

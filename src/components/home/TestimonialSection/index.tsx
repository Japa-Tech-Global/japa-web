import React from 'react';
import TestimonialList from './TestimonialList';

const TestimonialSection = () => {
  return (
    <section className='p-primary pt-[114px] pb-[106px] right-eclipse-bg bg-[#F1E8FB]'>
      <div className='flex flex-row items-start justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-5'>
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-[40px]'>
            Trusted by 200,000+ Users
          </h2>
          <p className='text-center lg:text-left mt-[19px] mb-[19px] max-w-[581px] font-light text-lg md:text-2xl'>
            Thousands of users of all nationality trust Afripie to pay bills across africa
            without stress.
          </p>
        </div>
        <TestimonialList />
      </div>
    </section>
  );
};

export default TestimonialSection;

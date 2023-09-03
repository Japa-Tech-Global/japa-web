import React from 'react';
import testimonies from './testimonial';
import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <section id='testimonial' className='mt-[100px] px-primary'>
      <h2 className='text-[30px] lg:text-[40px] text-center lg:text-left mb-[79px]'>
        Start Your Journey to Global Success with JAPA
      </h2>
      <div className='flex items-center gap-5 justify-center flex-wrap'>
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className='flex items-start pl-[15px] pr-10 py-[35px] bg-white border border-[#969696] rounded-[27px] gap-[33px] w-full xl:w-[49%] flex-wrap md:flex-nowrap'
          >
            <Image src={testimony.image} alt='' />
            <div className='flex flex-col'>
              <p className='text-[#555555] text-lg md:text-2xl'>{testimony.content1}</p>
              <p className='text-[#555555] text-lg md:text-2xl mt-5'>
                {testimony.content2}
              </p>
              <p className='mt-[55px]  text-lg md:text-2xl font-medium'>
                {testimony.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

import React from 'react';
import BenefitCard from './BenefitCard';
import { commonBenefits, japaBenefits } from './benefit';

const BenefitSection = () => {
  return (
    <section id='benefit' className='benefit-bg px-primary mt-[100px]'>
      <h2 className='text-[30px] lg:text-[40px] text-center lg:text-left mb-[79px]'>
        Stand Out from the Crowd
      </h2>
      <div className='flex md:gap-[22px] flex-col md:flex-row gap-20 '>
        <BenefitCard title='Other' benefits={commonBenefits} />
        <BenefitCard title='Japa' benefits={japaBenefits} />
      </div>
    </section>
  );
};

export default BenefitSection;

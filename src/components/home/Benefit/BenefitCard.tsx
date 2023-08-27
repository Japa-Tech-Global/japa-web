import React from 'react';
import { Benefit } from './benefit';
import Image from 'next/image';

const BenefitCard = ({ title, benefits }: { title: string; benefits: Benefit[] }) => {
  return (
    <div className='relative w-full md:w-[457px] max-w-full px-[27px] bg-[#F0E7EAB2]'>
      <div className='absolute ml-auto mr-auto left-0 right-0 -top-[34px] bg-[#FFE3E3] w-[343px] max-w-full h-[99px] flex items-center justify-center text-[#282828] text-[25px] text-center font-medium'>
        {title}
      </div>
      <ul className='pt-[95px] flex flex-col gap-5 pb-[62px]'>
        {benefits.map((benefit, index) => (
          <li key={index} className='flex gap-5 items-center'>
            <Image src={benefit.image} alt='' />
            <div className='w-full'>
              <p className='text-[#363636] text-xl md:text-[25px]'>{benefit.label}</p>
              <div className='w-full bg-[#666666] h-[0.5px] mt-[27px]' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitCard;

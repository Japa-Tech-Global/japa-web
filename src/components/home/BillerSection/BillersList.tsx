import React from 'react';
import BillerImage1 from '../../../assets/images/home/billers/biller-1.png';
import BillerImage2 from '../../../assets/images/home/billers/biller-2.png';
import BillerImage3 from '../../../assets/images/home/billers/biller-3.png';
import BillerImage4 from '../../../assets/images/home/billers/biller-4.png';
import BillerImage5 from '../../../assets/images/home/billers/biller-5.png';
import BillerImage6 from '../../../assets/images/home/billers/biller-6.png';
import BillerImage7 from '../../../assets/images/home/billers/biller-7.png';
import BillerCard from './BillerCard';
import { StaticImageData } from 'next/image';

const BillersList = () => {
  type billersType = {
    image: StaticImageData;
  };
  const billers: billersType[] = [
    {
      image: BillerImage1,
    },
    {
      image: BillerImage2,
    },
    {
      image: BillerImage3,
    },
    {
      image: BillerImage4,
    },
    {
      image: BillerImage5,
    },
    {
      image: BillerImage6,
    },
    {
      image: BillerImage7,
    },
  ];
  return (
    <div className='max-w-[90%] w-full flex items-center mb-[95px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-between w-full gap-[29px]'>
        {billers.map((biller, index) => (
          <BillerCard key={index} biller={biller} />
        ))}
      </div>
    </div>
  );
};

export default BillersList;

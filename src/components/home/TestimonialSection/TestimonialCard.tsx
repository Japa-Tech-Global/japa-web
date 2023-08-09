import Image from 'next/image';
import React from 'react';
import Avatar from '../../../assets/images/home/avatar.png';
import FullStarIcon from '../../../assets/icons/full-star.svg';
import HalfStarIcon from '../../../assets/icons/half-star.svg';

const TestimonialCard = ({
  testimony,
}: {
  testimony: {
    name: string;
    review: string;
    rating: number;
  };
}) => {
  return (
    <div
      className='min-w-[287px] h-[287px] flex items-center justify-center flex-col p-3 bg-white duration-500'
      style={{
        border: '1px solid #FAFCFE',
        boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.02)',
        borderRadius: 6,
      }}
    >
      <Image src={Avatar} alt='User' />
      <p className='font-medium text-2xl mt-[30px] mb-[14px] capitalize'>
        {testimony.name}
      </p>
      <p className='font-light text-center mb-[11px]'>{testimony.review}</p>
      <div className='flex items-center gap-[15px] justify-center w-full'>
        {/* Rating Calculation */}
        {Array.from({ length: Math.floor(testimony.rating) }, (_, i) => i + 1).map(
          (item) => (
            <Image src={FullStarIcon} alt='Full star' key={item} />
          )
        )}
        {testimony.rating - Math.floor(testimony.rating) !== 0 && (
          <Image src={HalfStarIcon} alt='Half star' />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;

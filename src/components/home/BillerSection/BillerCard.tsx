import Image, { StaticImageData } from 'next/image';
import React from 'react';

const BillerCard = ({
  biller,
}: {
  biller: {
    image: StaticImageData;
  };
}) => {
  return (
    <div
      style={{
        border: '0.5px solid rgba(0, 14, 36, 0.1)',
        boxShadow:
          '0px 4px 4px rgba(0, 14, 36, 0.1), 0px 20px 36px -8px rgba(0, 0, 0, 0.05)',
      }}
      className='bg-white rounded-lg h-[135px] flex justify-center items-center w-[180px] max-w-full'
    >
      <Image src={biller.image} alt='Biller' />
    </div>
  );
};

export default BillerCard;

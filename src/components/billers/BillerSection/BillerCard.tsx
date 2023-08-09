import Image from 'next/image';
import React from 'react';

const BillerCard = ({
  biller,
}: {
  biller: {
    name: string;
    icon: string;
  };
}) => {
  return (
    <div
      style={{
        border: '0.5px solid rgba(0, 14, 36, 0.1)',
        boxShadow:
          '0px 4px 4px rgba(0, 14, 36, 0.1), 0px 20px 36px -8px rgba(0, 0, 0, 0.05)',
      }}
      className='bg-white rounded-lg pt-[23px] pb-[14px] p-[34px] flex flex-col items-center gap-[14px] w-[180px] max-w-full hover:scale-105 duration-500 cursor-pointer'
    >
      <Image src={biller.icon} alt={biller.name} />
      <span className='font-semibold text-primary text-center'>{biller.name}</span>
    </div>
  );
};

export default BillerCard;

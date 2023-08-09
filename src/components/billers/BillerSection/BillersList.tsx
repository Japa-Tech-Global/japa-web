import React from 'react';
import AirtimeIcon from '../../../assets/icons/billers/airtime.svg';
import CableIcon from '../../../assets/icons/billers/cable.svg';
import DataIcon from '../../../assets/icons/billers/data.svg';
import ElectricityIcon from '../../../assets/icons/billers/electricity.svg';
import BillerCard from './BillerCard';

const BillersList = () => {
  type billersType = {
    name: string;
    icon: string;
  };
  const billers: billersType[] = [
    {
      name: 'Buy Electricity',
      icon: ElectricityIcon,
    },
    {
      name: 'Buy Data',
      icon: DataIcon,
    },
    {
      name: 'Buy Cable TV',
      icon: CableIcon,
    },
    {
      name: 'Buy Airtime',
      icon: AirtimeIcon,
    },
    {
      name: 'Buy Cable TV',
      icon: CableIcon,
    },
    {
      name: 'Buy Airtime',
      icon: AirtimeIcon,
    },
    {
      name: 'Buy Electricity',
      icon: ElectricityIcon,
    },
    {
      name: 'Buy Data',
      icon: DataIcon,
    },
  ];
  return (
    <div className='max-w-[90%] w-full flex items-center mt-[54px] mb-[95px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-between w-full gap-[29px]'>
        {billers.map((biller, index) => (
          <BillerCard key={index} biller={biller} />
        ))}
      </div>
    </div>
  );
};

export default BillersList;

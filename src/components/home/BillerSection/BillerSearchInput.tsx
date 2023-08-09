'use client';

import Image from 'next/image';
import React from 'react';
import SearchIcon from '../../../assets/icons/search.svg';

const BillerSearchInput = () => {
  const [input, setInput] = React.useState('');
  return (
    <div className='w-full relative'>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search here for other billers'
        className='w-full text-center h-[60px] rounded-lg focus:outline-primary duration-500 outline-none text-xl'
        style={{
          filter: 'drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.04))',
        }}
      />
      <div className='absolute top-0 right-0 flex items-center h-full pr-5'>
        <Image src={SearchIcon} alt='Search' className='' />
      </div>
    </div>
  );
};

export default BillerSearchInput;

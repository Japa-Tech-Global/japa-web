import React from 'react';
import BillerSearchInput from './BillerSearchInput';
import BillersList from './BillersList';

const BillerSection = () => {
  return (
    <div className='left-eclipse-bg'>
      <section className='pt-[108px] pb-0 p-primary flex items-center flex-col'>
        <div className='max-w-[95%] md:max-w-[80%] flex flex-col items-center w-full'>
          <BillerSearchInput />
          <BillersList />
        </div>
      </section>
    </div>
  );
};

export default BillerSection;

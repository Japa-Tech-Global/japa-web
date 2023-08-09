import React from 'react';
import BillersList from './BillersList';
import DownloadMobileSection from '../DownloadMobileSection';

const BillerSection = () => {
  return (
    <div className='home-biller-bg'>
      <section className='pt-[125px] px-primary flex items-center flex-col'>
        <div className='max-w-[95%] md:max-w-[80%] flex flex-col items-center w-full'>
          <BillersList />
        </div>
      </section>
      <DownloadMobileSection />
    </div>
  );
};

export default BillerSection;

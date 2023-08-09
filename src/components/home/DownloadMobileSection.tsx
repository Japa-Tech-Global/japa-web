import Image from 'next/image';
import React from 'react';
import MobileImage from '../../assets/images/home/mobile.webp';
import AppStoreIcon from '../../assets/images/home/app-store.svg';
import PlayStoreIcon from '../../assets/images/home/play-store.svg';

const DownloadMobileSection = () => {
  return (
    <section className='p-primary pt-0 pb-[127.05px]'>
      <div className='flex items-center justify-center lg:justify-between gap-y-10 lg:gap-x-10 flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col items-center  lg:items-start'>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-[40px] lg:mt-40'>
            Discover Our Mobile App
          </h2>
          <p className='text-center lg:text-left mt-[19px] mb-[19px] max-w-[581px] font-light text-lg md:text-2xl'>
            Discover our mobile app and get the best outcome of online payment and enjoy
            your everyday transaction.
          </p>
          <div className='flex items-center gap-[19px]'>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
              className='hover:scale-105 duration-500'
            >
              <Image src={PlayStoreIcon} alt='Play Store' />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noreferrer'
              className='hover:scale-105 duration-500'
            >
              <Image src={AppStoreIcon} alt='App Store' />
            </a>
          </div>
        </div>
        <Image src={MobileImage} alt='Mobile App' />
      </div>
    </section>
  );
};

export default DownloadMobileSection;

import React from 'react';
import StarIcon from '@/assets/icons/home/star.svg';
import Image from 'next/image';

const FeaturedVideoSection = () => {
  return (
    <div className='px-primary pt-[86px] bg-[#F0E7EAB2]'>
      <h2 className='text-[30px] lg:text-[40px] text-center lg:text-left'>
        We Ignite Your Career: Your Path to Success Begins Here
      </h2>
      <div className='flex items-center  gap-[46px] mt-[55px] mb-[71px]'>
        <Image src={StarIcon} alt='' className='hidden lg:block' />
        <p className='text-center lg:text-left text-lg lg:text-2xl '>
          Discover the ultimate platform where we upskill, empower, and walk with you to
          your dream career
        </p>
      </div>
      <iframe
        src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7097541592948875264?compact=1'
        height=' 694.17'
        width='100%'
        allowFullScreen={true}
        title='Embedded post from JAPA Global'
      ></iframe>
    </div>
  );
};

export default FeaturedVideoSection;

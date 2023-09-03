import AppLayout from '@/components/layout/AppLayout';
import Image from 'next/image';
import React from 'react';
import whatsappImage from '@/assets/icons/about/whatsapp.svg';
import telegramImage from '@/assets/icons/about/telegram.svg';

const AboutPage = () => {
  return (
    <AppLayout>
      <div className='px-primary'>
        <header className='about-header-bg w-full h-[230px] items-center flex justify-center text-[30px] lg:text-[45px] text-center text-white rounded-[15px]'>
          <h1>About us</h1>
        </header>
        <div className='mt-11 about-bg'>
          <p className='text-lg lg:text-[22px] text-[#3D3D3D]'>
            With Africa’s youthful population of 1.4 billion, 60% of whom are under 25,
            the continent stands as the world’s youngest. This presents a unique
            opportunity for Africa to harness the energy and creativity of it’s youth and
            unlock their potential. However, poverty, hunger, and the lack of quality
            education remains major challenges across the continent. JAPA is deeply
            committed to addressing these issues in alignment with the United Nations
            Sustainable Development Goals
          </p>
          <h2 className='mt-[74px] text-[#4A4949] font-medium text-[30px] lg:text-[45px] mb-[15px]'>
            JAPA’s Mission
          </h2>
          <p className='text-lg lg:text-[22px] text-[#3D3D3D]'>
            JAPA is dedicated to unlocking the potential of Africa’s youth by connecting
            them globally for outstanding success. We believe that every young person in
            Africa deserves the chance to thrive, and we provide the necessary resources
            and connections through our platform to make that happen. Our goal is to
            eliminate the barriers that prevent African talents from reaching their full
            potential and empower them to succeed on a global scale.
          </p>
          <h2 className='mt-[74px] text-[#4A4949] font-medium text-[30px] lg:text-[45px] mb-[15px]'>
            JAPA’s Vision
          </h2>
          <p className='text-lg lg:text-[22px] text-[#3D3D3D]'>
            We envision a future where Africa emerges as a frontrunner, leading both
            herself and the world. By bridging the gap between untapped potential and
            tangible opportunities, we aspire to empower African youths to become
            trailblazers ona global stage. We believe that when African youths are given
            the right support and opportunities, they can become leaders and bring
            positive change not just to Africa but the world as well.
            <br />
            <br />
            JAPA’s purpose is clear: to eliminate barriers between talent and potential,
            empowering African Youth through upskilling initiatives and seamless global
            connections, which are accessible through our platform. We provide
            opportunities and support from anywhere ensuring that Africa’s young talents
            are placed at the forefront of leadership on the global stage. By doing so, we
            believe that Africa can overcome its challenges and become a leader in
            creating a prosperous and sustainable future for all.
          </p>
          <h2 className='mt-[74px] text-[#4A4949] font-medium text-[30px] lg:text-[45px] mb-[21px] text-center'>
            Join our communities today!
          </h2>
          <div className='flex items-center justify-center w-full gap-[95px]'>
            <a
              className='flex flex-col gap-[9px]'
              href='https://chat.whatsapp.com/KOMkopKhimn3RFY5imDmVx'
              target='_blank'
            >
              <Image src={whatsappImage} alt='Whatsapp Icon' />
              <Image
                src={whatsappImage}
                alt='Whatsapp Icon Shadow'
                className='rotate-90 blur-sm opacity-10'
              />
            </a>
            <a
              className='flex flex-col gap-[9px]'
              href='https://t.me/JAPAGLOBAL'
              target='_blank'
            >
              <Image src={telegramImage} alt='Telegram Icon' />
              <Image
                src={telegramImage}
                alt='Telegram Icon Shadow'
                className='rotate-90 blur-sm opacity-10'
              />
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutPage;

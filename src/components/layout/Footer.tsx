import React from 'react';
import Logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '@/assets/icons/socials/instagram.svg';
import LinkedinIcon from '@/assets/icons/socials/linkedin.svg';

const Footer = () => {
  return (
    <footer className='mt-[100px] border-t border-t-primary'>
      <div className='px-primary  pb-[70px] pt-10 '>
        <div className='flex items-start justify-between flex-wrap gap-10'>
          <Image src={Logo} alt='JAPA' />
          <div className='flex flex-wrap gap-12'>
            <ul className='flex flex-col gap-5'>
              <p className='text-xl lg:text-3xl font-medium mb-5'>Networks</p>
              <li className='text-lg lg:text-2xl'>
                <Link href='/about' className='hover:text-primary duration-300'>
                  About us
                </Link>
              </li>
              <li className='text-lg lg:text-2xl'>
                <Link href='/contact' className='hover:text-primary duration-300'>
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-5'>
              <p className='text-xl lg:text-3xl font-medium mb-5'>Jobs</p>
              <li className='text-lg lg:text-2xl'>
                <Link href='/marketplace' className='hover:text-primary duration-300'>
                  Remote Job Marketplace
                </Link>
              </li>
              <li className='text-lg lg:text-2xl'>
                <Link href='/training' className='hover:text-primary duration-300'>
                  Training Programs
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-5'>
              <p className='text-xl lg:text-3xl font-medium mb-5'>Resources</p>
              <li className='text-lg lg:text-2xl'>
                <Link href='/training' className='hover:text-primary duration-300'>
                  Training Programs
                </Link>
              </li>
              <li className='text-lg lg:text-2xl'>
                <Link href='/cv-template' className='hover:text-primary duration-300'>
                  CV Templates
                </Link>
              </li>
              <li className='text-lg lg:text-2xl'>
                <Link href='/community' className='hover:text-primary duration-300'>
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-between flex-wrap gap-10 mt-[100px]'>
          <p className='font-medium text-lg lg:text-2xl'>Connect with Japa</p>
          <div className='flex items-center gap-10'>
            <a href='https://www.instagram.com/japa__global/'>
              <Image src={InstagramIcon} alt='JAPA Instagram Profile' />
            </a>
            <a href='https://www.linkedin.com/company/job-alerts-place-africa-japa/'>
              <Image src={LinkedinIcon} alt='JAPA Linkedin Profile' />
            </a>
          </div>
        </div>
      </div>
      <div className='h-[18px] w-full bg-[#D715D4]' />
    </footer>
  );
};

export default Footer;

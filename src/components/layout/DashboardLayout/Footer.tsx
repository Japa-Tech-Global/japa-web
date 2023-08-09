import Image from 'next/image';
import React from 'react';
import LogoImage from '@/assets/brand/logo-alt.png';
import FacebookLogo from '@/assets/icons/facebook.svg';
import TwitterLogo from '@/assets/icons/twitter.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import styles from '../styles.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className='pl-[45px] pr-[45px] bg-primary py-[25px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-y-20 items-center text-center text-white'>
          <Image src={LogoImage} alt='Afripie' />
          <Link href='/contact' className='text-lg'>
            Contact Us
          </Link>
          <Link href='/terms' className='text-lg'>
            Terms Of Use
          </Link>
          <Link href='/privacy-policy' className='text-lg'>
            Privacy Policy
          </Link>
          <Link href='#' className='text-lg'>
            Logout
          </Link>
        </div>
      </div>
      <div className='bg-[#000C20] py-[23px] flex items-center md:pl-[45px] w-full'>
        <div className='flex items-center justify-center w-full relative md:flex-row flex-col gap-5'>
          <div className='flex gap-4 md:absolute md:left-0'>
            <a href='#' target='_blank' rel='noreferrer'>
              <Image src={FacebookLogo} alt='Facebook' />
            </a>
            <a href='#' target='_blank' rel='noreferrer'>
              <Image src={TwitterLogo} alt='Facebook' />
            </a>
            <a href='#' target='_blank' rel='noreferrer'>
              <Image src={InstagramLogo} alt='Facebook' />
            </a>
          </div>
          <span className='text-white font-semibold text-center'>
            &copy; Copyright {new Date().getFullYear()} Afripie
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

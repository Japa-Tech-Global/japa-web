import Image from 'next/image';
import React from 'react';
import LogoImage from '../../assets/brand/logo-alt.png';
import FacebookLogo from '../../assets/icons/facebook.svg';
import TwitterLogo from '../../assets/icons/twitter.svg';
import InstagramLogo from '../../assets/icons/instagram.svg';
import styles from './styles.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className='pl-[45px] pr-[45px] bg-primary pt-14 pb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-20 items-start text-center md:text-left'>
          <Image src={LogoImage} alt='Afripie' />
          <div className='flex flex-col gap-2'>
            <span className={styles.footerHeader}>Create an account</span>
            <ul>
              <li className={styles.footerLink}>
                <Link href='/login'>Sign In</Link>
              </li>
              <li className={styles.footerLink}>
                <Link href='/register'>Sign Up</Link>
              </li>
              <li className={styles.footerLink}>
                <Link href='/about'>About Us</Link>
              </li>
              <li className={styles.footerLink}>
                <Link href='#'>Services</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <span className={styles.footerHeader}>Resources</span>
            <ul>
              <li className={styles.footerLink}>
                <Link href='#'>Our Partners</Link>
              </li>
              <li className={styles.footerLink}>
                <Link href='#'>Our Technology</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <span className={styles.footerHeader}>Support</span>
            <ul>
              <li className={styles.footerLink}>
                <Link href='/contact'>Contact Us</Link>
              </li>
              <li className={styles.footerLink}>
                <Link href='/terms'>Terms Of Use</Link>
              </li>
              <li className={styles.footerLink}>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
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

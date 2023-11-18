import React from 'react';
import navLinks from './navLinks';
import Link from 'next/link';
import PlayIcon from '@/assets/icons/home/play.svg';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { mainVideoLink } from '@/functions/variables';
import JapaLogo from '../../app/form/image/logo.svg'

const Navbar = () => {
  return (
    <nav className='h-fit w-full bg-white flex items-center justify-between px-primary gap-[45px]  py-4 md:py-[26px] sticky top-0 z-20 mt-2'>
      
        <Image src={JapaLogo} width={200} height={200} alt='Japa logo' />
      
      <div className='flex-2 items-center justify-center gap-8 hidden md:flex ml-10'>
       
      
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className='hover:border-b-4  hover:border-purple-600 hover:text-purple-500 text-2xl font-medium duration-700'>
            {link.label}
          </Link>
        ))}
      </div>
      <MobileMenu />
      <div className='flex-1 flex justify-end w-full'>
        <a
          className='border border-primary rounded-[5px] flex h-[40px] md:h-[62px] w-[209px] items-center justify-center gap-[11px] text-primary md:text-[21px] duration-300 hover:bg-primary hover:text-white group'
          href={mainVideoLink}
          target='_blank'
        >
          <span>Watch Video</span>
          <Image
            src={PlayIcon}
            alt='Play'
            className='h-5 w-auto md:h-auto object-contain group-hover:brightness-0 group-hover:invert duration-300'
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

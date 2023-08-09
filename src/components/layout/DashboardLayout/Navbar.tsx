import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoImage from '@/assets/brand/logo.png';
import BlackLogoImage from '@/assets/brand/logo-black.png';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <nav className='h-[80px] pl-[25px] pr-[25px] md:pl-[35px] md:pr-[35px] lg:pl-[45px] lg:pr-[45px] bg-[#FAFCFE]'>
      <div className='flex items-center justify-between h-full gap-5'>
        <Link href='/'>
          <Image src={BlackLogoImage} alt='Afripie' height={50} />
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;

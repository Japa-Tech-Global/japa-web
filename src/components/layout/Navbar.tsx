import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoImage from '../../assets/brand/logo.png';
import BlackLogoImage from '../../assets/brand/logo-black.png';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navbar({ navStyle }: { navStyle?: 'colored' | 'transparent' }) {
  return (
    <nav
      className='h-[80px] pl-[25px] pr-[25px] md:pl-[35px] md:pr-[35px] lg:pl-[45px] lg:pr-[45px]'
      style={{
        backgroundColor: navStyle === 'colored' ? '#070033' : '#FAFCFE',
      }}
    >
      <div className='flex items-center justify-between h-full gap-5'>
        <Link href='/'>
          {navStyle === 'colored' ? (
            <Image src={LogoImage} alt='Afripie' height={50} />
          ) : (
            <Image src={BlackLogoImage} alt='Afripie' height={50} />
          )}
        </Link>
        <MobileNav navStyle={navStyle} />
        <DesktopNav navStyle={navStyle} />
      </div>
    </nav>
  );
}

export default Navbar;

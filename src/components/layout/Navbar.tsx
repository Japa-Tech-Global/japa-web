import React from 'react';
import navLinks from './navLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='h-[70px] w-full bg-white flex items-center justify-center px-primary gap-[45px]'>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className='text-[21px]'>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

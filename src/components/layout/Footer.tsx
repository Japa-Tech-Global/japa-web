import React from 'react';
import Logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-[100px] px-primary pb-[70px] pt-10 border-t border-t-primary'>
      <div className='flex items-start justify-between flex-wrap'>
        <Image src={Logo} alt='JAPA' />
        <div className='flex flex-wrap gap-12'>
          <ul className='flex flex-col gap-5'>
            <p className='text-xl lg:text-3xl font-medium mb-5'>User</p>
            <li className='text-lg lg:text-2xl'>
              <Link href='/auth/login' className='hover:text-primary duration-300'>
                Login
              </Link>
            </li>
            <li className='text-lg lg:text-2xl'>
              <Link href='/auth/register' className='hover:text-primary duration-300'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className='font-medium text-lg lg:text-2xl mt-[100px]'>
        Copyright &copy; JAPA {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

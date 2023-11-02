import Link from 'next/link';
import navLinks from './navLinks';
import Image from 'next/image';

import Logo from '@/assets/brand/logo.svg';
import MobileMenu from '@/components/layout/MobileMenu';
import { IoMdNotificationsOutline  } from "react-icons/io"


const Navbar = () => {
  return (
    <nav className='h-fit w-full bg-white flex items-center justify-between px-primary gap-[45px] md:py-[20px] sticky top-0 z-20 border-b-2 border-gray-100'>
        <Image src={Logo} width={100} height={100} alt='JAPA ' className='mt-6 hidden sm:block' />
      <div className='flex-[50%] items-center justify-center gap-[3vw] hidden md:flex'>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className='justify-start text-[21px] hover:border-b-2 hover:border-purple-500 hover:text-purple-500 '>
            {link.label}
          </Link>
        ))}
      </div>
      <MobileMenu />
      <div className='flex  justify-around gap-5'>
          <IoMdNotificationsOutline  style= {{ fontSize: '40px'}}  />
          <div className='w-10 h-10 rounded-full bg-gray-300'> 

          </div>
      </div>
    </nav>

    
  );
};

export default Navbar;


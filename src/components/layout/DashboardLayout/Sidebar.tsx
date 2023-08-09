'use client';

import React from 'react';
import navLinks from './navLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='bg-[#F5F5F5CC] w-[25vw] hidden md:block min-h-[calc(100vh-70px)]'>
      <nav className='sticky top-[70px]'>
        <div className='flex flex-col px-[18px] py-[36px]'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.href}
                className={
                  isActive
                    ? 'px-[15px] py-[21px] rounded-[5px] text-lg bg-primary text-white flex items-center gap-5'
                    : 'px-[15px] py-[21px] rounded-[5px] text-lg bg-transparent hover:bg-[#623CD329] hover:!text-black duration-500 flex items-center gap-5'
                }
              >
                <Image src={link.icon} alt='Icon' className={isActive ? 'invert' : ''} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

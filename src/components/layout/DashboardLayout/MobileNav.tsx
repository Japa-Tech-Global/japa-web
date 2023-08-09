'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import navLinks from './navLinks';
import MenuIconWhite from '@/assets/icons/menu-white.png';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='relative'>
        <button onClick={() => setOpen(true)} className='flex items-center'>
          <Image src={MenuIconWhite} alt='Menu' className='w-6 invert' />
        </button>
        {open && (
          <nav
            className='rounded absolute right-0 top-7 bg-white w-40 z-30'
            style={{ boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.1)' }}
          >
            <ul className='flex flex-col'>
              {navLinks.map((item) => (
                <Link href={item.href} key={item.href}>
                  <li className='p-2 hover:bg-primary hover:text-white text-sm'>
                    {item.name}
                  </li>
                </Link>
              ))}
              <Link href='/login'>
                <li className='p-2 hover:bg-primary hover:text-white text-sm'>Logout</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </ClickAwayListener>
  );
}

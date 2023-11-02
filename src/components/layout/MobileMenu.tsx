'use client';
import React, { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';
import ClickAwayListener from 'react-click-away-listener';
import { NavMenuIcon } from '../icons/layout';
import navLinks from './navLinks';
import Link from 'next/link';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className='md:hidden' ref={parentRef}>
        <button className='relative' onClick={() => setOpen(true)}>
          <NavMenuIcon />
        </button>
        {open && (
          <nav className='rounded flex justify-center left--12 top-12 bg-white w-40 shadow-md'>
            <ul className='flex flex-col'>
              {navLinks.map((item) => (
                <Link href={item.href} key={item.href}>
                  <li className='p-2 hover:bg-primary hover:text-white text-sm'>
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default MobileMenu;

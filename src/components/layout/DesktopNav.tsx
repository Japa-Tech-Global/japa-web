import Button from '@/common/Button/Button';
import Link from 'next/link';
import React from 'react';
import navLinks from './navLinks';
import styles from './styles.module.css';

function DesktopNav({ navStyle }: { navStyle?: 'colored' | 'transparent' }) {
  return (
    <>
      <ul className='hidden md:flex items-center lg:gap-16 gap-3'>
        {navLinks.map((link) => (
          <li
            className={styles.navLink}
            key={link.name}
            style={{
              color: navStyle === 'colored' ? '#fff' : '#000',
            }}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className='hidden md:flex flex-row items-center gap-2 lg:gap-5'>
        <Link href='/register'>
          <Button
            className='!border-none'
            variant={navStyle === 'colored' ? 'outlined' : 'contained'}
          >
            Sign up
          </Button>
        </Link>
        <Link href='/login'>
          <Button variant={navStyle === 'colored' ? 'outlined' : 'contained'}>
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}

export default DesktopNav;

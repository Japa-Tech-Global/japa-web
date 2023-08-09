import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function AppLayout({
  children,
  navStyle = 'colored',
}: {
  children: React.ReactNode;
  navStyle?: 'colored' | 'transparent';
}) {
  return (
    <div className='relative'>
      <Navbar navStyle={navStyle} />
      <main className='min-h-screen bg-[#FAFCFE]'>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;

import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import UserBanner from './UserBanner';
import Sidebar from './Sidebar';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative'>
      <Navbar />
      <UserBanner />
      <div className='flex w-full'>
        <Sidebar />
        <main className='min-h-screen bg-[#FAFCFE] w-full p-10'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;

import Header from '@/components/about/Header';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';
import AppLayout from '@/components/layout/AppLayout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - About Us',
};

function AboutPage() {
  return (
    <AppLayout>
      <Header />
      <Mission />
      <Vision />
    </AppLayout>
  );
}

export default AboutPage;

import DashboardLayout from '@/components/layout/DashboardLayout';
import { hidePageFromRobots } from '@/functions/robotConfig';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Afripie - Dashboard',
  robots: hidePageFromRobots,
};

const DashboardSegmentLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardSegmentLayout;

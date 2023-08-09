'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import LoadingIndicator from '@/common/LoadingIndicator';
import StatusHintCard from '@/common/StatusHintCard';
import Table from '@/common/Table';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import EditPaymentForm from './EditPaymentForm';
import { PaymentMethodType } from '@/types/data';

const AllPaymentMethods = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [selected, setSelected] = useState<PaymentMethodType | undefined>(undefined);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get('/app/payment-methods');
      setAllData(response.data);
    } catch (error) {
      setAllData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const tableHeaders = [
    'accountName',
    'accountType',
    'bankRoutingABANumber',
    'accountNumber',
    'bankName',
    'action',
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-[18px] flex-wrap gap-5'>
        <h1 className='text-lg'>All Payment Methods</h1>
        <Link href='/dashboard/payment-method/new'>
          <Button className='!h-10 !w-fit'>Add Payment Method</Button>
        </Link>
      </div>
      <div className='w-full bg-[#D9D9D9] h-[2px]'>
        <div className='w-[182px] bg-primary h-[2px]' />
      </div>
      <StatusHintCard />
      <Table
        tableHeaders={tableHeaders}
        data={allData}
        loading={loading}
        tableAction={(data) => {
          setEditModal(true);
          setSelected(data);
        }}
      />
      <EditPaymentForm
        open={editModal}
        onClose={() => setEditModal(false)}
        refetch={getData}
        selected={selected}
      />
    </div>
  );
};

export default AllPaymentMethods;

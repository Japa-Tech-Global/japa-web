'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import Table from '@/common/Table';
import React, { useEffect, useState } from 'react';

const AllTransactions = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addModal, setAddModal] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get('/app/payees');
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
    'fullname',
    'email',
    'phone',
    'role',
    'isActive',
    'isVerified',
    '_id',
  ];

  return (
    <div>
      <h1 className='mb-[45px] text-2xl font-semibold'>My Transaction </h1>
      <div className='flex items-center justify-between mb-[18px] flex-wrap gap-5'>
        <h2 className='text-lg'>All Transactions</h2>
      </div>
      <div className='w-full bg-[#D9D9D9] h-[2px] mb-[26px]'>
        <div className='w-[182px] bg-primary h-[2px]' />
      </div>
      <Table tableHeaders={tableHeaders} data={allData} loading={loading} />
    </div>
  );
};

export default AllTransactions;

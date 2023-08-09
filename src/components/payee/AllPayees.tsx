'use client';

import { appAxios } from '@/api/axios';
import Button from '@/common/Button/Button';
import Table from '@/common/Table';
import React, { useEffect, useState } from 'react';
import PayeeForm from './PayeeForm';
import EditPayeeForm from './EditPayeeForm';
import { PayeeType } from '@/types/data';

const AllPayees = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selected, setSelected] = useState<PayeeType | undefined>(undefined);

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
    'payeeId',
    'firstName',
    'lastName',
    'nickName',
    'status',
    'action',
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-[18px] flex-wrap gap-5'>
        <h1 className='text-lg'>Payee List</h1>
        <Button className='!h-10 !w-fit' onClick={() => setAddModal(true)}>
          Add Payee
        </Button>
      </div>
      <div className='w-full bg-[#D9D9D9] h-[2px] mb-[26px]'>
        <div className='w-[182px] bg-primary h-[2px]' />
      </div>
      <Table
        tableHeaders={tableHeaders}
        data={allData}
        loading={loading}
        tableAction={(data) => {
          setEditModal(true);
          setSelected(data);
        }}
      />
      <PayeeForm open={addModal} onClose={() => setAddModal(false)} refetch={getData} />
      <EditPayeeForm
        open={editModal}
        onClose={() => setEditModal(false)}
        refetch={getData}
        selected={selected}
      />
    </div>
  );
};

export default AllPayees;

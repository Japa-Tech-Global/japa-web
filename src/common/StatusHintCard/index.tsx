import React from 'react';
import SuccessIcon from '@/assets/icons/status/success.svg';
import PendingIcon from '@/assets/icons/status/pending.svg';
import FailedIcon from '@/assets/icons/status/failed.svg';
import BlockedIcon from '@/assets/icons/status/blocked.svg';
import Image, { StaticImageData } from 'next/image';

interface StatusType {
  label: string;
  icon: StaticImageData;
}

const StatusHintCard = () => {
  const statuses: StatusType[] = [
    {
      label: 'Successful',
      icon: SuccessIcon,
    },
    {
      label: 'Failed',
      icon: FailedIcon,
    },
    {
      label: 'Pending',
      icon: PendingIcon,
    },
    {
      label: 'Blocked',
      icon: BlockedIcon,
    },
  ];
  return (
    <div className='mt-[18px] mb-[29px] flex w-full justify-end items-center gap-4'>
      {statuses.map((status) => (
        <div key={status.label} className='flex items-center gap-[6px]'>
          <Image src={status.icon} alt={status.label + ' icon'} />
          <span className='text-[10px]'>{status.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusHintCard;

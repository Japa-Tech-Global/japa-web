import React from 'react';
import { itemType } from './checklistItems';
import Checkbox from '@/common/Checkbox';

const ChecklistItem = ({ item, index }: { item: itemType; index: number }) => {
  return (
    <div className='flex items-center gap-[22px]'>
      <Checkbox id={item.title} />
      <span className='text-xl'>{`${index + 1}. ${item.title}`}</span>
    </div>
  );
};

export default ChecklistItem;

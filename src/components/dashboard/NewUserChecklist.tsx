import React from 'react';
import checklistItems from './checklistItems';
import ChecklistItem from './ChecklistItem';
import SystemMessage from './SystemMessage';

const NewUserChecklist = () => {
  return (
    <section>
      <h1 className='mb-[35px] text-primary max-w-[561px] text-xl md:text-2xl lg:text-3xl font-medium'>
        Complete the following to make your first bill payment.
      </h1>
      {/* Completion Meter */}
      <div className='w-full h-[2px] bg-[#D9D9D9A3]'>
        <div
          className='bg-primary h-[2px] duration-500'
          style={{
            width: '30%', //substitute for the completion percentage
          }}
        />
      </div>
      <div className='mt-16 flex flex-col gap-[31px]'>
        {checklistItems.map((item, index) => (
          <ChecklistItem key={item.title} item={item} index={index} />
        ))}
      </div>
      <SystemMessage />
    </section>
  );
};

export default NewUserChecklist;

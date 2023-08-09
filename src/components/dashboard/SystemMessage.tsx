import React from 'react';

const SystemMessage = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(128, 0, 215, 0.22)',
      }}
      className='mt-[100px] px-4 py-10 flex flex-col gap-5 w-full items-center text-white text-xl'
    >
      <h2>[SYSTEM MESSAGES]</h2>
      <p>
        Suspendisse est eget. Aliquam tristique tristique montes sit. Iaculis mauris
        dictum mauris enim egestas adipiscing mi condimentum lectus. Pulvinar fermentum
        orci non pellentesque bibendum amet leo volutpat gravida. Suspendisse sit eu vitae
        maecenas in risus.aculis mauris dictum mauris enim egestas adipiscing mi
        condimentum lectus. Pulvinar fermentum orci non pellentesque bibendum amet leo v.
      </p>
    </div>
  );
};

export default SystemMessage;

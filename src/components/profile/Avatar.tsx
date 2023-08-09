import React from 'react';
import UserIcon from '@/assets/icons/profile/user.svg';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
      <Image src={UserIcon} alt='Profile' className='cursor-pointer' />
    </div>
  );
};

export default Avatar;

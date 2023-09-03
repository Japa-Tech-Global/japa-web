import React from 'react';
import Button from '../Button/Button';
import { mainVideoLink } from '@/functions/variables';

const WatchVideoButton = () => {
  return (
    <a href={mainVideoLink} target='_blank'>
      <Button className='!h-[76px] !w-[200px]'>Watch Video</Button>
    </a>
  );
};

export default WatchVideoButton;

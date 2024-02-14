import React from 'react';
import Button from '../Button/Button';
// import { mainVideoLink } from '@/functions/variables';

const GetStartedButton = () => {
  return (
    <a href={'/onboarding'} >
      <Button className='!h-[76px] !w-[200px]'>Get started</Button>
    </a>
  );
};

export default GetStartedButton;

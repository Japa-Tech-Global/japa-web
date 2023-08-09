'use client';

import React, { useEffect } from 'react';
import CustomModal from '../CustomModal/CustomModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeFeedback } from '@/store/features/feedback';
import DoneIcon from '@/assets/icons/done.svg';
import FailedIcon from '@/assets/icons/failed.svg';
import Image from 'next/image';
import Button from '../Button/Button';

const FeedbackModal = () => {
  const { actionText, message, open, type } = useAppSelector((state) => state.feedback);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(closeFeedback());

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => closeModal(), 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <CustomModal
      modalState={open}
      closeModal={closeModal}
      shouldCloseOnOverlayClick={false}
    >
      <div className='flex flex-col items-center gap-[35px]'>
        <p
          className='text-xl font-normal text-center'
          style={{
            color: type === 'error' ? '#EB4335' : '#000',
          }}
        >
          {message}
        </p>
        {type === 'success' && <Image src={DoneIcon} alt='Successful' />}
        {type === 'error' && <Image src={FailedIcon} alt='Error' />}
        <Button
          className='!w-[441px] !max-w-full'
          style={{
            backgroundColor: type === 'success' ? '#8000D7' : '#EB4335',
          }}
          onClick={closeModal}
        >
          {actionText}
        </Button>
      </div>
    </CustomModal>
  );
};

export default FeedbackModal;

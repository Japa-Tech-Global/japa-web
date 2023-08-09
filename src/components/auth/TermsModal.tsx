import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import TermsText from './TermsText';

const TermsModal = ({
  open,
  onClose,
  markComplete,
  completed,
}: {
  open: boolean;
  onClose: () => void;
  markComplete: () => void;
  completed: boolean;
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const confirmReadContent = useCallback(() => {
    const element = document.getElementById('terms-div');

    if (element) {
      const closeToBottom =
        element.scrollHeight - (element.scrollTop + element.clientHeight) <= 5;
      if (closeToBottom) {
        markComplete();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inView) {
      confirmReadContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <CustomModal modalState={open} closeModal={onClose} shouldCloseOnOverlayClick={false}>
      <h1 className='text-2xl font-bold mb-[6px] text-center'>Terms and Conditions</h1>
      <p className='text-[#000E245E] text-xs text-center mb-12'>Updated 15 june 2023</p>
      <div
        className='max-h-[55vh] overflow-y-auto customized-scrollbar px-5'
        onScroll={confirmReadContent}
        ref={ref}
        id='terms-div'
      >
        <TermsText />
      </div>
      <div className='mt-5 flex justify-end'>
        <Button
          className='!w-[241px] !max-w-full'
          disabled={!completed}
          onClick={onClose}
        >
          OK
        </Button>
      </div>
    </CustomModal>
  );
};

export default TermsModal;

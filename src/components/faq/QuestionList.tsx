'use client';

import React, { useEffect, useRef, useState } from 'react';
import questions from './questions';
import autoAnimate from '@formkit/auto-animate';
import EmojiIcon from '@/assets/icons/faq/smiley.svg';
import { DropdownIcon } from '../icons';
import Image from 'next/image';

const QuestionList = () => {
  const [openQuestion, setOpenQuestion] = useState<number | undefined>(undefined);

  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <div className='mb-5 flex flex-col gap-[22px]'>
      {questions.map((question, index) => (
        <div
          className='rounded-[15px] flex flex-col border-[0.3px] border-[#5F5E5E] text-[#3D3D3D] bg-white shadow  text-lg lg:text-[22px]'
          key={index}
          ref={parentRef}
        >
          {/* Question */}
          <div
            className='py-[25px] pl-[15px] pr-[29px] flex items-center justify-between'
            onClick={() =>
              openQuestion === index ? setOpenQuestion(undefined) : setOpenQuestion(index)
            }
          >
            <div className='flex items-center gap-[26px] cursor-pointer'>
              <Image src={EmojiIcon} alt='' />
              <p>{question.question}</p>
            </div>
            <DropdownIcon
              className={
                openQuestion === index
                  ? 'duration-500 rotate-180'
                  : 'duration-500 rotate-0'
              }
            />
          </div>

          {/* Answer */}
          {openQuestion === index && (
            <div className='pt-0 p-[48px]'>{question.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;

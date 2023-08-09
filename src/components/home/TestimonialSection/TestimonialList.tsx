'use client';

import React from 'react';
import TestimonialCard from './TestimonialCard';
import ScrollContainer from 'react-indiana-drag-scroll';

const TestimonialList = () => {
  type testimony = {
    name: string;
    review: string;
    rating: number;
  };
  const testimonies: testimony[] = [
    {
      name: 'Mark chris',
      review: 'Discover our mobile app and get the best outcome of online.',
      rating: 1.5,
    },
    {
      name: 'Mark chris',
      review: 'Discover our mobile app and get the best outcome of online.',
      rating: 3.5,
    },
    {
      name: 'Mark chris',
      review: 'Discover our mobile app and get the best outcome of online.',
      rating: 4.5,
    },
    {
      name: 'Mark chris',
      review: 'Discover our mobile app and get the best outcome of online.',
      rating: 5,
    },
  ];

  return (
    <ScrollContainer className='lg:max-w-[50%] flex items-center gap-5 lg:gap[43px] overflow-y-hidden'>
      {testimonies.map((testimony, index) => (
        <TestimonialCard key={index} testimony={testimony} />
      ))}
    </ScrollContainer>
  );
};

export default TestimonialList;

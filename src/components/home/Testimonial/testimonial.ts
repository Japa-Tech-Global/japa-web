import { StaticImageData } from 'next/image';
import testimony1Image from '@/assets/images/home/testimony/testimony1.svg';
import testimony2Image from '@/assets/images/home/testimony/testimony2.svg';
import testimony3Image from '@/assets/images/home/testimony/testimony3.svg';

interface Testimony {
  image: StaticImageData;
  content: string;
}

const testimonies: Testimony[] = [
  {
    image: testimony1Image,
    content:
      'Include testimonials or quotes from proud African users who have achieved global success through Japa',
  },
  {
    image: testimony2Image,
    content:
      'Include testimonials or quotes from proud African users who have achieved global success through Japa',
  },
  {
    image: testimony3Image,
    content:
      'Include testimonials or quotes from proud African users who have achieved global success through Japa',
  },
];

export default testimonies;

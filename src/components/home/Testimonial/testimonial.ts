import { StaticImageData } from 'next/image';
import testimony1Image from '@/assets/images/home/testimony/testimony1.svg';
import testimony2Image from '@/assets/images/home/testimony/testimony2.svg';
import testimony3Image from '@/assets/images/home/testimony/testimony3.svg';

interface Testimony {
  image: StaticImageData;
  content1: string;
  content2: string;
  name: string;
}

const testimonies: Testimony[] = [
  {
    image: testimony1Image,
    content1: 'Japa is a platform that has helped me understand what being informed is.',
    content2:
      'I got to understand that I don’t have to settle for less. I could keep going till I get to the destination i desire',
    name: 'Ogala',
  },
  {
    image: testimony2Image,
    content1: 'Got an offer for this role that was posted on this forum. ',
    content2: 'Thank you to the leaders of this platform, more blessings',
    name: 'Barr Rachael Ogbebor',
  },
  {
    image: testimony3Image,
    content1:
      'I just want to say thank you to the Japa team for the exclusive role I got',
    content2: 'I have started working and it can only get better from here',
    name: 'Jennifer',
  },
];

export default testimonies;

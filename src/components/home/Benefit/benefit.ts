import { StaticImageData } from 'next/image';
import genericImage from '@/assets/icons/benefits/common/generic.svg';
import opportunityImage from '@/assets/icons/benefits/common/opportunity.svg';
import skillImage from '@/assets/icons/benefits/common/skill.svg';
import careerImage from '@/assets/icons/benefits/japa/career.svg';
import communityImage from '@/assets/icons/benefits/japa/community.svg';
import marketplaceImage from '@/assets/icons/benefits/japa/marketplace.svg';
import professionalImage from '@/assets/icons/benefits/japa/professional.svg';
import skillImageJAPA from '@/assets/icons/benefits/japa/skill.svg';

export interface Benefit {
  image: StaticImageData;
  label: string;
}

export const commonBenefits: Benefit[] = [
  {
    label: 'Limited Skills',
    image: skillImage,
  },
  {
    label: 'Missed Opportunities',
    image: opportunityImage,
  },
  {
    label: 'Generic Job Search',
    image: genericImage,
  },
];

export const japaBenefits: Benefit[] = [
  {
    label: 'Skill Enhancement',
    image: skillImageJAPA,
  },
  {
    label: 'Professional CV Templates',
    image: professionalImage,
  },
  {
    label: 'Exclusive Remote Job Marketplace',
    image: marketplaceImage,
  },
  {
    label: 'Personalized Career Guidance',
    image: careerImage,
  },
  {
    label: 'Supportive Community',
    image: communityImage,
  },
];

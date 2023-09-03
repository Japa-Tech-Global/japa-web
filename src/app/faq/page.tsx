import Button from '@/common/Button/Button';
import AppLayout from '@/components/layout/AppLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NewsImage from '@/assets/images/faq/news.webp';
import QuestionList from '@/components/faq/QuestionList';

const FAQPage = () => {
  return (
    <AppLayout>
      <div className='px-primary'>
        <header className='faq-header-bg w-full h-[230px] items-center flex justify-center text-[30px] lg:text-[45px] text-center text-white rounded-[15px]'>
          <h1>FAQ</h1>
        </header>
        <p className='text-lg lg:text-[22px] text-[#3D3D3D] mb-[52px] mt-[44px]'>
          Lorem ipsum dolor sit amet consectetur. Volutpat semper quis elementum praesent
          donec cras laoreet et penatibus. Mattis faucibus maecenas scelerisque purus nisl
          rhoncus non ac. Amet erat viverra ut urna lectus nibh cursus tellus elit. Congue
          tempor odio eu volutpat amet egestas. Iaculis amet natoque aliquet ligula est
          orci vitae. Nulla nisl auctor nunc a aliquet hendrerit sed pellentesque auctor.
        </p>
        <QuestionList />
        <div className='pt-[89px] faq-bg'>
          <h2 className='font-medium text-[25px] lg:text-[40px] mb-[84px]'>
            Stay up to date with JAPA news
          </h2>
          <div className='relative'>
            <Image src={NewsImage} alt='Blog' className='w-full h-full object-cover' />
            <Link href='/blog' className='absolute bottom-9 right-[60px]'>
              <Button className='!h-[76px] !w-[200px]'>Read our Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FAQPage;

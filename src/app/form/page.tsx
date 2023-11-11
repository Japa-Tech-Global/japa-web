// @ts-nocheck

import Image from 'next/image';
import Formimage from './image/formBox.svg'
import FormLogo from './image/logo.svg'
import Input from './InputData'
import Service from './Service';
import Plan from './Dropdown';
import Button from './Button';
import Price from './Price';

const Form = () => {
  return (
    <main className='w-full h-screen grid grid-cols-2'>
        <div className='relative bg-white'>
            <Image
              src={Formimage}
              width={600}
              height={500}
              alt='Form Image'
              className='w-full'
            />
        </div>

        <div className='px-primary'>
          <div className='mx-auto mb-4 lg:w-[580px] md:w-full'>
              <div className='flex justify-center'>

                <Image
                  src={FormLogo}
                  width={100}
                  height={100}
                  alt='Form Logo'
                  className='lg:w-48 md:w-30 my-8 mt-36' 
                />
              </div>
              <p className='lg:text-2xl text-lg text-center'>Ready to Unlock your CV&apos;s full Potential</p>
              <p className='pl-4 text-lg my-8'><span className='text-red-600'>*</span>Indicates Required questions</p>
              <Input />
              <Service />
              <div className='mb-12 max-w-[700px]'>
                <p>Select a plan <span className='text-red-600'>*</span></p>
                <Plan />
                <Price  price={10000}/>
              </div>


              <Button />
          </div>

        </div>
        

    </main>
  )
}

export default Form;
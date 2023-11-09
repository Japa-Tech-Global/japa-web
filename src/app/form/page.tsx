// @ts-nocheck

import Image from 'next/image';
import Logo from './image/logo.svg'
import FormBox from './image/formBox.svg'
// import Service from './service';
import Input from './Input'
import Service from './service';
import Plan from './plan';
import Button from './Button';
import Price from './price';

const Form = () => {
  return (
    <main className='w-full h-screen flex gap-12'>
        <div className='relative bg-white flex-initial'>
            <Image 
                src={FormBox}
                width={500}
                height={500}
                alt='Japa&apos;s CV Revamp Form'
                priority    
                className=''
            /> 
        </div>

        <div className='px-primary flex-1 flex flex-col justify-center'>
          <div className='mx-auto mb-12 max-w-[700px]'>
              <div className='flex justify-center'>
                <Image 
                    src={Logo}
                    width={100}
                    height={100}
                    alt='logo'
                    priority
                    className='mt-[80rem] mb-8 w-32 lg:w-44'
                  />

              </div>
              <p className='lg:text-2xl text-lg'>Ready to Unlock your CV&apos;s full Potential</p>
              <p className='text-lg my-8'><span className='text-red-600'>*</span>Indicates Required questions</p>
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
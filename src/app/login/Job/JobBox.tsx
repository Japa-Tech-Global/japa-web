import Image from 'next/image'
import simCard from "./Image/simCard.svg"
import header from '../../../assets/backgrounds/about-header.webp'
import { CiLocationOn } from "react-icons/ci";

const JobBox = () => {
  return (
    <div className='flex gap-4 bg-[#fff] text-gray-500 p-8 rounded-xl border-2 border-gray-100 mb-4' >
      <Image 
          src={header}      
          alt="sample"
          width={100} 
          height={100}    
          className='h-20 rounded-md '
      />
      <div className='grid grid-col-3  w-full'>
            <p className='font-semibold text-blue-500'>3D Artist and UX Designer</p>
          <div>
          <div className='flex'>
            <p className='font-semibold'>JAPA</p>
            <Image src={simCard} width={30} height={30} alt='simCard' className='flex ml-[55rem]' />
          </div>

          </div>
          <div className='w-full flex gap-3'>
             <CiLocationOn className="w-5 h-5 font-bold text-yellow-400" />
             <p>Gwaggwalada, Abuja</p>
             <p className='ml-8'>Remote</p>
          </div>
         
      </div>
      {/* <div>
          <p>Posted 3 Days ago</p>
          <p>Remote</p>
      </div> */}
    </div>
  )
}

export default JobBox;
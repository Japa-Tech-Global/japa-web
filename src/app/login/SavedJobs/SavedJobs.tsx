import Image from 'next/image'
import resume from './Images/resume.svg'
import check from "./Images/check.svg"
import applications from "./Images/applications.svg"
import savedJobs from "./Images/savedJobs.svg"
import pic from './Images/pic.svg'

const SavedJobs = () => {
  return (
    <div className='w-1/6  text-center max-h-[10rem] border border-gray-300 rounded-xl'>
        <div className='flex gap-8 p-5 items-center border-b'>
          <Image src={check} width={20} height={10}  alt='check'/>
          <p className='text-center border-gray-200'>Saved Jobs</p>
        </div>
        <div className='flex  gap-8 p-3 items-center border-b'>
           <Image src={applications} width={20} height={10}  alt='applications'/>
          <p className=' border-gray-200'>Applications</p>
        </div>        
        <div className='flex gap-8 p-3 mb-2 items-center'>
          <Image src={resume} width={20} height={10}  alt='resume'/>
          <p className='text-center border-gray-200'>Resume</p>
        </div>
        <Image 
          src={pic}
          width={100}
          height={100}
          alt='buiild resume'
          className='w-full'


        />
    </div>
  )
}

export default SavedJobs

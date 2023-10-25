import JobBox from "./JobBox"
import Link from "next/link";

const JobSection = () => {
  return (
    <div className="h-90 w-5/6 bg-[#fbfbfb] border-2 border-gray-200 rounded-xl">
      <div className='px-primary p-8'>
        <h2 className='font-semibold text-xl'>Recommended Jobs</h2>
        <p className='pb-4 text-gray-500'>Based on your Profile and Search History</p>
        <JobBox  />
        <JobBox />
        <JobBox/>
        <JobBox/>
      </div>
      <div className="text-center my-8  border-t-2 border-gray-200"><Link href='/' className=" text-purple-800 text-sm underline font-bold ">See more...</Link></div> 
    </div>       

  )
}

export default JobSection
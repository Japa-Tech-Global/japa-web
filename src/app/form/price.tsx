//@ts-nocheck
import { AiOutlineCheck } from 'react-icons/ai';





const Price = ({price}) => {
  
  return (
    <div>
        <div className="flex flex-col">
            <div className="flex">
                <p className='text-2xl'>Price:</p>
                <h2 className="mb-4 pl-4 font-bold text-2xl">#{price}</h2>
            </div>
            <div className="flex flex-col">
                <div className='flex gap-2'>
                  <AiOutlineCheck className="text-green-500 text-xl"/>
                  <p>Written to Fit the preferred Job</p>
                </div>
                <div className='flex gap-2'>
                  <AiOutlineCheck className="text-green-500 text-xl"/>
                  <p>Keyword Optimization</p>
                </div>
                <div className='flex gap-2'>
                  <AiOutlineCheck className="text-green-500 text-xl"/>
                  <p>ATS Scanning</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price;
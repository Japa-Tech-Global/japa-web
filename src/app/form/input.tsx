//@ts-nocheck
import React from 'react'
import Users from './data/data'

const input = () => {
  return(
    <div className='w-full max-w-[810px] flex justify-center flex-col items-center mx-auto px-primary '>
        {
            Users.map((user) => {
                return(
                    <div key={user.id} className='max-w-[810px] w-full mb-16 p-8 bg-white  border-spacing-2 rounded-lg shadow-md'>
                        <p>{user.name} <span className='text-red-600'>*</span></p>
                        <input 
                            type="text" 
                            placeholder='Your answer'
                            className="max-w-[810px] mt-16 focus:outline-none  w-full border-b-2 border-gray-500 border-t-0 active:border-none"
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default input
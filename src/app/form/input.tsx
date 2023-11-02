//@ts-nocheck
import React from 'react'
import Users from './data/data'

const input = () => {
  return(
    <div className='w-full flex justify-center flex-col items-center mx-auto'>
        {
            Users.map((user) => {
                return(
                    <div key={user.id} className='w-full mb-8 p-8 bg-white  border-spacing-2 rounded-lg shadow-md'>
                        <p>{user.name} <span className='text-red-600'>*</span></p>
                        <input 
                            type="text" 
                            placeholder='Your answer'
                            className="w-full mt-8 focus:outline-none border-b-2 border-gray-500 border-t-0 active:border-none"
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default input
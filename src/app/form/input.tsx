//@ts-nocheck
import React from 'react'
import Users from './data/data'

const Input = () => {
  return(
    <div className='flex flex-col'>
        {
            Users.map((user) => {
                return(
                    <div key={user.id} className='mb-4 p-4 bg-white'>
                        <p className='font-bold'>{user.name} <span className='text-red-600'>*</span></p>
                        <input 
                            type="text" 
                            placeholder={user.placeholder}
                            className="w-full mt-4 py-2 px-6 border-2 border-gray-500 items-left rounded-lg"
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Input
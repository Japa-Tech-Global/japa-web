"use client"
//@ts-nocheck

import { useState } from 'react'
import React from 'react'

const Plan = () => {

  const items: {value, label} = [
    {value: "instagram", label: "Basic"},
    {value: "linkedin", label: "Plus"},
    {value: "friend", label: "Pro"},
    {value: "japa community", label: "Premium"},
    {value:"other", label:"Other:" }
]

  const [value, setValue] = useState(null)

  return (
    <div className="bg-white p-8 w-full max-w-[810px] mb-8 rounded-lg">
      <p className="text-xl mb-8">What Plan do you want?</p>  
        {
            items.map((item) => (
                <div key={item.value} className="flex gap-4 my-4">
                    <input 
                        type="radio" 
                        name="sevice"
                        value={item.value}
                        id={item.value}
                        checked={value === item.value}
                        onChange={e => setValue(e.target.value)}
                        className="bg-gray-400 rounded transform scale-[2]"
                    />
                    <label htmlFor={item.vlue}>{item.label}</label>
                </div>
            ))
        }
      </div>
  )
}

export default Plan;

//@ts-nocheck

"use client"
import { useState } from 'react'
import React from 'react'


type StateChangeCallback = (state: any) => null


const Plan: React.FC<{ onPlanChange: StateChangeCallback }> = ({ onPlanChange }) => {

  const items: { value: string, label: string } = [
    { value: "basic", label: "Basic", id: '654467d28edaa85b611ab1b3' },
    { value: "plus", label: "Plus", id:'654468f18edaa85b611ab1bb' },
    { value: "pro", label: "Pro", id: '654468f18edaa85b611ab1b9' },
    { value: "premium", label: "Premium", id: '654468f18edaa85b611ab1bb' },
    // { value: "other", label: "Other", }
  ]

  const [value, setRadioValue] = useState(null)


  return (
    <div className="bg-white p-8 w-full max-w-[810px] mb-8 rounded-lg">
      <p className="text-xl mb-8">What Plan do you want?</p>
      {
        items.map((item) => (
          <div key={item.value} className="flex gap-4 my-4">
            <input
              type="radio"
              name="plan"
              value={item.value}
              id={item.value}
              checked={value === item.value}
              onChange={e => {
                setRadioValue(item.value)
                onPlanChange({ planTypeId: item.id, planTypeName: item.label });
              }}
              className="bg-gray-400 rounded transform scale-[2]"
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))
      }
    </div>
  )
}

export default Plan;

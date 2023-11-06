//@ts-nocheck
"use client"
import { useState } from "react"

type StateChangeCallback = (state: any) => null

const Service: React.FC<{ onServiceChange: StateChangeCallback }> = ({ onServiceChange }) => {
    const items: { value, label } = [
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "Linkedin" },
        { value: "friend", label: "Friend" },
        { value: "japa community", label: "Japa Community" },
        { value: "other", label: "Other:" }
    ]
    const [value, setValue] = useState(null)


    return (
        <div className="bg-white p-8 w-full max-w-[810px] mb-8 rounded-lg">
            <p className="text-xl mb-8">How did you hear about our Service?</p>
            {
                items.map((item) => (
                    <div key={item.value} className="flex gap-4 my-4">
                        <input
                            type="radio"
                            name="sevice"
                            value={item.value}
                            id={item.value}
                            checked={value === item.value}
                            onChange={e => {
                                setValue(item.value)
                                onServiceChange({ howYouHeardAboutUs: item.value })
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

export default Service;
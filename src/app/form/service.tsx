//@ts-nocheck
"use client"
import { useState } from "react"

const Service = () => {
    const items: {value, label} = [
        {value: "instagram", label: "Instagram"},
        {value: "linkedin", label: "Linkedin"},
        {value: "friend", label: "Friend"},
        {value: "japa community", label: "Japa Community"},
        {value:"other", label:"Others" }
    ]
    const [value, setValue] = useState(null)


    console.log({value});
    

    return (
        <div className="bg-white p-8 w-full max-w-[810px] rounded-lg">
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

export default Service;
//@ts-nocheck

"use client"

import { useState } from "react";
import { Users } from "./users";
import Navbar from "./Navbar";
import { SearchIcon,   } from '@heroicons/react/outline';
import { CiLocationOn } from "react-icons/ci";


export default function Job(){
    const [query, setQuery] = useState("");

    console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
    
    return (
        <main className=""> 
           <Navbar />
            <div className="flex  mt-5 relative">
                <h1 className="w-50 flex items-center px-primary" >Search Jobs</h1>
                <div className="flex justify-around gap-5">
                    <div className="flex w-2/5  items-center text-gray-400  ">
                        <SearchIcon className="w-5 h-5 text-gray-500  absolute ml-3 focus-within:text-gray-600 pointer-events-none" />
                        <input 
                        type="text" 
                        name="searchTitle" 
                        placeholder="Search by Title" 
                        onChange={((e) => setQuery(e.target.value))}
                        className="w-full pr-3 pl-10  py-2 text-[#212d44]  border border-gray-100 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 " 
                        />    
                    </div>
                    <div className="w-3/5 flex gap-5 items-center text-gray-400  ">
                        <CiLocationOn className="w-5 h-5 text-gray-500  absolute ml-3 focus-within:text-gray-600 pointer-events-none" />
                        <input 
                        type="text" 
                        name="searchLocation" 
                        placeholder="Search by Location" 
                        onChange={((e) => setQuery(e.target.value))}
                        className="pr-3 pl-10  py-2 px-3  text-[#212d44]  border border-gray-100 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500  focus:ring-2" 
                        
                        />    
                    </div>
                    <button className="px-10 bg-purple-500 rounded-md border-none text-white"> 
                        Search
                    </button>

                </div>
            </div>
            {/* <ul className="p-0 list-none text-center">
                    {Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
                        <li key={user.id} className="mb-5 text-xl text-[#444]">
                            {user.first_name}
                        </li>
                    ))}
                </ul> */}
        </main>
    )
}

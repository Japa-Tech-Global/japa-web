//@ts-nocheck

"use client"

import { Users } from "./users";

import Navbar from "./Navbar/Navbar";
import SearchInput from "./Navbar/SearchInput";
import JobSection from "./Job/JobSection";
import SavedJobs from "./SavedJobs/SavedJobs";
import Link from "next/link";


export default function Job(){

    console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
    
    return (
        <main> 
            <Navbar />
            <SearchInput />
            <div className="flex gap-4 px-primary mt-8 mb-16">
                    <JobSection />
                    <SavedJobs />         
            </div>
           

            <div className="flex gap-4 px-primary mt-8">
              <JobSection/>
            </div>
        </main>
    )
}
            {/* <ul className="p-0 list-none text-center">
                    {Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
                        <li key={user.id} className="mb-5 text-xl text-[#444]">
                            {user.first_name}
                        </li>
                    ))}
                </ul> */}
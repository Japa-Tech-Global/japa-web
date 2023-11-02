//@ts-nocheck

"use client"

import { Users } from "./users";

import Navbar from "./Navbar/Navbar";

import JobSection from "./Job/JobSection";
import SavedJobs from "./SavedJobs/SavedJobs";
import Link from "next/link";
import SearchInput from "./Navbar/SearchInput";


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

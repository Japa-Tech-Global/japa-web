import { SearchIcon,   } from '@heroicons/react/outline';
import { CiLocationOn } from "react-icons/ci";
import { useState } from 'react'



const SearchInput = () => {
    const [query, setQuery] = useState("");

  return (
    <div className="grid px-primary grid-cols-[max-content,1fr,2fr,max-content]  gap-3 mt-5  border-b-2 border-gray-100 md:py-[20px]">
        <h3 className="flex items-center pl-3" >Search Jobs</h3>
        <div className="flex flex-1 items-center text-gray-400  ">
            <SearchIcon className="w-5 h-5 text-gray-500  absolute ml-3 focus-within:text-gray-600 pointer-events-none" />
            <input 
            type="text" 
            name="searchTitle" 
            placeholder="Search by Title" 
            onChange={((e) => setQuery(e.target.value))}
            className="w-full pr-3 pl-10 py-2 text-[#212d44]  border border-gray-100 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500 " 
            />    
        </div>
        <div className="bg-green-500 flex flex-1 items-center text-gray-400 ">
            <CiLocationOn className="w-5 h-5 text-gray-500  absolute ml-3 focus-within:text-gray-600 pointer-events-none" />
            <input 
            type="text" 
            name="searchLocation" 
            placeholder="Search by Location" 
            onChange={((e) => setQuery(e.target.value))}
            className="w-full pr-3 pl-10  py-2 px-3  text-[#212d44]  border border-gray-100 rounded-md border-none ring-2 ring-gray-300 focus:ring-gray-500  focus:ring-2" 
            
            />    
        </div>
        <button className="w-40 px-10 bg-purple-500 rounded-md border-none text-white mr-36"> 
            Search
        </button>

</div>
  )
}

export default SearchInput
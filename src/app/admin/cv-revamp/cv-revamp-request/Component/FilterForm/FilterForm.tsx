import React from "react";
import { CiFilter } from "react-icons/ci";

export const FilterForm = () => {
  return (
    <div>
      <form className="px-4 flex items-center ">
        <div className="relative flex items-center">
          <CiFilter className="absolute w-6 h-6 text-gray-300 mx-3" />
          <input
            type="text"
            placeholder="Filter"
            className="w-1/2 py-3 px-12 text-gray-300 text-sm border border-gray-300 rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

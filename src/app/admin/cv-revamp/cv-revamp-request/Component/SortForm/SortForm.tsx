import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export const SortForm = () => {
  return (
    <div>
      <form className="w-full">
        <div className="">
          <select
            placeholder="Sort A-Z"
            className="py-3 pr-4 text-sm text-gray-300 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          >
            <option>Sort A-Z</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </form>
    </div>
  );
};

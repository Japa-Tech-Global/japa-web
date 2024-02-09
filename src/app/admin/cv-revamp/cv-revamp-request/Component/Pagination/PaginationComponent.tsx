"use client";
// import { Pagination } from "flowbite-react";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PaginationComponent = () => {
  let [num, setNum] = useState(1);

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];
  return (
    <div className="flex bg-white rounded-lg">
      <button className="h-12 border-2  px-4 rounded-l-lg flex items-center border-[#7D30EE] w-12 group hover:bg-[#7D30EE] hover:text-white">
        <MdChevronLeft className="text-[#7D30EE] group-hover:text-white text-2xl " />
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          className="h-12 border-2 text-[#7D30EE] border-[#7D30EE] w-12 hover:bg-[#7D30EE] hover:text-white mx-1 rounded-md "
        >
          {pg.page}
        </button>
      ))}
      <button className="h-12 border-2  px-4 rounded-r-lg flex justify-end items-center border-[#7D30EE] w-12 group hover:bg-[#7D30EE] hover:text-white">
        <MdChevronRight className="text-[#7D30EE] group-hover:text-white text-2xl" />
      </button>
    </div>
  );
};
export default PaginationComponent;

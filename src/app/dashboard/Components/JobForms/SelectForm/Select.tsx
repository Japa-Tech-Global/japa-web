"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

interface SelectProps {
    label?:string;
    placeholder?:string;
}
export default function Select({label, placeholder}:SelectProps) {
  const [options, setOptions] = useState(["items1", "items2"]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="relative  w-full">
        <label>{label}</label>
      <div
        onClick={handleOpen}
        tabIndex={0}
        className="w-full py-3 flex items-center justify-between border-2 border-gray-400 rounded-md px-3 cursor-pointer "
      >
        <p className="text-sm text-gray-400">{placeholder}</p>
        <MdKeyboardArrowDown className="text-sm text-black" />
      </div>
      {open && (
        <div className="absolute top-[110%] left-0 w-full max-h-[320px] p-3 rounded-md border-2 border-gray-400 z-10 bg-white">
          {options.map((option) => (
            <p key={option} className="text-sm text-black py-2 cursor-pointer ">
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { FaBell } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

const Header = () => {
  return (
    <div className="border-b border-grey-200 h-[5rem] shadow-sm fixed w-full top-0 ">
      <div className="flex justify-end items-center gap-4 pl-[18.2rem] py-6 pr-[2rem]">
        <FaBell className="text-black text-xl" />
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-gray-400 border-gray-300 text-center text-white font-bold flex justify-center items-center">
            W
          </div>
          <RxCaretDown />
        </div>
        <div className="">
          <p className="font-bold text-sm">Tofunmi</p>
          <p className="text-xs">Tofunmi@japatalent.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

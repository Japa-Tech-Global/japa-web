"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { TiShoppingBag } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import JapaLoogo from "../../assets/shapes/JapaLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { useSide, useSideUpdate } from "./SideContext";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoBriefcase } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { SlNote } from "react-icons/sl";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";



export function Sidebar() {
  const [open, setOpen] = useState(false);

  const currtState = useSide();
  const updateedState = useSideUpdate();

  const togleMenu = () => {
    setOpen(!open);
  };
  return (
    <aside
      className={`absolute left-0 top-0 z-50 flex h-screen w-[18rem] flex-col overflow-y-hidden bg-[#f5f5f5] duration-300 ease-linear ${
        currtState ? "w-[18rem]" : "w-[80px]"
      } `}
    >
      <nav className="flex justify-between gap-4 px-4 py-8 lg:py-6 border-b border-gray-300 overflow-hidden">
        <Link href="/">
          <Image
            src={JapaLoogo}
            alt="Japa Logo"
            width={80}
            height={80}
            className={`overflow-hidden transition-all flex justify-center ${
              currtState ? "w-20" : "w-0"
            }`}
          />
        </Link>

        <button onClick={updateedState} className="p-2 rounded-lg ">
          {currtState ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </nav>

      <div
        className={`flex flex-col items-center duration-300 ease-linear cursor-pointer overflow-y-hidden`}
      >
        <nav className={`mt-5 py-4 px-4 lg:mt-9 lg:px-6`}>
          <ul className="mb-16 flex flex-col gap-2">
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
              <MdOutlineDashboardCustomize size={30} />
              <div
                className={` ${currtState ? "w-full" : "hidden"} text-[20px]`}
              >
                Dashboard
              </div>
            </li>
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
              <button
                onClick={togleMenu}
                className="flex flex-col gap-2 items-center"
              >
                <div className="flex gap-2 items-center">
                  <GoBriefcase size={25} />
                  <div
                    className={`flex gap-2 items-center ${
                      currtState ? "w-full" : "hidden"
                    }`}
                  >
                    Job Posting
                    <RxCaretDown size={15} />

                  </div>
                </div>
                <ul className="flex flex-col gap-4 text-left text-sm">
                  {open && (
                    <>
                      <li className="flex items-center gap-2">
                        <CgAddR siz />
                        Post New Job
                      </li>
                      <li className="flex items-center gap-2">
                        <TiShoppingBag size={"1rem"} />
                        Job
                      </li>
                      <li className="flex items-center gap-2 ">
                        <TfiWrite size={"1rem"} />
                        Draft
                      </li>
                    </>
                  )}
                </ul>
              </button>
            </li>
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
              <FiUser size={30} />
              <div className={` ${currtState ? "w-full" : "hidden"}`}>
                users
              </div>
            </li>
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
              <SlNote size={25} />
              <div className={` ${currtState ? "w-full" : "hidden"}`}>
                Cv Revamp
              </div>
            </li>
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
              <GrUserAdmin size={30} />

              <div className={` ${currtState ? "w-full" : "hidden"}`}>
                Admins
              </div>
            </li>
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
              <HiOutlineBuildingLibrary size={30} />
              <div className={` ${currtState ? "w-full" : "hidden"}`}>
                Companies
              </div>
            </li>
          <hr />
          </ul>
          <ul className="mb-16 flex flex-col gap-2">
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
            <IoSettingsOutline size={30}/>
              <div className={` ${currtState ? "w-full" : "hidden"}`}>
                Settings
              </div>
            </li>
            <li className="relative flex items-center gap-4 text-[20px] mb-8">
            <IoIosHelpCircleOutline size={30}/>

              <div className={` ${currtState ? "w-full" : "hidden"}`}>Help</div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

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
  const [active, setActive] = useState(false);
  const currtState = useSide();
  const updateedState = useSideUpdate();

  const togleMenu = () => {
    setOpen(!open);
  };

  const activeNav = () => {
    setActive(true);
  };

  return (
    <aside
      className={`absolute left-0 top-0 z-50 flex h-screen  flex-col overflow-y-hidden bg-white border border-1 duration-300 ease-linear ${
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
            <li className="relative flex items-center gap-4 mb-5 hover:bg-[#F2EAFD]  py-2 rounded-r-full">
              <MdOutlineDashboardCustomize size={25} />
              <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                Dashboard
              </div>
            </li>
            <li className="relative flex items-center gap-4  mb-5 hover:bg-[#F2EAFD] py-2 rounded-r-full ">
              <button
                onClick={togleMenu}
                className="flex flex-col gap-2 items-center"
              >
                <div className="flex gap-2 items-center">
                  <GoBriefcase size={25} />
                  <div
                    className={`flex gap-2 items-center ${
                      currtState ? "w-full" : "hidden text-md"
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
                        <CgAddR />
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
            <li className="relative flex items-center gap-4  mb-5 hover:bg-[#F2EAFD] py-2 rounded-r-full ">
              <FiUser size={25} />
              <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                users
              </div>
            </li>
            <Link href={"/dashboard/cv-revamp/cv-revamp-request/"}>
              <li className="relative flex items-center gap-4  mb-5 hover:bg-[#F2EAFD] py-2  rounded-r-full">
                <SlNote size={25} />
                <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                  Cv Revamp
                </div>
              </li>
            </Link>
            <li className="relative flex items-center gap-4 mb-5 hover:bg-[#F2EAFD] py-2 rounded-r-full">
              <GrUserAdmin size={25} />

              <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                Admins
              </div>
            </li>
            <li className="relative flex items-center gap-4  mb-5 hover:bg-[#F2EAFD] py-2 rounded-r-full">
              <HiOutlineBuildingLibrary size={25} />
              <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                Companies
              </div>
            </li>
            <hr />
          </ul>
          <ul className="mb-16 flex flex-col gap-2">
            <Link href="/dashboard/settings">
              <li className="relative flex items-center gap-4 mb-5 hover:bg-[#F2EAFD] py-2 rounded-r-full">
                <IoSettingsOutline size={25} />
                <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                  Settings
                </div>
              </li>
            </Link>

            <li className="relative flex items-center gap-4  mb-5 hover:bg-[#F2EAFD] py-2 rounded-r-full">
              <IoIosHelpCircleOutline size={25} />

              <div className={` ${currtState ? "w-full" : "hidden"} text-md`}>
                Help
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

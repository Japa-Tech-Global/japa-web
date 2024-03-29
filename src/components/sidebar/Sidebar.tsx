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
    const [open, setOpen] = useState(false)



export function Sidebar() {
  const [open, setOpen] = useState(false);

    const togleMenu = () => {
        setOpen(!open)
    }

  return (
    <aside className={`absolute left-0 top-0 z-50 flex h-screen w-[18rem] flex-col overflow-y-hidden bg-white duration-300 ease-linear ${currtState ? "w-[18rem]" : "w-[80px]"} `}>
    <nav className='flex justify-between gap-4 px-4 py-8 lg:py-5 border-b border-gray-200 overflow-hidden'>
        <Link href='/'>
            <Image src={JapaLoogo} alt="Japa Logo" width={100} height={100} 
                className={`overflow-hidden transition-all ${currtState ? "w-32" : "w-0"}`}
            />
        </Link>

        <button onClick={updateedState} className="p-2 rounded-lg ">
          {currtState ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
     </nav>
     <div className={`flex flex-col items-center duration-300 ease-linear cursor-pointer overflow-y-hidden`}>
                    <nav className={`mt-8 py-4 px-4 lg:mt-9 lg:px-6`}>
                        <ul className="mb-20 flex flex-col gap-2">
                            <li className="relative flex items-center gap-2 text-xl mb-8">
                                <RiDashboardFill size={'1.5rem'} />
                               <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    Dashboard
                               </div>
                            </li>
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                               <button onClick={togleMenu} className="flex flex-col gap-2 items-center">
                                    <div className="flex gap-2 items-center">
                                    <FaToolbox />
                                    <div className={`flex gap-2 items-center ${currtState ? "w-full" : "hidden" }`}>
                                    Job Posting                                        
                                    <MdOutlineArrowDropDown />
                                    </div>
                                    
                                    </div>
                                    <ul className="flex flex-col gap-4 text-left text-sm">
                                        { open && (
                                            <>
                                            <li className="flex items-center gap-2">
                                                <CgAddR />
                                                Post New Job
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <TiShoppingBag size={'1rem'} />
                                                Job
                                            </li>
                                            <li className="flex items-center gap-2 ">
                                                <TfiWrite  />
                                                Draft
                                            </li>
                                            </>
                                        )}
                                    </ul>
                               </button>
                            </li>
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                                <LuUserSquare  size={'1.6rem'} />
                                <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    users
                                </div>
                                    
                            </li>
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                                <PiHouseLineFill  size={'1.5rem'}/>
                                <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    Cv Revamp
                                </div>
                                    
                            </li>
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                                <RiAdminFill size={'1.6rem'} />
                                <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    Admins
                                </div>
                            </li>
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                                <GrOrganization size={'1.6rem'} />
                                <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    Companies
                                </div>
                                
                            </li>
                        </ul>
        
                        <ul className="mb-16 flex flex-col gap-2">
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                                <IoIosSettings size={'1.7rem'}/>
                                    
                                <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    Settings
                                </div>
                            </li>
                            <li className="relative flex items-center gap-4 text-xl mb-8">
                                <IoIosHelpCircle  size={'1.7rem'}/>
                                <div className={` ${currtState ? "w-full" : "hidden" }`}>
                                    Help
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
    </aside>
  );
}

import {useSide, useSideUpdate } from './SideContext'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { useState } from 'react';


export const SidebarItems = ({ icon, text, active }) => {
    const [toggleDropdown, setToggleDropdown] = useState<any>(null)
    const currtState = useSide()
    const updateedState =  useSideUpdate()

    return (
        <>
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    <ul className="mb-16 flex flex-col gap-2">
                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>
                                {text}
                            </span>
                        </li>
                        <li className="relative flex items-center gap-4 text-xl mb-8 cursor-pointer">
                            <div className="flex flex-col gap-4 items-center">
                                    <button onClick={() => setToggleDropdown(!toggleDropdown)} className="flex gap-4 items-center">
                                        {icon}
                                        <span>{text}</span>
                                        <MdOutlineArrowDropDown size={'1rem'} />
                                    </button>
                                    <ul className="flex flex-col gap-4 text-left text-sm">
                                        { currtState && (
                                            <>
                                            <li className="flex items-center gap-2">
                                                {icon}
                                                <span>{text}</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                {icon}
                                                <span>{text}</span>
                                            </li>
                                            <li className="flex items-center gap-2 ">
                                                {icon}
                                                <span>{text}</span>
                                            </li>
                                            </>
                                        )}
                                    </ul>
                            </div>
                        </li> 

                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>{text}</span>
                        </li>
                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>{text}</span>
                        </li>
                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>{text}</span>
                        </li>
                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>{text}</span>
                        </li>
                    </ul>

                    <ul className="mb-16 flex flex-col gap-2">
                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>{text}</span>
                        </li>
                        <li className="relative flex items-center gap-4 text-xl mb-8">
                            {icon}
                            <span>{text}</span>
                        </li>
                    </ul>
                </nav>
        </div>
        </>        
    )
}
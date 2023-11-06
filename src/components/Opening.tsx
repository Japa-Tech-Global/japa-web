import Image from "next/image"
import { MdOutlineLocationOn } from "react-icons/md"

export default function Opening({ data }) {

    return (
        <>
            {
                data.map((job, i) => {
                    return (
                        <div key={i} className="border border-gray-400 rounded-xl px-4 py-7">
                            <div className="flex">
                                <div className="pr-3">
                                    <Image src={job.logo} alt='Openings' width={40} height={40} />
                                </div>
                                <div>
                                    <div><h3 className="font-medium">{job.role}</h3></div>
                                    <div className="text-xs text-gray-500 flex items-center"><MdOutlineLocationOn />{job.type}</div>
                                </div>
                            </div>

                            <div className="text-sm py-7 px-4 font-medium">
                                <p>{job.description}</p>
                            </div>

                            <div>
                                <button className="text-xs text-white bg-primary py-4 w-full rounded-[5px]">Apply</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
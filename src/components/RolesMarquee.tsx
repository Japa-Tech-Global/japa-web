import { PiStarFourFill } from "react-icons/pi"


export default function RolesMarquee({data}){

    return(
        <>
            <div className="animate-marquee whitespace-nowrap flex items-center">
                {
                    data.map((role,i)=>{
                        return(
                            <div className="flex items-center" key={i}><span className="text-lg sm:text-xl mx-4">{role}</span><PiStarFourFill className="text-3xl sm:text-4xl mx-2"/></div>
                        )
                    })
                }
            </div>
            <div className="animate-marquee2 whitespace-nowrap flex items-center absolute">
                {
                    data.map((role,i)=>{
                        return(
                            <div className="flex items-center" key={i}><span className="text-lg sm:text-xl mx-4">{role}</span><PiStarFourFill className="text-3xl sm:text-4xl mx-2"/></div>
                        )
                    })
                }
            </div>
        </>
    )
}
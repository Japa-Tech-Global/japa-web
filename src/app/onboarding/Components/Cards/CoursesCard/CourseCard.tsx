import Image from "next/image";
import React from "react";
import Button from "../../Button/Button";

interface CardProps {
    src:any,
    title:string,
    source:string
}
const CourseCard = (props:CardProps) => {
  return (
    <div>
      <div className="shadow-sm border-none pb-10">
        <div>
          <Image src={props.src} alt="" className="w-full" />
        </div>
        <div className="px-6">
          <p className="font-bold lg:text-2xl lg:w-[29rem] my-3">
           {props.title}
          </p>
          <p className="font-light py-4">{props.source}</p>
          <Button>Apply for Course</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

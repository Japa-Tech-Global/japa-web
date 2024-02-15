import React from "react";
import Marquee from "react-fast-marquee";
import StarIcon from "@/app/onboarding/assets/Star.png";
import Image from "next/image";

const RolesData = [
  "Front End Developer",
  "UIUX Designer",
  "Graphic Designer",
  "SQL Database Administration",
];
const Roles = () => {
  return (
    <div>
      <Marquee>
        <div className="flex gap-7 items-center">
          {RolesData.map((roles, index) => (
            <>
              <Image src={StarIcon} alt="star" key={index} height={50} width={50} />
              <p className="text-white text-xl">{roles}</p>
            </>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Roles;

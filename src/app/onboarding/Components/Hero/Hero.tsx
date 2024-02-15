import React from "react";
import { Inputs, Select } from "../Inputs/Inputs";
import Button from "../Button/Button";
import Roles from "../Roles/Roles";
import Image from "next/image";
import HomeIcon from "@/assets/brand/HomeIcon.jpg"


const Hero = () => {

  return (
    <div className="flex flex-col">
      <div className="w-full h-[70vh] flex justify-center items-center">
      <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${HomeIcon.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "70vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-md text-4xl text-white mb-8">Find your dream job!</h1>
          <div className="hero-bg-img md:flex justify-center items-center gap-3 px-20 md:px-0 py-8 md:py-0">
            <Inputs placeholder="Name of Role" label="Role" type="text" />
            <Select label={"Field"} defaultValue={"Job Category"} />
            <Select label={"Location"} defaultValue={"Onsite/Remote"} />
            <div className="mt-6">
              <Button>Search</Button>
            </div>
          </div>
        </div>
    </div>

      </div>
      <div className="bg-[#8D56DD75] py-10">
        <Roles />
      </div>
    </div>
  );
};

export default Hero;

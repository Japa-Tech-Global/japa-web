import React from "react";
import { Inputs, Select } from "../Inputs/Inputs";
import Button from "../Button/Button";
import Roles from "../Roles/Roles";

const Hero = () => {
  return (
    <div>
      <div className="hero-bg-img md:flex justify-center items-center gap-3 px-20 md:px-0 py-8 md:py-0">
        <Inputs placeholder="Name of Role" label="Role" type="text" />
        <Select label={"Field"} defaultValue={"Job Category"} />
        <Select label={"Location"} defaultValue={"Onsite/Remote"} />
        <div className="mt-6">
          <Button>Search</Button>
        </div>
      </div>
      <div className="bg-[#8D56DD75] py-10">
        <Roles />
      </div>
    </div>
  );
};

export default Hero;

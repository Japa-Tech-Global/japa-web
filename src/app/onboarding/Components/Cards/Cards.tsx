import React from "react";
import Button from "../Button/Button";
import MtnIcon from "@/app/onboarding/assets/mtn.svg"
import Image from "next/image";

const Cards = () => {
  return (
    <div className="border border-slate-400 rounded-md">
      <div className="flex gap-5 py-5 px-6">
        <div>
          <Image src={MtnIcon} alt="star" width={50} height={50}/>
        </div>
        <div className="">
          <p className="text-xl">UI/UX Designer at MTN</p>
          <p>Remote</p>
        </div>
      </div>
      <div className="py-5 px-6">
        <p>
          We’re are currently seeking to hire an experienced UI/UX Designer with
          an extensive and proven experence who can work in high...
        </p>
      </div>
      <div className="flex justify-center px-6 pb-5">
        <Button size="full">Apply</Button>
      </div>
    </div>
  );
};

export default Cards;

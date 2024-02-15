import React from "react";
import Image from "next/image";
import HighFive from "@/app/onboarding/assets/high five.png";

const TalentTest = () => {
  return (
    <div>
      <div className="rounded-md bg-black shadow-md">
        <div className="grid md:grid-cols-2">
          <div className="text-white text-2xl px-12 py-10">
            <p>Take our Talent Assesment Exam for Course Recommendation</p>
            <p className="mt-10">To get your role next role!</p>
          </div>
          <div className="ml-auto mr-10">
            <div className="-mt-[6rem]">
              <Image src={HighFive} alt="high five" width={300} height={300} />
            </div>
            <div className="-mt-10 pb-10">
              <button className="py-3 px-[9rem] text-black bg-slate-200 rounded-md">
                Take Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentTest;

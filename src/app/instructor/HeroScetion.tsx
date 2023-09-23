import Filledbtn from "@/components/ui/filledbtn";
import { Star } from "lucide-react";
import React from "react";

const HeroScetion = () => {
  return (
    <div className="flex flex-col md:flex-row space-4 items-center space-8">
      <div className="p-[3rem] w-full flex items-start sm:items-center justify-start   bg-primary sm:rounded-r-[10rem] ">
        <div className="container m-auto">
          <div className=" flex flex-col sm:flex-row gap-2 text-white   items-center  ">
            <img src="/Profile.png" alt="User Profile" />
            <div className="w-[90%] text-center sm:text-start">
              <h1 className="text-[32px] font-900">{"Michael Leger"}</h1>
              <h1 className="text-[28px] font-500">{"Orlando, FL"}</h1>
              <div className="flex flex-row mt-2 justify-center sm:justify-start">
                <Star size={16} className="text-basic" />
                <Star size={16} className="text-basic" />
                <Star size={16} className="text-basic" />
                <Star size={16} className="text-basic" />
                <Star size={16} className="text-basic" />
              </div>

              <button className=" bg-basic border-[1px] border-primary px-4 py-2 mt-[1rem] text-black hover:bg-primary hover:border-basic hover:border-[1px] hover:text-basic  w-fit rounded-[8px] text-center ">
                <strong className="text-[12px]">
                  {"Sign Up to Contact Michael"}
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[80%] sm:m-0 m-[2rem]">
        <div className="sm:w-[80%] space-y-4 ml-0 sm:ml-2">
          <h1 className="text-[20px] font-700 text-primary">
            {"Michael Leger’s SummaryLeger"}
          </h1>
          <h1 className="text-[16px] font-500 text-justify text-primary">
            Michael Leger is a young pilot from west Philadelphia, teaching all
            the latest aeronautical techniques learned in the Air Force while
            serving 4 tours in the Middle East & is currently training for the
            Space Force.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroScetion;

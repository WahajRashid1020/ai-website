import { ChevronRight } from "lucide-react";
import Filledbtn from "../ui/filledbtn";

const StartJourney = () => {
  return (
    <div className="bg-secondary mt-[2rem]">
      <div className="container py-[4rem] px-2 md:px-[1.5rem] sm:m-auto">
        <div className="mx-[2rem] sm:mx-0 ">
          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <div className="sm:w-[65%]">
              <img className="object-cover w-full" src="/video.png" alt="" />
            </div>
            <div className="flex flex-col gap-y-1 items-center sm:items-start text-white sm:w-[35%]">
              <h1 className="text-[16px] font-500 sm:text-start text-center">
                Earn a living out of the sky.
              </h1>
              <h1 className="text-[32px] font-700 ">
                ARE YOU READY TO START YOUR FLIGHT JOURNEY?
              </h1>

              <button className="flex items-center justify-center p-[12px] text-primary bg-basic font-700 rounded-[8px] sm:w-fit w-full hover:text-basic hover:bg-primary">
                Start Pilot Journey
                <ChevronRight size={20} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;

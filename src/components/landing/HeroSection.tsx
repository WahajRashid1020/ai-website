import { MapPin } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-cover sm:bg-center bg-no-repeat min-h-screen sm:min-h-[400px] flex items-start sm:items-center justify-start sm:air mair">
      <div className="container m-2 sm:m-auto">
        <div className=" text-white  sm:w-[50%] sm:text-start text-center ">
          <h1 className="text-[80px] text-basic   font-900 mb-4">Let’s Fly</h1>
          <p className="text-[16px] text-white mb-8">
            Find a certified Flight Instructor at your local airport with the
            aircraft you’re looking for and the specific ratings you need.
          </p>
          <div className="relative flex-grow z-2">
            <input
              type="text"
              className=" border-basic border-[1px] bg-transparent rounded-md py-4 px-4 w-full flex items-center outline-secondary"
              placeholder="Search Instructors, Aircrafts..."
            />
            <div className="absolute right-[6rem] top-1/2 transform -translate-y-1/2">
              <MapPin className="text-secondary hover:text-gray-700 cursor-pointer" />
            </div>
            <button className="absolute bg-basic font-bold px-[12px] py-[6px] right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-yellow-[100] rounded-[6px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

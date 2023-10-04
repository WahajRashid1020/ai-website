import StartJourney from "@/components/landing/StartJourney";
import InstructorCard from "@/components/ui/instructorcard";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="sm:bg-cover sm:bg-center bg-no-repeat min-h-fit sm:min-h-[400px] flex items-start sm:items-center justify-start sm:banner2 bg-primary sm:bg-white ">
        <div className="container px-6 md:px-[1.5rem] sm:m-auto">
          <div className="sm:mx-0 mx-[2rem] sm:my-0 my-[2rem]">
            <h1 className="text-[32px] text-basic font-700">“Single Engine”</h1>
            <p className="text-[16px] font-500 text-justify sm:max-w-[50%] text-white">
              We found 500 FAA Certified flight instructors in Orlando, Florida.
              We have 17 single-engine aircrafts, and 4 multi-engine aircrafts.
              View CFI’s aircrafts, airports, and ratings. Select an instructor
              to start your flying lessons today.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import { MapPin } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="bg-[#394060] py-[4rem]">
        <div className="container px-6 md:px-[1.5rem] sm:m-auto">
          <h1 className="text-[20px] pb-8 font-700 text-white">
            Michael Leger’s frequently asked questions:
          </h1>
          <div className="flex flex-col gap-[20px]">
            <div className="bg-white rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700">Does Mike fly Weekends?</h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                Yes, Mike is available to fly on Saturday & Sunday.
              </p>
            </div>
            <div className="bg-[#E0E2EB] rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700">Does Mike fly Nights?</h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                Yes, Mike is availability to fly evenings from 4 PM - 8 PM, &
                Nights 8 PM - 12 AM, on Mondays, Tuesdays, Wednesdays,
                Thursdays, & Fridays.
              </p>
            </div>

            <div className="bg-white rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700">
                Does Mike have an aircraft available for flight lessons?
              </h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                Yes, Mike is has 2 aircrafts available for flight; the Cessna
                172, & Piper PA-44 Seminole
              </p>
            </div>
            <div className="bg-[#E0E2EB] rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700"> What can Mike teach?</h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                Mike can teach private license, and multi-engine.
              </p>
            </div>

            <div className="bg-white rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700">How can I contact Mike?</h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                {
                  "You can contact Mike through the Aircraft Instructor app by simply filling out the form above."
                }
              </p>
            </div>
            <div className="bg-[#E0E2EB] rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700">
                Where does Mike give flight lessons?
              </h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                {
                  " Mike Gives flight lessons in (KORL) Orlando Executive Airport & (KDAB) Daytona Beach International airport"
                }{" "}
              </p>
            </div>

            <div className="bg-white rounded-[10px] p-[24px] text-primary">
              <h1 className="text-[20px] font-700">
                What licenses/certifications does Mike have?
              </h1>
              <p className="text-[18px] font-500 ml-[2rem]">
                Mike has Private Pilot, Light Sport, Instrument and Multi-Engine
                Licenses and can teach Private Pilot, Light Sport, Instrument
                and Multi-Engine lessons..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden relative flex-grow z-2">
        <input
          type="text"
          className=" border-basic border-[1px] bg-transparent rounded-md py-4 px-4 w-full flex items-center outline-primary"
          placeholder="Search Instructors, Aircrafts..."
        />
        <div className="absolute right-[6rem] top-1/2 transform -translate-y-1/2">
          <MapPin className="text-secondary hover:text-gray-700 cursor-pointer" />
        </div>
        <button className="absolute hover:opacity-90 bg-basic font-bold px-[12px] py-[6px] right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-yellow-[100] rounded-[6px]">
          Search
        </button>
      </div>
    </>
  );
};

export default FAQ;

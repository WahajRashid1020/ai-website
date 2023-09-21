import React from "react";
import MiniCard from "../ui/minicard";

const StartFlying = () => {
  return (
    <div className="bg-basic py-[56px]">
      <div className="container m-auto ">
        <div className="sm:mx-0 mx-[2rem]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[32px] text-primary font-700">START FLYING</h1>
            <button className="sm:block hidden p-[16px] rounded-[8px] bg-secondary text-white">
              <span>{"Get Started >"}</span>
            </button>
          </div>

          <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500">
            Our top rated instructors will have you up in the air in no time.
            Whether you’re looking to learn to fly or just brush up on your
            skills, our experienced professionals are here to help. Start
            learning today with one of our Aircraft Instructors.
          </p>
          <button className="sm:hidden w-[100%] mb-4 p-[16px] rounded-[8px] bg-secondary text-white">
            <span>{"Get Started >"}</span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <MiniCard
              imageSrc="/Icon 1.svg"
              heading="FIND PERFECT INSTRUCTOR "
              para="Search by your local airport, aircraft, and availability "
            />
            <MiniCard
              imageSrc="/Icon 2.png"
              heading="SIGN UP TO THE APP "
              para="Download app to sign up as student pilot or instructor "
            />
            <MiniCard
              imageSrc="/Icon 3.png"
              heading="BOOK YOUR LESSON "
              para=" Search by your local airport, aircraft, and availability "
            />
          </div>
          {/* <div className="flex flex-col  md:flex-row items-center justify-between gap-6">
            <div className="p-6 h-[450px] w-[400px]  bg-white rounded-[20px] flex flex-col justify-center items-center space-y-2">
              <img src="/Icon 1.svg" alt="Img" />
              <h1 className="text-[20px] text-center text-primary font-700">
                FIND PERFECT INSTRUCTOR
              </h1>
              <p className="text-[16px] font-500  text-center">
                Search by your local airport, aircraft, and availability
              </p>
            </div>{" "}
            <div className=" p-6 h-[450px] w-[400px]  bg-white rounded-[20px] flex flex-col justify-center items-center space-y-2">
              <img src="/Icon 2.png" alt="Img" />
              <h1 className="text-[20px] text-center text-primary font-700">
                SIGN UP TO THE APP
              </h1>
              <p className="text-[16px] font-500 text-center">
                Download app to sign up as student pilot or instructor
              </p>
            </div>{" "}
            <div className="  p-6 h-[450px] w-[400px] bg-white rounded-[20px] flex flex-col justify-center items-center space-y-2">
              <img className="text-left" src="/Icon 3.png" alt="Img" />
              <h1 className="text-[20px] text-center text-primary font-700">
                BOOK YOUR LESSON
              </h1>
              <p className="text-[16px] font-500 text-center">
                Search by your local airport, aircraft, and availability
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StartFlying;

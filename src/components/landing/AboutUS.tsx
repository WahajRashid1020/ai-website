import React from "react";

const AboutUS = () => {
  return (
    <div className=" bg-secondary py-[2rem]">
      <div className="container m-auto">
        <div className="sm:mx-0 mx-[2rem]">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-[4rem] ">
            <div className="bg-white rounded-[20px] flex flex-col justify-center items-center space-y-2 py-6">
              <h1 className="text-[32px] text-center text-primary font-700">
                Flight Instructor
              </h1>
              <img
                className="  object-fill sm:w-full"
                src="/f1.png"
                alt="Img"
              />

              <p className="text-[16px] font-500  text-center p-6 sm:w-[80%]">
                Try being your own boss with Aircraft Instructor. Get paid to
                give flight lessons on your time using the Aircraft Instructor
                app, most downloaded by student pilots.
              </p>
            </div>{" "}
            <div className=" bg-white rounded-[20px] flex flex-col justify-center items-center space-y-2 py-6">
              <h1 className="text-[32px] text-center text-primary font-700">
                Flight School
              </h1>
              <img className=" object-fill sm:w-full" src="/f2.png" alt="Img" />

              <p className="text-[16px] font-500 text-center p-6 sm:w-[80%]">
                We are passionate about flight training. We’ve worked directly
                with student pilots and instructors to meet all their aviation
                goals, and now are working closely with flight schools to expand
                our features.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;

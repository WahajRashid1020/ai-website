import { ChevronLeft, ChevronRight } from "lucide-react";
import MiniCard from "../ui/minicard";

const StartFlying = () => {
  return (
    <div className="bg-basic py-[56px]">
      <div className="container px-6 md:px-[1.5rem] sm:m-auto">
        <div className="">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[28px] text-primary font-700">START FLYING</h1>
            <button className="sm:block hidden p-[12px] rounded-[8px] bg-secondary text-white">
              <span className="flex flex-row text-[14px] justify-center items-center">
                Get Started
                <ChevronRight size={20} strokeWidth={3} />
              </span>
            </button>
          </div>

          <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500">
            Our top rated instructors will have you up in the air in no time.
            Whether you’re looking to learn to fly or just brush up on your
            skills, our experienced professionals are here to help. Start
            learning today with one of our Aircraft Instructors.
          </p>
          <button className="sm:hidden w-[100%] mb-4 p-[16px] rounded-[8px] bg-secondary text-white">
            <span className="flex flex-row justify-center items-center">
              Get Started
              <ChevronRight size={20} strokeWidth={3} />
            </span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
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
        </div>
      </div>
    </div>
  );
};

export default StartFlying;

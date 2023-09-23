import Filledbtn from "../ui/filledbtn";

const StartJourney = () => {
  return (
    <div className="bg-secondary mt-[2rem]">
      <div className="container m-auto py-[4rem]">
        <div className="mx-[2rem] sm:mx-0 ">
          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <div className="sm:w-[70%]">
              <img className="object-cover w-full" src="/video.png" alt="" />
            </div>
            <div className="flex flex-col gap-y-2 items-center sm:items-start text-white sm:w-[30%]">
              <h1 className="text-[16px] font-500 sm:text-start text-center">
                Earn a living out of the sky.
              </h1>
              <h1 className="text-[32px] font-700">
                ARE YOU READY TO START YOUR FLIGHT JOURNEY?
              </h1>
              <Filledbtn text="Start Pilot Journey >" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;

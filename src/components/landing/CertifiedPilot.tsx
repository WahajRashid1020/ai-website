import MiniCard from "../ui/minicard";

const CertifiedPilot = () => {
  return (
    <div className=" py-[56px]">
      <div className="container m-auto ">
        <div className="sm:mx-0 mx-[2rem]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[32px] text-primary font-700">
              BECOME A CERTIFIED PILOT
            </h1>
            <button className="sm:block hidden p-[16px] font-700 rounded-[8px] bg-basic text-black">
              <span>Start Flying</span>
            </button>
          </div>

          <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500 text-[#97A1BA]">
            Our top rated instructors will have you up in the air in no time.
            Whether you’re looking to learn to fly or just brush up on your
            skills, our experienced professionals are here to help. Start
            learning today with one of our Aircraft Instructors.
          </p>
          <button className="sm:hidden w-[100%] mb-4 p-[16px] font-700 rounded-[8px] bg-basic text-black">
            <span>Start Flying</span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <MiniCard
              imageSrc="/icon1.png"
              heading="Discovery Flight"
              para="Have your first flight lesson with zero experience and feel the controls in your hand while you’re flying. "
            />{" "}
            <MiniCard
              imageSrc="/icon2.png"
              heading=" Light Sport"
              para="Have your first flight lesson with zero experience and feel the controls in your hand while you’re flying. "
            />{" "}
            <MiniCard
              imageSrc="/icon3.png"
              heading=" Single Engine"
              para="Have your first flight lesson with zero experience and feel the controls in your hand while you’re flying.  "
            />
            <MiniCard
              imageSrc="/icon4.png"
              heading=" Commercial"
              para=" Have your first flight lesson with zero experience and feel the controls in your hand while you’re flying. "
            />
            <MiniCard
              imageSrc="/icon5.png"
              heading="Instrument "
              para=" Have your first flight lesson with zero experience and feel the controls in your hand while you’re flying. "
            />
            <MiniCard
              imageSrc="/icon6.png"
              heading="Multi-Engine "
              para="Have your first flight lesson with zero experience and feel the controls in your hand while you’re flying. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedPilot;

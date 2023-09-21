import ReviewCard from "../ui/reviewcard";

const Reviews = () => {
  return (
    <div className="bg-primary py-[4rem]">
      <div className="container m-auto ">
        <div className="sm:mx-0 mx-[2rem]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[32px] text-white font-700">
              WHAT PILOTS ARE SAYING ABOUT US
            </h1>
            <button className="sm:block hidden p-[16px] font-700 rounded-[8px] bg-basic text-black">
              <span>{"Start Flying >"}</span>
            </button>
          </div>

          <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500 text-[#97A1BA]">
            Our users love our app because it’s easy to use and has lots of
            features. Here’s some of the great feedback we receive from our
            students and instructors.
          </p>
          <button className="sm:hidden w-[100%] mb-4 p-[16px] font-700 rounded-[8px] bg-basic text-black">
            <span>Start Flying</span>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <ReviewCard
              imageSrc="/comas.png"
              heading="After taking a discovery flight through Aircraft Instructor, I fell in love with aviation and can’t wait for my next lesson!"
              para1="Denise / Boca Roton"
              para2="Student Pilot"
            />
            <ReviewCard
              imageSrc="/comas.png"
              heading="Aircraft Instructor is such an intuitive app to organize all my students, and get paid for flying."
              para1="Elijah / Daytona"
              para2="Student Pilot"
            />
            <ReviewCard
              imageSrc="/comas.png"
              heading="Great flight lesson, went to (KISM), did some stalls and spins. Best instructor in Orlando!"
              para1="Mikey / Orlando"
              para2="Student Pilot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

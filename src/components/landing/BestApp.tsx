const BestApp = () => {
  return (
    <div className="bg-white mt-[2rem]">
      <div className="pt-[4rem]">
        <div className="mx-[2rem] sm:mx-0 ">
          <div className="flex flex-col sm:flex-row space-x-2">
            <img className="sm:flex hidden" src="/phone.png" alt="Img" />
            <div className="flex flex-col space-y-4 ">
              <h1 className="text-[32px] font-700 text-primary">
                BEST APP FOR STUDENT PILOTS & INSTRUCTORS
              </h1>
              <p className="text-[16px]  text-primary">
                Find, book, and review flight instructors in your area.
              </p>
              <button className="p-[12px] text-black bg-basic font-900 rounded-[8px] sm:w-fit w-full">
                {"Start Flying >"}
              </button>
              <div className="sm:flex hidden flex-row gap-2 max-w-[30%]">
                <img src="/p1.png" alt="Img" />
                <img src="/p2.png" alt="Img" />
                <img src="/p3.png" alt="Img" />
              </div>{" "}
              <div className="flex sm:hidden flex-col gap-2">
                <img src="/mp1.png" alt="Img" />
                <img src="/mp2.png" alt="Img" />
                <img src="/mp3.png" alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden pt-4">
        <img src="/mphone.png" alt="" />
      </div>
    </div>
  );
};

export default BestApp;

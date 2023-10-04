import LessonCard from "@/components/ui/lessonscard";

const Lesson = () => {
  return (
    <div className="container py-[2rem] px-2 md:px-[1.5rem] sm:m-auto">
      <h1 className="text-[20px] font-700 text-primary mb-4">
        Michael Leger offers these lessons:
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start sm:gap-y-0 gap-y-2 sm:space-x-4">
        <div className="flex flex-row space-x-2 ">
          <div className="flex flex-row  w-fit items-center rounded-[20px] space-x-2 bg-primary px-[16px] py-[8px]">
            <img src="/sicon1.png" alt="" />
            <h1 className="text-[12px] text-white font-700">
              Private Pilot License
            </h1>
          </div>{" "}
          <div className="flex flex-row w-fit items-center rounded-[20px] space-x-2 bg-primary px-[16px] py-[8px]">
            <img src="/sicon2.png" alt="" />
            <h1 className="text-[12px] text-white font-700">Light Sport</h1>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row w-fit items-center rounded-[20px] space-x-2 bg-primary px-[16px] py-[8px]">
            <img src="/sicon3.png" alt="" />
            <h1 className="text-[12px] text-white font-700">
              Instrument License
            </h1>
          </div>{" "}
          <div className="flex flex-row w-fit items-center rounded-[20px] space-x-2 bg-primary px-[16px] py-[8px]">
            <img src="/sicon4.png" alt="" />
            <h1 className="text-[12px] text-white font-700">Ghetto Bird</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2   gap-8 sm:py-[2rem] ">
        <LessonCard
          imageSrc="/l1.png"
          location="Cessna 172"
          money1="$50.00 / hr"
          money2="$100.00 / hr"
          para="Leverage agile frameworks to provide a robust synopsis for high level overviews."
          buttonText1="KISSIMMEE GATEWAY AIRPORT"
          buttonText2="EXECUTIVE AIRPORT"
        />{" "}
        <LessonCard
          imageSrc="/l2.png"
          location="Cessna 172"
          money1="$50.00 / hr"
          para="Leverage agile frameworks to provide a robust synopsis for high level overviews."
          buttonText1="KISSIMMEE GATEWAY AIRPORT"
          buttonText2="EXECUTIVE AIRPORT"
          buttonText3="ORLANDO EXECUTIVE AIRPORT"
        />{" "}
        <LessonCard
          imageSrc="/l1.png"
          location="Cessna 172"
          money1="$50.00 / hr"
          money2="$100.00 / hr"
          para="Leverage agile frameworks to provide a robust synopsis for high level overviews."
          buttonText1="KISSIMMEE GATEWAY AIRPORT"
        />{" "}
        <LessonCard
          imageSrc="/l2.png"
          location="Cessna 172"
          money1="$50.00 / hr"
          para="Leverage agile frameworks to provide a robust synopsis for high level overviews."
          buttonText1="KISSIMMEE GATEWAY AIRPORT"
          buttonText2="EXECUTIVE AIRPORT"
          buttonText3="ORLANDO EXECUTIVE AIRPORT"
        />
      </div>
    </div>
  );
};

export default Lesson;

import InstructorCard from "@/components/ui/instructorcard";
import SliderCard from "@/components/ui/slidercard";
import React from "react";

const Instructors = () => {
  return (
    <div className="container px-6 md:px-[1.5rem] sm:m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4 ">
        <SliderCard
          firstname="Mike"
          lastname="Jones"
          userimageSrc="/dp.png"
          address="Orlando, FL"
          dataArray={[
            {
              imageSrc: "/card1.png",
              location: "Ground",
              money: "$50.00 / hr",
              buttonText1: "KARL",
              buttonText2: "KORL",
            },
            {
              imageSrc: "/card1.png",
              location: "Ground",
              money: "$50.00 / hr",
              buttonText1: "KARL",
              buttonText2: "KORL",
            },
            {
              imageSrc: "/card1.png",
              location: "Ground",
              money: "$50.00 / hr",
              buttonText1: "KARL",
              buttonText2: "KORL",
            },
            {
              imageSrc: "/card1.png",
              location: "Ground",
              money: "$50.00 / hr",
              buttonText1: "KARL",
              buttonText2: "KORL",
            },
            {
              imageSrc: "/card1.png",
              location: "Ground",
              money: "$50.00 / hr",
              buttonText1: "KARL",
              buttonText2: "KORL",
            },
          ]}
        />
        <InstructorCard
          firstname="Mike"
          lastname="Jones"
          userimageSrc="/dp.png"
          imageSrc="/card1.png"
          address="Orlando, FL"
          location="Ground"
          money="$50.00 / hr"
          buttonText1="KARL"
          buttonText2="KORL"
        />
      </div>
    </div>
  );
};

export default Instructors;

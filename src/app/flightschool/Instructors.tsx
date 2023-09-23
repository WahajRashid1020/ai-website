import InstructorCard from "@/components/ui/instructorcard";
import React from "react";

const Instructors = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:mx-[2rem]  gap-10 p-4 ">
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
      />{" "}
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
  );
};

export default Instructors;

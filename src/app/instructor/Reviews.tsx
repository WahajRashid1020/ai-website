import ReviewCard from "@/components/ui/reviewcard";
import React from "react";

export const Reviews = () => {
  return (
    <div className="bg-secondary py-[2rem]">
      <div className="container px-6 md:px-[1.5rem] sm:m-auto">
        <h1 className="text-[24px] font-500 text-white">
          What are student pilots saying about Michael Leger:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-4  py-4 ">
          <ReviewCard
            heading="Cessna 172"
            name="William C."
            para3="Globalize zoom meeting at 2:30 today, but goalposts. Vec golden goose, or hop on the bandwagon, yet t-shaped individual baseline the procedure and same page your department, but can you ballpark the cost per unit for me, for we've got to manage that low hanging fruit."
            starSrc="true"
          />
          <ReviewCard
            heading="Cessna 172"
            name="William C."
            para3="Globalize zoom meeting at 2:30 today, but goalposts. Vec golden goose, or hop on the bandwagon."
            starSrc="true"
          />
          <ReviewCard heading="Cessna 172" name="William C." starSrc="true" />
          <ReviewCard
            heading="Cessna 172"
            name="William C."
            para3="Globalize zoom meeting at 2:30 today, but goalposts. "
            starSrc="true"
          />
        </div>
        <div className="flex justify-center items-center py-2">
          <button className="w-full sm:w-fit p-[16px] rounded-[8px] text-white border-white border-[1px]">
            <strong>Show More Reviews</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

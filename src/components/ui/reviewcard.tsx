import React from "react";

interface CardProps {
  imageSrc: string;
  heading: string;
  para1: string;
  para2: string;
}

const ReviewCard: React.FC<CardProps> = ({
  imageSrc,
  heading,
  para1,
  para2,
}) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl ">
      <div className="p-[25px] flex flex-col justify-center items-start gap-y-2">
        <img src={imageSrc} alt="Card Image" />
        <h1 className="text-[28px] font-semibold text-start leading-[1.2] mb-2">
          {heading}
        </h1>
        <p className="text-[16px] text-start">{para1}</p>
        <p className="text-[12px] text-start">{para2}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

import { Star } from "lucide-react";
import React from "react";

interface CardProps {
  imageSrc?: string;
  heading: string;
  name?: string;
  para1?: string;
  para2?: string;
  starSrc?: string;
}

const ReviewCard: React.FC<CardProps> = ({
  starSrc,
  imageSrc,
  heading,
  name,
  para1,
  para2,
}) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl ">
      <div className="p-[25px] flex flex-col justify-center items-start gap-y-2">
        {imageSrc && <img src={imageSrc} alt="Card Image" />}
        <h1 className="text-[28px] font-semibold text-start leading-[1.2] ">
          {heading}
        </h1>
        {name && <p className="text-[11px] text-gray-400">{name}</p>}
        {starSrc && (
          <div className="flex flex-row gap-2 ">
            <Star size={18} className="text-basic" />
            <Star size={18} className="text-basic" />
            <Star size={18} className="text-basic" />
            <Star size={18} className="text-basic" />
            <Star size={18} className="text-basic" />
          </div>
        )}

        {para1 && (
          <p className="text-[16px] text-start mt-[2rem] font-500">{para1}</p>
        )}
        {para2 && <p className="text-[12px] text-start font-500">{para2}</p>}
      </div>
    </div>
  );
};

export default ReviewCard;

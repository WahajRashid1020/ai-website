import { ChevronRight, Star } from "lucide-react";
import React from "react";

interface CardProps {
  imageSrc: string;
  userName: string;
  userLastName: string;
  userImageSrc: string;
  heading: string;
  buttonText1: string;
  buttonText2: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  userName,
  userImageSrc,
  heading,
  buttonText1,
  buttonText2,
  userLastName,
}) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl ">
      <div className="p-[25px]">
        <h1 className="text-[28px] font-semibold">{heading}</h1>
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt="Card Image"
        />
        <div className="p-4">
          <div className="flex items-center mb-2">
            <img
              className="w-[60px] h-[60px] rounded-full mr-2 "
              src={userImageSrc}
              alt="User Profile"
            />
            <div className="flex flex-col">
              <p className="text-gray-700 font-bold">{userName}</p>
              <p className="text-gray-700 font-bold text-sm">{userLastName}</p>
              <div className="flex flex-row ">
                <Star size={18} className="text-basic" />
                <Star size={18} className="text-basic" />
                <Star size={18} className="text-basic" />
                <Star size={18} className="text-basic" />
                <Star size={18} className="text-basic" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <span className="border-[##97A1BA] text-dim text-[12px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
                {buttonText1}
              </span>{" "}
              <span className="border-[##97A1BA] text-dim text-[12px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
                {buttonText2}
              </span>
            </div>
            <button className=" bg-basic P-[10PX] w-[38px] h-[34px] rounded-[8px] flex items-center justify-center">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

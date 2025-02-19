import { ChevronRight, Star, User } from "lucide-react";
import React from "react";

interface CardProps {
  userimageSrc: string;
  imageSrc: string;
  firstname: string;
  lastname: string;
  address: string;
  location: string;
  money: string;
  buttonText1: string;
  buttonText2: string;
}

const InstructorCard: React.FC<CardProps> = ({
  userimageSrc,
  imageSrc,
  firstname,
  lastname,
  location,
  address,
  buttonText1,
  buttonText2,
  money,
}) => {
  return (
    <div className="bg-primary rounded-[20px]  p-6">
      <div className="flex flex-row gap-x-2 text-white justify-start items-center  ">
        <img
          className="w-[60px] h-[60px] rounded-full mr-2 "
          src={userimageSrc}
          alt="User Profile"
        />
        <div>
          <h1 className="text-[20px] font-900">{firstname}</h1>
          <h1 className="text-[16px] font-500">{lastname}</h1>
          <h1 className="text-[12px] font-900">{address}</h1>
          <div className="flex flex-row">
            <Star size={16} className="text-basic" />
            <Star size={16} className="text-basic" />
            <Star size={16} className="text-basic" />
            <Star size={16} className="text-basic" />
            <Star size={16} className="text-basic" />
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center"> */}
      <div className="bg-white rounded-[20px]    my-4   ">
        <div className="p-[12px]">
          <img
            className="w-full h-full object-cover"
            src={imageSrc}
            alt="Card Image"
          />
          <div className="flex flex-row space-x-2 items-center pt-2">
            <User size={16} />
            <h1 className="text-[16px] font-500">{location}</h1>
          </div>
          <h1 className="text-[12px] font-900 py-2">{money}</h1>
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
          {/* </div> */}
        </div>
      </div>
      <button className="flex justify-center items-center flex-row space-x-1 bg-basic mt-[3rem] w-[100%] h-[32px] rounded-[8px] text-center border-[1px] border-basic hover:bg-transparent hover:text-basic cursor-pointer">
        <strong className="text-[12px] font-700">{"Start Flying"}</strong>
        <ChevronRight size={20} strokeWidth={3} />
      </button>
    </div>
  );
};

export default InstructorCard;

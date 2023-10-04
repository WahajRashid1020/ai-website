import { ChevronRight, Star, User } from "lucide-react";
import React from "react";

interface CardProps {
  imageSrc: string;
  location: string;
  money1: string;
  money2?: string;
  buttonText1?: string;
  buttonText2?: string;
  buttonText3?: string;
  para: string;
}

const LessonCard: React.FC<CardProps> = ({
  imageSrc,
  location,
  para,
  buttonText1,
  buttonText2,
  buttonText3,
  money1,
  money2,
}) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden my-4 shadow-2xl flex flex-col">
      <div className="p-[25px] space-y-4 flex-grow">
        <img className="w-full object-cover" src={imageSrc} alt="Card Image" />
        <h1 className="text-[28px] font-700">{location}</h1>
        <div className="flex flex-row items-center justify-start">
          <img src="/m1.png" alt="" />
          <h1 className="text-[12px] font-500 py-2 mr-2">{money1}</h1>
          {money2 && (
            <>
              <img src="/m2.png" alt="" />
              <h1 className="text-[12px] font-500 py-2">{money2}</h1>
            </>
          )}
        </div>
        <span className="text-dim text-[16px]">{para}</span>

        <div className="flex flex-wrap justify-start items-center gap-2">
          {buttonText1 && (
            <span className="border-dim text-dim text-[9px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
              {buttonText1}
            </span>
          )}
          {buttonText2 && (
            <span className="border-dim text-dim text-[9px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
              {buttonText2}
            </span>
          )}
          {buttonText3 && (
            <span className="border-dim text-dim text-[9px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
              {buttonText3}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className=" bg-basic w-[100%] p-[16px] rounded-[8px] text-center m-[2rem] border-[1px] border-basic hover:bg-transparent hover:text-basic cursor-pointer">
          <span className="flex flex-row justify-center items-center">
            <strong className="text-[20px] font-700">
              {"Fly with Michael "}
            </strong>
            <ChevronRight size={24} strokeWidth={3} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;

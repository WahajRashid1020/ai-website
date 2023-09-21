import React from "react";

interface CardProps {
  imageSrc: string;
  heading: string;
  para: string;
}

const MiniCard: React.FC<CardProps> = ({ imageSrc, heading, para }) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl ">
      <div className="p-[25px] flex flex-col justify-center items-center gap-y-2">
        <img src={imageSrc} alt="Card Image" />
        <h1 className="text-[28px] font-semibold text-center">{heading}</h1>
        <p className="text-[16px] text-center">{para}</p>
      </div>
    </div>
  );
};

export default MiniCard;

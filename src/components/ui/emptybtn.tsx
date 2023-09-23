import React from "react";

interface CardProps {
  text: string;
}

const Emptybtn: React.FC<CardProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center py-2">
      <button
        className="w-full sm:w-fit p-[16px] rounded-[8px] border-primary border-[2px]
      hover:bg-primary hover:text-white
      "
      >
        <strong>{text}</strong>
      </button>
    </div>
  );
};

export default Emptybtn;

import React from "react";

interface CardProps {
  text: string;
}

const Filledbtn: React.FC<CardProps> = ({ text }) => {
  return (
    <button
      className="text-[12px] md:text-[14px] p-[10px] text-primary bg-basic font-700 rounded-[8px] sm:w-fit w-full
    hover:text-basic hover:bg-primary
    "
    >
      {text}
    </button>
  );
};

export default Filledbtn;

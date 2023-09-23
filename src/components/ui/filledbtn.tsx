import React from "react";

interface CardProps {
  text: string;
}

const Filledbtn: React.FC<CardProps> = ({ text }) => {
  return (
    <button
      className="p-[12px] text-primary bg-basic font-900 rounded-[8px] sm:w-fit w-full
    hover:text-basic hover:bg-primary
    "
    >
      <strong>{text}</strong>
    </button>
  );
};

export default Filledbtn;

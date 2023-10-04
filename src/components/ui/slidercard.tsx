"use client";
import { ChevronRight, Star, User } from "lucide-react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Styles.css";
interface CardProps {
  userimageSrc: string;
  firstname: string;
  lastname: string;

  address: string;
  dataArray: {
    imageSrc: string;
    location: string;
    money: string;
    buttonText1: string;
    buttonText2: string;
  }[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  arrows: false,
};

const SliderCard: React.FC<CardProps> = ({
  userimageSrc,
  address,
  firstname,
  lastname,
  dataArray,
}) => {
  return (
    <div className="bg-primary rounded-[20px] overflow-hidden  p-6">
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

      <Slider className="m-auto mx-[-90%]" {...settings}>
        {dataArray.map((data, index) => (
          <div key={index} className="bg-white rounded-[20px] my-4  ">
            <div className="p-[12px]">
              <img
                className="w-full h-full object-cover"
                src={data.imageSrc}
                alt="Card Image"
              />
              <div className="flex flex-row space-x-2 items-center pt-2">
                <User size={16} />
                <h1 className="text-[16px] font-500">{data.location}</h1>
              </div>
              <h1 className="text-[12px] font-900 py-2">{data.money}</h1>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <span className="border-[##97A1BA] text-dim text-[12px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
                    {data.buttonText1}
                  </span>{" "}
                  <span className="border-[##97A1BA] text-dim text-[12px] border-[1px] px-[16px] py-[8px] rounded-[20px]">
                    {data.buttonText2}
                  </span>
                </div>
                <button className=" bg-basic P-[10PX] w-[38px] h-[34px] rounded-[8px] flex items-center justify-center">
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button className="flex justify-center mt-[2.8rem] items-center flex-row space-x-1 bg-basic  w-[100%] h-[32px] rounded-[8px] text-center border-[1px] border-basic hover:bg-transparent hover:text-basic cursor-pointer">
        <strong className="text-[12px] font-700">{"Start Flying"}</strong>
        <ChevronRight size={20} strokeWidth={3} />
      </button>
    </div>
  );
};

export default SliderCard;

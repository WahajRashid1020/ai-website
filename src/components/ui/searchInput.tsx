import { MapPin } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <div className="relative flex-grow mx-4">
      <input
        type="text"
        className=" border-basic border-[1px] py-4 px-4 w-full flex items-center bg-transparent outline-primary rounded-[8px]"
        placeholder="Search Instructors, Aircrafts..."
      />
      <div className="absolute right-[6rem] top-1/2 transform -translate-y-1/2 mr-2">
        <MapPin className="text-secondary hover:text-gray-700 cursor-pointer" />
      </div>
      <button className="absolute hover:opacity-90   border-basic border-[1px]  bg-basic px-[16px] py-[8px] right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-yellow-[100] rounded-[6px]">
        Search
      </button>
    </div>
  );
};

export default SearchInput;

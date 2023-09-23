import React from "react";

const Location = () => {
  const latitude = "24.84371239431889";
  const longitude = "67.1276397541569";
  return (
    <div className="bg-[#E0E2EB]">
      <div className="mx-[2rem] py-[2rem]">
        <div className=" flex flex-col md:flex-row gap-4 items-center">
          <div className="bg-primary p-8 w-full   rounded-[20px] overflow-hidden">
            <h1 className="text-[20px] font-700 text-white ">
              Michael Leger is available at these airports:
            </h1>
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.989382345067!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}!4f13.1!3m2!1i1024!2i768!5e0!3m2!1sen!2sus!4v1629812644776!5m2!1sen!2sus`}
              className="object-fill rounded-[4px] w-[100%] h-[35vh] sm:h-[70vh] py-4"
              allowFullScreen
            ></iframe>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-dim border-[1px] text-[12px] font-700 text-dim rounded-[20px] px-[16px] py-[8px] bg-transparent hover:border-none hover:bg-basic hover:text-black  hover:border-basic hover:cursor-pointer">
                Kissimmee Gateway Airport
                <br />
                <span className="text-[#575C75] hover:text-[#575C75]">
                  401 Dyer Blvd, Kissimmee, FL 34741
                </span>
              </div>
              <div className="border-dim border-[1px] text-[12px] font-700 text-dim rounded-[20px] px-[16px] py-[8px] bg-transparent hover:border-none hover:bg-basic hover:text-black  hover:border-basic hover:cursor-pointer">
                Kissimmee Gateway Airport
                <br />
                <span className="text-[#575C75] hover:text-[#575C75]">
                  401 Dyer Blvd, Kissimmee, FL 34741
                </span>
              </div>
              <div className="border-dim border-[1px] text-[12px] font-700 text-dim rounded-[20px] px-[16px] py-[8px] bg-transparent hover:border-none hover:bg-basic hover:text-black  hover:border-basic hover:cursor-pointer">
                Kissimmee Gateway Airport
                <br />
                <span className="text-[#575C75] hover:text-[#575C75]">
                  401 Dyer Blvd, Kissimmee, FL 34741
                </span>
              </div>
              <div className="border-dim border-[1px] text-[12px] font-700 text-dim rounded-[20px] px-[16px] py-[8px] bg-transparent hover:border-none hover:bg-basic hover:text-black  hover:border-basic hover:cursor-pointer">
                Kissimmee Gateway Airport
                <br />
                <span className="text-[#575C75] hover:text-[#575C75]">
                  401 Dyer Blvd, Kissimmee, FL 34741
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[45%]">
            <h1 className="text-[20px] text-primary py-4">
              Michael Leger’s instructing availability is:
            </h1>

            <div className="flex flex-row w-[full] p-[12px] bg-white text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Sunday</h1>
              <div>
                <h1>08:00 AM - 05:00 AM</h1>
                <h1>07:00 AM - 10:00 AM</h1>
              </div>
            </div>
            <div className="flex flex-row w-[full] p-[12px] bg-transparent text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Monday</h1>
              <h1>08:00 AM - 05:00 AM</h1>
            </div>

            <div className="flex flex-row w-[full] p-[12px] bg-white text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Tuesday</h1>
              <h1>08:00 AM - 05:00 AM</h1>
            </div>

            <div className="flex flex-row w-[full] p-[12px] bg-transparent text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Wednesday</h1>
              <h1>08:00 AM - 05:00 AM</h1>
            </div>

            <div className="flex flex-row w-[full] p-[12px] bg-white text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Thursday</h1>
              <h1>08:00 AM - 05:00 AM</h1>
            </div>

            <div className="flex flex-row w-[full] p-[12px] bg-transparent text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Friday</h1>
              <h1>08:00 AM - 05:00 AM</h1>
            </div>

            <div className="flex flex-row w-[full] p-[12px] bg-white text-black items-center rounded-[10px] justify-between">
              <h1 className="font-700">Saturday</h1>
              <h1>08:00 AM - 05:00 AM</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

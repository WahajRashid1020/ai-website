import SearchInput from "../ui/searchInput";

const HeroSection = () => {
  return (
    <div className="bg-cover sm:bg-center bg-no-repeat min-h-screen sm:min-h-[400px] flex items-start sm:items-center justify-start sm:banner1 mbanner1">
      <div className="container m-2 sm:m-auto">
        <div className=" text-white  sm:w-[50%] sm:text-start text-center ">
          <h1 className="text-[80px] text-basic   font-900 mb-4">Let’s Fly</h1>
          <p className="text-[16px] text-white mb-8">
            Find a certified Flight Instructor at your local airport with the
            aircraft you’re looking for and the specific ratings you need.
          </p>
          <div className="z-2 sm:ml-[-1rem]">
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

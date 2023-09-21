import Card from "../ui/card";

const FlightLesson = () => {
  return (
    <div className="container m-auto">
      <div className="sm:mx-0 mx-[2rem] py-[2rem]">
        <h1 className="text-[32px] text-primary font-700">
          CHOOSE A FLIGHT LESSON
        </h1>

        <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500">
          Choose from a variety of aircrafts to learn, from Cessnas to Pipers.
          Whether you’re looking for a new type rating or just want to explore
          new flying characteristics, Aircraft Instructor has you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <Card
            imageSrc="/card1.png"
            userName="Mike"
            userLastName="Jones"
            userImageSrc="/dp.png"
            heading="Cessna 172"
            buttonText1="KARL"
            buttonText2="KORL"
          />
          <Card
            imageSrc="/card2.png"
            userName="Mike"
            userLastName="Jones"
            userImageSrc="/dp.png"
            heading="Ground"
            buttonText1="KARL"
            buttonText2="KORL"
          />
          <Card
            imageSrc="/card1.png"
            userName="Mike"
            userLastName="Jones"
            userImageSrc="/dp.png"
            heading="Card 1"
            buttonText1="KARL"
            buttonText2="KORL"
          />{" "}
          <Card
            imageSrc="/card1.png"
            userName="Mike"
            userLastName="Jones"
            userImageSrc="/dp.png"
            heading="Cessna 172"
            buttonText1="KARL"
            buttonText2="KORL"
          />
          <Card
            imageSrc="/card2.png"
            userName="Mike"
            userLastName="Jones"
            userImageSrc="/dp.png"
            heading="Ground"
            buttonText1="KARL"
            buttonText2="KORL"
          />
          <Card
            imageSrc="/card1.png"
            userName="Mike"
            userLastName="Jones"
            userImageSrc="/dp.png"
            heading="Card 1"
            buttonText1="KARL"
            buttonText2="KORL"
          />
        </div>
        <div className="flex justify-center items-center py-2">
          <button className="w-full sm:w-fit p-[16px] rounded-[8px] border-primary border-[2px]">
            <strong>See All</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightLesson;

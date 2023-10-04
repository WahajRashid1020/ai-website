import Card from "../ui/card";
import Emptybtn from "../ui/emptybtn";

const FlightLesson = () => {
  return (
    <div className="container px-6 md:px-[1.5rem] py-[2rem] sm:m-auto">
      <h1 className="text-[32px] text-primary font-700">
        CHOOSE A FLIGHT LESSON
      </h1>

      <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500">
        Choose from a variety of aircrafts to learn, from Cessnas to Pipers.
        Whether you’re looking for a new type rating or just want to explore new
        flying characteristics, Aircraft Instructor has you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
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
      <Emptybtn text="See All" />
    </div>
  );
};

export default FlightLesson;

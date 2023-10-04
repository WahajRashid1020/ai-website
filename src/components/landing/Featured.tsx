import Emptybtn from "../ui/emptybtn";
import InstructorCard from "../ui/instructorcard";
import SliderCard from "../ui/slidercard";

const Featured = () => {
  return (
    <div className="container m-auto py-4">
      <div className="container px-6 md:px-[1.5rem] sm:m-auto">
        <h1 className="text-[32px] text-primary font-700">
          FEATURED INSTRUCTORS
        </h1>
        <p className="text-[16px] py-4 sm:w-[70%] text-justify font-500">
          Our top rated instructors will have you up in the air in no time.
          Whether you’re looking to learn to fly or just brush up on your
          skills, our experienced professionals are here to help. Start learning
          today with one of our Aircraft Instructors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2    gap-10 mb-6">
          <SliderCard
            firstname="Mike"
            lastname="Jones"
            userimageSrc="/dp.png"
            address="Orlando, FL"
            dataArray={[
              {
                imageSrc: "/card1.png",
                location: "Ground",
                money: "$50.00 / hr",
                buttonText1: "KARL",
                buttonText2: "KORL",
              },
              {
                imageSrc: "/card1.png",
                location: "Ground",
                money: "$50.00 / hr",
                buttonText1: "KARL",
                buttonText2: "KORL",
              },
              {
                imageSrc: "/card1.png",
                location: "Ground",
                money: "$50.00 / hr",
                buttonText1: "KARL",
                buttonText2: "KORL",
              },
              {
                imageSrc: "/card1.png",
                location: "Ground",
                money: "$50.00 / hr",
                buttonText1: "KARL",
                buttonText2: "KORL",
              },
              {
                imageSrc: "/card1.png",
                location: "Ground",
                money: "$50.00 / hr",
                buttonText1: "KARL",
                buttonText2: "KORL",
              },
            ]}
          />
          <InstructorCard
            firstname="Mike"
            lastname="Jones"
            userimageSrc="/dp.png"
            imageSrc="/card1.png"
            address="Orlando, FL"
            location="Ground"
            money="$50.00 / hr"
            buttonText1="KARL"
            buttonText2="KORL"
          />
        </div>
        <Emptybtn text="See All Featured Instructors" />
      </div>
    </div>
  );
};

export default Featured;

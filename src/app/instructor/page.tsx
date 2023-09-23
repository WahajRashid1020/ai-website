import React from "react";
import HeroScetion from "./HeroScetion";
import Lesson from "./Lesson";
import Location from "./Location";
import { Reviews } from "./Reviews";
import FAQ from "./FAQ";

const Instructor = () => {
  return (
    <>
      <HeroScetion />
      <Lesson />
      <Location />
      <Reviews />
      <FAQ />
    </>
  );
};

export default Instructor;

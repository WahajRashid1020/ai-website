import React from "react";
import HeroSection from "./HeroSection";
import StartJourney from "@/components/landing/StartJourney";
import Instructors from "./Instructors";
import ClaimProfile from "./ClaimProfile";

const FlightSchool = () => {
  return (
    <>
      <HeroSection />
      <Instructors />
      <ClaimProfile />
      <StartJourney />
    </>
  );
};

export default FlightSchool;

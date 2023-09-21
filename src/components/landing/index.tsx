import React from "react";
import HeroSection from "./HeroSection";
import Featured from "./Featured";
import StartFlying from "./StartFlying";
import FlightLesson from "./FlightLesson";
import StartJourney from "./StartJourney";
import CertifiedPilot from "./CertifiedPilot";
import AboutUS from "./AboutUS";
import Reviews from "./Reviews";
import BestApp from "./BestApp";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <StartFlying />
      <FlightLesson />
      <StartJourney />
      <CertifiedPilot />
      <AboutUS />
      <Reviews />
      <BestApp />
    </>
  );
};

export default LandingPage;

import AboutUS from "./AboutUS";
import BestApp from "./BestApp";
import CertifiedPilot from "./CertifiedPilot";
import Featured from "./Featured";
import FlightLesson from "./FlightLesson";
import HeroSection from "./HeroSection";
import Reviews from "./Reviews";
import StartFlying from "./StartFlying";
import StartJourney from "./StartJourney";

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

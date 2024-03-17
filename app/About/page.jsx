import Hero from "./Hero";
import StatisticsSection from "./Statistics";
import MissionSection from "./Mission";
import AccordionFaq from "./AccordionFaq";

const AboutPage = () => {
  return (
    <>
      <div className="overflow-hidden w-full">
        <Hero />
        <StatisticsSection />
        <MissionSection />
        <AccordionFaq />
      </div>
    </>
  );
};

export default AboutPage;

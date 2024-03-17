import React from "react";
import Hero from "../ui/About/AboutHero";
import StatisticsSection from "../ui/About/Statistics";
import MissionSection from "../ui/About/Mission";
import AccordionFaq from "../ui/About/AccordionFaq";
import Navbar from "../Navbar";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden w-full">
        <Hero />
        <StatisticsSection />
        <MissionSection />
        <AccordionFaq />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

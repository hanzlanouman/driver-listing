import Hero from '@/components/AboutHero';
import StatisticsSection from '@/components/Statistics';
import MissionSection from '@/components/Mission';
import AccordionFaq from '@/components/AccordionFaq';
import React from 'react'
const About = () => {
  return (
    <div>
        <div className="overflow-hidden w-full">
        <Hero />
        <StatisticsSection />
        <MissionSection />
        <AccordionFaq />
      </div>
    </div>
  );
};

export default About;

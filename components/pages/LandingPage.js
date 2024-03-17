import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import DoctorCard from '../DriverCard';
import BestDrivers from '../BestDrivers';
import Characteristics from '../Characteristics';
import Banner from '../Banner';
import StatisticsSection from '../ui/About/Statistics';
function LandingPage() {
  return (
    <div>
      <Hero />
      <BestDrivers/>
      <Characteristics/>
      <Banner/>
      <StatisticsSection/>
    </div>
  );
}

export default LandingPage;

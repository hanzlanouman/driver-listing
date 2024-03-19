
import React from 'react'
import Hero from '@/components/Hero'
import BestDrivers from '@/components/BestDrivers'
import Characteristics from '@/components/Characteristics'
import Banner from '@/components/Banner'
import StatisticsSection from '@/components/Statistics'
const HomeLink = () => {
  return (
    <div>
      <Hero />
      <BestDrivers/>
      <Characteristics/>
      <Banner/>
      <StatisticsSection/>    </div>
  )
}

export default HomeLink;

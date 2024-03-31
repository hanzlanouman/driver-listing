import React from 'react';
import Hero from '@/components/Hero';
import BestDrivers from '@/components/BestDrivers';
import Characteristics from '@/components/Characteristics';
import Banner from '@/components/Banner';
import StatisticsSection from '@/components/Statistics';
const HomeLink = async () => {
  const fetchDrivers = async () => {
    // Fetch drivers from the server based on the searchParams

    const res = await fetch(`${process.env.STRAPI_LOCAL_URL}/api/listings`, {
      cache: 'no-cache',
    });
    const listings = await res.json();

    return listings.data;
  };
  const listings = await fetchDrivers();
  return (
    <div>
      <Hero />
      {listings && listings.length > 0 && <BestDrivers listings={listings} />}
      <Characteristics />
      <Banner />
      <StatisticsSection />
    </div>
  );
};

export default HomeLink;

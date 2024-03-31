import React from 'react';
import DriverCard from './DriverCard';
import TabsComponent from './TabsComponent';

function BestDrivers({ listings }) {
  return (
    <div className='bg-secondary p-10 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-center mt-10'>
        Best Drivers Near You
      </h1>
      <TabsComponent listings={listings} />
    </div>
  );
}

export default BestDrivers;

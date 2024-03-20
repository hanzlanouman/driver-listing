import React from 'react';
import HeroDriver from '@/components/HeroDriver';
import Info from '@/components/Info';

const DriverPage = () => {
  

  return (
    <div className='bg-gray-100'>
      <div className='mx-auto px-4 py-1 relative z-10'>
        <HeroDriver />
        <Info />
      </div>
    </div>
  );
};


export default DriverPage;

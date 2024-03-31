import React from 'react';
import HeroDriver from '@/components/HeroDriver';
import Info from '@/components/Info';

const fetchDriver = async (id) => {
  const res = await fetch(`http://localhost:1337/api/listings/${id}`);
  const data = await res.json();
  console.log(data);

  return data.data;
};

const DriverPage = async ({ params }) => {
  const driver = await fetchDriver(params.id[0]);

  return (
    <div className='bg-gray-100'>
      <div className='mx-auto px-4 py-1 relative z-10'>
        <HeroDriver driver={driver} />
        <Info driver={driver} />
      </div>
    </div>
  );
};

export default DriverPage;

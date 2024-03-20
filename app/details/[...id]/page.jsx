import React from 'react';
import HeroDriver from '@/components/HeroDriver';
import Info from '@/components/Info';

const fetchDriverDetails = async (id) => {
  // const res = await fetch(`https://api.example.com/drivers/${id}`);
  // const data = await res.json();
  const data = {
    id: 1,
    title: 'Goods in Transit',
    description:
      "This policy is designed specifically to protect the goods you're transporting while they're in transit. It covers loss, damage, or theft of the goods being transported, providing financial compensation to replace or repair them.",
    contact: {
      address: '123 Main Street, Cityville',
      phone: '+1 555-123-4567',
      emailPersonal: 'john.doe@gmail.com',
      emailBusiness: 'john.doe@business.com',
    },
    reviews: 1,
    rating: 5,
    driver: {
      name: 'John Doe',
      specialty: 'Dental & Medicine',
      gender: 'Male',
      age: 32,
      rating: 5,
      acceptingClients: true,
      image: '../assets/d1.jpg',
    },
  };

  return data;
};

const DriverPage = async ({ params }) => {
  console.log(params);
  const data = await fetchDriverDetails(params.id);
  return (
    <div className='bg-gray-100'>
      {/* <div className='absolute -inset-1 -z-10 bg-primary max-h-80'></div> */}
      <div className='mx-auto px-4 py-1 relative z-10'>
        <HeroDriver driverId={2} />
        <Info detail={data} />
      </div>
    </div>
  );
};

export default DriverPage;

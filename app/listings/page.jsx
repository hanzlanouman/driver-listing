'use client';
import FilterMenu from '@/components/FilterMenu';
import React, { useState } from 'react';
import DriverCard from '@/components/DriverCard';
const Page = ({ searchParams }) => {
  console.log(searchParams);
  const drivers = [
    // name, gender, age, experience, location, reviews, expertise
    {
      name: 'Charles Abels',
      age: 38,
      experience: 5,
      location: 'Lagos',
      images: '/driver-1.webp',
      reviews: 5,
      expertise: 'Van Driver',
      gender: 'male',
    },
    {
      name: 'Charles Abels',
      age: 38,
      experience: 5,
      location: 'Lagos',
      images: '/driver-1.webp',

      reviews: 5,
      expertise: 'Van Driver',
      gender: 'male',
    },
    {
      name: 'Charles Abels',
      age: 38,
      experience: 5,
      location: 'Lagos',
      images: '/driver-1.webp',

      reviews: 5,
      expertise: 'Van Driver',
      gender: 'male',
    },
    {
      name: 'Charles Abels',
      age: 38,
      experience: 5,
      location: 'Lagos',
      images: '/driver-1.webp',

      reviews: 5,
      expertise: 'Van Driver',
      gender: 'male',
    },
    {
      name: 'Charles Abels',
      age: 38,
      experience: 5,
      location: 'Lagos',
      images: '/driver-1.webp',

      reviews: 5,
      expertise: 'Van Driver',
      gender: 'male',
    },
  ];

  const [filters, setFilters] = useState({
    ratings: [],
    gender: null,
    age: null,
    price: [0, 1000],
  });

  // Handle filter changes
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    // Apply filters to drivers list
    // You will need to implement this functionality based on your data structure
  };

  // Filtered drivers based on the filters state
  const filteredDrivers = drivers.filter((driver) => {
    // Example filter by gender
    if (filters.gender && driver.gender !== filters.gender) {
      return false;
    }
    // Add other filtering conditions here based on the filters state
    return true;
  });

  return (
    <div className=' '>
      <div className='bg-blue-400 p-4  shadow-lg mb-4 text-white text-center'>
        <h1 className='text-4xl font-bold'>Available Drivers</h1>
        <p className='text-lg font-semibold'>
          {filteredDrivers.length} Total Drivers Available
        </p>
      </div>
      <div className='lg:py-10'>
        <div className='flex justify-between items-center py-4 max-w-5xl mx-auto px-4 '>
          <div className=''>
            <span className='text-lg font-semibold'>
              {filteredDrivers.length} Items Found
            </span>
          </div>
          <div className='flex items-center space-x-2'>
            <span className='text-sm font-semibold'>Sort By:</span>
            <select className='border p-2 rounded'>
              <option>Best match</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-center lg:items-start gap-5 max-w-5xl mx-auto'>
          {/* Filter Menu */}

          <div className='w-full lg:w-1/3'>
            <FilterMenu onFiltersChange={handleFiltersChange} />
          </div>
          {/* Main Content */}
          <div className='w-full lg:w-3/4 lg:justify-start justify-center px-8 lg:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8'>
              {filteredDrivers.map((driver, index) => (
                <DriverCard key={index} driver={driver} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

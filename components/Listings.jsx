'use client';
import React from 'react';
import FilterMenu from './FilterMenu';
import DriverCard from './DriverCard';
import Link from 'next/link';

const Listings = ({ listings, pagination }) => {
  if (!listings)
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>
          No listings found. Please check back later or try a different search
        </p>
      </div>
    );
  return (
    <div className='lg:py-10'>
      <div className='flex justify-between items-center py-4 max-w-5xl mx-auto px-4 '>
        <div className=''>
          <span className='text-lg font-semibold'>
            {listings.length} Items Found
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
          <FilterMenu onFiltersChange={() => {}} />
        </div>
        {/* Main Content */}
        <div className='w-full lg:w-3/4 lg:justify-start justify-center px-8 lg:px-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8'>
            {listings.map((driver, index) => (
              <DriverCard key={index} driver={driver} />
            ))}
          </div>
        </div>
      </div>
      <div className='pagination-controls'>
        {pagination.page > 1 && (
          <Link
            href={`?page=${pagination.page - 1}&pageSize=${
              pagination.pageSize
            }`}
          >
            Previous
          </Link>
        )}
        {pagination.page < pagination.pageCount && (
          <Link
            href={`?page=${pagination.page + 1}&pageSize=${
              pagination.pageSize
            }`}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Listings;

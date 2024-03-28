import React from 'react';
import Link from 'next/link';

const Sidebar = ({ children }) => {
  return (
    <div className='flex gap-8'>
      <div className='w-64 h-screen bg-gray-800 text-white  flex flex-col justify-between py-4'>
        <div className='flex flex-col   '>
          <Link
            href='/admin'
            className='text-base font-semibold hover:text-orange-500 transition-all duration-300 p-6 py-8 hover:bg-gray-700 '
          >
            Dashboard
          </Link>
          <Link
            href='/admin/listings'
            className='text-base font-semibold hover:text-orange-500 transition-all duration-300 p-6 py-8 hover:bg-gray-700 '
          >
            Listings
          </Link>
          <Link
            href='/admin/drivers'
            className='text-base font-semibold hover:text-orange-500 transition-all duration-300 p-6 py-8 hover:bg-gray-700 '
          >
            Drivers
          </Link>
          <Link
            href='/admin/settings'
            className='text-base font-semibold hover:text-orange-500 transition-all duration-300 p-6 py-8 hover:bg-gray-700 '
          >
            Settings
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;

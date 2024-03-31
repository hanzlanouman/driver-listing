import React from 'react';

import { UisStar } from '@iconscout/react-unicons-solid';
import {
  UilBookmarkFull,
  UilShare,
  UilFavorite,
} from '@iconscout/react-unicons';
import { UisCheckCircle } from '@iconscout/react-unicons-solid';
import Image from 'next/image';

const HeroDriver = ({ driver }) => {
  const { name, typeOfVehicle, operationArea, yearsInBusiness } =
    driver.attributes;
  return (
    <div className='w-full  px-2 py-8 '>
      <h1 className=' text-3xl font-bold mb-4'>Driver</h1>
      <div className='flex flex-col md:gap-x-4 md:flex-row  items-center justify-between bg-white rounded-md  p-4 md:p-10'>
        <div className='mb-2 md:mb-0 '>
          <Image
            src='/assets/d1.jpg'
            alt='driver'
            className='w-[300px] h-[200px] rounded-lg'
            width={300}
            height={200}
          />
        </div>

        <div className='md:w-1/2 md:mr-4 flex flex-col items-center justify-center md:items-start'>
          <h1 className='text-2xl font-bold mb-2 md:mb-4'>{name}</h1>

          <div className='mb-2 md:mb-4 flex flex-col items-center justify-center md:items-start'>
            <p>Vehicle: {typeOfVehicle}</p>
            <div className=''>
              <p>Area: {operationArea} </p>
              <p>Years in Business: {yearsInBusiness}</p>
            </div>

            <p className='flex items-center'>
              <span className='mr-1'>5.0</span>
              {[...Array(5)].map((_, index) => (
                <UisStar key={index} className='h-10 w-5 text-pink-500' />
              ))}
            </p>

            <p className=' flex text-sm items-center'>
              <UisCheckCircle className='h-10 w-5 mr-1 text-pink-500' />
              Accepting new clients
            </p>
          </div>
        </div>

        {/* <div className='flex flex-col ml-6 items-center space-y-4 '>
          <button className='flex items-center justify-center text-gray-500 transition-colors duration-300 ease-in-out p-2 bg-gray-100 w-full'>
            <UilBookmarkFull className='h-4 w-6 mr-2' />
            <span className='hover:text-primary mr-6'>Save</span>
          </button>
          <button className='flex items-center justify-center text-gray-500 transition-colors duration-300 ease-in-out p-2 bg-gray-100 w-full'>
            <UilShare className='h-4 w-6 mr-2' />
            <span className='hover:text-primary mr-6'>Share</span>
          </button>
          <button className='flex items-center justify-center text-gray-500 transition-colors duration-300 ease-in-out p-2 bg-gray-100 w-full'>
            <UilFavorite className='h-4 w-8 mr-2' />
            <span className='hover:text-primary mr-6'>Report</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroDriver;

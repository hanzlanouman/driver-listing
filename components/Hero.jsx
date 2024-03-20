'use client';
import React from 'react';
import Image from 'next/image';
import { VscSearch } from 'react-icons/vsc';
import SearchComponent from './search';
import { useAuth } from './AuthContext';

function Hero() {
  const { authState } = useAuth();
  console.log(authState);

  return (
    <div className='bg-primary  h-full w-screen '>
      <div className='flex items-center justify-between space-10'>
        <div className=' lg:w-[650px] w-full flex flex-col p-32 lg:items-start  items-center justify-center gap-10'>
          <h1 className='text-white text-2xl lg:text-4xl font-bold'>
            Find Your Ideal Driver for a Comfortable Ride
          </h1>

          <div className=''>
            <SearchComponent bgColor='bg-white' />
          </div>
        </div>

        <div className=' '>
          <Image
            src='/hero.png'
            alt='hero'
            width={600}
            height={500}
            className=' object-contain h-[30rem] w-[35rem]'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

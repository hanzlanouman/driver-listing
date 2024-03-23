'use client';
import React from 'react';
import Image from 'next/image';
import { VscSearch } from 'react-icons/vsc';
import SearchComponent from './SearchComponent';
import { useAuth } from './AuthContext';

function Hero() {
  const { authState } = useAuth();
  console.log(authState);

  return (
    <div className=' bg-custom-gradient  h-full w-full'>
      <div className='flex flex-col lg:flex-row items-center justify-center xl:justify-between gap-x-44 px-4 lg:px-10'>
        <div className='lg:w-[650px] w-full flex flex-col items-center lg:items-start justify-center gap-10 p-6 lg:p-32'>
          <h1 className='text-white text-2xl lg:text-4xl font-bold text-center lg:text-left'>
            Find Your Ideal Driver for a Comfortable Ride
          </h1>
          <div>
            <SearchComponent bgColor='bg-white' />
          </div>
        </div>

        <div className=''>
          <Image
            src='/hero.png'
            alt='hero'
            width={600}
            height={500}
            className='object-contain h-[25rem] w-[25rem] lg:h-[27rem] lg:w-[32rem] xl:h-[30rem] xl:w-[35rem]'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import Image from 'next/image';
import React from 'react';
import { RiStackFill, RiStarFill, RiUserLocationLine } from 'react-icons/ri';
const DriverCard = ({ driver ={} }) => {
  const { name, gender, age, experience, location, reviews, expertise, image } =
    driver;
  return (
    <div className=''>
    <div
      className='min-h-[430px] max-w-[24rem] shadow-lg rounded  overflow-hidden bg-white flex flex-col justify-between
    hover:shadow-xl transition duration-300 ease-in-out cursor-pointer 
    '
    >
      {/* Image */}
      <div className='relative w-full overflow-hidden'>
        <Image
          src='/driver-1.webp'
          layout='responsive'
          width={340}
          height={226}
          alt='doctor'
          className='w-full h-40 object-cover hover:scale-105 transition duration-300 ease-in-out'
        />
        <div className='bg-green-100 px-2 py-1 rounded-full text-green-800 text-[0.6rem] font-semibold uppercase tracking-wider absolute top-3 left-2'>
          Recommended
        </div>
      </div>
      {/* Doctor Details */}
      <div className='p-4 flex-1 flex flex-col  justify-between'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-semibold '>Charles Abels</h1>
          <p className='text-gray-500 text-sm'>Van Driver | Male | Age 38</p>
          <p className='text-gray-500 text-sm'>Experience 5 years</p>
          <p className='text-gray-500 text-sm flex items-center gap-2'>
            <RiUserLocationLine className='inline-block h-4 w-4' />
            Lagos
          </p>
        </div>
        <div className='border-t pt-3 mt-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <di className='text-orange-400'>
                <div
                  className='
                flex items-center
                '
                >
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />

                  <RiStarFill />
                </div>
              </di>

              <p className='text-gray-500 text-sm'>5 Reviews</p>
            </div>
            <button className='text-blue-400 font-bold px-4 py-2 rounded hover:bg-blue-100'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DriverCard;


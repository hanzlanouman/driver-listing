import React from 'react';
import Image from 'next/image';

const characteristicsInfo = [
  {
    icon: "/car.png",
    title: "Reliable Vehicles",
    description: "Our drivers use well-maintained and comfortable vehicles to ensure a smooth ride."
  },
  {
    icon: "/driver.png",
    title: "Top-rated Drivers",
    description: "Our drivers are highly rated for their professionalism and courteous service."
  },
  {
    icon: "/checklist.png",
    title: "Timely Service",
    description: "We value your time. Our drivers ensure punctual pickups and drop-offs."
  }
];

function Characteristics() {
  return (
    <div className='container p-20'>
      <div className='flex lg:flex-row flex-col items-center justify-center gap-10'>
        {characteristicsInfo.map((info, index) => (
          <div key={index} className="w-full lg:w-[400px] min-h-[300px]">
            <div className='flex flex-col items-center justify-center p-6 gap-4'>
              <div className='relative h-[7rem] w-[7rem] p-2 hover:animate-spin'>
                <Image src={info.icon} alt={info.title} layout="fill" objectFit="contain" className="absolute inset-0"/>
              </div>
              <h1 className='text-2xl font-bold'>{info.title}</h1>
              <p className='text-center text-lg'>{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characteristics;

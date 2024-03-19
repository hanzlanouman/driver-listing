import React from 'react';
import Image from 'next/image';

const MissionSection = () => {
  return (
    <div className="container py-8 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 mr-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ml-20">
            A Little Bit About Us
          </h2>
          <p className="text-lg text-gray-900 ml-20">
            We are dedicated to simplifying the process of booking drivers for
            your transportation needs. Whether you require a chauffeur for a
            special occasion, a designated driver for a night out, or simply
            need assistance getting from point A to point B, our platform is
            designed to connect you with reliable and professional drivers in
            your area.
          </p>
        </div>
        <div className="md:w-1/2 ml-20">
          <Image
            src="/assets/mission1.jpg"
            alt="Our Mission Image"
            width={500}
            height={370}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionSection;

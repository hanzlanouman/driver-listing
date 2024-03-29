import React from 'react';
import HeroDriver from '@/components/HeroDriver';
import Info from '@/components/Info';
import ContactUsForm from '@/components/ContactUsForm';

const fetchDriver = async (id) => {
  const res = await fetch(`${process.env.STRAPI_CLOUD_URL}/api/listings/${id}`);
  const data = await res.json();

  return data.data;
};

const DriverPage = async ({ params }) => {
  const driver = await fetchDriver(params.id[0]);

  return (
    <div className='bg-gray-100'>
      {/* <div className='mx-auto px-4 py-1 relative z-10'> */}
      <h1 className='text-center pt-20 text-3xl font-bold'>Book a Ride</h1>
      <div className='flex lg:flex-row lg:space-x-20 flex-col container px-20 py-10 items-center justify-center '>

        <HeroDriver driver={driver} />
        <ContactUsForm />
        {/* <Info driver={driver} /> */}
        </div>
      {/* </div> */}
    </div>
  );
};

export default DriverPage;
